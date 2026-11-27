"use client"

// Homepage hero + "Nos services" rail, ported from the approved preview (preview/additions.js, 20/11/2026).
// Copy comes from the owner's brief (service list). Styles: app/redesign.css (ip-* classes).
import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { WA_HREF, WhatsAppIcon } from "@/components/site/whatsapp"
import { Arrow } from "@/components/site/icons"

const steps = ["Prospection en Algérie et à l’international", "Téléprospection B2B", "Prise de rendez-vous", "Suivi commercial"]

// [colour key, category, title, text ('' = none), existing page, image, alt]
const cards: [string, string, string, string, string, string, string][] = [
  ["blue", "Prospection commerciale", "Prospection en Algérie et à l’international", "", "/services/prospection-b2b", "unsplash/prospection-international", "Un homme participe à une visioconférence avec plusieurs interlocuteurs sur son ordinateur portable."],
  ["blue", "Prospection commerciale", "Téléprospection B2B", "", "/services/prospection-b2b", "ai/teleprospection", "Une conseillère en téléprospection avec un casque prend un appel devant son ordinateur portable."],
  ["blue", "Prospection commerciale", "Prise de rendez-vous et suivi commercial", "", "/services/assistance-commerciale", "ai/accompagnement", "Une conseillère et un dirigeant font le point sur des documents imprimés autour d’une table."],
  ["violet", "Communication et présence digitale", "Création de site web", "", "/services/site-web", "unsplash/site-web", "Un designer dessine des maquettes d’écrans sur une tablette devant un grand moniteur."],
  ["violet", "Communication et présence digitale", "Communication et gestion des réseaux sociaux", "", "/services/community-management", "ai/reseaux-sociaux", "Une femme photographie une tasse en céramique avec son téléphone pour une publication sur les réseaux sociaux."],
  ["violet", "Communication et présence digitale", "Publicité et campagnes boostées", "", "/services/publicite-digitale", "unsplash/publicite", "Une équipe organise des notes adhésives sur un grand plan imprimé pour préparer une campagne."],
  ["violet", "Communication et présence digitale", "Image de marque et contenus visuels", "", "/services/community-management", "ai/contenus-visuels", "Une graphiste compare des épreuves imprimées de visuels sur une grande table de travail."],
  ["ink", "Digitalisation", "Site web d’entreprise, CRM et digitalisation des processus commerciaux", "", "/services", "unsplash/digitalisation", "Quatre collègues regardent ensemble un écran d’ordinateur portable autour d’une table de travail."],
  ["green", "Formation et accompagnement", "Dirigeants et équipes commerciales", "Techniques de vente, organisation, commercialisation.", "/formations", "ai/formation-vente", "Un formateur explique un entonnoir de vente dessiné au tableau devant des participants qui lèvent la main."],
]

const planRows = [
  ["prospection", "Prospection commerciale"],
  ["communication", "Communication digitale"],
  ["digitalisation", "Digitalisation"],
  ["formation", "Formation et accompagnement"],
]

const pad = (n: number) => String(n).padStart(2, "0")

function HeroIcons() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <symbol id="ipi-entreprise" viewBox="0 0 24 24"><path className="ipf" d="M4 9.5h16l-1.2-4.3a1 1 0 0 0-1-.7H6.2a1 1 0 0 0-1 .7z" /><path className="ips" d="M4 9.5h16M4.6 9.6c.2 1.5 1.3 2.4 2.6 2.4s2.3-.9 2.5-2.4c.2 1.5 1.2 2.4 2.4 2.4s2.2-.9 2.4-2.4c.2 1.5 1.2 2.4 2.5 2.4s2.4-.9 2.5-2.4M5.5 12v7.5h13V12M10 19.5v-4.2h4v4.2" /></symbol>
      <symbol id="ipi-prospection" viewBox="0 0 24 24"><path className="ips" d="M6.3 4.2 8.6 4c.5 0 .9.3 1 .7l.9 3.1c.1.4 0 .8-.3 1.1L8.9 10.1c1 2.2 2.8 4 5 5l1.2-1.3c.3-.3.7-.4 1.1-.3l3.1.9c.4.1.7.5.7 1l-.2 2.3c-.1.8-.8 1.4-1.6 1.3C11 18.5 5.5 13 5 5.8c0-.8.5-1.5 1.3-1.6z" /><circle className="ipf" cx="18" cy="5.8" r="2.3" /><path className="ips" d="M14.6 3.2c.9.3 1.7.9 2.2 1.7" /></symbol>
      <symbol id="ipi-communication" viewBox="0 0 24 24"><path className="ipf" d="M15.5 5.2v13.4L9 15.3V8.6z" opacity=".18" /><path className="ips" d="M4.5 9h4.4l6.6-3.8v13.6L8.9 15H4.5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zM7 15l1.3 4.3h2.3L9.6 15.4M18.4 9.2c.7.7 1.1 1.7 1.1 2.8s-.4 2-1.1 2.8" /><circle className="ipf" cx="20.6" cy="6.4" r="1.2" /></symbol>
      <symbol id="ipi-digitalisation" viewBox="0 0 24 24"><rect className="ips" x="3" y="4.5" width="18" height="14" rx="2" /><path className="ips" d="M3 8.3h18M6.5 15.2l3-3 2.3 2 3.7-3.8" /><circle className="ipf" cx="5.6" cy="6.4" r=".9" /><path className="ipf" d="M14.3 10.1l2.9-.6-.6 2.9z" /></symbol>
      <symbol id="ipi-formation" viewBox="0 0 24 24"><path className="ips" d="M5 4.5h10.5a1 1 0 0 1 1 1v14H6a1 1 0 0 1-1-1zM7.8 4.5v15M10.3 8.5h3.6M10.3 11h2.4m5.9-3.4 1.6 1.6" /><path className="ipf" d="m18.2 7.6 1.6 1.6-6.1 6.1-2.1.5.5-2.1z" /></symbol>
      <symbol id="ipi-clients" viewBox="0 0 24 24"><circle className="ips" cx="9" cy="8.5" r="3" /><path className="ips" d="M3.5 19c.4-3 2.6-5 5.5-5s5.1 2 5.5 5M15.6 14.2c2.4-.2 4.4 1.5 4.9 4.8" /><circle className="ipf" cx="16.8" cy="9.2" r="2.4" /></symbol>
      <symbol id="ipi-check" viewBox="0 0 24 24"><path d="m5 12.5 4.3 4.3L19 7.2" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></symbol>
    </svg>
  )
}

const Ic = ({ id, className = "ip-ic" }: { id: string; className?: string }) => (
  <svg className={className}>
    <use href={`#ipi-${id}`} />
  </svg>
)

export function HomeIntro() {
  const rootRef = useRef<HTMLDivElement>(null)

  // Scroll choreography (desktop + motion allowed only): one rAF-throttled scroll handler writing CSS
  // custom properties. Same mechanics as the approved preview.
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const mq = matchMedia("(min-width: 900px) and (prefers-reduced-motion: no-preference)")
    const noMotion = matchMedia("(prefers-reduced-motion: reduce)")
    const hero = root.querySelector<HTMLElement>(".ip-hero")!
    const rows = root.querySelector<HTMLElement>(".ip-rows")!
    const vp = rows.querySelector<HTMLElement>(".ip-rail-viewport")!
    const rail = rows.querySelector<HTMLElement>(".ip-rail")!
    const count = rows.querySelector<HTMLElement>(".ip-rows-count")!
    const n = rail.children.length
    const clamp = (v: number) => Math.min(1, Math.max(0, v))
    const prog = (el: HTMLElement) => {
      const r = el.getBoundingClientRect()
      return clamp(-r.top / (r.height - innerHeight))
    }

    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target) } }),
      { threshold: 0.3 },
    )
    root.querySelectorAll("[data-split], .ip-card2").forEach((el) => io.observe(el))
    // The hero photo is above the fold and fully clipped (IntersectionObserver can't see it): reveal on load.
    let r1 = requestAnimationFrame(() => { r1 = requestAnimationFrame(() => root.querySelector(".ip-hero-media")?.classList.add("is-in")) })

    let raf = 0
    let overflow = 0
    const measure = () => { overflow = Math.max(0, rail.scrollWidth - vp.clientWidth) }
    const frame = () => {
      raf = 0
      const s = root.style
      const ph = clamp(scrollY / (hero.offsetHeight || 1))
      s.setProperty("--hero-y", `${-70 * ph}px`)
      s.setProperty("--hero-scale", String(1 - 0.05 * ph * ph))
      s.setProperty("--hero-alpha", String(1 - 0.7 * Math.pow(ph, 1.6)))
      const pr = prog(rows)
      s.setProperty("--rows-x", `${-overflow * pr}px`)
      s.setProperty("--rows-p", String(pr))
      count.textContent = `${pad(Math.min(n, 1 + Math.round(pr * (n - 1))))} / ${pad(n)}`
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(frame) }
    const onResize = () => { measure(); onScroll() }
    // Keyboard: focusing an off-screen card scrolls the page to where it is visible.
    const onFocus = (e: FocusEvent) => {
      const li = (e.target as HTMLElement).closest<HTMLElement>(".ip-card2")
      if (!li || !root.classList.contains("ip-motion")) return
      const p = clamp((li.offsetLeft - 24) / (overflow || 1))
      const top = rows.getBoundingClientRect().top + scrollY + p * (rows.offsetHeight - innerHeight)
      scrollTo({ top, behavior: noMotion.matches ? "auto" : "smooth" })
    }
    // Prev/next buttons (touch / no-pin mode): scroll the rail by one card.
    const onBtn = (e: MouseEvent) => {
      const b = (e.target as HTMLElement).closest<HTMLElement>(".ip-rail-btn")
      if (!b) return
      const step = rail.children[0].getBoundingClientRect().width + 16
      vp.scrollBy({ left: step * Number(b.dataset.dir), behavior: noMotion.matches ? "auto" : "smooth" })
    }
    const setMode = () => {
      root.classList.toggle("ip-motion", mq.matches)
      if (mq.matches) { measure(); addEventListener("scroll", onScroll, { passive: true }); frame() }
      else {
        removeEventListener("scroll", onScroll)
        ;["--hero-y", "--hero-scale", "--hero-alpha", "--rows-x", "--rows-p"].forEach((p) => root.style.removeProperty(p))
      }
    }
    setMode()
    mq.addEventListener("change", setMode)
    addEventListener("resize", onResize)
    rail.addEventListener("focusin", onFocus)
    rows.addEventListener("click", onBtn)
    return () => {
      removeEventListener("scroll", onScroll)
      removeEventListener("resize", onResize)
      mq.removeEventListener("change", setMode)
      io.disconnect()
      cancelAnimationFrame(r1)
      if (raf) cancelAnimationFrame(raf)
      rail.removeEventListener("focusin", onFocus)
      rows.removeEventListener("click", onBtn)
    }
  }, [])

  return (
    <div data-incubia-preview ref={rootRef}>
      <section className="ip-hero" aria-labelledby="ip-hero-title">
        <div className="ip-container ip-hero-grid">
          <div className="ip-hero-copy">
            <span className="ip-pill">Prospection commerciale B2B</span>
            <h1 id="ip-hero-title" className="ip-h1">
              De nouveaux clients{" "}
              <span className="ip-grad">
                en Algérie{" "}
                <span className="ip-u">
                  et à l’international
                  <svg viewBox="0 0 400 20" preserveAspectRatio="none" aria-hidden="true"><path d="M3 14c70-8 160-11 250-8 50 2 98 5 144 9" /></svg>
                </span>
              </span>
            </h1>
            <p className="ip-lead">Incubia vous accompagne pour acquérir de nouveaux clients en Algérie ou à l’international.</p>
            <ul className="ip-chips" aria-label="Prospection commerciale">
              {steps.map((s) => <li key={s}>{s}</li>)}
            </ul>
            <div className="ip-ctas">
              <Link className="ip-btn ip-btn--primary" href="/contact">Demander un diagnostic gratuit<Arrow /></Link>
              <a className="ip-btn ip-btn--outline ip-btn--wa" href={WA_HREF} target="_blank" rel="noopener"><WhatsAppIcon />Nous écrire sur WhatsApp</a>
            </div>
          </div>
          <div className="ip-stage">
            <figure className="ip-hero-media">
              <Image
                src="/images/ai/hero-teleprospecteur.webp"
                width={1536}
                height={1024}
                priority
                sizes="(min-width: 1024px) 560px, calc(100vw - 48px)"
                alt="Un téléprospecteur équipé d’un casque suit un appel devant son écran d’ordinateur."
              />
            </figure>
            <HeroIcons />
            <div className="ip-win" aria-hidden="true">
              <div className="ip-win-bar"><i /><i /><i /><span>Plan de développement</span></div>
              <div className="ip-win-co"><Ic id="entreprise" /><div><b>Votre entreprise</b><small>4 leviers activés avec Incubia</small></div></div>
              <ul className="ip-win-rows">
                {planRows.map(([id, label]) => (
                  <li key={id}>
                    <Ic id={id} />
                    <span className="n">{label}</span>
                    <span className="st">
                      <span className="a">En préparation…</span>
                      <span className="b"><svg width="13" height="13"><use href="#ipi-check" /></svg>Lancé</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <svg className="ip-link" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M72 52 C 80 52, 82 46, 84 42" vectorEffect="non-scaling-stroke" /></svg>
            <div className="ip-out" aria-hidden="true"><Ic id="clients" /><div><b>Nouveaux clients</b><small>en Algérie et à l’international</small></div></div>
          </div>
        </div>
      </section>

      {/* Horizontal service rail driven by vertical scroll (desktop); swipe + buttons on touch. */}
      <section className="ip-rows" aria-labelledby="ip-rows-title">
        <div className="ip-pin">
          <div className="ip-container ip-rows-head">
            <h2 id="ip-rows-title" className="ip-rows-title is-split" data-split aria-label="Nos services">
              <span className="ipw" aria-hidden="true"><span style={{ ["--d" as string]: "0ms" }}>Nos</span></span>{" "}
              <span className="ipw" aria-hidden="true"><span style={{ ["--d" as string]: "38ms" }}>services</span></span>
            </h2>
            <div className="ip-rows-meter" aria-hidden="true">
              <span className="ip-rows-count">01 / {pad(cards.length)}</span>
              <span className="ip-rows-track"><span /></span>
            </div>
          </div>
          <div className="ip-rail-viewport" role="region" aria-label="Services Incubia" tabIndex={0}>
            <ol className="ip-rail">
              {cards.map((c, i) => (
                <li key={c[2]} className={`ip-card2 ip-${c[0]} has-img`} style={{ ["--i" as string]: i }}>
                  <Link href={c[4]}>
                    <span className="ip-card2-media">
                      <Image src={`/images/${c[5]}.webp`} width={1200} height={900} sizes="(min-width: 900px) 340px, 80vw" alt={c[6]} />
                    </span>
                    <span className="ip-card2-top">
                      <span className="ip-card2-n">{pad(i + 1)}</span>
                      <span className="ip-card2-cat">{c[1]}</span>
                    </span>
                    <span className="ip-card2-title">{c[2]}</span>
                    {c[3] ? <span className="ip-card2-text">{c[3]}</span> : null}
                    <span className="ip-card2-link">Découvrir <Arrow /></span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
          <div className="ip-rail-nav ip-container">
            <button type="button" className="ip-rail-btn" data-dir="-1" aria-label="Service précédent"><Arrow /></button>
            <button type="button" className="ip-rail-btn" data-dir="1" aria-label="Service suivant"><Arrow /></button>
          </div>
        </div>
      </section>
    </div>
  )
}
