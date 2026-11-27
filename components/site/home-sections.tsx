// Homepage sections ported from the approved preview (preview/additions.js, 20/11/2026).
// "Pôles": owner's category taglines + service list. "Méthode" and "Pourquoi": the live homepage's own text.
import Link from "next/link"
import { Arrow } from "@/components/site/icons"

function NorthEast() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

type Pole = { tone: "dark" | "light"; title: string; sub: string; links: [string, string][]; cta: [string, string] }
const poles: Pole[] = [
  {
    tone: "dark", title: "Prospection commerciale", sub: "Développez votre portefeuille client.",
    links: [["Prospection en Algérie et à l’international", "/services/prospection-b2b"], ["Téléprospection B2B", "/services/prospection-b2b"], ["Prise de rendez-vous et suivi commercial", "/services/assistance-commerciale"]],
    cta: ["Découvrir la prospection", "/services/prospection-b2b"],
  },
  {
    tone: "light", title: "Communication digitale", sub: "Renforcez votre présence en ligne.",
    links: [["Création de site web", "/services/site-web"], ["Communication et gestion des réseaux sociaux", "/services/community-management"], ["Publicité et campagnes boostées", "/services/publicite-digitale"], ["Image de marque et contenus visuels", "/services/community-management"]],
    cta: ["Voir nos services digitaux", "/services"],
  },
  {
    tone: "light", title: "Digitalisation", sub: "Simplifiez et optimisez vos process.",
    links: [["Site web d’entreprise", "/services/site-web"], ["CRM et processus commerciaux", "/services"]],
    cta: ["Tous les services", "/services"],
  },
  {
    tone: "light", title: "Formation et accompagnement", sub: "Montez en compétences et accélérez votre croissance.",
    links: [["Dirigeants et équipes commerciales", "/formations"], ["Techniques de vente, organisation, commercialisation", "/formations"], ["Programme d’Accélération", "/acceleration-entreprises"]],
    cta: ["Voir les formations", "/formations"],
  },
]

export function HomePoles() {
  return (
    <section className="ip-poles" aria-labelledby="ip-poles-title">
      <div className="ip-container">
        <div className="ip-split-head">
          <h2 id="ip-poles-title" className="ip-big">Nos pôles d’expertise</h2>
          <p>Prospection, communication digitale, digitalisation, formation et accompagnement.</p>
        </div>
        <div className="ip-poles-grid">
          {poles.map((p) => (
            <article key={p.title} className={`ip-pole ip-pole--${p.tone}`}>
              <h3>{p.title}</h3>
              <p className="ip-pole-sub">{p.sub}</p>
              <ul>
                {p.links.map(([label, href]) => (
                  <li key={label}><Link href={href}><span>{label}</span><NorthEast /></Link></li>
                ))}
              </ul>
              <Link className="ip-pole-cta" href={p.cta[1]}>{p.cta[0]}<Arrow /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// Text of the live "Comment On Travaille" section.
const method: [string, string][] = [
  ["Diagnostic Gratuit", "Échangez 1h avec nos experts pour identifier vos blocages commerciaux et digitaux."],
  ["Stratégie Sur-Mesure", "Nous élaborons un plan d'action adapté à votre secteur, votre budget et vos objectifs."],
  ["Exécution Accompagnée", "Notre équipe met en place les outils, lance les campagnes et forme vos équipes."],
  ["Résultats Mesurables", "Suivi des KPIs, optimisation continue et reporting mensuel de vos performances."],
]

export function HomeMethod() {
  return (
    <section className="ip-method" aria-labelledby="ip-method-title">
      <div className="ip-container ip-method-grid">
        <div className="ip-method-head">
          <h2 id="ip-method-title" className="ip-big">Comment on travaille ensemble</h2>
          <Link className="ip-btn ip-btn--primary" href="/contact">Demander un diagnostic gratuit<Arrow /></Link>
        </div>
        <ol className="ip-steps2">
          {method.map(([t, d], i) => (
            <li key={t}>
              <span className="ip-steps2-n" aria-hidden="true">{i + 1}</span>
              <div><h3>{t}</h3><p>{d}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

// Text of the live "Pourquoi Choisir Incubia" section.
const why: [string, string][] = [
  ["Expertise Locale", "Nous connaissons le marché algérien, ses réglementations et ses opportunités B2B."],
  ["Équipe B2B Expérimentée", "Des consultants qui ont vendu, closé et structuré des entreprises en Algérie."],
  ["Services Complètes", "Prospection, digitalisation, publicité, community management : tout sous un même toit."],
  ["Résultats Mesurables", "KPIs clairs, reporting mensuel et optimisation continue de vos performances."],
]

export function HomeWhy() {
  return (
    <section className="ip-why" aria-labelledby="ip-why-title">
      <div className="ip-container">
        <h2 id="ip-why-title" className="ip-big">Pourquoi choisir Incubia ?</h2>
        <ul className="ip-why-rows">
          {why.map(([t, d], i) => (
            <li key={t}>
              <span className="ip-why-n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
