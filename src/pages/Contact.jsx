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

const EMPTY = { name: '', email: '', company: '', service: '', message: '' }

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
  const [form, setForm]     = useState(EMPTY)
  const [loading, setLoading] = useState(false)
  const [focused, setFocused] = useState('')
  const [toast, setToast]   = useState(null)

  const set = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      setToast('Please fill all required fields.')
      return
    }

    setLoading(true)

    try {
      await emailjs.send(
        'service_gopt8y5',
        'template_f944vxi',
        {
          name: form.name,
          email: form.email,
          company: form.company,
          service: form.service || 'Not specified',
          message: form.message,
        },
        'ctepv1oGsrcCxPkH4'
      )

      setForm(EMPTY)
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
            className="font-headline font-black text-white tracking-tight leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(1.8rem, 4.5vw, 4.2rem)' }}
          >
            Big moves begin with one conversation
          </h1>
          <p className="font-body text-white/45 text-[15px] sm:text-[16px] leading-relaxed mb-8 md:mb-10 max-w-[520px]">
            No sales pitch, no obligations — just a real conversation about your business.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact-form"
              onClick={e => { e.preventDefault(); document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0a192f] font-body font-semibold text-[14px] rounded-xl hover:bg-white/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
            >
              Start the Conversation
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform duration-200">arrow_forward</span>
            </a>
            <a
              href="mailto:hello@bzsimplified.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/80 font-body font-semibold text-[14px] rounded-xl hover:bg-white/8 hover:text-white hover:border-white/40 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[16px]">mail</span>
              Email Us
            </a>
          </div>
        </div>
        <button
          aria-label="Scroll to content"
          onClick={e => e.currentTarget.closest('[data-hero]')?.nextElementSibling?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 group"
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
            <div className="bg-[#0a192f] rounded-2xl p-7 md:p-8 lg:p-10 flex flex-col text-white">
              <p className="font-body text-white/50 text-[14px] leading-relaxed mb-10">
                We partner with ambitious leaders to turn operational complexity into competitive advantage.
                Start a conversation — no sales pitch, no obligations.
              </p>

              <div className="space-y-7 flex-1">
                {[
                  { icon: 'mail_outline', label: 'Email',         val: 'hello@bzsimplified.com' },
                  { icon: 'phone',        label: 'Phone',         val: '+1 (800) 000-0000'      },
                  { icon: 'schedule',     label: 'Response time', val: 'Within 48 hours'        },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-white/70 text-[18px]">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-white/35 text-[11px] uppercase tracking-widest font-semibold mb-0.5">{item.label}</p>
                      <p className="text-white text-[14px] font-medium">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e31e24]" />
                  <p className="text-white/30 text-[12px] font-body">Strictly confidential. Real people.</p>
                </div>
              </div>
            </div>

            {/* Right — form panel */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_8px_40px_rgba(0,0,0,0.05)] p-6 md:p-8 lg:p-10">
              <h2 className="font-headline font-bold text-[#0a192f] text-xl mb-1">Tell us your story</h2>
              <p className="font-body text-slate-400 text-[14px] mb-8">Share your challenge and we'll connect you with the right solution.</p>

              <form onSubmit={submit} className="space-y-5">

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name *"  name="name"  type="text"  placeholder="Jane Smith"        value={form.name}  onChange={set} required focused={focused} setFocused={setFocused} />
                  <Field label="Work Email *" name="email" type="email" placeholder="jane@company.com"  value={form.email} onChange={set} required focused={focused} setFocused={setFocused} />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Company" name="company" type="text" placeholder="Acme Corp" value={form.company} onChange={set} focused={focused} setFocused={setFocused} />

                  <div>
                    <label className="block font-body font-medium text-[#0a192f] text-[13px] mb-1.5">Area of Interest</label>
                    <div className="relative">
                      <select
                        name="service"
                        value={form.service}
                        onChange={set}
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 font-body text-[14px] appearance-none focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-200 transition-all duration-200 cursor-pointer"
                        style={{ color: form.service ? '#0a192f' : '#94a3b8' }}
                      >
                        <option value="" disabled style={{ color: '#94a3b8' }}>Select a service…</option>
                        {SERVICES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px] pointer-events-none">expand_more</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-body font-medium text-[#0a192f] text-[13px] mb-1.5">What's the challenge? *</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={set}
                    required
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    placeholder="Tell us where you are, what you want to achieve, and what's holding you back…"
                    className={`w-full bg-white border rounded-lg px-4 py-2.5 font-body text-[14px] text-[#0a192f] placeholder:text-slate-400 focus:outline-none transition-all duration-200 resize-none ${focused === 'message' ? 'border-slate-400 ring-1 ring-slate-200' : 'border-slate-200'}`}
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <p className="font-body text-slate-400 text-[13px]">No spam. No obligations.</p>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-7 py-2.5 bg-[#0a192f] text-white font-body font-semibold text-[14px] rounded-lg transition-all duration-200 hover:shadow-[0_8px_28px_rgba(10,25,47,0.22)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
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

function Field({ label, name, type, placeholder, value, onChange, required, focused, setFocused }) {
  return (
    <div>
      <label className="block font-body font-medium text-[#0a192f] text-[13px] mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        onFocus={() => setFocused(name)}
        onBlur={() => setFocused('')}
        className={`w-full bg-white border rounded-lg px-4 py-2.5 font-body text-[14px] text-[#0a192f] placeholder:text-slate-400 focus:outline-none transition-all duration-200 ${focused === name ? 'border-slate-400 ring-1 ring-slate-200' : 'border-slate-200'}`}
      />
    </div>
  )
}
