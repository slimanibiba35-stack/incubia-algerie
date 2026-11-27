// Rebuilt from the live page /services/digital/site-web (server-rendered HTML snapshot, 26/11/2026) by scripts/rebuild-from-live.mjs.
import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"

export const metadata: Metadata = {}

export default function ServicesDigitalSiteWebPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#F9FAF9] to-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CA9BFA]/10 text-[#CA9BFA] text-sm font-semibold mb-6"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-4 h-4">
  <circle cx="12" cy="12" r="10"></circle>
  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
  <path d="M2 12h20"></path>
</svg>Service</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1F1A] mb-6">Un Site Web Qui Convertit vos Visiteurs en Clients</h1>
            <p className="text-xl text-[#47534E] mb-8">Création de sites vitrine, e-commerce et landing pages professionnelles, optimisés pour le référencement et la conversion</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-white hover:bg-[#97D2C7] hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] h-11 rounded-xl px-6 has-[>svg]:px-4 bg-gradient-to-r from-[#CA9BFA] to-[#E9D5FF]" href="/contact">Demander un Devis Gratuit</Link>
              <Link data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border border-[#97D2C7] bg-transparent text-[#97D2C7] hover:bg-[rgba(151,210,199,0.06)] h-11 rounded-xl px-6 has-[>svg]:px-4" href="/tarifs">Voir les Tarifs</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0D1F1A] mb-4">Nos Solutions Web</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-[#E7EBE9] hover:border-[#CA9BFA] hover:shadow-lg transition-all group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-panels-top-left w-7 h-7 text-white">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M3 9h18"></path>
                  <path d="M9 21V9"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">Sites Vitrine</h3>
              <p className="text-[#47534E] leading-relaxed">Sites professionnels qui reflètent l'identité de votre marque et convertissent les visiteurs</p>
            </div>
            <div className="p-8 rounded-2xl border border-[#E7EBE9] hover:border-[#CA9BFA] hover:shadow-lg transition-all group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart w-7 h-7 text-white">
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">E-commerce</h3>
              <p className="text-[#47534E] leading-relaxed">Boutiques en ligne complètes avec paiement sécurisé et gestion des stocks</p>
            </div>
            <div className="p-8 rounded-2xl border border-[#E7EBE9] hover:border-[#CA9BFA] hover:shadow-lg transition-all group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-7 h-7 text-white">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">Landing Pages</h3>
              <p className="text-[#47534E] leading-relaxed">Pages d'atterrissage optimisées pour maximiser les conversions de vos campagnes</p>
            </div>
            <div className="p-8 rounded-2xl border border-[#E7EBE9] hover:border-[#CA9BFA] hover:shadow-lg transition-all group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search w-7 h-7 text-white">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">Refonte SEO</h3>
              <p className="text-[#47534E] leading-relaxed">Modernisation de votre site existant avec optimisation pour les moteurs de recherche</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0D1F1A] mb-4">Notre Processus en 4 Étapes</h2>
            <p className="text-lg text-[#47534E]">De la conception au lancement, un processus structuré et transparent</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-bold text-[#0D1F1A] mb-2">Brief</h3>
                <p className="text-sm text-[#47534E]">Analyse de vos besoins, définition des objectifs et planification du projet</p>
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#CA9BFA] to-transparent"></div>
            </div>
            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-bold text-[#0D1F1A] mb-2">Design</h3>
                <p className="text-sm text-[#47534E]">Création des maquettes UI/UX, validation du design et prototypes interactifs</p>
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#CA9BFA] to-transparent"></div>
            </div>
            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-bold text-[#0D1F1A] mb-2">Développement</h3>
                <p className="text-sm text-[#47534E]">Intégration responsive, développement des fonctionnalités et tests qualité</p>
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#CA9BFA] to-transparent"></div>
            </div>
            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-lg font-bold text-[#0D1F1A] mb-2">Livraison</h3>
                <p className="text-sm text-[#47534E]">Déploiement, formation à l'utilisation et support post-lancement</p>
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
              <h4 className="font-semibold text-[#0D1F1A] mb-2">Combien de temps prend la création d'un site web ?</h4>
              <p className="text-[#47534E] leading-relaxed text-sm">Un site vitrine est livré en 3 à 4 semaines, un e-commerce en 6 à 8 semaines, et une landing page en 5 à 7 jours. Les délais dépendent de la complexité du projet et de la rapidité des validations.</p>
            </div>
            <div className="p-6 rounded-2xl border border-[#E7EBE9] bg-white">
              <h4 className="font-semibold text-[#0D1F1A] mb-2">Le site est-il compatible mobile ?</h4>
              <p className="text-[#47534E] leading-relaxed text-sm">Oui, tous nos sites sont responsive et s'adaptent parfaitement à tous les écrans : mobile, tablette et desktop. C'est essentiel pour l'expérience utilisateur et le référencement.</p>
            </div>
            <div className="p-6 rounded-2xl border border-[#E7EBE9] bg-white">
              <h4 className="font-semibold text-[#0D1F1A] mb-2">Fournissez-vous l'hébergement ?</h4>
              <p className="text-[#47534E] leading-relaxed text-sm">Oui, l'hébergement pour la première année est inclus dans nos offres. Nous travaillons avec des hébergeurs fiables et performants. Le renouvellement annuel est de 30 000 DA.</p>
            </div>
            <div className="p-6 rounded-2xl border border-[#E7EBE9] bg-white">
              <h4 className="font-semibold text-[#0D1F1A] mb-2">Puis-je mettre à jour le site moi-même ?</h4>
              <p className="text-[#47534E] leading-relaxed text-sm">Absolument. Nous vous formons à l'utilisation du tableau de bord administrateur pour gérer vos contenus, produits et pages de manière autonome.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] p-12 text-white text-center">
            <div className="relative z-10 max-w-3xl mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-16 h-16 mx-auto mb-6">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
              <h3 className="text-3xl font-bold mb-4">Lancez Votre Site Web Aujourd'hui</h3>
              <p className="text-lg mb-8 opacity-90">Demandez un devis gratuit et recevez une proposition personnalisée sous 48h</p>
              <Link data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-11 rounded-xl px-6 has-[>svg]:px-4 bg-white text-[#CA9BFA] hover:bg-white/90" href="/contact">Demander un Devis Gratuit</Link>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
