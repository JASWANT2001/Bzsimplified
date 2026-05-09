import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAdminAuth } from '../hooks/useAdminAuth'

export default function AdminPosts() {
  const isAuth = useAdminAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [deletingSlug, setDeletingSlug] = useState(null)
  const [error, setError] = useState('')
  const [confirmDelete, setConfirmDelete] = useState(null) // { slug, title }
  const [toast, setToast] = useState(null)

  function showToast(type, title, message) {
    setToast({ type, title, message })
    setTimeout(() => setToast(null), 5000)
  }

  useEffect(() => {
    if (isAuth) fetchPosts()
  }, [isAuth])

  // Show publish success toast if redirected from editor
  useEffect(() => {
    if (location.state?.published) {
      showToast('success', 'Story Published!', `"${location.state.title}" is now live on the website.`)
      window.history.replaceState({}, '') // clear state so it doesn't re-fire on refresh
    }
  }, [])

  async function fetchPosts() {
    setLoading(true)
    const { data, error } = await supabase
      .from('brand_stories')
      .select('id, slug, title, category, description, img, published, created_at')
      .order('created_at', { ascending: false })

    if (error) setError(error.message)
    else setPosts(data)
    setLoading(false)
  }

  function handleDelete(slug, title) {
    setConfirmDelete({ slug, title })
  }

  async function confirmDeleteAction() {
    if (!confirmDelete) return
    const { slug } = confirmDelete
    setDeletingSlug(slug)
    setConfirmDelete(null)
    const { error } = await supabase.from('brand_stories').delete().eq('slug', slug)
    if (error) setError('Delete failed: ' + error.message)
    else setPosts(prev => prev.filter(p => p.slug !== slug))
    setDeletingSlug(null)
  }

  function handleLogout() {
    sessionStorage.removeItem('bz_admin')
    navigate('/admin', { replace: true })
  }

  if (!isAuth) return null

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#191c1e]">

      {/* ── Toast */}
      {toast && (
        <div className="fixed top-20 left-3 right-3 sm:left-auto sm:right-6 sm:w-[400px] z-[100]"
          style={{ animation: 'slideIn 0.3s cubic-bezier(0.16,1,0.3,1) forwards' }}>
          <div className="relative overflow-hidden rounded-md"
            style={{ boxShadow: '0 32px 80px -12px rgba(10,25,47,0.45), 0 8px 24px -4px rgba(10,25,47,0.25)' }}>
            <div className={`h-1 w-full ${toast.type === 'success' ? 'bg-gradient-to-r from-green-400 to-green-500' : 'bg-gradient-to-r from-[#e31e24] to-red-500'}`} />
            <div className={`px-5 pt-3.5 pb-3.5 ${toast.type === 'success' ? 'bg-white' : 'bg-[#0a192f]'}`}>
              <div className="flex items-center justify-between gap-4 mb-1">
                <p className={`font-headline font-extrabold text-sm tracking-tight leading-snug ${toast.type === 'success' ? 'text-[#0a192f]' : 'text-white'}`}>{toast.title}</p>
                <button onClick={() => setToast(null)}
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${toast.type === 'success' ? 'text-slate-300 hover:text-slate-500 hover:bg-slate-100' : 'text-white/30 hover:text-white/70 hover:bg-white/10'}`}>
                  <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>close</span>
                </button>
              </div>
              <p className={`font-body text-xs leading-relaxed ${toast.type === 'success' ? 'text-[#75777e]' : 'text-white/50'}`}>{toast.message}</p>
            </div>
          </div>
        </div>
      )}
      <style>{`@keyframes slideIn { from { opacity:0; transform:translateX(24px); } to { opacity:1; transform:translateX(0); } }`}</style>

      {/* ── Navbar — same style as site */}
      <nav className="fixed top-0 left-0 w-full z-50 glass-nav border-b border-slate-200/60 shadow-sm">
        <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 h-[82px] max-w-[1440px] mx-auto">

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

          {/* Admin badge */}
          <span className="hidden sm:inline-flex items-center gap-1.5 font-body text-[11px] font-bold uppercase tracking-[0.2em] text-[#e31e24] bg-[#e31e24]/8 px-3 py-1.5 rounded-full border border-[#e31e24]/20">
            <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>shield</span>
            Admin Panel
          </span>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="/brand-stories"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 font-body font-medium text-[14px] text-slate-500 hover:text-[#0a192f] transition-colors"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>open_in_new</span>
              View Site
            </a>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 border border-[#0a192f] text-[#0a192f] px-3 sm:px-4 py-2 rounded-full font-body font-semibold text-[13px] hover:bg-[#0a192f] hover:text-white transition-all duration-200"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>logout</span>
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero — same as BrandStories */}
      <section className="relative overflow-hidden bg-[#0a192f] pt-[82px] min-h-[320px] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/88 to-[#0a192f]/60" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a192f] to-transparent" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 w-full py-10 sm:py-14 lg:py-20">
          <div className="mb-6">
            <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#e31e24]">Admin Console</span>
          </div>
          <h1
            className="font-headline font-extrabold tracking-tighter leading-[1.1] text-white mb-4 max-w-3xl"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}
          >
            Brand Stories
          </h1>
          <p className="font-body text-white/50 text-base max-w-xl leading-relaxed">
            Create, edit, and manage the brand stories published on the website.
          </p>
        </div>
      </section>

      {/* ── Content */}
      <section className="bg-[#f2f4f7] py-10 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">

          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8 md:mb-10 gap-4">
            <div className="min-w-0">
              <h2 className="font-headline font-extrabold text-[#0a192f] text-lg sm:text-xl tracking-tight">
                {loading ? 'Loading…' : `${posts.length} ${posts.length === 1 ? 'Story' : 'Stories'}`}
              </h2>
              <p className="font-body text-[#75777e] text-xs sm:text-sm mt-0.5">
                {loading ? '' : `${posts.filter(p => p.published).length} published · ${posts.filter(p => !p.published).length} draft`}
              </p>
            </div>
            <Link
              to="/admin/posts/new"
              className="shrink-0 inline-flex items-center gap-1.5 sm:gap-2 border border-[#0a192f] bg-[#0a192f] text-white px-4 sm:px-6 py-2.5 rounded-full font-body font-semibold text-[13px] sm:text-[14px] hover:bg-transparent hover:text-[#0a192f] transition-all duration-200 group"
            >
              <span className="material-symbols-outlined text-[15px]">add</span>
              <span className="hidden xs:inline sm:inline">New Story</span>
              <span className="inline xs:hidden sm:hidden">New</span>
              <span className="hidden sm:inline material-symbols-outlined text-[15px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
            </Link>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-white border-l-4 border-[#e31e24] p-5 rounded-xl mb-8 font-body text-[#5a5e6a] text-sm">{error}</div>
          )}

          {/* Loading */}
          {loading && (
            <div className="flex items-center justify-center gap-3 py-20">
              <div className="w-5 h-5 border-2 border-[#e31e24] border-t-transparent rounded-full animate-spin" />
              <span className="font-body text-[#75777e] text-sm">Loading stories…</span>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && posts.length === 0 && (
            <div className="text-center py-20 bg-white">
              <span className="material-symbols-outlined text-slate-300 block mb-4" style={{ fontSize: '48px' }}>article</span>
              <h3 className="font-headline font-extrabold text-[#0a192f] text-xl mb-2">No stories yet</h3>
              <p className="font-body text-[#75777e] text-sm mb-8">Create your first brand story to get started.</p>
              <Link
                to="/admin/posts/new"
                className="inline-flex items-center gap-2 border border-[#0a192f] bg-[#0a192f] text-white px-6 py-2.5 rounded-full font-body font-semibold text-[14px] hover:bg-transparent hover:text-[#0a192f] transition-all duration-200"
              >
                <span className="material-symbols-outlined text-[15px]">add</span>
                Create First Story
              </Link>
            </div>
          )}

          {/* Posts grid — same card style as BrandStories */}
          {!loading && !error && posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => (
                <article key={post.id} className="group flex flex-col bg-white border-b-4 border-transparent hover:border-[#e31e24] transition-all duration-300 overflow-hidden">

                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    {post.img ? (
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        src={post.img}
                        alt={post.title}
                      />
                    ) : (
                      <div className="w-full h-full bg-[#eceef1] flex items-center justify-center">
                        <span className="material-symbols-outlined text-slate-300" style={{ fontSize: '40px' }}>image</span>
                      </div>
                    )}
                    {/* Status badge */}
                    <span className={`absolute top-3 left-3 inline-flex items-center gap-1 font-body text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full ${
                      post.published ? 'bg-white text-green-700' : 'bg-white text-slate-500'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${post.published ? 'bg-green-500' : 'bg-slate-400'}`} />
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5 sm:p-8 flex-grow flex flex-col">
                    <span className="font-body text-[#e31e24] font-bold text-[11px] tracking-[0.25em] uppercase mb-4 block">
                      {post.category || 'Uncategorised'}
                    </span>
                    <h3 className="font-headline font-extrabold text-[#0a192f] text-xl mb-3 leading-tight tracking-tight">
                      {post.title}
                    </h3>
                    <p className="font-body text-[#5a5e6a] text-sm leading-relaxed mb-8 line-clamp-2">
                      {post.description}
                    </p>

                    {/* Admin actions */}
                    <div className="mt-auto flex items-center gap-3 pt-4 border-t border-slate-100">
                      <Link
                        to={`/admin/posts/${post.slug}/edit`}
                        className="inline-flex items-center gap-1.5 font-body font-bold text-sm text-[#0a192f] hover:text-[#e31e24] transition-colors group/link"
                      >
                        <span className="material-symbols-outlined text-[16px]">edit</span>
                        Edit
                        <span className="material-symbols-outlined text-[16px] group-hover/link:translate-x-0.5 transition-transform">arrow_forward</span>
                      </Link>
                      <span className="text-slate-200">·</span>
                      <button
                        onClick={() => handleDelete(post.slug, post.title)}
                        disabled={deletingSlug === post.slug}
                        className="inline-flex items-center gap-1.5 font-body font-bold text-sm text-slate-400 hover:text-[#e31e24] transition-colors disabled:opacity-40"
                      >
                        <span className="material-symbols-outlined text-[16px]">delete</span>
                        {deletingSlug === post.slug ? 'Deleting…' : 'Delete'}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Delete Confirmation Modal */}
      {confirmDelete && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#0a192f]/70 backdrop-blur-sm"
            onClick={() => setConfirmDelete(null)}
          />
          {/* Modal card */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[440px] overflow-hidden">
            {/* Red top accent */}
            <div className="h-1 w-full bg-gradient-to-r from-[#e31e24] to-[#c0171c]" />
            <div className="px-8 pt-7 pb-8">
              {/* Icon + heading */}
              <div className="flex items-start gap-4 mb-5">
                <span className="material-symbols-outlined text-[#e31e24] mt-0.5 shrink-0" style={{ fontSize: '26px' }}>delete_forever</span>
                <div>
                  <h3 className="font-headline font-extrabold text-[#0a192f] text-lg tracking-tight leading-snug mb-1">
                    Delete this story?
                  </h3>
                  <p className="font-body text-[#5a5e6a] text-sm leading-relaxed">
                    <span className="font-semibold text-[#0a192f]">"{confirmDelete.title}"</span> will be permanently removed. This action cannot be undone.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 mt-6">
                <button
                  onClick={() => setConfirmDelete(null)}
                  className="inline-flex items-center gap-1.5 font-body font-semibold text-[13px] text-[#5a5e6a] hover:text-[#0a192f] border border-slate-200 hover:border-slate-300 px-5 py-2.5 rounded-full transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDeleteAction}
                  className="inline-flex items-center gap-1.5 font-body font-semibold text-[13px] bg-[#e31e24] text-white hover:bg-[#c0171c] px-5 py-2.5 rounded-full transition-all duration-200"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>delete</span>
                  Delete Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
