// Pack card of /tarifs, same markup and classes as the live cards (used for offers added since the rebuild).
import type { ReactNode } from "react"
import Link from "next/link"

const buttonBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] text-white hover:bg-[#97D2C7] hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 w-full rounded-2xl bg-gradient-to-r"

type Props = {
  icon: ReactNode
  iconClass: string
  badge: string
  title: string
  text: string
  label: string
  price: string
  unit?: string
  items: string[]
  cta: string
  href: string
  ctaClass: string
  note?: string
}

export function PricingCard({ icon, iconClass, badge, title, text, label, price, unit, items, cta, href, ctaClass, note }: Props) {
  return (
    <article className="relative flex flex-col rounded-3xl border-2 p-6 sm:p-7 transition-all hover:shadow-xl bg-white border-[#E7EBE9] hover:border-[#1B1AFE]/40">
      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${iconClass} flex items-center justify-center mb-5 shadow-lg`}>{icon}</div>
      <div className="inline-flex w-max px-3 py-1 rounded-full text-xs font-bold mb-4 bg-[#EFF3FC] text-[#1B1AFE]">{badge}</div>
      <h3 className="text-2xl font-bold mb-2 text-[#0D1F1A]">{title}</h3>
      <p className="text-sm mb-6 min-h-[44px] text-[#47534E]">{text}</p>
      <div className="mb-5">
        <div className="text-xs font-bold mb-1 text-[#47534E]">{label}</div>
        <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1">
          <span className="text-3xl font-bold text-[#0D1F1A]">{price}</span>
          {unit ? <span className="text-sm font-semibold text-[#47534E]">{unit}</span> : null}
        </div>
      </div>
      <ul className="space-y-2.5 mb-7">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#1B1AFE]" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span className="text-sm text-[#344054]">{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <Link data-slot="button" className={`${buttonBase} ${ctaClass}`} href={href}>
          {cta}
        </Link>
        {note ? <p className="mt-3 text-center text-xs font-medium text-[#8A96A8]">{note}</p> : null}
      </div>
    </article>
  )
}
