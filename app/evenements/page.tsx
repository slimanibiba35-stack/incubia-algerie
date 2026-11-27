// Rebuilt from the live page /evenements (server-rendered HTML snapshot, 26/11/2026) by scripts/rebuild-from-live.mjs.
import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"

export const metadata: Metadata = {
  "title": {
    "absolute": "Événements & Workshops B2B | Incubia Algérie"
  },
  "description": "Participez à nos ateliers, masterclasses et rencontres professionnelles pour développer vos compétences commerciales, digitales et managériales."
}

export default function EvenementsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#F9FAF9] to-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CA9BFA]/10 text-[#CA9BFA] text-sm font-semibold mb-6"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-4 h-4">
  <path d="M8 2v4"></path>
  <path d="M16 2v4"></path>
  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
  <path d="M3 10h18"></path>
</svg>Événements</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1F1A] mb-6">Événements Incubia</h1>
            <p className="text-xl text-[#47534E]">Workshops, masterclasses et rencontres professionnelles pour dirigeants et équipes B2B</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <h2 className="text-3xl font-bold text-[#0D1F1A] mb-12">Événements à Venir</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border-2 border-[#E7EBE9] hover:border-[#CA9BFA] hover:shadow-xl transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#CA9BFA]/10 text-[#CA9BFA] hover:bg-[#CA9BFA]/20">Workshop</div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#0D1F1A]">20</div>
                  <div className="text-sm text-[#47534E]">déc.</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#0D1F1A] mb-4">Atelier Prospection B2B en Algérie</h3>
              <p className="text-[#47534E] mb-6 leading-relaxed">Une journée pour structurer vos séquences de prospection, vos messages et votre suivi commercial.</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-[#47534E]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-5 h-5 text-[#CA9BFA]">
  <circle cx="12" cy="12" r="10"></circle>
  <polyline points="12 6 12 12 16 14"></polyline>
</svg>09:00 - 18:00</div>
                <div className="flex items-center gap-3 text-sm text-[#47534E]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-5 h-5 text-[#CA9BFA]">
  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
  <circle cx="12" cy="10" r="3"></circle>
</svg>Incubia HQ, Alger</div>
                <div className="flex items-center gap-3 text-sm text-[#47534E]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-5 h-5 text-[#CA9BFA]">
  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
  <circle cx="9" cy="7" r="4"></circle>
  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>50{" participants max"}</div>
              </div>
              <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-white hover:bg-[#97D2C7] hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 rounded-xl w-full bg-gradient-to-r from-[#CA9BFA] to-[#E9D5FF]">S'Inscrire</button>
            </div>
            <div className="p-8 rounded-2xl border-2 border-[#E7EBE9] hover:border-[#CA9BFA] hover:shadow-xl transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#CA9BFA]/10 text-[#CA9BFA] hover:bg-[#CA9BFA]/20">Masterclass</div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#0D1F1A]">22</div>
                  <div className="text-sm text-[#47534E]">déc.</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#0D1F1A] mb-4">{"Masterclass: Publicité Digitale & Acquisition"}</h3>
              <p className="text-[#47534E] mb-6 leading-relaxed">Les leviers concrets pour mieux investir vos budgets Meta, Google et contenu de conversion.</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-[#47534E]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-5 h-5 text-[#CA9BFA]">
  <circle cx="12" cy="12" r="10"></circle>
  <polyline points="12 6 12 12 16 14"></polyline>
</svg>14:00 - 17:00</div>
                <div className="flex items-center gap-3 text-sm text-[#47534E]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-5 h-5 text-[#CA9BFA]">
  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
  <circle cx="12" cy="10" r="3"></circle>
</svg>En ligne</div>
                <div className="flex items-center gap-3 text-sm text-[#47534E]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-5 h-5 text-[#CA9BFA]">
  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
  <circle cx="9" cy="7" r="4"></circle>
  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>100{" participants max"}</div>
              </div>
              <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-white hover:bg-[#97D2C7] hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 rounded-xl w-full bg-gradient-to-r from-[#CA9BFA] to-[#E9D5FF]">S'Inscrire</button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <h2 className="text-3xl font-bold text-[#0D1F1A] mb-12">Événements Passés</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-[#E7EBE9] hover:shadow-lg transition-all">
              <div className="text-sm text-[#47534E] mb-2">15/11/2025</div>
              <h3 className="text-lg font-bold text-[#0D1F1A] mb-2">{"Workshop CRM & Pipeline"}</h3>
              <p className="text-sm text-[#47534E] mb-3">Atelier pratique autour du suivi commercial, des relances et des indicateurs utiles.</p>
              <div className="flex items-center gap-2 text-xs text-[#47534E]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-4 h-4">
  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
  <circle cx="9" cy="7" r="4"></circle>
  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>200{" participants"}</div>
            </div>
            <div className="p-6 rounded-2xl border border-[#E7EBE9] hover:shadow-lg transition-all">
              <div className="text-sm text-[#47534E] mb-2">28/10/2025</div>
              <h3 className="text-lg font-bold text-[#0D1F1A] mb-2">Rencontre Réseau PME</h3>
              <p className="text-sm text-[#47534E] mb-3">Soirée d'échange entre dirigeants, équipes commerciales et partenaires locaux.</p>
              <div className="flex items-center gap-2 text-xs text-[#47534E]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-4 h-4">
  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
  <circle cx="9" cy="7" r="4"></circle>
  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>80{" participants"}</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-[#0D1F1A] mb-4">Ne Manquez Aucun Événement</h3>
            <p className="text-lg text-[#47534E] mb-8">Recevez nos prochains ateliers, masterclasses et rencontres professionnelles directement par email</p>
            <Link data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-white hover:bg-[#97D2C7] hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] h-11 rounded-xl px-6 has-[>svg]:px-4 bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF]" href="/contact">Demander les prochaines dates</Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
