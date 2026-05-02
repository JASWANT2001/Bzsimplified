import { useState } from 'react'

export default function FAQ({ items }) {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-10 bg-[#f2f4f7]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="w-full">
          <p className="font-body text-xs tracking-[0.2em] uppercase font-bold text-[#e31e24] mb-4">FAQ</p>
          <h2 className="font-headline font-extrabold text-[#0a192f] text-3xl md:text-4xl mb-14 tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-shadow duration-200 hover:shadow-sm"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-8 py-6 text-left"
                  onClick={() => setOpen(open === idx ? null : idx)}
                >
                  <span className="font-headline font-bold text-[#0a192f] text-[15px] leading-snug">
                    {item.q}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[#0a192f] flex-shrink-0 transition-transform duration-300 ${open === idx ? 'rotate-45' : ''}`}
                  >
                    add
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${open === idx ? 'max-h-96' : 'max-h-0'}`}
                >
                  <p className="font-body text-[#5a5e6a] text-sm leading-relaxed px-8 pb-6">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
