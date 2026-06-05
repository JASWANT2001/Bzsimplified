import { useState } from 'react'

const VISIBLE_COUNT = 5

export default function FAQ({ items }) {
  const [open, setOpen]         = useState(null)
  const [expanded, setExpanded] = useState(false)

  const visible = expanded ? items : items.slice(0, VISIBLE_COUNT)
  const hasMore = items.length > VISIBLE_COUNT

  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="w-full">
          <p className="font-body text-xs tracking-[0.2em] uppercase font-bold text-[#e31e24] mb-4">FAQ</p>
          <h2 className="font-headline font-extrabold text-[#0a192f] text-3xl md:text-4xl mb-14 tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {visible.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-shadow duration-200 hover:shadow-sm"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-4 md:px-8 py-4 md:py-6 text-left"
                  onClick={() => setOpen(open === idx ? null : idx)}
                >
                  <span className="font-headline font-bold text-[#0a192f] text-[16px] leading-snug">
                    {item.q}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[#0a192f] flex-shrink-0 transition-transform duration-300 ${open === idx ? 'rotate-180' : ''}`}
                  >
                    keyboard_arrow_down
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${open === idx ? 'max-h-96' : 'max-h-0'}`}
                >
                  <p className="font-body text-[#5a5e6a] text-sm leading-relaxed px-4 md:px-8 pb-4 md:pb-6">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setExpanded(!expanded)}
                className="group inline-flex items-center gap-2 font-headline font-semibold text-[14px] text-[#0a192f] border border-[#0a192f] px-6 py-3 rounded-lg transition-all duration-200 hover:bg-[#0a192f] hover:text-white"
              >
                {expanded ? 'Show Less' : 'Show More Questions'}
                <span className={`material-symbols-outlined text-[16px] transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
                  keyboard_arrow_down
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
