// Rebuilt from the live page /blog (server-rendered HTML snapshot, 26/11/2026) by scripts/rebuild-from-live.mjs.
import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"

export const metadata: Metadata = {
  "title": {
    "absolute": "Blog PME & B2B | Incubia Algérie"
  },
  "description": "Conseils concrets pour développer son entreprise en Algérie : prospection, visibilité digitale, CRM et organisation commerciale."
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#F9FAF9] to-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B1AFE]/10 text-[#1B1AFE] text-sm font-semibold mb-6"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-4 h-4">
  <path d="M12 7v14"></path>
  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
</svg>Blog</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1F1A] mb-6">Blog Incubia</h1>
            <p className="text-xl text-[#47534E]">Conseils concrets pour développer votre entreprise en Algérie</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <Link className="group block rounded-3xl overflow-hidden border border-[#E7EBE9] hover:shadow-2xl transition-all duration-300" href="/blog/developper-entreprise-algerie-5-leviers">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-[#1B1AFE]/10 to-[#CA9BFA]/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-24 h-24 text-[#1B1AFE]/30">
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <div className="p-8 lg:py-12 flex flex-col justify-center">
                <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#1B1AFE]/10 text-[#1B1AFE] hover:bg-[#1B1AFE]/20 w-fit mb-4">Développement commercial</div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1F1A] mb-4 group-hover:text-[#1B1AFE] transition-colors">Développer son entreprise en Algérie : 5 leviers concrets pour générer plus d'opportunités</h2>
                <p className="text-lg text-[#47534E] mb-6 leading-relaxed">Une lecture simple des priorités commerciales et digitales qui font gagner du temps aux dirigeants PME.</p>
                <div className="flex items-center gap-4 text-sm text-[#47534E]">
                  <div className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user w-4 h-4">
  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
  <circle cx="12" cy="7" r="4"></circle>
</svg>Ahmed Benali</div>
                  <span>•</span>
                  <div className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-4 h-4">
  <circle cx="12" cy="12" r="10"></circle>
  <polyline points="12 6 12 12 16 14"></polyline>
</svg>8{" min"}</div>
                  <span>•</span>
                  <span>10/12/2025</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section className="py-8 bg-white border-y border-[#E7EBE9]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="flex flex-wrap gap-3 justify-center">
            <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-white hover:bg-[#97D2C7] hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 rounded-xl bg-[#1B1AFE]">Tous</button>
            <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border border-[#97D2C7] bg-transparent text-[#97D2C7] hover:bg-[rgba(151,210,199,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 rounded-xl">Développement commercial</button>
            <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border border-[#97D2C7] bg-transparent text-[#97D2C7] hover:bg-[rgba(151,210,199,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 rounded-xl">Organisation commerciale</button>
            <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border border-[#97D2C7] bg-transparent text-[#97D2C7] hover:bg-[rgba(151,210,199,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 rounded-xl">Visibilité digitale</button>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link className="group block rounded-2xl border border-[#E7EBE9] overflow-hidden hover:shadow-2xl transition-all duration-300" href="/blog/erreurs-prospection-b2b">
              <div className="aspect-video bg-gradient-to-br from-[#E7EBE9] to-[#F9FAF9] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-16 h-16 text-[#47534E]/30 group-hover:scale-110 transition-transform">
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#1B1AFE]/10 text-[#1B1AFE] hover:bg-[#1B1AFE]/20">Développement commercial</div>
                  <span className="text-xs text-[#47534E]">6{" min"}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0D1F1A] mb-2 group-hover:text-[#1B1AFE] transition-colors line-clamp-2">5 erreurs qui bloquent votre prospection B2B</h3>
                <p className="text-sm text-[#47534E] mb-4 line-clamp-2 leading-relaxed">Messages trop génériques, relances absentes et cible floue : les blocages les plus fréquents côté acquisition.</p>
                <div className="flex items-center gap-3 text-xs text-[#47534E]">
                  <span>Samia Khelifi</span>
                  <span>•</span>
                  <span>08/12/2025</span>
                </div>
              </div>
            </Link>
            <Link className="group block rounded-2xl border border-[#E7EBE9] overflow-hidden hover:shadow-2xl transition-all duration-300" href="/blog/structurer-cycle-commercial-30-jours">
              <div className="aspect-video bg-gradient-to-br from-[#E7EBE9] to-[#F9FAF9] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-16 h-16 text-[#47534E]/30 group-hover:scale-110 transition-transform">
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#1B1AFE]/10 text-[#1B1AFE] hover:bg-[#1B1AFE]/20">Organisation commerciale</div>
                  <span className="text-xs text-[#47534E]">10{" min"}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0D1F1A] mb-2 group-hover:text-[#1B1AFE] transition-colors line-clamp-2">Comment structurer votre cycle commercial en 30 jours</h3>
                <p className="text-sm text-[#47534E] mb-4 line-clamp-2 leading-relaxed">Un plan simple pour clarifier vos offres, votre suivi et vos priorités de relance.</p>
                <div className="flex items-center gap-3 text-xs text-[#47534E]">
                  <span>Karim Meziane</span>
                  <span>•</span>
                  <span>05/12/2025</span>
                </div>
              </div>
            </Link>
            <Link className="group block rounded-2xl border border-[#E7EBE9] overflow-hidden hover:shadow-2xl transition-all duration-300" href="/blog/publicite-digitale-budget-utile">
              <div className="aspect-video bg-gradient-to-br from-[#E7EBE9] to-[#F9FAF9] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-16 h-16 text-[#47534E]/30 group-hover:scale-110 transition-transform">
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#1B1AFE]/10 text-[#1B1AFE] hover:bg-[#1B1AFE]/20">Visibilité digitale</div>
                  <span className="text-xs text-[#47534E]">12{" min"}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0D1F1A] mb-2 group-hover:text-[#1B1AFE] transition-colors line-clamp-2">Publicité digitale : lancer des campagnes utiles sans gaspiller votre budget</h3>
                <p className="text-sm text-[#47534E] mb-4 line-clamp-2 leading-relaxed">Comment cadrer votre offre, vos messages et vos audiences avant de dépenser en acquisition.</p>
                <div className="flex items-center gap-3 text-xs text-[#47534E]">
                  <span>Yasmine Larbi</span>
                  <span>•</span>
                  <span>03/12/2025</span>
                </div>
              </div>
            </Link>
            <Link className="group block rounded-2xl border border-[#E7EBE9] overflow-hidden hover:shadow-2xl transition-all duration-300" href="/blog/crm-simple-suivi-prospects">
              <div className="aspect-video bg-gradient-to-br from-[#E7EBE9] to-[#F9FAF9] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-16 h-16 text-[#47534E]/30 group-hover:scale-110 transition-transform">
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#1B1AFE]/10 text-[#1B1AFE] hover:bg-[#1B1AFE]/20">Organisation commerciale</div>
                  <span className="text-xs text-[#47534E]">7{" min"}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0D1F1A] mb-2 group-hover:text-[#1B1AFE] transition-colors line-clamp-2">Mettre en place un CRM simple pour ne plus oublier aucun prospect</h3>
                <p className="text-sm text-[#47534E] mb-4 line-clamp-2 leading-relaxed">Un cadre léger pour mieux suivre vos échanges, vos relances et vos conversions.</p>
                <div className="flex items-center gap-3 text-xs text-[#47534E]">
                  <span>Mehdi Bouazza</span>
                  <span>•</span>
                  <span>01/12/2025</span>
                </div>
              </div>
            </Link>
            <Link className="group block rounded-2xl border border-[#E7EBE9] overflow-hidden hover:shadow-2xl transition-all duration-300" href="/blog/cas-client-offre-demandes-qualifiees">
              <div className="aspect-video bg-gradient-to-br from-[#E7EBE9] to-[#F9FAF9] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-16 h-16 text-[#47534E]/30 group-hover:scale-110 transition-transform">
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#1B1AFE]/10 text-[#1B1AFE] hover:bg-[#1B1AFE]/20">Visibilité digitale</div>
                  <span className="text-xs text-[#47534E]">9{" min"}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0D1F1A] mb-2 group-hover:text-[#1B1AFE] transition-colors line-clamp-2">Cas client : clarifier son offre pour augmenter ses demandes qualifiées</h3>
                <p className="text-sm text-[#47534E] mb-4 line-clamp-2 leading-relaxed">Comment une PME a revu ses messages et son parcours digital pour générer plus de conversations utiles.</p>
                <div className="flex items-center gap-3 text-xs text-[#47534E]">
                  <span>Nadia Amrani</span>
                  <span>•</span>
                  <span>28/11/2025</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-center gap-2 mt-12">
            <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border border-[#97D2C7] bg-transparent text-[#97D2C7] hover:bg-[rgba(151,210,199,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 rounded-xl" disabled>Précédent</button>
            <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-white hover:bg-[#97D2C7] hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 rounded-xl bg-[#1B1AFE]">1</button>
            <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border border-[#97D2C7] bg-transparent text-[#97D2C7] hover:bg-[rgba(151,210,199,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 rounded-xl">2</button>
            <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border border-[#97D2C7] bg-transparent text-[#97D2C7] hover:bg-[rgba(151,210,199,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 rounded-xl">3</button>
            <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border border-[#97D2C7] bg-transparent text-[#97D2C7] hover:bg-[rgba(151,210,199,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 rounded-xl">4</button>
            <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border border-[#97D2C7] bg-transparent text-[#97D2C7] hover:bg-[rgba(151,210,199,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 rounded-xl">Suivant</button>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-[#0D1F1A] mb-4">Besoin d'un plan d'action commercial ?</h3>
            <p className="text-lg text-[#47534E] mb-8">Parlons visibilité, prospection et organisation commerciale avec un diagnostic gratuit.</p>
            <Link data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-white hover:bg-[#97D2C7] hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] h-11 rounded-xl px-6 has-[>svg]:px-4 bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF]" href="/contact">Demander un Diagnostic<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-5 h-5 ml-2">
  <path d="m9 18 6-6-6-6"></path>
</svg></Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
