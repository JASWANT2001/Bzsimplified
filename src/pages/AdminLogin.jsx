import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (sessionStorage.getItem('bz_admin') === 'true') {
      navigate('/admin/posts', { replace: true })
    }
  }, [navigate])

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      sessionStorage.setItem('bz_admin', 'true')
      navigate('/admin/posts', { replace: true })
    } else {
      setError('Incorrect password. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a192f] relative flex items-center justify-center overflow-hidden">

      {/* Background image — same as BrandStories hero */}
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#0a192f]/92 to-[#0a192f]/75" />

      {/* Return to site — top left */}
      <a
        href="/brand-stories"
        className="absolute top-6 left-8 md:left-10 lg:left-16 z-20 inline-flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 hover:text-white/70 transition-colors"
      >
        <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_back</span>
        Return to site
      </a>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[420px] px-6">

        {/* Logo — exact same as navbar */}
        <div className="flex items-center gap-3 justify-center mb-10">
          <div className="relative flex items-end leading-none">
            <span className="font-headline font-black tracking-tighter text-white select-none" style={{ fontSize: '3rem', lineHeight: 1 }}>B</span>
            <span className="absolute bg-[#e31e24]" style={{ width: 12, height: 12, top: 2, right: -4 }} />
          </div>
          <div className="w-px h-10 bg-white/20" />
          <div className="flex flex-col justify-center gap-0.5">
            <span className="font-headline font-extrabold text-[16px] tracking-tight leading-none text-white">Business</span>
            <span className="font-headline font-extrabold text-[16px] tracking-tight leading-none text-white">Simplified</span>
          </div>
        </div>

        {/* Label */}
        <div className="text-center mb-8">
          <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#e31e24] block mb-2">Admin Console</span>
          <p className="font-body text-white/40 text-sm">Enter your password to manage brand stories</p>
        </div>

        {/* Form card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-body text-[11px] font-bold uppercase tracking-[0.25em] text-white/40 block mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => { setPassword(e.target.value); setError('') }}
                  placeholder="••••••••••••"
                  autoFocus
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 pr-11 text-white font-body text-sm placeholder-white/20 focus:outline-none focus:border-[#e31e24] focus:bg-white/15 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(s => !s)}
                  tabIndex={-1}
                  className="absolute inset-y-0 right-3 flex items-center text-white/30 hover:text-white/70 transition-colors"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 bg-[#e31e24]/10 border border-[#e31e24]/30 rounded-lg px-4 py-2.5">
                <span className="material-symbols-outlined text-[#e31e24] flex-shrink-0" style={{ fontSize: '15px' }}>error</span>
                <p className="font-body text-[#e31e24] text-xs font-semibold">{error}</p>
              </div>
            )}

            {/* Submit — site's CTA style */}
            <button
              type="submit"
              disabled={loading || !password}
              className="w-full inline-flex items-center justify-center gap-2 border border-white bg-transparent text-white px-6 py-3 rounded-full font-body font-semibold text-[14px] tracking-wide hover:bg-white hover:text-[#0a192f] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed group mt-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Verifying…
                </>
              ) : (
                <>
                  Enter Admin
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Divider with label */}
        <div className="flex items-center gap-4 mt-8">
          <div className="flex-1 h-px bg-white/10" />
          <span className="font-body text-[11px] uppercase tracking-[0.2em] text-white/20">Bzsimplified</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
      </div>

    </div>
  )
}
