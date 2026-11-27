// À propos, layout from the owner's inspiration (approved preview, preview/pages.js, 20/11/2026).
// All text comes from the live page. Replaces the live intro, mission, figures, values and story sections.
import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { Arrow } from "@/components/site/icons"

const Icon = ({ children }: { children: ReactNode }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
)
const target = <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.2" /></>
const megaphone = <><path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1Z" /><path d="M15 8a5 5 0 0 1 0 8" /><path d="M18 5a9 9 0 0 1 0 14" /></>
const laptop = <><rect x="4" y="5" width="16" height="11" rx="1.5" /><path d="M2 19h20" /></>

const lead =
  "Incubia est un partenaire terrain B2B pour les entreprises algériennes qui veulent sortir du flou commercial et remettre de la méthode dans leur développement. Visibilité, prospection, organisation : nous intervenons sur les vrais leviers de croissance."

const services: { title: string; text: string; href: string; icon: ReactNode }[] = [
  { title: "Prospection B2B", href: "/services/prospection-b2b", icon: target, text: "Nous structurons votre effort commercial avec des cibles qualifiées, des séquences de relance et un suivi CRM pour convertir plus de leads en clients." },
  { title: "Site Web", href: "/services/site-web", icon: laptop, text: "Des sites modernes, rapides et orientés conversion. Chaque page est pensée pour transformer vos visiteurs en prospects qualifiés." },
  { title: "Publicité Digitale", href: "/services/publicite-digitale", icon: megaphone, text: "Campagnes Meta Ads et Google Ads pilotées par la data. On optimise en continu pour maximiser votre retour sur investissement publicitaire." },
  { title: "Community Management", href: "/services/community-management", icon: <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />, text: "Une présence sociale cohérente et engageante. Contenus, calendrier éditorial et interaction avec votre communauté pour renforcer votre crédibilité." },
  { title: "Produit Digital", href: "/services", icon: <><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M11 18h2" /></>, text: "Conception et développement de vos outils digitaux : SaaS, applications et plateformes adaptés aux réalités du marché algérien." },
  { title: "Accompagnement PME", href: "/acceleration-entreprises", icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9" /><path d="M16 3.1a4 4 0 0 1 0 7.8" /></>, text: "Un partenaire terrain pour diagnostiquer, prioriser et exécuter. Nous travaillons avec vos équipes pour ancrer des méthodes qui durent." },
]

const missionParas = [
  "Nous aidons les PME algériennes à passer d'une présence commerciale dispersée à une stratégie claire, structurée et mesurable.",
  "Notre rôle n'est pas d'empiler des prestations. Nous intervenons sur les leviers qui transforment réellement la performance commerciale d'une entreprise.",
]
const pillars: [string, string][] = [
  ["Acquisition client", "Prospection B2B, relance et structuration de l'effort commercial."],
  ["Présence digitale", "Site web, contenus et campagnes pour rendre l'offre plus visible et crédible."],
  ["Organisation commerciale", "Priorités, process et outils simples pour mieux convertir et mieux suivre."],
]
const steps: [string, string][] = [
  ["Accompagnement entrepreneurial", "Incubia a commencé en accompagnant des porteurs de projet et des structures en construction."],
  ["Virage digital et commercial", "Le terrain a confirmé un besoin plus fort autour de la visibilité, de la prospection et de l'exécution commerciale."],
  ["Partenaire B2B pour PME", "Incubia se concentre sur les entreprises algériennes déjà actives qui veulent mieux se structurer et mieux convertir."],
]
const valueIcons: ReactNode[] = [
  <path key="0" d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9Z" />,
  <><path d="M12 21s-7-4.4-7-11a7 7 0 0 1 14 0c0 6.6-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></>,
  <><path d="M8 12h8" /><path d="M3 12a5 5 0 0 1 5-5h2" /><path d="M21 12a5 5 0 0 1-5 5h-2" /><path d="M14 7h2a5 5 0 0 1 2 .4" /><path d="M10 17H8a5 5 0 0 1-2-.4" /></>,
  <><path d="M3 3v18h18" /><path d="m7 15 4-4 3 3 5-6" /></>,
]
const values: [string, string][] = [
  ["Excellence opérationnelle", "Chaque action doit être exécutable, utile et reliée à un objectif commercial clair."],
  ["Engagement terrain", "Nous travaillons au plus près des réalités algériennes, pas sur des modèles hors-sol."],
  ["Partenariat long terme", "Nous cherchons à devenir un relais fiable pour les dirigeants et leurs équipes."],
  ["Performance mesurable", "Visibilité, relance, conversion, suivi : nos recommandations doivent produire des effets concrets."],
]

const Eyebrow = ({ children, center }: { children: ReactNode; center?: boolean }) => (
  <p className={`ipa-eyebrow${center ? " ipa-center" : ""}`}><span>//</span> {children}</p>
)

export function AboutRedesign() {
  return (
    <div className="ipa">
      <section className="ipa-hero" aria-labelledby="ipa-h1">
        <div className="ipa-wrap ipa-hero-grid">
          <div className="ipa-hero-copy">
            <Eyebrow>Qui sommes-nous</Eyebrow>
            <h1 id="ipa-h1">À propos d’<span>Incubia</span></h1>
            <p className="ipa-lead">{lead}</p>
            <div className="ipa-ctas">
              <Link className="ipa-btn" href="/contact">Demander un diagnostic gratuit <Arrow /></Link>
              <Link className="ipa-link" href="/services">Voir tous les services</Link>
            </div>
          </div>
          <figure className="ipa-hero-media">
            <Image src="/images/ai/accompagnement.webp" width={1536} height={1024} priority sizes="(min-width: 1024px) 600px, calc(100vw - 48px)"
              alt="Une conseillère et un dirigeant étudient ensemble des documents autour d’une table de travail." />
          </figure>
        </div>
      </section>
      <section className="ipa-mission" aria-labelledby="ipa-mission-t">
        <div className="ipa-wrap ipa-mission-grid">
          <div className="ipa-collage" aria-hidden="true">
            <Image className="c1" src="/images/ai/formation-atelier.webp" alt="" width={768} height={512} sizes="(min-width: 1024px) 320px, 55vw" />
            <Image className="c2" src="/images/ai/teleprospection.webp" alt="" width={768} height={512} sizes="(min-width: 1024px) 240px, 45vw" />
            <Image className="c3" src="/images/ai/contenus-visuels.webp" alt="" width={768} height={512} sizes="(min-width: 1024px) 320px, 55vw" />
            <Image className="c4" src="/images/ai/reseaux-sociaux.webp" alt="" width={768} height={512} sizes="(min-width: 1024px) 240px, 45vw" />
          </div>
          <div>
            <Eyebrow>Positionnement</Eyebrow>
            <h2 id="ipa-mission-t" className="ipa-h2">Notre <span>mission</span></h2>
            {missionParas.map((p) => <p key={p} className="ipa-p">{p}</p>)}
            <ul className="ipa-pillars">
              {pillars.map(([t, d]) => <li key={t}><strong>{t}</strong><span>{d}</span></li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="ipa-services" aria-labelledby="ipa-serv-t">
        <div className="ipa-wrap">
          <div className="ipa-head-row">
            <div>
              <Eyebrow>Nos services</Eyebrow>
              <h2 id="ipa-serv-t" className="ipa-h2">Ce que nous faisons <span>pour votre entreprise</span></h2>
            </div>
            <Link className="ipa-btn" href="/services">Tous les services <Arrow /></Link>
          </div>
          <ul className="ipa-cards">
            {services.map((s) => (
              <li key={s.title}>
                <Link href={s.href}>
                  <span className="ipa-ico"><Icon>{s.icon}</Icon></span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className="ipa-more">En savoir plus <Arrow /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="ipa-story" aria-labelledby="ipa-story-t">
        <div className="ipa-wrap">
          <Eyebrow center>Notre histoire</Eyebrow>
          <h2 id="ipa-story-t" className="ipa-h2 ipa-center">Notre <span>parcours</span></h2>
          <ol className="ipa-steps">
            {steps.map(([t, d], i) => (
              <li key={t}>
                <span className="ipa-step-n"><b>{String(i + 1).padStart(2, "0")}</b></span>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="ipa-values" aria-labelledby="ipa-val-t">
        <div className="ipa-wrap">
          <Eyebrow>Ce qui nous guide</Eyebrow>
          <h2 id="ipa-val-t" className="ipa-h2">Nos <span>valeurs</span></h2>
          <ul className="ipa-vals">
            {values.map(([t, d], i) => (
              <li key={t}>
                <span className="ipa-ico ipa-ico--soft"><Icon>{valueIcons[i]}</Icon></span>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
