import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAdminAuth } from '../hooks/useAdminAuth'

const STOP_WORDS = new Set([
  'a','an','the','and','or','but','in','on','at','to','for','of','with','by','from',
  'is','are','was','were','be','been','have','has','had','do','does','did','will',
  'would','could','should','may','might','can','this','that','these','those','it',
  'its','we','our','your','their','my','his','her','as','into','through','during',
  'before','after','above','below','between','out','off','over','under','not','no',
  'so','if','about','than','how','what','which','who','more','all','any','both',
])

function todayFormatted() {
  return new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

function calcReadTime(body) {
  const words = body.join(' ').trim().split(/\s+/).filter(Boolean).length
  const mins = Math.max(1, Math.round(words / 200))
  return `${mins} min read`
}

function extractTags(category, title, heading) {
  const raw = `${category} ${title} ${heading}`
  const words = raw
    .replace(/[^a-zA-Z\s&]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w.toLowerCase()))
  const unique = [...new Set(words.map(w => w.charAt(0).toUpperCase() + w.slice(1)))]
  return unique.slice(0, 6)
}

const EMPTY_FORM = {
  slug: '', title: '', category: '', description: '',
  img: '', published_at: '', read_time: '', tags: [],
  author_name: '', author_role: '', author_avatar: '',
  quote: '', heading: '', body: [''], connect: '', published: true,
}

function toSlug(str) {
  return str.toLowerCase().trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export default function AdminPostEditor() {
  const isAuth = useAdminAuth()
  const navigate = useNavigate()
  const { slug } = useParams()
  const isEditing = Boolean(slug)

  const [form, setForm] = useState(EMPTY_FORM)
  const [savedForm, setSavedForm] = useState(EMPTY_FORM) // baseline to detect changes
  const [slugLocked, setSlugLocked] = useState(false)
  const [loading, setLoading] = useState(isEditing)
  const [saving, setSaving] = useState(false)
  const [uploadingImg, setUploadingImg] = useState(false)
  const [toast, setToast] = useState(null) // { type: 'success'|'error'|'info', message: string }
  const [fieldErrors, setFieldErrors] = useState({})

  const hasChanges = JSON.stringify(form) !== JSON.stringify(savedForm)

  function showToast(type, message) {
    setToast({ type, message })
    setTimeout(() => setToast(null), 5000)
  }

  useEffect(() => {
    if (isAuth && isEditing) loadPost()
    if (isAuth && !isEditing) setForm(f => ({ ...f, published_at: todayFormatted() }))
  }, [isAuth, isEditing])

  // Auto read time from body
  useEffect(() => {
    const rt = calcReadTime(form.body)
    setForm(f => ({ ...f, read_time: rt }))
  }, [form.body.join('|')])

  // Auto tags from title + category + heading
  useEffect(() => {
    const tags = extractTags(form.category, form.title, form.heading)
    setForm(f => ({ ...f, tags }))
  }, [form.title, form.category, form.heading])

  async function loadPost() {
    setLoading(true)
    const { data, error } = await supabase
      .from('brand_stories').select('*').eq('slug', slug).single()
    if (error || !data) { showToast('error', 'Post not found.'); setLoading(false); return }
    const loaded = {
      slug: data.slug, title: data.title, category: data.category,
      description: data.description, img: data.img,
      published_at: data.published_at, read_time: data.read_time,
      tags: Array.isArray(data.tags) ? data.tags : [],
      author_name: data.author_name, author_role: data.author_role,
      author_avatar: data.author_avatar, quote: data.quote,
      heading: data.heading,
      body: Array.isArray(data.body) && data.body.length > 0 ? data.body : [''],
      connect: data.connect, published: data.published,
    }
    setForm(loaded)
    setSavedForm(loaded)
    setSlugLocked(true)
    setLoading(false)
  }

  function clearErr(field) { setFieldErrors(f => ({ ...f, [field]: false })) }

  function set(field, value) {
    setForm(f => ({ ...f, [field]: value }))
    clearErr(field)
  }

  function handleTitleChange(e) {
    const title = e.target.value
    setForm(f => ({ ...f, title, slug: slugLocked ? f.slug : toSlug(title) }))
    clearErr('title')
  }

  function setBodyPara(i, value) {
    setForm(f => { const body = [...f.body]; body[i] = value; return { ...f, body } })
    clearErr('body')
  }

  function addPara() { setForm(f => ({ ...f, body: [...f.body, ''] })) }

  async function handleImageUpload(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploadingImg(true)
    const ext = file.name.split('.').pop()
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
    const { error: upErr } = await supabase.storage
      .from('blog-images')
      .upload(fileName, file, { cacheControl: '3600', upsert: false })
    if (upErr) { showToast('error', 'Image upload failed: ' + upErr.message); setUploadingImg(false); return }
    const { data: urlData } = supabase.storage.from('blog-images').getPublicUrl(fileName)
    set('img', urlData.publicUrl)
    setUploadingImg(false)
    e.target.value = ''
  }
  function removePara(i) { setForm(f => ({ ...f, body: f.body.filter((_, idx) => idx !== i) })) }

  async function handleSave(e) {
    e?.preventDefault()

    // Validate required fields
    const errs = {}
    if (!form.title.trim())                          errs.title = true
    if (!form.category.trim())                       errs.category = true
    if (!form.slug.trim())                           errs.slug = true
    if (!form.description.trim())                    errs.description = true
    if (!form.img)                                   errs.img = true
    if (!form.body.some(p => p.trim()))              errs.body = true
    if (!form.author_name.trim())                    errs.author_name = true

    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs)
      const labels = {
        title: 'Title', category: 'Category', slug: 'Slug',
        description: 'Short Description', img: 'Cover Image',
        body: 'Body Content', author_name: 'Author Name',
      }
      const missing = Object.keys(errs).map(k => labels[k]).join(', ')
      showToast('error', `Missing required fields: ${missing}`)
      return
    }

    setFieldErrors({})

    if (isEditing && !hasChanges) {
      showToast('info', 'No changes detected. Edit something first before updating.')
      return
    }
    setSaving(true)
    const payload = {
      ...form,
      tags: Array.isArray(form.tags) ? form.tags : [],
      body: form.body.filter(p => p.trim()),
    }
    const result = isEditing
      ? await supabase.from('brand_stories').update(payload).eq('slug', slug)
      : await supabase.from('brand_stories').insert(payload)
    setSaving(false)
    if (result.error) {
      showToast('error', result.error.message)
      return
    }
    setSavedForm(form) // update baseline so hasChanges resets
    if (isEditing) {
      showToast('success', 'Story updated successfully!')
    } else {
      navigate('/admin/posts', { state: { published: true, title: form.title } })
    }
  }

  if (!isAuth) return null

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f7f9fc] flex items-center justify-center gap-3">
        <div className="w-5 h-5 border-2 border-[#e31e24] border-t-transparent rounded-full animate-spin" />
        <span className="font-body text-[#75777e] text-sm">Loading…</span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#191c1e]">

      {/* ── Toast — top right */}
      {toast && (
        <div className="fixed top-20 left-3 right-3 sm:left-auto sm:right-6 sm:w-[400px] z-[100]"
          style={{ animation: 'slideIn 0.3s cubic-bezier(0.16,1,0.3,1) forwards' }}>

          <div className="relative overflow-hidden rounded-md"
            style={{ boxShadow: '0 32px 80px -12px rgba(10,25,47,0.45), 0 8px 24px -4px rgba(10,25,47,0.25)' }}>

            {/* Coloured top accent bar */}
            <div className={`h-1 w-full ${
              toast.type === 'success' ? 'bg-gradient-to-r from-green-400 to-green-500' :
              toast.type === 'info'    ? 'bg-gradient-to-r from-slate-500 to-slate-400' :
                                         'bg-gradient-to-r from-[#e31e24] to-red-500'
            }`} />

            {/* Card body — dark navy */}
            <div className="bg-[#0a192f] px-5 pt-3.5 pb-3.5">

              {/* Header row */}
              <div className="flex items-center justify-between gap-4 mb-1">
                <p className="font-headline font-extrabold text-white text-sm tracking-tight leading-snug">
                  {toast.type === 'success' ? (isEditing ? 'Story Updated!' : 'Story Published!') :
                   toast.type === 'info'    ? 'No Changes Detected' :
                                              'Something went wrong'}
                </p>
                <button onClick={() => setToast(null)}
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white/30 hover:text-white/70 hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>close</span>
                </button>
              </div>

              {/* Message */}
              <p className="font-body text-white/50 text-xs leading-relaxed">
                {toast.message}
              </p>

            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {/* ── Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 glass-nav border-b border-slate-200/60 shadow-sm">
        <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 h-[82px] max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <div className="relative flex items-end leading-none">
                <span className="font-headline font-black tracking-tighter text-[#0a192f] select-none" style={{ fontSize: '2.4rem', lineHeight: 1 }}>B</span>
                <span className="absolute bg-[#e31e24]" style={{ width: 10, height: 10, top: 2, right: -3 }} />
              </div>
              <div className="w-px self-stretch my-1 bg-slate-300" />
              <div className="flex flex-col justify-center gap-0.5">
                <span className="font-headline font-extrabold text-[14px] tracking-tight leading-none text-[#0a192f]">Business</span>
                <span className="font-headline font-extrabold text-[14px] tracking-tight leading-none text-[#0a192f]">Simplified</span>
              </div>
            </Link>
            <div className="hidden sm:flex items-center gap-2 text-slate-300">
              <span className="text-slate-300">/</span>
              <Link to="/admin/posts" className="font-body text-sm text-slate-400 hover:text-[#0a192f] transition-colors">Brand Stories</Link>
              <span className="text-slate-300">/</span>
              <span className="font-body text-sm text-[#0a192f] font-semibold truncate max-w-[180px]">
                {isEditing ? (form.title || slug) : 'New Story'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {toast?.type === 'success' && (
              <span className="hidden sm:flex items-center gap-1.5 font-body text-xs font-semibold text-green-600">
                <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>check_circle</span>
                Saved
              </span>
            )}
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="inline-flex items-center gap-1.5 sm:gap-2 border border-[#0a192f] bg-[#0a192f] text-white px-3 sm:px-5 py-2 rounded-full font-body font-semibold text-[13px] hover:bg-transparent hover:text-[#0a192f] transition-all duration-200 disabled:opacity-50 group"
            >
              {saving ? (
                <><div className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" /><span className="hidden sm:inline">Saving…</span></>
              ) : (
                <><span className="material-symbols-outlined text-[15px]">save</span>
                <span className="hidden sm:inline">{isEditing ? 'Update' : 'Publish'}</span>
                <span className="hidden sm:inline material-symbols-outlined text-[15px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span></>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero strip */}
      <section className="relative overflow-hidden bg-[#0a192f] pt-[82px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] to-[#0a192f]/90" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10">
          <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#e31e24] block mb-3">
            {isEditing ? 'Editing Story' : 'New Story'}
          </span>
          <h1 className="font-headline font-extrabold tracking-tighter text-white" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            {isEditing ? (form.title || 'Untitled') : 'Create Brand Story'}
          </h1>
        </div>
      </section>

      {/* ── Form */}
      <form onSubmit={handleSave}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-8 md:py-12 space-y-6 md:space-y-8">

          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">

            {/* ── Left column: main content */}
            <div className="lg:col-span-7 space-y-8">

              {/* Basic info */}
              <Card label="Basic Info" icon="info">
                <div className="space-y-5">
                  <Field label={<RequiredLabel>Title</RequiredLabel>}>
                    <input type="text" value={form.title} onChange={handleTitleChange}
                      placeholder="e.g. Streamlining Global Logistics"
                      className={fieldErrors.title ? inpErr : inp} />
                  </Field>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label={<RequiredLabel>Category</RequiredLabel>}>
                      <input type="text" value={form.category} onChange={e => set('category', e.target.value)}
                        placeholder="e.g. Operations, Strategy"
                        className={fieldErrors.category ? inpErr : inp} />
                    </Field>
                    <Field label={<span><RequiredLabel>Slug</RequiredLabel> <span className="text-[#75777e] font-normal normal-case tracking-normal">(URL)</span></span>}>
                      <div className={`flex items-center rounded-lg overflow-hidden transition-colors ${fieldErrors.slug ? 'border border-red-400 bg-red-50' : 'border border-slate-200 focus-within:border-[#0a192f]'}`}>
                        <span className="font-body text-xs text-[#75777e] bg-slate-50 px-3 py-3 border-r border-slate-200 whitespace-nowrap shrink-0">
                          <span className="hidden sm:inline">/brand-stories/</span>
                          <span className="sm:hidden">/…/</span>
                        </span>
                        <input type="text" value={form.slug}
                          onChange={e => { set('slug', e.target.value); setSlugLocked(true) }}
                          placeholder="post-slug"
                          className={`flex-1 px-3 py-3 font-body text-sm text-[#0a192f] placeholder-slate-300 focus:outline-none ${fieldErrors.slug ? 'bg-red-50' : 'bg-white'}`} />
                        <button type="button" onClick={() => setSlugLocked(l => !l)}
                          className="px-3 text-[#75777e] hover:text-[#0a192f] transition-colors border-l border-slate-200 py-3">
                          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>{slugLocked ? 'lock' : 'lock_open'}</span>
                        </button>
                      </div>
                    </Field>
                  </div>

                  <Field label={<RequiredLabel>Short Description</RequiredLabel>}>
                    <textarea value={form.description} onChange={e => set('description', e.target.value)}
                      placeholder="1–2 sentence summary shown on the brand stories listing page."
                      rows={2} className={`${fieldErrors.description ? inpErr : inp} resize-none`} />
                  </Field>

                  {/* Published toggle */}
                  <div className="flex items-center gap-3 pt-1">
                    <button type="button" onClick={() => set('published', !form.published)}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ${form.published ? 'bg-[#0a192f]' : 'bg-slate-300'}`}>
                      <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ${form.published ? 'translate-x-5' : 'translate-x-0'}`} />
                    </button>
                    <span className="font-body text-sm font-semibold text-[#0a192f]">{form.published ? 'Published' : 'Draft'}</span>
                    <span className="font-body text-xs text-[#75777e]">{form.published ? '— visible on site' : '— hidden from site'}</span>
                  </div>
                </div>
              </Card>

              {/* Article content */}
              <Card label="Article Content" icon="edit_note">
                <div className="space-y-6">
                  <Field label="Pull Quote">
                    <textarea value={form.quote} onChange={e => set('quote', e.target.value)}
                      placeholder='"A compelling quote that captures the essence of this story."'
                      rows={3} className={`${inp} resize-none`} />
                  </Field>
                  <Field label="Article Heading">
                    <input type="text" value={form.heading} onChange={e => set('heading', e.target.value)}
                      placeholder='e.g. The "Silent Efficiency" Model' className={inp} />
                  </Field>
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className={`${lbl} ${fieldErrors.body ? 'text-red-500' : ''}`}>
                        Body Paragraphs <span className="text-red-400 normal-case tracking-normal font-bold">*</span>
                      </label>
                      <button type="button" onClick={addPara}
                        className="inline-flex items-center gap-1 font-body text-xs font-bold text-[#e31e24] hover:text-red-700 transition-colors uppercase tracking-[0.15em]">
                        <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>add</span>
                        Add Paragraph
                      </button>
                    </div>
                    <div className="space-y-3">
                      {form.body.map((para, i) => (
                        <div key={i} className="flex gap-3 items-start">
                          <span className="w-6 h-6 rounded-full bg-[#eceef1] flex items-center justify-center font-body text-[11px] font-bold text-[#75777e] mt-3 flex-shrink-0">{i + 1}</span>
                          <textarea value={para} onChange={e => setBodyPara(i, e.target.value)}
                            placeholder={`Paragraph ${i + 1}…`} rows={4}
                            className={`${fieldErrors.body && i === 0 ? inpErr : inp} flex-1 resize-none`} />
                          {form.body.length > 1 && (
                            <button type="button" onClick={() => removePara(i)}
                              className="mt-3 flex-shrink-0 text-slate-300 hover:text-[#e31e24] transition-colors">
                              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>remove_circle</span>
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Field label="Connect Text (sidebar CTA copy)">
                    <textarea value={form.connect} onChange={e => set('connect', e.target.value)}
                      placeholder="Interested in how this can be applied to your specific needs?"
                      rows={2} className={`${inp} resize-none`} />
                  </Field>
                </div>
              </Card>
            </div>

            {/* ── Right column: sidebar */}
            <aside className="lg:col-span-3 space-y-6">

              {/* Cover image */}
              <Card label={<RequiredLabel>Cover Image</RequiredLabel>} icon="image">
                <input
                  type="file"
                  id="img-upload"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                {form.img ? (
                  <div className="relative rounded-xl overflow-hidden aspect-video border border-slate-100 group">
                    <img src={form.img} alt="Cover preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#0a192f]/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                      <label htmlFor="img-upload" className="cursor-pointer inline-flex items-center gap-2 bg-white text-[#0a192f] px-4 py-2 rounded-full font-body font-bold text-xs hover:bg-[#f7f9fc] transition-colors">
                        <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>upload</span>
                        Change Image
                      </label>
                      <button type="button" onClick={() => set('img', '')}
                        className="inline-flex items-center gap-1.5 font-body text-xs text-white/60 hover:text-white transition-colors">
                        <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>delete</span>
                        Remove
                      </button>
                    </div>
                  </div>
                ) : (
                  <label htmlFor="img-upload"
                    className={`cursor-pointer flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-10 text-center transition-colors group ${fieldErrors.img ? 'border-red-400 bg-red-50 hover:border-red-500' : 'border-slate-200 hover:border-[#0a192f]'}`}>
                    <span className={`material-symbols-outlined transition-colors mb-3 ${fieldErrors.img ? 'text-red-300' : 'text-slate-300 group-hover:text-[#0a192f]'}`} style={{ fontSize: '36px' }}>upload_file</span>
                    <p className={`font-body font-bold text-sm mb-1 ${fieldErrors.img ? 'text-red-500' : 'text-[#0a192f]'}`}>Click to upload cover image</p>
                    <p className="font-body text-[#75777e] text-xs">PNG, JPG, WEBP · max 5 MB</p>
                    {fieldErrors.img && <p className="font-body text-red-400 text-xs mt-2 font-semibold">Cover image is required</p>}
                  </label>
                )}
                {uploadingImg && (
                  <div className="flex items-center gap-2 mt-3">
                    <div className="w-4 h-4 border-2 border-[#e31e24] border-t-transparent rounded-full animate-spin" />
                    <span className="font-body text-sm text-[#75777e]">Uploading image…</span>
                  </div>
                )}
              </Card>

              {/* Auto Metadata — read only */}
              <Card label="Auto Metadata" icon="auto_awesome">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={lbl}>Published Date</span>
                    <span className="font-body text-sm text-[#0a192f] font-semibold">{form.published_at || '—'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={lbl}>Read Time</span>
                    <span className="font-body text-sm text-[#0a192f] font-semibold">{form.read_time || '—'}</span>
                  </div>
                  <div>
                    <span className={`${lbl} mb-2`}>Tags</span>
                    {Array.isArray(form.tags) && form.tags.length > 0 ? (
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {form.tags.map(tag => (
                          <span key={tag} className="font-body text-[10px] font-semibold uppercase tracking-[0.12em] text-[#39475f] bg-[#eceef1] px-2.5 py-0.5 rounded-full">{tag}</span>
                        ))}
                      </div>
                    ) : (
                      <p className="font-body text-xs text-[#75777e] mt-1">Fill in title, category & heading to generate tags.</p>
                    )}
                  </div>
                  <p className="font-body text-[10px] text-[#75777e] pt-1 border-t border-slate-100 flex items-center gap-1">
                    <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>auto_awesome</span>
                    All fields are generated automatically
                  </p>
                </div>
              </Card>

              {/* Author */}
              <Card label="Author" icon="person">
                <div className="space-y-4">
                  <Field label={<RequiredLabel>Name</RequiredLabel>}>
                    <input type="text" value={form.author_name} onChange={e => set('author_name', e.target.value)}
                      placeholder="e.g. Kalyan" className={fieldErrors.author_name ? inpErr : inp} />
                  </Field>
                  <Field label="Role / Title">
                    <input type="text" value={form.author_role} onChange={e => set('author_role', e.target.value)}
                      placeholder="e.g. Principal Consultant" className={inp} />
                  </Field>
                  <div>
                    <Field label="Avatar URL">
                      <input type="url" value={form.author_avatar} onChange={e => set('author_avatar', e.target.value)}
                        placeholder="https://…" className={inp} />
                    </Field>
                    {form.author_avatar && (
                      <div className="mt-3 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-slate-200 flex-shrink-0">
                          <img src={form.author_avatar} alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-headline font-bold text-[#0a192f] text-sm">{form.author_name || 'Author Name'}</p>
                          <p className="font-body text-[#75777e] text-xs">{form.author_role || 'Role'}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>

              {/* Save button */}
              <button type="submit" disabled={saving}
                className="w-full inline-flex items-center justify-center gap-2 border border-[#0a192f] bg-[#0a192f] text-white px-6 py-3 rounded-full font-body font-semibold text-[14px] hover:bg-transparent hover:text-[#0a192f] transition-all duration-200 disabled:opacity-50 group">
                {saving ? (
                  <><div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Saving…</>
                ) : (
                  <><span className="material-symbols-outlined text-[16px]">save</span>
                  {isEditing ? 'Update Story' : 'Publish Story'}
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span></>
                )}
              </button>

              <Link to="/admin/posts"
                className="w-full inline-flex items-center justify-center gap-1.5 font-body text-sm text-[#75777e] hover:text-[#0a192f] transition-colors pt-1">
                <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>arrow_back</span>
                Back to all stories
              </Link>
            </aside>
          </div>
        </div>
      </form>
    </div>
  )
}

function Card({ label, icon, children }) {
  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 space-y-5">
      <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
        <span className="material-symbols-outlined text-[#e31e24]" style={{ fontSize: '18px' }}>{icon}</span>
        <h2 className="font-headline font-extrabold text-[#0a192f] text-base tracking-tight">{label}</h2>
      </div>
      {children}
    </div>
  )
}

function Field({ label, children }) {
  return (
    <div>
      <label className={lbl}>{label}</label>
      {children}
    </div>
  )
}

function RequiredLabel({ children }) {
  return (
    <>{children} <span className="text-red-400 normal-case tracking-normal font-bold">*</span></>
  )
}

const lbl = 'font-body text-[11px] font-bold uppercase tracking-[0.2em] text-[#75777e] block mb-1.5'
const inp = 'w-full border border-slate-200 rounded-lg px-4 py-3 font-body text-sm text-[#0a192f] placeholder-slate-300 focus:outline-none focus:border-[#0a192f] transition-colors bg-white'
const inpErr = 'w-full border border-red-400 rounded-lg px-4 py-3 font-body text-sm text-[#0a192f] placeholder-slate-300 focus:outline-none focus:border-red-500 transition-colors bg-red-50'
