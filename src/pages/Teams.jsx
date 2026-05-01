export default function Teams() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-10">
          <p className="font-body font-semibold text-[10px] tracking-[0.22em] uppercase text-slate-400 flex items-center gap-2 mb-4">
            <span className="w-4 h-px bg-slate-300" />
            Our People
          </p>
          <h1 className="font-headline font-black text-[#0a192f] tracking-tight leading-[1.05]"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>
            The team behind the work.
          </h1>
        </div>
      </div>
    </div>
  )
}
