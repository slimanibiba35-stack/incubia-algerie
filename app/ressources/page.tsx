// Rebuilt from the live page /ressources (server-rendered HTML snapshot, 26/11/2026) by scripts/rebuild-from-live.mjs.
import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { NewsletterForm } from '@/components/site/newsletter-form'

export const metadata: Metadata = {
  "title": {
    "absolute": "Ressources PME & B2B | Incubia Algérie"
  },
  "description": "Téléchargez des guides, templates et outils utiles pour la prospection, la visibilité digitale et l'organisation commerciale."
}

export default function RessourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#F9FAF9] to-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B1AFE]/10 text-[#1B1AFE] text-sm font-semibold mb-6"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-4 h-4">
  <path d="M12 7v14"></path>
  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
</svg>Ressources</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1F1A] mb-6">Hub Ressources</h1>
            <p className="text-xl text-[#47534E]">Guides pratiques, templates et outils pour mieux vendre, mieux suivre et mieux piloter.</p>
          </div>
        </div>
      </section>
      <section id="guides" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#0D1F1A] mb-4">Guides Pratiques</h2>
            <p className="text-lg text-[#47534E]">Des ressources directement utiles pour les dirigeants et équipes commerciales.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group rounded-2xl border border-[#E7EBE9] overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[#1B1AFE]/10 to-[#CA9BFA]/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-16 h-16 text-[#1B1AFE] group-hover:scale-110 transition-transform">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#1B1AFE]/10 text-[#1B1AFE] hover:bg-[#1B1AFE]/20">Commercial</div>
                  <span className="text-xs text-[#47534E]">1250{" téléchargements"}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0D1F1A] mb-2 group-hover:text-[#1B1AFE] transition-colors">Guide de prospection B2B en Algérie</h3>
                <p className="text-sm text-[#47534E] mb-4 leading-relaxed">Méthode simple pour cibler, contacter et relancer plus efficacement vos prospects.</p>
                <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-white hover:bg-[#97D2C7] hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 rounded-xl w-full bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download w-4 h-4 mr-2">
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
  <polyline points="7 10 12 15 17 10"></polyline>
  <line x1="12" x2="12" y1="15" y2="3"></line>
</svg>Télécharger Gratuitement</button>
              </div>
            </div>
            <div className="group rounded-2xl border border-[#E7EBE9] overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[#1B1AFE]/10 to-[#CA9BFA]/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-16 h-16 text-[#1B1AFE] group-hover:scale-110 transition-transform">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#1B1AFE]/10 text-[#1B1AFE] hover:bg-[#1B1AFE]/20">Acquisition</div>
                  <span className="text-xs text-[#47534E]">980{" téléchargements"}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0D1F1A] mb-2 group-hover:text-[#1B1AFE] transition-colors">Structurer son acquisition sans gaspiller son budget</h3>
                <p className="text-sm text-[#47534E] mb-4 leading-relaxed">Les priorités à cadrer avant de lancer des campagnes, des contenus ou des actions de relance.</p>
                <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-white hover:bg-[#97D2C7] hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 rounded-xl w-full bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download w-4 h-4 mr-2">
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
  <polyline points="7 10 12 15 17 10"></polyline>
  <line x1="12" x2="12" y1="15" y2="3"></line>
</svg>Télécharger Gratuitement</button>
              </div>
            </div>
            <div className="group rounded-2xl border border-[#E7EBE9] overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[#1B1AFE]/10 to-[#CA9BFA]/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-16 h-16 text-[#1B1AFE] group-hover:scale-110 transition-transform">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#1B1AFE]/10 text-[#1B1AFE] hover:bg-[#1B1AFE]/20">Organisation</div>
                  <span className="text-xs text-[#47534E]">750{" téléchargements"}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0D1F1A] mb-2 group-hover:text-[#1B1AFE] transition-colors">Checklist de structuration commerciale</h3>
                <p className="text-sm text-[#47534E] mb-4 leading-relaxed">Les bases à mettre en place pour mieux suivre les opportunités et répartir les rôles.</p>
                <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-white hover:bg-[#97D2C7] hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 rounded-xl w-full bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download w-4 h-4 mr-2">
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
  <polyline points="7 10 12 15 17 10"></polyline>
  <line x1="12" x2="12" y1="15" y2="3"></line>
</svg>Télécharger Gratuitement</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="templates" className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white scroll-mt-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#0D1F1A] mb-4">Templates Gratuits</h2>
            <p className="text-lg text-[#47534E]">Des modèles prêts à l'emploi pour gagner du temps dans l'exécution.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group rounded-2xl border border-[#E7EBE9] bg-white overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[#CA9BFA]/10 to-[#E9D5FF]/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-16 h-16 text-[#CA9BFA] group-hover:scale-110 transition-transform">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#CA9BFA]/10 text-[#CA9BFA] hover:bg-[#CA9BFA]/20">Commercial</div>
                  <span className="text-xs text-[#47534E]">2100{" téléchargements"}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0D1F1A] mb-2 group-hover:text-[#CA9BFA] transition-colors">Plan de relance commerciale</h3>
                <p className="text-sm text-[#47534E] mb-4 leading-relaxed">Template prêt à l'emploi pour suivre vos prises de contact et vos relances.</p>
                <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-white hover:bg-[#97D2C7] hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 rounded-xl w-full bg-gradient-to-r from-[#CA9BFA] to-[#E9D5FF]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download w-4 h-4 mr-2">
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
  <polyline points="7 10 12 15 17 10"></polyline>
  <line x1="12" x2="12" y1="15" y2="3"></line>
</svg>Télécharger Gratuitement</button>
              </div>
            </div>
            <div className="group rounded-2xl border border-[#E7EBE9] bg-white overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[#CA9BFA]/10 to-[#E9D5FF]/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-16 h-16 text-[#CA9BFA] group-hover:scale-110 transition-transform">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#CA9BFA]/10 text-[#CA9BFA] hover:bg-[#CA9BFA]/20">Visibilité</div>
                  <span className="text-xs text-[#47534E]">1850{" téléchargements"}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0D1F1A] mb-2 group-hover:text-[#CA9BFA] transition-colors">Template de diagnostic visibilité</h3>
                <p className="text-sm text-[#47534E] mb-4 leading-relaxed">Support de revue pour clarifier vos messages, vos pages et vos appels à l'action.</p>
                <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-white hover:bg-[#97D2C7] hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 rounded-xl w-full bg-gradient-to-r from-[#CA9BFA] to-[#E9D5FF]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download w-4 h-4 mr-2">
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
  <polyline points="7 10 12 15 17 10"></polyline>
  <line x1="12" x2="12" y1="15" y2="3"></line>
</svg>Télécharger Gratuitement</button>
              </div>
            </div>
            <div className="group rounded-2xl border border-[#E7EBE9] bg-white overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[#CA9BFA]/10 to-[#E9D5FF]/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-16 h-16 text-[#CA9BFA] group-hover:scale-110 transition-transform">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#CA9BFA]/10 text-[#CA9BFA] hover:bg-[#CA9BFA]/20">Pilotage</div>
                  <span className="text-xs text-[#47534E]">1620{" téléchargements"}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0D1F1A] mb-2 group-hover:text-[#CA9BFA] transition-colors">Tableau KPI commercial (Excel)</h3>
                <p className="text-sm text-[#47534E] mb-4 leading-relaxed">Fichier simple pour piloter leads, rendez-vous, devis et conversions.</p>
                <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-white hover:bg-[#97D2C7] hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 rounded-xl w-full bg-gradient-to-r from-[#CA9BFA] to-[#E9D5FF]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download w-4 h-4 mr-2">
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
  <polyline points="7 10 12 15 17 10"></polyline>
  <line x1="12" x2="12" y1="15" y2="3"></line>
</svg>Télécharger Gratuitement</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="newsletter" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#CA9BFA] via-[#E9D5FF] to-[#1B1AFE] p-12 lg:p-16 text-white">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-10 h-10 text-white">
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                  <path d="M20 3v4"></path>
                  <path d="M22 5h-4"></path>
                  <path d="M4 17v2"></path>
                  <path d="M5 18H3"></path>
                </svg>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">Recevez Plus de Ressources</h3>
              <p className="text-lg mb-8 opacity-90">Abonnez-vous à notre newsletter pour recevoir nos derniers guides, templates et conseils exclusifs chaque semaine</p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-[#0D1F1A] mb-4">Envie de plus de contenu utile ?</h3>
            <p className="text-lg text-[#47534E] mb-8">Retrouvez sur le blog nos conseils concrets, cas clients et retours d'expérience terrain.</p>
            <Link data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border border-[#97D2C7] bg-transparent text-[#97D2C7] hover:bg-[rgba(151,210,199,0.06)] h-11 rounded-xl px-6 has-[>svg]:px-4" href="/blog">Découvrir le Blog<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5 ml-2">
  <path d="M5 12h14"></path>
  <path d="m12 5 7 7-7 7"></path>
</svg></Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
