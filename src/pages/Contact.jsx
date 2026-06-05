import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const SERVICES = [
  { value: 'market',   label: 'Market Validation & Entry Strategy' },
  { value: 'process',  label: 'Process Mapping & Optimisation'     },
  { value: 'finance',  label: 'Financial Governance'               },
  { value: 'talent',   label: 'Talent & Org Design'                },
  { value: 'mna',      label: 'Mergers & Acquisitions'             },
  { value: 'scaling',  label: 'Multi-market Scaling'               },
  { value: 'other',    label: 'Other / Not Sure Yet'               },
]

const EMPTY = { name: '', email: '', phone: '', company: '', message: '' }

function Toast({ message, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 4000)
    return () => clearTimeout(t)
  }, [onClose])

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-[#0a192f] text-white px-5 py-4 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] animate-[slideUp_0.3s_ease]">
      <div className="w-7 h-7 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
        <span className="material-symbols-outlined text-green-400 text-[18px]">check</span>
      </div>
      <p className="font-body text-[14px] font-medium">{message}</p>
      <button onClick={onClose} className="ml-2 text-white/40 hover:text-white transition-colors">
        <span className="material-symbols-outlined text-[18px]">close</span>
      </button>
    </div>
  )
}

export default function Contact() {
  const [form, setForm]       = useState(EMPTY)
  const [errors, setErrors]   = useState({})
  const [touched, setTouched] = useState({})
  const [loading, setLoading] = useState(false)
  const [focused, setFocused] = useState('')
  const [toast, setToast]     = useState(null)

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim())                              return 'Full name is required.'
        if (value.trim().length < 2)                   return 'Name must be at least 2 characters.'
        if (!/^[a-zA-Z\s.'-]+$/.test(value.trim()))   return 'Name can only contain letters and spaces.'
        return ''
      case 'email':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()))
                                                        return 'Please enter a valid email address.'
        return ''
      case 'phone':
        if (!value.trim())                              return 'Phone number is required.'
        if (!/^[+\d][\d\s\-().]{7,}$/.test(value.trim()))
                                                        return 'Enter a valid phone number (e.g. +91 98410 27220).'
        return ''
      case 'message':
        if (!value.trim())                              return 'Please tell us about your challenge.'
        if (value.trim().length < 10)                  return 'Message must be at least 10 characters.'
        return ''
      default: return ''
    }
  }

  const set = e => {
    const { name, value } = e.target

    // Restrict phone to digits, +, -, (, ), spaces only
    if (name === 'phone' && /[^0-9+\-() ]/.test(value)) return

    // Restrict name to letters, spaces, dots, apostrophes, hyphens only
    if (name === 'name' && value && /[^a-zA-Z\s.'-]/.test(value)) return

    setForm(p => ({ ...p, [name]: value }))

    // Validate live only if field has been touched
    if (touched[name]) {
      setErrors(p => ({ ...p, [name]: validateField(name, value) }))
    }
  }

  const handleBlur = e => {
    const { name, value } = e.target
    setFocused('')
    setTouched(p => ({ ...p, [name]: true }))
    setErrors(p => ({ ...p, [name]: validateField(name, value) }))
  }

  const validate = () => {
    const e = {}
    Object.keys(EMPTY).forEach(name => {
      const err = validateField(name, form[name])
      if (err) e[name] = err
    })
    return e
  }

  const submit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }

    setLoading(true)

    try {
      await emailjs.send(
        'service_gopt8y5',
        'template_f944vxi',
        {
          name: form.name,
          email: form.email || 'Not provided',
          phone: form.phone || 'Not provided',
          company: form.company || 'Not provided',
          message: form.message || 'No note left',
        },
        'ctepv1oGsrcCxPkH4'
      )

      setForm(EMPTY)
      setErrors({})
      setToast('Message submitted successfully!')

    } catch (error) {
      console.error('EmailJS Error:', error)
      setToast('Failed to send. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-[82px] min-h-screen bg-[#f8fafc]">

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}

      {/* ── Hero */}
      <div data-hero="true" className="relative bg-[#0a192f] overflow-hidden py-14 lg:py-20 min-h-[420px] lg:min-h-[480px]">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/88 to-[#0a192f]/60" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a192f] to-transparent" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <p className="font-body font-bold text-[14px] tracking-[0.28em] uppercase text-[#e31e24] mb-6">
            Get in Touch
          </p>
          <h1
            className="font-headline font-black text-white tracking-tight leading-[1.05] mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Looking for Clarity? Structure? Growth?
          </h1>
          <p className="font-body text-white/45 text-base sm:text-[18px] leading-relaxed mb-8 md:mb-10 max-w-[520px]">
            No sales pitch, no obligations. Just a real conversation about your business.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact-form"
              onClick={e => { e.preventDefault(); const el = document.getElementById('contact-form'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0a192f] font-body font-semibold text-[14px] rounded-xl border border-white transition-all duration-200 hover:bg-transparent hover:text-white group"
            >
              Start the Conversation
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform duration-200">arrow_forward</span>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=hello@bzsimplified.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white font-body font-semibold text-[14px] rounded-xl transition-all duration-200 hover:bg-transparent hover:text-white"
            >
              <span className="material-symbols-outlined text-[16px]">mail</span>
              Email Us
            </a>
          </div>
        </div>
        <button
          aria-label="Scroll to content"
          onClick={e => e.currentTarget.closest('[data-hero]')?.nextElementSibling?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-1 group"
        >
          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-white/30 group-hover:text-white/60 transition-colors">Scroll</span>
          <span className="material-symbols-outlined animate-bounce text-white/40 group-hover:text-white/70 transition-colors" style={{ fontSize: '30px' }}>keyboard_arrow_down</span>
        </button>
      </div>

      {/* ── Main content */}
      <div id="contact-form" className="pb-14 pt-10 md:pb-20 md:pt-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">

          {/* ── Split panel */}
          <div className="grid lg:grid-cols-[380px_1fr] gap-6">

            {/* Left — dark info panel */}
            <div className="order-2 lg:order-1 bg-[#0a192f] rounded-2xl p-5 md:p-7 lg:p-10 flex flex-col text-white">

              {/* Contact details */}
              <div className="space-y-6">
                {[
                  { icon: 'mail_outline', label: 'Email',         val: 'hello@bzsimplified.com', href: 'https://mail.google.com/mail/?view=cm&to=hello@bzsimplified.com' },
                  { icon: 'phone',        label: 'Phone',         val: '+91-9841027220',          href: 'tel:+919841027220' },
                  { icon: 'schedule',     label: 'Response time', val: 'Within 2 hours',         href: null },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-white/70 text-[18px]">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-white/35 text-[11px] uppercase tracking-widest font-semibold mb-0.5">{item.label}</p>
                      {item.href
                        ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-white text-[14px] font-medium hover:text-white/70 transition-colors duration-200">{item.val}</a>
                        : <p className="text-white text-[14px] font-medium">{item.val}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-8 border-t border-white/10" />

              {/* What happens next */}
              <div className="flex-1">
                <p className="text-white/35 text-[11px] uppercase tracking-[0.25em] font-bold mb-5">What happens next</p>
                <div className="space-y-5">
                  {[
                    { step: '01', icon: 'edit_note',     title: 'Submit your details', desc: 'Fill the form and tell us what you need.' },
                    { step: '02', icon: 'handshake',     title: 'Discovery call',      desc: 'A focused 30-min session to understand your goals.' },
                    { step: '03', icon: 'rocket_launch', title: 'We get to work',      desc: 'Tailored plan built and execution begins.' },
                  ].map((s, i, arr) => (
                    <div key={s.step} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-[#e31e24]/15 border border-[#e31e24]/30 flex items-center justify-center flex-shrink-0">
                          <span className="material-symbols-outlined text-[#e31e24] text-[15px]">{s.icon}</span>
                        </div>
                      </div>
                      <div className="pb-1">
                        <p className="text-white text-[13px] font-semibold leading-tight">{s.title}</p>
                        <p className="text-white/35 text-[12px] leading-relaxed mt-0.5">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right — form panel */}
            <div className="order-1 lg:order-2 bg-white rounded-2xl border border-slate-100 shadow-[0_8px_40px_rgba(0,0,0,0.05)] p-6 md:p-8 lg:p-10">
              <h2 className="font-headline font-bold text-[#0a192f] text-xl mb-1">Tell us your story</h2>
              <p className="font-body text-slate-600 text-[14px] mb-8">Share your challenge and we'll connect you with the right solution.</p>

              <form onSubmit={submit} className="space-y-5">

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name *" name="name" type="text" value={form.name} onChange={set} onBlur={handleBlur} focused={focused} setFocused={setFocused} error={errors.name} />
                  <Field label="Work Email" name="email" type="email" value={form.email} onChange={set} onBlur={handleBlur} focused={focused} setFocused={setFocused} error={errors.email} />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Phone *" name="phone" type="tel" value={form.phone} onChange={set} onBlur={handleBlur} focused={focused} setFocused={setFocused} error={errors.phone} />
                  <Field label="Company" name="company" type="text" value={form.company} onChange={set} onBlur={handleBlur} focused={focused} setFocused={setFocused} />
                </div>

                <div>
                  <label className="block font-body font-medium text-[#0a192f] text-[13px] mb-1.5">Your message *</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={set}
                    onFocus={() => setFocused('message')}
                    onBlur={handleBlur}
                    className={`w-full bg-white border rounded-lg px-4 py-2.5 font-body text-[14px] text-[#0a192f] placeholder:text-slate-400 focus:outline-none transition-all duration-200 resize-none ${errors.message ? 'border-red-400 ring-1 ring-red-100' : focused === 'message' ? 'border-slate-400 ring-1 ring-slate-200' : 'border-slate-200'}`}
                  />
                  <div className="flex justify-between mt-1">
                    {errors.message
                      ? <p className="text-[12px] text-red-500 font-body">{errors.message}</p>
                      : <span />
                    }
                    <p className="text-[12px] text-slate-400 font-body">{form.message.length} chars</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <p className="font-body text-slate-600 text-[13px]">No spam. No obligations.</p>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-7 py-2.5 bg-[#0a192f] text-white font-body font-semibold text-[14px] rounded-lg border border-[#0a192f] transition-all duration-200 hover:bg-transparent hover:text-[#0a192f] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Field ──────────────────────────────────────────────────────────────── */

function Field({ label, name, type, value, onChange, onBlur, focused, setFocused, error, hint }) {
  return (
    <div>
      <label className="block font-body font-medium text-[#0a192f] text-[13px] mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(name)}
        onBlur={onBlur}
        className={`w-full bg-white border rounded-lg px-4 py-2.5 font-body text-[14px] text-[#0a192f] placeholder:text-slate-400 focus:outline-none transition-all duration-200 ${
          error ? 'border-red-400 ring-1 ring-red-100' : focused === name ? 'border-slate-400 ring-1 ring-slate-200' : 'border-slate-200'
        }`}
      />
      {error
        ? <p className="mt-1 text-[12px] text-red-500 font-body">{error}</p>
        : hint && <p className="mt-1 text-[12px] text-slate-400 font-body">{hint}</p>
      }
    </div>
  )
}
