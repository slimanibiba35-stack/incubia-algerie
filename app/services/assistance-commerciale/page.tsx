// Rebuilt from the live page /services/assistance-commerciale (server-rendered HTML snapshot, 26/11/2026) by scripts/rebuild-from-live.mjs.
import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"

export const metadata: Metadata = {
  "title": {
    "absolute": "Assistance Commerciale | Scripts de Vente B2B | Incubia | Incubia Algérie"
  },
  "description": "Service d'assistance commerciale : scripts de vente, formation d'équipes, coaching closing et audit commercial pour booster vos performances."
}

export default function ServicesAssistanceCommercialePage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#F9FAF9] to-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#059669]/10 text-[#059669] text-sm font-semibold mb-6"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-4 h-4">
  <circle cx="12" cy="12" r="10"></circle>
  <circle cx="12" cy="12" r="6"></circle>
  <circle cx="12" cy="12" r="2"></circle>
</svg>Service</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1F1A] mb-6">Formez vos Équipes et Closez Plus</h1>
            <p className="text-xl text-[#47534E] mb-8">Scripts de vente, formation commerciale et coaching closing pour transformer vos prospects en clients</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-white hover:bg-[#97D2C7] hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] h-11 rounded-xl px-6 has-[>svg]:px-4 bg-gradient-to-r from-[#059669] to-[#10B981]" href="/contact">Planifier un Diagnostic</Link>
              <Link data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border border-[#97D2C7] bg-transparent text-[#97D2C7] hover:bg-[rgba(151,210,199,0.06)] h-11 rounded-xl px-6 has-[>svg]:px-4" href="/tarifs">Voir les Tarifs</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0D1F1A] mb-4">Notre Accompagnement Commercial</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-[#E7EBE9] hover:border-[#059669] hover:shadow-lg transition-all group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-7 h-7 text-white">
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">Scripts de Vente</h3>
              <p className="text-[#47534E] leading-relaxed">Création de scripts de vente sur mesure adaptés à votre secteur et votre offre</p>
            </div>
            <div className="p-8 rounded-2xl border border-[#E7EBE9] hover:border-[#059669] hover:shadow-lg transition-all group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-7 h-7 text-white">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">Formation Équipe</h3>
              <p className="text-[#47534E] leading-relaxed">Programme de formation complet pour renforcer les compétences commerciales</p>
            </div>
            <div className="p-8 rounded-2xl border border-[#E7EBE9] hover:border-[#059669] hover:shadow-lg transition-all group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-7 h-7 text-white">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">Coaching Closing</h3>
              <p className="text-[#47534E] leading-relaxed">Accompagnement personnalisé pour améliorer vos techniques de closing</p>
            </div>
            <div className="p-8 rounded-2xl border border-[#E7EBE9] hover:border-[#059669] hover:shadow-lg transition-all group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-check w-7 h-7 text-white">
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <path d="m9 14 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">Audit Commercial</h3>
              <p className="text-[#47534E] leading-relaxed">Analyse approfondie de votre processus de vente et recommandations</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0D1F1A] mb-4">Notre Processus en 4 Étapes</h2>
            <p className="text-lg text-[#47534E]">De l'audit à l'optimisation, un accompagnement complet</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-bold text-[#0D1F1A] mb-2">Diagnostic</h3>
                <p className="text-sm text-[#47534E]">Audit complet de votre processus de vente et identification des axes d'amélioration</p>
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#059669] to-transparent"></div>
            </div>
            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-bold text-[#0D1F1A] mb-2">Formation</h3>
                <p className="text-sm text-[#47534E]">Création des scripts, ateliers de formation et mise en situation</p>
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#059669] to-transparent"></div>
            </div>
            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-bold text-[#0D1F1A] mb-2">Mise en Pratique</h3>
                <p className="text-sm text-[#47534E]">Accompagnement terrain, coaching individuel et ajustements</p>
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#059669] to-transparent"></div>
            </div>
            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-lg font-bold text-[#0D1F1A] mb-2">Suivi</h3>
                <p className="text-sm text-[#47534E]">Suivi des performances, optimisation continue et reporting mensuel</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0D1F1A] mb-4">Questions Fréquentes</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="p-6 rounded-2xl border border-[#E7EBE9] bg-white">
              <h4 className="font-semibold text-[#0D1F1A] mb-2">Quelle est la durée de la formation ?</h4>
              <p className="text-[#47534E] leading-relaxed text-sm">La formation dure généralement 2 jours consécutifs pour le pack de base. Le pack complet étend l'accompagnement sur plusieurs semaines avec du coaching individuel et de la mise en pratique.</p>
            </div>
            <div className="p-6 rounded-2xl border border-[#E7EBE9] bg-white">
              <h4 className="font-semibold text-[#0D1F1A] mb-2">Les scripts de vente sont-ils adaptés à mon secteur ?</h4>
              <p className="text-[#47534E] leading-relaxed text-sm">Oui, tous nos scripts sont créés sur mesure en fonction de votre secteur d'activité, de votre offre et de votre cible. Nous menons un audit approfondi avant de concevoir les scripts.</p>
            </div>
            <div className="p-6 rounded-2xl border border-[#E7EBE9] bg-white">
              <h4 className="font-semibold text-[#0D1F1A] mb-2">Comment mesurons-nous l'efficacité ?</h4>
              <p className="text-[#47534E] leading-relaxed text-sm">Nous suivons les KPIs clés : taux de closing, cycle de vente moyen, panier moyen, et satisfaction client. Des rapports réguliers vous permettent de mesurer les progrès.</p>
            </div>
            <div className="p-6 rounded-2xl border border-[#E7EBE9] bg-white">
              <h4 className="font-semibold text-[#0D1F1A] mb-2">Travaillez-vous avec les petites équipes ?</h4>
              <p className="text-[#47534E] leading-relaxed text-sm">Absolument. Nos packs sont adaptés aux équipes de 2 à 20 personnes. L'approche est personnalisée selon la taille de votre équipe et vos objectifs commerciaux.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#059669] to-[#10B981] p-12 text-white text-center">
            <div className="relative z-10 max-w-3xl mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-16 h-16 mx-auto mb-6">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <h3 className="text-3xl font-bold mb-4">Prêt à Transformer Vos Ventes ?</h3>
              <p className="text-lg mb-8 opacity-90">Planifiez un diagnostic gratuit et découvrez comment améliorer vos performances commerciales</p>
              <Link data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-11 rounded-xl px-6 has-[>svg]:px-4 bg-white text-[#059669] hover:bg-white/90" href="/contact">Planifier un Diagnostic</Link>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
