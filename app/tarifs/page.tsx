// Rebuilt from the live page /tarifs (server-rendered HTML snapshot, 26/11/2026) by scripts/rebuild-from-live.mjs.
import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { BudgetCalculator } from "@/components/site/budget-calculator"
import { PricingCard } from "@/components/site/pricing-card"
import { Target } from "lucide-react"

export const metadata: Metadata = {
  "title": {
    "absolute": "Tarifs & Packs | Incubia Algérie"
  },
  "description": "Découvrez nos packs et tarifs : diagnostic gratuit, site web, assistance commerciale, publicité digitale, community management et accélération entreprise. Estimez votre budget en ligne."
}

export default function TarifsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#F9FAF9_0%,#FFFFFF_58%,#EFF3FC_100%)] pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch">
            <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#0D1F1A_0%,#12233F_56%,#0825A3_100%)] p-6 sm:p-8 lg:p-12 flex flex-col justify-center min-h-[430px] sm:min-h-[480px]">
              <div className="absolute inset-x-0 top-0 h-px bg-white/25"></div>
              <div className="absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08))]"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white text-sm font-semibold mb-8"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4 text-[#CA9BFA]">
  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
  <path d="M20 3v4"></path>
  <path d="M22 5h-4"></path>
  <path d="M4 17v2"></path>
  <path d="M5 18H3"></path>
</svg>{"Packs & tarifs"}</div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-[1.02] mb-6 max-w-xl">Boostez votre visibilité et vos ventes en ligne.</h1>
                <p className="text-lg text-white/70 max-w-lg mb-10">Incubia accompagne les entreprises algériennes avec des offres simples : présence digitale, sites web, publicité sponsorisée, contenu et accélération commerciale.</p>
                <div className="flex flex-wrap gap-4">
                  <a className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white text-[#0D1F1A] font-bold text-sm hover:-translate-y-0.5 transition-transform shadow-xl" href="#packs">Voir les packs</a>
                  <a className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm hover:bg-white/15 transition-colors" href="#calculateur">Calculer mon budget marketing</a>
                </div>
              </div>
            </div>
            <aside className="grid gap-4">
              <div className="bg-white/90 border border-[#E7EBE9] rounded-3xl p-6 sm:p-7 shadow-[0_18px_50px_rgba(13,31,26,0.08)]">
                <h3 className="text-xl font-bold text-[#0D1F1A] mb-2">Positionnement</h3>
                <p className="text-sm text-[#47534E] leading-relaxed mb-5">Une offre plus sérieuse qu'un freelance low-cost, mais plus accessible qu'une agence corporate. Le prix dépend du volume de contenu, des plateformes et du budget publicitaire.</p>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  <div className="rounded-2xl border border-[#E7EBE9] bg-[#F9FAF9] p-3.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-megaphone w-4 h-4 text-[#1B1AFE] mb-1.5">
                      <path d="m3 11 18-5v12L3 14v-3z"></path>
                      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
                    </svg>
                    <div className="text-sm font-bold text-[#0D1F1A]">Meta</div>
                    <div className="text-xs text-[#47534E]">Facebook + Instagram</div>
                  </div>
                  <div className="rounded-2xl border border-[#E7EBE9] bg-[#F9FAF9] p-3.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music2 w-4 h-4 text-[#1B1AFE] mb-1.5">
                      <circle cx="8" cy="18" r="4"></circle>
                      <path d="M12 18V2l7 4"></path>
                    </svg>
                    <div className="text-sm font-bold text-[#0D1F1A]">TikTok</div>
                    <div className="text-xs text-[#47534E]">Visibilité rapide</div>
                  </div>
                  <div className="rounded-2xl border border-[#E7EBE9] bg-[#F9FAF9] p-3.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-column w-4 h-4 text-[#1B1AFE] mb-1.5">
                      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                      <path d="M18 17V9"></path>
                      <path d="M13 17V5"></path>
                      <path d="M8 17v-3"></path>
                    </svg>
                    <div className="text-sm font-bold text-[#0D1F1A]">Ads</div>
                    <div className="text-xs text-[#47534E]">Suivi mensuel</div>
                  </div>
                  <div className="rounded-2xl border border-[#E7EBE9] bg-[#F9FAF9] p-3.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-4 h-4 text-[#1B1AFE] mb-1.5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                    <div className="text-sm font-bold text-[#0D1F1A]">ROI</div>
                    <div className="text-xs text-[#47534E]">Objectifs clairs</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/90 border border-[#E7EBE9] rounded-3xl p-6 sm:p-7 shadow-[0_18px_50px_rgba(13,31,26,0.08)]">
                <h3 className="text-xl font-bold text-[#0D1F1A] mb-2">Comment lire nos prix</h3>
                <p className="text-sm text-[#47534E] leading-relaxed">Les prix affichés sont des points de départ. Utilisez le calculateur pour estimer un budget plus précis avant de demander votre devis final.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section id="packs" className="ip-tarifs py-20 bg-white scroll-mt-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-[#1B1AFE] text-xs font-bold uppercase tracking-[0.14em] mb-3">Nos packs</div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#0D1F1A] mb-4">Des offres claires pour développer votre activité.</h2>
            <p className="text-lg text-[#47534E]">Les packs peuvent être adaptés selon votre secteur, vos objectifs et votre budget.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <article className="relative flex flex-col rounded-3xl border-2 p-6 sm:p-7 transition-all hover:shadow-xl bg-white border-[#E7EBE9] hover:border-[#1B1AFE]/40">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] flex items-center justify-center mb-5 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-6 h-6 text-white">
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                  <path d="M20 3v4"></path>
                  <path d="M22 5h-4"></path>
                  <path d="M4 17v2"></path>
                  <path d="M5 18H3"></path>
                </svg>
              </div>
              <div className="inline-flex w-max px-3 py-1 rounded-full text-xs font-bold mb-4 bg-[#EFF3FC] text-[#1B1AFE]">Entrée gratuite</div>
              <h3 className="text-2xl font-bold mb-2 text-[#0D1F1A]">Diagnostic Gratuit</h3>
              <p className="text-sm mb-6 min-h-[44px] text-[#47534E]">Pour comprendre rapidement ce qui bloque votre visibilité ou votre acquisition client.</p>
              <div className="mb-5">
                <div className="text-xs font-bold mb-1 text-[#47534E]">Prix</div>
                <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1">
                  <span className="text-3xl font-bold text-[#0D1F1A]">Gratuit</span>
                </div>
              </div>
              <ul className="space-y-2.5 mb-7">
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#1B1AFE]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-[#344054]">Analyse rapide de votre présence digitale</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#1B1AFE]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-[#344054]">Identification des points faibles</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#1B1AFE]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-[#344054]">Recommandations simples</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#1B1AFE]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-[#344054]">Plan d'action priorisé</span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-white hover:bg-[#97D2C7] hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 w-full rounded-2xl bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF]" href="/contact">Demander mon diagnostic</Link>
                <p className="mt-3 text-center text-xs font-medium text-[#8A96A8]">Sans engagement</p>
              </div>
            </article>
            <article className="relative flex flex-col rounded-3xl border-2 p-6 sm:p-7 transition-all hover:shadow-xl bg-white border-[#E7EBE9] hover:border-[#1B1AFE]/40">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] flex items-center justify-center mb-5 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-6 h-6 text-white">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <div className="inline-flex w-max px-3 py-1 rounded-full text-xs font-bold mb-4 bg-[#EFF3FC] text-[#1B1AFE]">Web</div>
              <h3 className="text-2xl font-bold mb-2 text-[#0D1F1A]">Site Web Professionnel</h3>
              <p className="text-sm mb-6 min-h-[44px] text-[#47534E]">Pour présenter votre entreprise avec un site moderne, clair et crédible.</p>
              <div className="mb-5">
                <div className="text-xs font-bold mb-1 text-[#47534E]">À partir de</div>
                <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1">
                  <span className="text-3xl font-bold text-[#0D1F1A]">89 000 DA</span>
                </div>
              </div>
              <ul className="space-y-2.5 mb-7">
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#1B1AFE]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-[#344054]">Site vitrine responsive</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#1B1AFE]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-[#344054]">Design professionnel</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#1B1AFE]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-[#344054]">5 pages principales</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#1B1AFE]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-[#344054]">Formulaire + WhatsApp</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#1B1AFE]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-[#344054]">SEO de base</span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-white hover:bg-[#97D2C7] hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 w-full rounded-2xl bg-gradient-to-r from-[#CA9BFA] to-[#E9D5FF]" href="/services/site-web">Créer mon site web</Link>
                <p className="mt-3 text-center text-xs font-medium text-[#8A96A8]">Landing page à partir de 45 000 DA</p>
              </div>
            </article>
            <article className="relative flex flex-col rounded-3xl border-2 p-6 sm:p-7 transition-all hover:shadow-xl bg-white border-[#E7EBE9] hover:border-[#1B1AFE]/40">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center mb-5 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-6 h-6 text-white">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
              <div className="inline-flex w-max px-3 py-1 rounded-full text-xs font-bold mb-4 bg-[#EFF3FC] text-[#1B1AFE]">Commercial</div>
              <h3 className="text-2xl font-bold mb-2 text-[#0D1F1A]">Assistance Commerciale</h3>
              <p className="text-sm mb-6 min-h-[44px] text-[#47534E]">Pour mieux structurer votre discours, vos offres et votre suivi commercial.</p>
              <div className="mb-5">
                <div className="text-xs font-bold mb-1 text-[#47534E]">À partir de</div>
                <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1">
                  <span className="text-3xl font-bold text-[#0D1F1A]">49 000 DA</span>
                  <span className="text-sm font-semibold text-[#47534E]">/ mission</span>
                </div>
              </div>
              <ul className="space-y-2.5 mb-7">
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#1B1AFE]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-[#344054]">Clarification de l'offre</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#1B1AFE]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-[#344054]">Script commercial</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#1B1AFE]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-[#344054]">Argumentaire simple</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#1B1AFE]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-[#344054]">Conseils de suivi client</span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-white hover:bg-[#97D2C7] hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 w-full rounded-2xl bg-gradient-to-r from-[#059669] to-[#10B981]" href="/services/assistance-commerciale">Structurer ma vente</Link>
                <p className="mt-3 text-center text-xs font-medium text-[#8A96A8]">Idéal PME et services</p>
              </div>
            </article>
            <PricingCard
              icon={<Target className="w-6 h-6 text-white" />}
              iconClass="from-[#1B1AFE] to-[#4B4AFF]"
              badge="Prospection"
              title="Prospection Commerciale B2B"
              text="Développez votre portefeuille clients en Algérie et à l’international grâce à un accompagnement commercial structuré."
              label="À partir de"
              price="120 000 DA"
              unit="/ mois"
              items={[
                "Prospection commerciale en Algérie et à l’international",
                "Téléprospection B2B",
                "Objectif de 600 entreprises contactées par mois",
                "Prise de rendez-vous pour vos commerciaux",
                "Suivi via notre plateforme CRM",
                "Briefings, visioconférences et suivi des actions",
                "Horaires B2B : du dimanche au jeudi, de 9 h à 17 h",
              ]}
              cta="Développer mon portefeuille clients"
              href="/services/commercial/prospection-b2b"
              ctaClass="from-[#1B1AFE] to-[#4B4AFF]"
            />
          </div>
          <section className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#0D1F1A_0%,#12233F_52%,#0825A3_100%)] text-white p-6 sm:p-8 lg:p-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-center mb-6">
            <div className="absolute inset-x-0 top-0 h-px bg-white/25"></div>
            <div className="absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08))]"></div>
            <div className="relative z-10">
              <div className="inline-flex w-max px-3 py-1 rounded-full bg-[#EA580C]/15 border border-[#EA580C]/30 text-[#FFB37C] text-xs font-bold mb-5">Pack recommandé</div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 max-w-md">{"Présence Digitale & Boost Marketing"}</h3>
              <p className="text-white/70 mb-7 max-w-md">Une offre complète pour améliorer votre image, créer du contenu, lancer des campagnes sponsorisées sur Facebook, Instagram et TikTok, puis suivre les résultats chaque mois.</p>
              <div className="flex flex-wrap gap-3">
                <a className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#0D1F1A] font-bold text-sm hover:-translate-y-0.5 transition-transform" href="#calculateur">Calculer mon budget</a>
                <Link className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm hover:bg-white/15 transition-colors" href="/contact">Demander un devis</Link>
              </div>
            </div>
            <div className="relative z-10 bg-white/10 border border-white/15 rounded-3xl p-5 sm:p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket w-4 h-4 text-[#FFB37C]">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg>
                <div className="text-xs font-bold uppercase tracking-wider text-white/70">Frais de gestion Incubia</div>
              </div>
              <div className="text-2xl lg:text-3xl font-bold mb-1">À partir de 55 000 DA</div>
              <div className="text-sm text-white/60 mb-5">/ mois. Hors budget publicitaire. Budget média défini selon vos objectifs.</div>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5 text-sm text-white/80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#FFB37C]">
  <circle cx="12" cy="12" r="10"></circle>
  <path d="m9 12 2 2 4-4"></path>
</svg>Gestion des campagnes sponsorisées</li>
                <li className="flex items-start gap-2.5 text-sm text-white/80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#FFB37C]">
  <circle cx="12" cy="12" r="10"></circle>
  <path d="m9 12 2 2 4-4"></path>
</svg>Création de visuels simples</li>
                <li className="flex items-start gap-2.5 text-sm text-white/80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#FFB37C]">
  <circle cx="12" cy="12" r="10"></circle>
  <path d="m9 12 2 2 4-4"></path>
</svg>Objectif visibilité ou ventes en ligne</li>
                <li className="flex items-start gap-2.5 text-sm text-white/80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#FFB37C]">
  <circle cx="12" cy="12" r="10"></circle>
  <path d="m9 12 2 2 4-4"></path>
</svg>Reporting clair chaque mois</li>
                <li className="flex items-start gap-2.5 text-sm text-white/80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#FFB37C]">
  <circle cx="12" cy="12" r="10"></circle>
  <path d="m9 12 2 2 4-4"></path>
</svg>Estimation avancée via calculateur</li>
              </ul>
            </div>
          </section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="relative flex flex-col rounded-3xl border-2 p-6 sm:p-7 transition-all hover:shadow-xl bg-white border-[#E7EBE9] hover:border-[#1B1AFE]/40">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] flex items-center justify-center mb-5 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-6 h-6 text-white">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="inline-flex w-max px-3 py-1 rounded-full text-xs font-bold mb-4 bg-[#EFF3FC] text-[#1B1AFE]">Social media</div>
              <h3 className="text-2xl font-bold mb-2 text-[#0D1F1A]">Community Management</h3>
              <p className="text-sm mb-6 min-h-[44px] text-[#47534E]">Pour communiquer régulièrement avec une image plus professionnelle.</p>
              <div className="mb-5">
                <div className="text-xs font-bold mb-1 text-[#47534E]">Prix</div>
                <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1">
                  <span className="text-3xl font-bold text-[#0D1F1A]">35 000 DA</span>
                  <span className="text-sm font-semibold text-[#47534E]">/ mois</span>
                </div>
              </div>
              <ul className="space-y-2.5 mb-7">
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#1B1AFE]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-[#344054]">Calendrier éditorial simple</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#1B1AFE]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-[#344054]">8 publications</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#1B1AFE]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-[#344054]">4 stories</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#1B1AFE]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-[#344054]">Design visuel cohérent</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#1B1AFE]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-[#344054]">Rapport mensuel</span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-white hover:bg-[#97D2C7] hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 w-full rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6]" href="/services/community-management">Améliorer mes réseaux</Link>
                <p className="mt-3 text-center text-xs font-medium text-[#8A96A8]">Shooting sur devis</p>
              </div>
            </article>
            <article className="relative flex flex-col rounded-3xl border-2 p-6 sm:p-7 transition-all hover:shadow-xl bg-white border-[#E7EBE9] hover:border-[#1B1AFE]/40">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] flex items-center justify-center mb-5 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 w-6 h-6 text-white">
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                  <path d="M10 6h4"></path>
                  <path d="M10 10h4"></path>
                  <path d="M10 14h4"></path>
                  <path d="M10 18h4"></path>
                </svg>
              </div>
              <div className="inline-flex w-max px-3 py-1 rounded-full text-xs font-bold mb-4 bg-[#EFF3FC] text-[#1B1AFE]">PME</div>
              <h3 className="text-2xl font-bold mb-2 text-[#0D1F1A]">Accélération Entreprise</h3>
              <p className="text-sm mb-6 min-h-[44px] text-[#47534E]">Pour structurer votre activité, votre visibilité et vos actions de croissance.</p>
              <div className="mb-5">
                <div className="text-xs font-bold mb-1 text-[#47534E]">À partir de</div>
                <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1">
                  <span className="text-3xl font-bold text-[#0D1F1A]">95 000 DA</span>
                  <span className="text-sm font-semibold text-[#47534E]">/ mission</span>
                </div>
              </div>
              <ul className="space-y-2.5 mb-7">
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#1B1AFE]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-[#344054]">Diagnostic business</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#1B1AFE]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-[#344054]">Priorités commerciales</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#1B1AFE]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-[#344054]">Plan de croissance</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#1B1AFE]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-[#344054]">Suivi stratégique</span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-white hover:bg-[#97D2C7] hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 w-full rounded-2xl bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF]" href="/acceleration-entreprises">Accélérer mon activité</Link>
                <p className="mt-3 text-center text-xs font-medium text-[#8A96A8]">Sur devis selon objectifs</p>
              </div>
            </article>
            <article className="relative flex flex-col rounded-3xl border-2 p-6 sm:p-7 transition-all hover:shadow-xl bg-[linear-gradient(135deg,#0D1F1A,#0825A3)] border-transparent text-white">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0D1F1A] to-[#1B1AFE] flex items-center justify-center mb-5 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers w-6 h-6 text-white">
                  <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
                  <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
                  <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
                </svg>
              </div>
              <div className="inline-flex w-max px-3 py-1 rounded-full text-xs font-bold mb-4 bg-white/15 text-white">Complet</div>
              <h3 className="text-2xl font-bold mb-2 text-white">Croissance 360</h3>
              <p className="text-sm mb-6 min-h-[44px] text-white/70">Pour une prise en charge complète : site, contenu, publicité, suivi et stratégie.</p>
              <div className="mb-5">
                <div className="text-xs font-bold mb-1 text-white/60">Prix</div>
                <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1">
                  <span className="text-3xl font-bold text-white">Sur devis</span>
                </div>
              </div>
              <ul className="space-y-2.5 mb-7">
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#CA9BFA]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-white/80">Stratégie digitale</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#CA9BFA]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-white/80">Présence sociale</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#CA9BFA]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-white/80">Publicité digitale</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#CA9BFA]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-white/80">Suivi mensuel</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 shrink-0 mt-0.5 text-[#CA9BFA]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm text-white/80">Optimisation continue</span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 w-full rounded-2xl bg-white text-[#0D1F1A] hover:bg-white/90" href="/contact">Demander un accompagnement</Link>
                <p className="mt-3 text-center text-xs font-medium text-white/50">Engagement conseillé : 3 mois</p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <BudgetCalculator />
      <section className="py-20 bg-[#F9FAF9]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="rounded-3xl border border-[#E7EBE9] bg-white shadow-[0_18px_50px_rgba(13,31,26,0.06)] overflow-hidden">
            <div className="p-6 sm:p-8 lg:p-9 border-b border-[#E7EBE9]">
              <h3 className="text-2xl lg:text-3xl font-bold text-[#0D1F1A] mb-2">Résumé des offres</h3>
              <p className="text-[#47534E] max-w-2xl">Une vue simple pour aider le client à choisir entre site, contenu, publicité ou accompagnement complet.</p>
            </div>
            <div className="md:hidden divide-y divide-[#E7EBE9]">
              <article className="p-5">
                <div className="text-base font-bold text-[#0D1F1A] mb-2">Diagnostic Gratuit</div>
                <div className="text-sm font-semibold text-[#1B1AFE] mb-3">Gratuit</div>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="font-bold text-[#0D1F1A]">Besoin principal</dt>
                    <dd className="mt-1 text-[#344054]">Comprendre les problèmes digitaux et commerciaux</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-[#0D1F1A]">Objectif</dt>
                    <dd className="mt-1 text-[#344054]">Créer un premier échange qualifié</dd>
                  </div>
                </dl>
              </article>
              <article className="p-5">
                <div className="text-base font-bold text-[#0D1F1A] mb-2">Site Web Professionnel</div>
                <div className="text-sm font-semibold text-[#1B1AFE] mb-3">À partir de 89 000 DA</div>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="font-bold text-[#0D1F1A]">Besoin principal</dt>
                    <dd className="mt-1 text-[#344054]">Avoir un site moderne et crédible</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-[#0D1F1A]">Objectif</dt>
                    <dd className="mt-1 text-[#344054]">Transformer les visiteurs en demandes clients</dd>
                  </div>
                </dl>
              </article>
              <article className="p-5">
                <div className="text-base font-bold text-[#0D1F1A] mb-2">Prospection Commerciale B2B</div>
                <div className="text-sm font-semibold text-[#1B1AFE] mb-3">À partir de 120 000 DA / mois</div>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="font-bold text-[#0D1F1A]">Besoin principal</dt>
                    <dd className="mt-1 text-[#344054]">Développer son portefeuille clients B2B</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-[#0D1F1A]">Objectif</dt>
                    <dd className="mt-1 text-[#344054]">Structurer et suivre la prospection commerciale</dd>
                  </div>
                </dl>
              </article>
              <article className="p-5">
                <div className="text-base font-bold text-[#0D1F1A] mb-2">{"Présence Digitale & Boost Marketing"}</div>
                <div className="text-sm font-semibold text-[#1B1AFE] mb-3">À partir de 55 000 DA / mois, hors budget publicitaire</div>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="font-bold text-[#0D1F1A]">Besoin principal</dt>
                    <dd className="mt-1 text-[#344054]">Contenu + campagnes Facebook, Instagram, TikTok</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-[#0D1F1A]">Objectif</dt>
                    <dd className="mt-1 text-[#344054]">Augmenter la visibilité ou les ventes en ligne</dd>
                  </div>
                </dl>
              </article>
              <article className="p-5">
                <div className="text-base font-bold text-[#0D1F1A] mb-2">Community Management</div>
                <div className="text-sm font-semibold text-[#1B1AFE] mb-3">35 000 DA / mois</div>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="font-bold text-[#0D1F1A]">Besoin principal</dt>
                    <dd className="mt-1 text-[#344054]">Publier régulièrement avec une image professionnelle</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-[#0D1F1A]">Objectif</dt>
                    <dd className="mt-1 text-[#344054]">Gagner en crédibilité et régularité</dd>
                  </div>
                </dl>
              </article>
              <article className="p-5">
                <div className="text-base font-bold text-[#0D1F1A] mb-2">Accélération Entreprise</div>
                <div className="text-sm font-semibold text-[#1B1AFE] mb-3">À partir de 95 000 DA / mission</div>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="font-bold text-[#0D1F1A]">Besoin principal</dt>
                    <dd className="mt-1 text-[#344054]">Structurer les priorités de croissance</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-[#0D1F1A]">Objectif</dt>
                    <dd className="mt-1 text-[#344054]">Avoir un plan d'action clair</dd>
                  </div>
                </dl>
              </article>
              <article className="p-5">
                <div className="text-base font-bold text-[#0D1F1A] mb-2">Croissance 360</div>
                <div className="text-sm font-semibold text-[#1B1AFE] mb-3">Sur devis</div>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="font-bold text-[#0D1F1A]">Besoin principal</dt>
                    <dd className="mt-1 text-[#344054]">Accompagnement complet digital + stratégie</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-[#0D1F1A]">Objectif</dt>
                    <dd className="mt-1 text-[#344054]">Construire une croissance durable</dd>
                  </div>
                </dl>
              </article>
            </div>
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[760px] border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F9FAF9]">
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#0D1F1A] border-b border-[#E7EBE9]">Pack</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#0D1F1A] border-b border-[#E7EBE9]">Besoin principal</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#0D1F1A] border-b border-[#E7EBE9]">Prix conseillé</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#0D1F1A] border-b border-[#E7EBE9]">Objectif</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#E7EBE9]">
                    <td className="px-6 py-5 align-top font-bold text-[#0D1F1A] whitespace-nowrap">Diagnostic Gratuit</td>
                    <td className="px-6 py-5 align-top text-[#344054]">Comprendre les problèmes digitaux et commerciaux</td>
                    <td className="px-6 py-5 align-top font-semibold text-[#1B1AFE] whitespace-nowrap">Gratuit</td>
                    <td className="px-6 py-5 align-top text-[#344054]">Créer un premier échange qualifié</td>
                  </tr>
                  <tr className="border-b border-[#E7EBE9]">
                    <td className="px-6 py-5 align-top font-bold text-[#0D1F1A] whitespace-nowrap">Site Web Professionnel</td>
                    <td className="px-6 py-5 align-top text-[#344054]">Avoir un site moderne et crédible</td>
                    <td className="px-6 py-5 align-top font-semibold text-[#1B1AFE] whitespace-nowrap">À partir de 89 000 DA</td>
                    <td className="px-6 py-5 align-top text-[#344054]">Transformer les visiteurs en demandes clients</td>
                  </tr>
                  <tr className="border-b border-[#E7EBE9]">
                    <td className="px-6 py-5 align-top font-bold text-[#0D1F1A] whitespace-nowrap">Prospection Commerciale B2B</td>
                    <td className="px-6 py-5 align-top text-[#344054]">Développer son portefeuille clients B2B</td>
                    <td className="px-6 py-5 align-top font-semibold text-[#1B1AFE] whitespace-nowrap">À partir de 120 000 DA / mois</td>
                    <td className="px-6 py-5 align-top text-[#344054]">Structurer et suivre la prospection commerciale</td>
                  </tr>
                  <tr className="border-b border-[#E7EBE9]">
                    <td className="px-6 py-5 align-top font-bold text-[#0D1F1A] whitespace-nowrap">{"Présence Digitale & Boost Marketing"}</td>
                    <td className="px-6 py-5 align-top text-[#344054]">Contenu + campagnes Facebook, Instagram, TikTok</td>
                    <td className="px-6 py-5 align-top font-semibold text-[#1B1AFE] whitespace-nowrap">À partir de 55 000 DA / mois, hors budget publicitaire</td>
                    <td className="px-6 py-5 align-top text-[#344054]">Augmenter la visibilité ou les ventes en ligne</td>
                  </tr>
                  <tr className="border-b border-[#E7EBE9]">
                    <td className="px-6 py-5 align-top font-bold text-[#0D1F1A] whitespace-nowrap">Community Management</td>
                    <td className="px-6 py-5 align-top text-[#344054]">Publier régulièrement avec une image professionnelle</td>
                    <td className="px-6 py-5 align-top font-semibold text-[#1B1AFE] whitespace-nowrap">35 000 DA / mois</td>
                    <td className="px-6 py-5 align-top text-[#344054]">Gagner en crédibilité et régularité</td>
                  </tr>
                  <tr className="border-b border-[#E7EBE9]">
                    <td className="px-6 py-5 align-top font-bold text-[#0D1F1A] whitespace-nowrap">Accélération Entreprise</td>
                    <td className="px-6 py-5 align-top text-[#344054]">Structurer les priorités de croissance</td>
                    <td className="px-6 py-5 align-top font-semibold text-[#1B1AFE] whitespace-nowrap">À partir de 95 000 DA / mission</td>
                    <td className="px-6 py-5 align-top text-[#344054]">Avoir un plan d'action clair</td>
                  </tr>
                  <tr className="">
                    <td className="px-6 py-5 align-top font-bold text-[#0D1F1A] whitespace-nowrap">Croissance 360</td>
                    <td className="px-6 py-5 align-top text-[#344054]">Accompagnement complet digital + stratégie</td>
                    <td className="px-6 py-5 align-top font-semibold text-[#1B1AFE] whitespace-nowrap">Sur devis</td>
                    <td className="px-6 py-5 align-top text-[#344054]">Construire une croissance durable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#0825A3,#0D1F1A)] p-6 sm:p-10 lg:p-14 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="absolute inset-x-0 top-0 h-px bg-white/25"></div>
            <div className="absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08))]"></div>
            <div className="relative z-10 max-w-xl">
              <h3 className="text-3xl lg:text-4xl font-bold mb-3">Vous ne savez pas quel pack choisir ?</h3>
              <p className="text-white/75">Demandez un diagnostic gratuit. Incubia analyse votre activité, votre présence digitale et vos objectifs, puis propose le pack le plus adapté.</p>
            </div>
            <Link className="inline-flex items-center justify-center gap-2 text-base transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] has-[>svg]:px-4 relative z-10 bg-white text-[#0D1F1A] hover:bg-white/90 rounded-full px-6 sm:px-8 h-auto min-h-14 font-bold shrink-0 whitespace-normal text-center flex items-center gap-2" data-slot="button" href="/contact"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-5 h-5">
  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>Obtenir un diagnostic gratuit</Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
