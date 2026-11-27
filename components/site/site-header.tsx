"use client"

// Header rebuilt from the live incubia-algerie.com header (26/11/2026): same logo, links, classes and CTA.
// Services menu: the owner's 4 categories (approved preview, preview/pages.js, 20/11/2026) — a desktop
// panel (intro + 4 category tiles) and a full-screen mobile drawer. Styles: app/redesign.css (ipm-*).
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Arrow } from "@/components/site/icons"
import { WA_HREF, WhatsAppIcon } from "@/components/site/whatsapp"

const Svg = ({ children }: { children: React.ReactNode }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
)
// Desktop panel tiles: the owner's category names and taglines. Existing URLs only.
const tiles: [React.ReactNode, string, string, string][] = [
  [<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.2" /></>, "Prospection commerciale", "Développez votre portefeuille client.", "/services/prospection-b2b"],
  [<><path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1Z" /><path d="M15 8a5 5 0 0 1 0 8" /><path d="M18 5a9 9 0 0 1 0 14" /></>, "Communication digitale", "Renforcez votre présence en ligne.", "/services/community-management"],
  [<><rect x="4" y="5" width="16" height="11" rx="1.5" /><path d="M2 19h20" /></>, "Digitalisation", "Simplifiez et optimisez vos process.", "/services/site-web"],
  [<><path d="m2 9 10-5 10 5-10 5Z" /><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" /></>, "Formation et accompagnement", "Montez en compétences et accélérez votre croissance.", "/formations"],
]
// Mobile drawer groups (no CRM page exists yet, so Digitalisation links to the website page).
const groups: [string, [string, string][]][] = [
  ["Prospection commerciale", [["Prospection B2B — Algérie et international", "/services/prospection-b2b"], ["Assistance commerciale", "/services/assistance-commerciale"]]],
  ["Communication et présence digitale", [["Création de site web", "/services/site-web"], ["Réseaux sociaux et image de marque", "/services/community-management"], ["Publicité et campagnes sponsorisées", "/services/publicite-digitale"]]],
  ["Digitalisation", [["Site web d’entreprise", "/services/site-web"]]],
  ["Formation et accompagnement", [["Formations", "/formations"], ["Programme d’Accélération", "/acceleration-entreprises"]]],
]
const resources: [string, string][] = [["Tous les services", "/services"], ["Réalisations", "/realisations"], ["Blog", "/blog"], ["Événements", "/evenements"]]

const topLink =
  "shrink-0 whitespace-nowrap text-[#47534E] hover:text-[#1B1AFE] transition-colors font-semibold text-sm 2xl:text-base px-2 2xl:px-3 py-2 hover:bg-[#F9FAF9] rounded-xl"

function ServicesMenu() {
  const [open, setOpen] = useState(false)
  const [top, setTop] = useState(0)
  const wrapRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()

  const show = (v: boolean) => {
    if (timer.current) clearTimeout(timer.current)
    // The header's backdrop-filter makes it the containing block of this fixed panel: offset from its top.
    if (v) setTop((wrapRef.current?.closest("header")?.getBoundingClientRect().height ?? 80) - 4)
    setOpen(v)
  }
  useEffect(() => setOpen(false), [pathname])

  return (
    <div
      ref={wrapRef}
      className={`relative ipm-wrap${open ? " is-open" : ""}`}
      onMouseEnter={() => show(true)}
      onMouseLeave={() => { timer.current = setTimeout(() => setOpen(false), 150) }}
      onKeyDown={(e) => { if (e.key === "Escape") { setOpen(false); btnRef.current?.focus() } }}
      onBlur={(e) => { if (!wrapRef.current?.contains(e.relatedTarget as Node)) setOpen(false) }}
    >
      <div className="flex items-center rounded-xl hover:bg-[#F9FAF9]">
        <Link
          href="/services"
          className="shrink-0 whitespace-nowrap text-[#47534E] hover:text-[#1B1AFE] transition-colors duration-150 font-semibold text-sm 2xl:text-base pl-2 2xl:pl-3 pr-1 py-2"
        >
          Services
        </Link>
        <button
          ref={btnRef}
          type="button"
          aria-label="Ouvrir le menu Services"
          aria-expanded={open}
          aria-controls="ipm-panel"
          className="pr-2 2xl:pr-3 py-2 text-[#47534E] hover:text-[#1B1AFE] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#1B1AFE] rounded"
          onClick={() => show(!open)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault()
              show(true)
              requestAnimationFrame(() => panelRef.current?.querySelector("a")?.focus())
            }
          }}
        >
          <ChevronDown className="w-4 h-4 transition-transform" />
        </button>
      </div>
      <div className="ipm-panel" id="ipm-panel" ref={panelRef} hidden={!open} style={{ top }}>
        <div className="ipm-intro">
          <p className="ipm-h">Nos services</p>
          <p className="ipm-sub">Des solutions concrètes pour développer votre activité.</p>
          <Link className="ipm-all" href="/services">Tous les services <Arrow /></Link>
        </div>
        <ul className="ipm-tiles">
          {tiles.map(([icon, title, sub, href]) => (
            <li key={title}>
              <Link href={href}>
                <span className="ipm-ico"><Svg>{icon}</Svg></span>
                <span className="ipm-txt"><strong>{title}</strong><span>{sub}</span></span>
                <span className="ipm-go"><Arrow /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function MobileDrawer({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const root = document.documentElement
    root.style.overflow = "hidden"
    closeRef.current?.focus()
    return () => { root.style.overflow = "" }
  }, [])
  return (
    <div className="ipm-drawer" id="ipm-drawer" role="dialog" aria-modal="true" aria-label="Menu" onKeyDown={(e) => { if (e.key === "Escape") onClose() }}>
      <div className="ipm-drawer-head">
        <Link href="/" className="ipm-home" onClick={onClose}>Accueil</Link>
        <button ref={closeRef} type="button" className="ipm-close" aria-label="Fermer le menu" onClick={onClose}>×</button>
      </div>
      <nav onClick={(e) => { if ((e.target as HTMLElement).closest("a")) onClose() }}>
        <details open>
          <summary>Services</summary>
          {groups.map(([title, links]) => (
            <div key={title} className="ipm-group">
              <p className="ipm-title">{title}</p>
              <ul>{links.map(([l, h]) => <li key={l}><Link href={h}>{l}</Link></li>)}</ul>
            </div>
          ))}
        </details>
        <Link className="ipm-top" href="/tarifs">Tarifs</Link>
        <Link className="ipm-top" href="/a-propos">À propos</Link>
        <Link className="ipm-top" href="/contact">Contact</Link>
        <div className="ipm-res">{resources.map(([l, h]) => <Link key={h} href={h}>{l}</Link>)}</div>
      </nav>
      <div className="ipm-drawer-cta">
        <Link className="ipm-cta" href="/contact" onClick={onClose}>Diagnostic gratuit</Link>
        <a className="ipm-wa" href={WA_HREF} target="_blank" rel="noopener"><WhatsAppIcon />WhatsApp</a>
      </div>
    </div>
  )
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const burgerRef = useRef<HTMLButtonElement>(null)
  const close = () => { setMobileOpen(false); burgerRef.current?.focus() }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-[#E7EBE9]/50 shadow-sm">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-16 w-full">
        <div className="flex items-center h-16 lg:h-[72px] xl:h-[80px] gap-2 xl:gap-4 min-w-0 w-full">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image src="/logoincubia.svg" alt="Incubia Logo" width={140} height={30} className="h-8 xl:h-9 w-auto" />
          </Link>

          <nav className="hidden xl:flex items-center justify-center flex-1 min-w-0 gap-1 2xl:gap-3">
            <ServicesMenu />
            <Link href="/tarifs" className={topLink}>Tarifs</Link>
            <Link href="/a-propos" className={topLink}>À Propos</Link>
            <Link href="/contact" className={`${topLink.replace("px-2 2xl:px-3", "px-2 2xl:px-4")} duration-150`}>Contact</Link>
          </nav>

          <div className="hidden xl:flex items-center shrink-0 ml-2 2xl:ml-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF] hover:opacity-90 text-white py-2.5 px-4 2xl:px-8 rounded-full font-bold transition-all h-auto shadow-xl shadow-[#1B1AFE]/20 text-sm 2xl:text-base whitespace-nowrap"
              asChild
            >
              <Link href="/contact">Obtenir un diagnostic gratuit</Link>
            </Button>
          </div>

          <button
            ref={burgerRef}
            type="button"
            className="xl:hidden p-2 ml-auto shrink-0"
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
            aria-controls="ipm-drawer"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      {/* Portal: inside the header, position:fixed would be confined by its backdrop-filter. */}
      {mobileOpen && createPortal(<MobileDrawer onClose={close} />, document.body)}
    </header>
  )
}
