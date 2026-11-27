// Rebuilt from the live page /services (server-rendered HTML snapshot, 26/11/2026) by scripts/rebuild-from-live.mjs.
import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"

export const metadata: Metadata = {
  "title": {
    "absolute": "Services B2B pour Entreprises | Commercial, Digital, Formation | Incubia | Incubia Algérie"
  },
  "description": "Découvrez nos services B2B regroupés par enjeux : prospection commerciale, présence digitale, formations B2B et accompagnement d'accélération pour entreprises algériennes."
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#F9FAF9] via-white to-[#F4F7FF] relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-16 right-[18%] w-72 h-72 bg-[#1B1AFE]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-[10%] w-80 h-80 bg-[#CA9BFA]/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B1AFE]/10 text-[#1B1AFE] text-sm font-semibold mb-6"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4">
  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
  <path d="M20 3v4"></path>
  <path d="M22 5h-4"></path>
  <path d="M4 17v2"></path>
  <path d="M5 18H3"></path>
</svg>Services B2B regroupés</div>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#0D1F1A] mb-6">Une seule page pour piloter vos enjeux<span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1B1AFE] to-[#CA9BFA]">digitaux, commerciaux, formation et accélération</span></h1>
            <p className="text-xl text-[#47534E] leading-relaxed max-w-3xl mx-auto">Explorez nos offres par famille de besoin, puis entrez dans la page la plus utile selon votre priorité du moment.</p>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 space-y-16">
          <div className="relative overflow-hidden rounded-[32px] border border-[#E7EBE9] bg-gradient-to-br from-white via-[#FAFAFA] to-[#F9FAF9] p-8 lg:p-10">
            <div className="absolute inset-0 opacity-60 pointer-events-none">
              <div className="absolute -top-12 right-12 h-48 w-48 rounded-full bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] blur-3xl opacity-10"></div>
            </div>
            <div className="relative z-10 mb-8 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#47534E] mb-3">Commercial</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1F1A] mb-4">Commercial{" pour entreprises algériennes"}</h2>
              <p className="text-lg text-[#47534E] leading-relaxed">Structurer votre acquisition, mieux qualifier vos prospects et faire avancer le cycle de vente.</p>
            </div>
            <div className="relative z-10 grid lg:grid-cols-12 gap-5">
              <div className="lg:col-span-7">
                <Link className="group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-[28px] border border-[#E7EBE9] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-transparent" href="/services/commercial/prospection-b2b">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] opacity-0 transition-opacity duration-300 group-hover:opacity-[0.07]"></div>
                  <div className="absolute -bottom-2 right-4 text-[52px] font-black uppercase tracking-tight text-[#0D1F1A]/[0.04] pointer-events-none">Prospection</div>
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] p-3 text-white shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target h-7 w-7">
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="6"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0D1F1A] mb-3 group-hover:text-[#1B1AFE] transition-colors">Prospection B2B</h3>
                    <p className="text-[#47534E] leading-relaxed">Ciblage, messages, LinkedIn outreach et pipeline CRM pour générer plus de rendez-vous utiles.</p>
                  </div>
                  <div className="relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1B1AFE]">Voir la page<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1">
  <path d="M5 12h14"></path>
  <path d="m12 5 7 7-7 7"></path>
</svg></div>
                </Link>
              </div>
              <div className="lg:col-span-5">
                <Link className="group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-[28px] border border-[#E7EBE9] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-transparent" href="/services/commercial/assistance-commerciale">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#059669] to-[#10B981] opacity-0 transition-opacity duration-300 group-hover:opacity-[0.07]"></div>
                  <div className="absolute -bottom-2 right-4 text-[52px] font-black uppercase tracking-tight text-[#0D1F1A]/[0.04] pointer-events-none">Closing</div>
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-[#059669] to-[#10B981] p-3 text-white shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-7 w-7">
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                        <polyline points="16 7 22 7 22 13"></polyline>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0D1F1A] mb-3 group-hover:text-[#1B1AFE] transition-colors">Assistance Commerciale</h3>
                    <p className="text-[#47534E] leading-relaxed">Scripts, formation équipe, accompagnement closing et routines commerciales plus solides.</p>
                  </div>
                  <div className="relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1B1AFE]">Voir la page<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1">
  <path d="M5 12h14"></path>
  <path d="m12 5 7 7-7 7"></path>
</svg></div>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-[#E7EBE9] bg-gradient-to-br from-white via-[#FAFAFA] to-[#F9FAF9] p-8 lg:p-10">
            <div className="absolute inset-0 opacity-60 pointer-events-none">
              <div className="absolute -top-12 right-12 h-48 w-48 rounded-full bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] blur-3xl opacity-10"></div>
            </div>
            <div className="relative z-10 mb-8 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#47534E] mb-3">Digital</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1F1A] mb-4">Digital{" pour entreprises algériennes"}</h2>
              <p className="text-lg text-[#47534E] leading-relaxed">Créer les supports, outils et campagnes qui rendent votre offre visible et plus convaincante.</p>
            </div>
            <div className="relative z-10 grid lg:grid-cols-12 gap-5">
              <div className="lg:col-span-4">
                <Link className="group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-[28px] border border-[#E7EBE9] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-transparent" href="/services/digital/site-web">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] opacity-0 transition-opacity duration-300 group-hover:opacity-[0.07]"></div>
                  <div className="absolute -bottom-2 right-4 text-[52px] font-black uppercase tracking-tight text-[#0D1F1A]/[0.04] pointer-events-none">Web</div>
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] p-3 text-white shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe h-7 w-7">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0D1F1A] mb-3 group-hover:text-[#1B1AFE] transition-colors">Création de Site Web</h3>
                    <p className="text-[#47534E] leading-relaxed">Site vitrine, pages de conversion et architecture claire pour mieux présenter votre offre.</p>
                  </div>
                  <div className="relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1B1AFE]">Voir la page<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1">
  <path d="M5 12h14"></path>
  <path d="m12 5 7 7-7 7"></path>
</svg></div>
                </Link>
              </div>
              <div className="lg:col-span-4">
                <Link className="group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-[28px] border border-[#E7EBE9] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-transparent" href="/services/digital/produit-digital">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] opacity-0 transition-opacity duration-300 group-hover:opacity-[0.07]"></div>
                  <div className="absolute -bottom-2 right-4 text-[52px] font-black uppercase tracking-tight text-[#0D1F1A]/[0.04] pointer-events-none">Produit</div>
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] p-3 text-white shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu h-7 w-7">
                        <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                        <rect width="6" height="6" x="9" y="9" rx="1"></rect>
                        <path d="M15 2v2"></path>
                        <path d="M15 20v2"></path>
                        <path d="M2 15h2"></path>
                        <path d="M2 9h2"></path>
                        <path d="M20 15h2"></path>
                        <path d="M20 9h2"></path>
                        <path d="M9 2v2"></path>
                        <path d="M9 20v2"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0D1F1A] mb-3 group-hover:text-[#1B1AFE] transition-colors">Produit Digital</h3>
                    <p className="text-[#47534E] leading-relaxed">Prototype fonctionnel, outil métier ou expérience digitale pensée pour un usage réel.</p>
                  </div>
                  <div className="relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1B1AFE]">Voir la page<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1">
  <path d="M5 12h14"></path>
  <path d="m12 5 7 7-7 7"></path>
</svg></div>
                </Link>
              </div>
              <div className="lg:col-span-4">
                <Link className="group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-[28px] border border-[#E7EBE9] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-transparent" href="/services/digital/publicite-digitale">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#EA580C] to-[#FB923C] opacity-0 transition-opacity duration-300 group-hover:opacity-[0.07]"></div>
                  <div className="absolute -bottom-2 right-4 text-[52px] font-black uppercase tracking-tight text-[#0D1F1A]/[0.04] pointer-events-none">Ads</div>
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#FB923C] p-3 text-white shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket h-7 w-7">
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0D1F1A] mb-3 group-hover:text-[#1B1AFE] transition-colors">Publicité Digitale</h3>
                    <p className="text-[#47534E] leading-relaxed">Campagnes Meta, Google et TikTok pour transformer la visibilité en opportunités mesurables.</p>
                  </div>
                  <div className="relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1B1AFE]">Voir la page<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1">
  <path d="M5 12h14"></path>
  <path d="m12 5 7 7-7 7"></path>
</svg></div>
                </Link>
              </div>
              <div className="lg:col-span-6">
                <Link className="group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-[28px] border border-[#E7EBE9] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-transparent" href="/services/digital/community-management">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] opacity-0 transition-opacity duration-300 group-hover:opacity-[0.07]"></div>
                  <div className="absolute -bottom-2 right-4 text-[52px] font-black uppercase tracking-tight text-[#0D1F1A]/[0.04] pointer-events-none">Social</div>
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] p-3 text-white shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-7 w-7">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0D1F1A] mb-3 group-hover:text-[#1B1AFE] transition-colors">Community Management</h3>
                    <p className="text-[#47534E] leading-relaxed">Présence sociale, contenu et cohérence éditoriale pour nourrir la confiance dans la durée.</p>
                  </div>
                  <div className="relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1B1AFE]">Voir la page<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1">
  <path d="M5 12h14"></path>
  <path d="m12 5 7 7-7 7"></path>
</svg></div>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-[#E7EBE9] bg-gradient-to-br from-white via-[#FAFAFA] to-[#F9FAF9] p-8 lg:p-10">
            <div className="absolute inset-0 opacity-60 pointer-events-none">
              <div className="absolute -top-12 right-12 h-48 w-48 rounded-full bg-gradient-to-br from-[#D946EF] to-[#1B1AFE] blur-3xl opacity-10"></div>
            </div>
            <div className="relative z-10 mb-8 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#47534E] mb-3">Accompagnement</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1F1A] mb-4">Accompagnement{" pour entreprises algériennes"}</h2>
              <p className="text-lg text-[#47534E] leading-relaxed">Des formats concrets pour dirigeants et équipes qui veulent monter en compétences et accélérer leur croissance.</p>
            </div>
            <div className="relative z-10 grid lg:grid-cols-12 gap-5">
              <div className="lg:col-span-6">
                <Link className="group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-[28px] border border-[#E7EBE9] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-transparent" href="/services/formation">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D946EF] to-[#F0ABFC] opacity-0 transition-opacity duration-300 group-hover:opacity-[0.07]"></div>
                  <div className="absolute -bottom-2 right-4 text-[52px] font-black uppercase tracking-tight text-[#0D1F1A]/[0.04] pointer-events-none">Formation</div>
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-[#D946EF] to-[#F0ABFC] p-3 text-white shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open h-7 w-7">
                        <path d="M12 7v14"></path>
                        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0D1F1A] mb-3 group-hover:text-[#1B1AFE] transition-colors">Formations</h3>
                    <p className="text-[#47534E] leading-relaxed">Catalogue, mentorat et modules terrain directement reliés aux blocages commerciaux des PME.</p>
                  </div>
                  <div className="relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1B1AFE]">Voir la page<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1">
  <path d="M5 12h14"></path>
  <path d="m12 5 7 7-7 7"></path>
</svg></div>
                </Link>
              </div>
              <div className="lg:col-span-6">
                <Link className="group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-[28px] border border-[#E7EBE9] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-transparent" href="/services/acceleration">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1B1AFE] to-[#CA9BFA] opacity-0 transition-opacity duration-300 group-hover:opacity-[0.07]"></div>
                  <div className="absolute -bottom-2 right-4 text-[52px] font-black uppercase tracking-tight text-[#0D1F1A]/[0.04] pointer-events-none">Accélération</div>
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-[#1B1AFE] to-[#CA9BFA] p-3 text-white shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles h-7 w-7">
                        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                        <path d="M20 3v4"></path>
                        <path d="M22 5h-4"></path>
                        <path d="M4 17v2"></path>
                        <path d="M5 18H3"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0D1F1A] mb-3 group-hover:text-[#1B1AFE] transition-colors">Accélération</h3>
                    <p className="text-[#47534E] leading-relaxed">Diagnostic, structuration et accompagnement pour remettre de la méthode dans la croissance et l'exécution.</p>
                  </div>
                  <div className="relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1B1AFE]">Voir la page<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1">
  <path d="M5 12h14"></path>
  <path d="m12 5 7 7-7 7"></path>
</svg></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] p-12 lg:p-16 text-white text-center">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Besoin d'être orienté vers le bon service ?</h2>
              <p className="text-lg mb-8 opacity-90">Commencez par un diagnostic gratuit. Nous vous aidons à prioriser entre visibilité, acquisition, formation et structuration commerciale.</p>
              <Link data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-11 rounded-xl has-[>svg]:px-4 bg-white text-[#1B1AFE] hover:bg-white/90 font-bold px-8" href="/contact">Obtenir un diagnostic gratuit<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5 ml-2">
  <path d="M5 12h14"></path>
  <path d="m12 5 7 7-7 7"></path>
</svg></Link>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
