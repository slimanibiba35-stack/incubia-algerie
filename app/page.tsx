// Rebuilt from the live page / (server-rendered HTML snapshot, 26/11/2026) by scripts/rebuild-from-live.mjs.
import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { HomeIntro } from "@/components/site/home-intro"
import { HomeMethod, HomePoles, HomeWhy } from "@/components/site/home-sections"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full">
      <SiteHeader />
      {/* Redesign approved in the preview (20/11/2026): replaces the old hero, "Comment On Travaille",
          "Trois Leviers" and "Pourquoi Choisir" sections. Method/why texts are the live ones. */}
      <HomeIntro />
      <HomePoles />
      <HomeMethod />
      <HomeWhy />
      <section className="relative py-28 bg-gradient-to-b from-white to-[#F9FAF9] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 right-[12%] w-72 h-72 rounded-full bg-[#1B1AFE]/10 blur-3xl"></div>
          <div className="absolute bottom-16 left-[8%] w-72 h-72 rounded-full bg-[#CA9BFA]/10 blur-3xl"></div>
        </div>
        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#1B1AFE]/10 px-4 py-2 text-sm font-semibold text-[#1B1AFE] mb-6"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase-business w-4 h-4">
  <path d="M12 12h.01"></path>
  <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
  <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
</svg>Réalisations</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D1F1A] tracking-tight mb-6">Des transformations visibles sur les offres, les outils et l'organisation commerciale.</h2>
            <p className="text-lg md:text-xl text-[#47534E] leading-relaxed">Nous intervenons sur des chantiers concrets, pas sur des promesses abstraites. Voici le type d'impact que nos clients recherchent.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            <div className="relative overflow-hidden rounded-[28px] border border-[#E7EBE9] bg-white p-8 shadow-sm hover:shadow-2xl transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] opacity-[0.06]"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] p-3 text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-text w-7 h-7">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    <path d="M13 8H7"></path>
                    <path d="M17 12H7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0D1F1A] mb-3">Offres clarifiées</h3>
                <p className="text-[#47534E] leading-relaxed">Refonte du discours, hiérarchisation des messages et meilleure lisibilité commerciale.</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[28px] border border-[#E7EBE9] bg-white p-8 shadow-sm hover:shadow-2xl transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] opacity-[0.06]"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] p-3 text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-panel-top w-7 h-7">
                    <rect width="18" height="7" x="3" y="3" rx="1"></rect>
                    <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                    <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0D1F1A] mb-3">Parcours digital remis à plat</h3>
                <p className="text-[#47534E] leading-relaxed">Sites, pages et campagnes recadrés pour servir la prise de contact et la conversion.</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[28px] border border-[#E7EBE9] bg-white p-8 shadow-sm hover:shadow-2xl transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-[#059669] to-[#10B981] opacity-[0.06]"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-[#059669] to-[#10B981] p-3 text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-column w-7 h-7">
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="M18 17V9"></path>
                    <path d="M13 17V5"></path>
                    <path d="M8 17v-3"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0D1F1A] mb-3">Pilotage plus concret</h3>
                <p className="text-[#47534E] leading-relaxed">Des équipes qui suivent enfin les bons indicateurs et savent quoi relancer en priorité.</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-white hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] h-11 has-[>svg]:px-4 rounded-full bg-[#0D1F1A] hover:bg-[#0D1F1A]/90 px-8" href="/realisations">Voir les réalisations<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 w-5 h-5">
  <path d="M5 12h14"></path>
  <path d="m12 5 7 7-7 7"></path>
</svg></Link>
          </div>
        </div>
      </section>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B1AFE] via-[#4B4AFF] to-[#CA9BFA]">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-10 h-10 text-white">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance tracking-tight">Prêt à booster votre activité ?</h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">Obtenez un diagnostic gratuit de votre stratégie digitale et commerciale. Nos experts B2B vous orientent vers les meilleures actions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link data-slot="button" className="inline-flex items-center justify-center whitespace-nowrap duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] has-[>svg]:px-4 gap-2 h-16 px-10 bg-white text-[#1B1AFE] font-bold rounded-full hover:bg-white/90 transition-all hover:scale-105 shadow-2xl text-lg" href="/contact">Obtenir un Diagnostic Gratuit<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5">
  <path d="M5 12h14"></path>
  <path d="m12 5 7 7-7 7"></path>
</svg></Link>
              <Link data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-transparent has-[>svg]:px-4 h-16 px-10 border-2 border-white text-white hover:bg-white hover:text-[#1B1AFE] rounded-full font-bold transition-all hover:scale-105 text-lg" href="/services">Voir Nos Services</Link>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span>Diagnostic 100% gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span>Réponse sous 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="ip-faq relative py-32 bg-gradient-to-b from-white to-[#F9FAF9] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#1B1AFE]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#CA9BFA]/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#1B1AFE] to-[#CA9BFA] mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-help w-8 h-8 text-white">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D1F1A] mb-6 tracking-tight">Questions Fréquentes</h2>
            <p className="text-lg md:text-xl text-[#47534E] max-w-2xl mx-auto">Tout ce que vous devez savoir sur nos services B2B</p>
          </div>
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="last:border-b-0 group bg-white border-2 border-[#E7EBE9] hover:border-[#1B1AFE]/30 rounded-2xl px-8 shadow-sm hover:shadow-lg data-[state=open]:shadow-xl data-[state=open]:border-[#1B1AFE]/50 transition-all overflow-hidden">
                <AccordionTrigger className="text-left font-bold text-[#0D1F1A] hover:text-[#1B1AFE] hover:no-underline py-6 text-lg transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#1B1AFE]/10 to-[#CA9BFA]/10 flex items-center justify-center text-[#1B1AFE] font-bold text-sm mt-1">1</span>
                    <span className="flex-1">À qui s'adressent vos services B2B ?</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-[#47534E] pb-6 pt-2 pl-12 leading-relaxed text-base">
                  Nos services s'adressent aux entreprises algériennes établies : PME, structures commerciales et dirigeants qui veulent gagner en visibilité, acquérir des clients B2B ou mieux structurer leur activité.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="last:border-b-0 group bg-white border-2 border-[#E7EBE9] hover:border-[#1B1AFE]/30 rounded-2xl px-8 shadow-sm hover:shadow-lg data-[state=open]:shadow-xl data-[state=open]:border-[#1B1AFE]/50 transition-all overflow-hidden">
                <AccordionTrigger className="text-left font-bold text-[#0D1F1A] hover:text-[#1B1AFE] hover:no-underline py-6 text-lg transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#1B1AFE]/10 to-[#CA9BFA]/10 flex items-center justify-center text-[#1B1AFE] font-bold text-sm mt-1">2</span>
                    <span className="flex-1">Comment se déroule le diagnostic gratuit ?</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-[#47534E] pb-6 pt-2 pl-12 leading-relaxed text-base">
                  Le diagnostic est un échange d'une heure par visio ou en présentiel. Nous analysons votre stratégie commerciale, votre présence digitale et vos processus. À la fin, vous recevez un plan d'action personnalisé avec des recommandations concrètes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="last:border-b-0 group bg-white border-2 border-[#E7EBE9] hover:border-[#1B1AFE]/30 rounded-2xl px-8 shadow-sm hover:shadow-lg data-[state=open]:shadow-xl data-[state=open]:border-[#1B1AFE]/50 transition-all overflow-hidden">
                <AccordionTrigger className="text-left font-bold text-[#0D1F1A] hover:text-[#1B1AFE] hover:no-underline py-6 text-lg transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#1B1AFE]/10 to-[#CA9BFA]/10 flex items-center justify-center text-[#1B1AFE] font-bold text-sm mt-1">3</span>
                    <span className="flex-1">Quels sont vos tarifs pour les services B2B ?</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-[#47534E] pb-6 pt-2 pl-12 leading-relaxed text-base">
                  Nos tarifs dépendent de vos besoins : prospection B2B, création de site web, publicité digitale ou community management. Retrouvez le détail de nos packs sur notre page Tarifs, puis chaque prestation est affinée après un diagnostic gratuit.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="last:border-b-0 group bg-white border-2 border-[#E7EBE9] hover:border-[#1B1AFE]/30 rounded-2xl px-8 shadow-sm hover:shadow-lg data-[state=open]:shadow-xl data-[state=open]:border-[#1B1AFE]/50 transition-all overflow-hidden">
                <AccordionTrigger className="text-left font-bold text-[#0D1F1A] hover:text-[#1B1AFE] hover:no-underline py-6 text-lg transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#1B1AFE]/10 to-[#CA9BFA]/10 flex items-center justify-center text-[#1B1AFE] font-bold text-sm mt-1">4</span>
                    <span className="flex-1">Accompagnez-vous les entreprises en cours de création ?</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-[#47534E] pb-6 pt-2 pl-12 leading-relaxed text-base">
                  Nous n'accompagnons pas les projets au stade d'idée. Si votre entreprise n'est pas encore créée, consultez notre Guide Entreprises pour les étapes de création et les dispositifs publics utiles. Nous intervenons surtout une fois la structure enregistrée et les priorités commerciales clarifiées.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="last:border-b-0 group bg-white border-2 border-[#E7EBE9] hover:border-[#1B1AFE]/30 rounded-2xl px-8 shadow-sm hover:shadow-lg data-[state=open]:shadow-xl data-[state=open]:border-[#1B1AFE]/50 transition-all overflow-hidden">
                <AccordionTrigger className="text-left font-bold text-[#0D1F1A] hover:text-[#1B1AFE] hover:no-underline py-6 text-lg transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#1B1AFE]/10 to-[#CA9BFA]/10 flex items-center justify-center text-[#1B1AFE] font-bold text-sm mt-1">5</span>
                    <span className="flex-1">Dans quels secteurs intervenez-vous ?</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-[#47534E] pb-6 pt-2 pl-12 leading-relaxed text-base">
                  Nous intervenons dans tous les secteurs : tech, industrie, services, commerce, BTP, santé, éducation, etc. Nos méthodes de prospection B2B et de digitalisation s'adaptent à votre marché et à votre cible.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="last:border-b-0 group bg-white border-2 border-[#E7EBE9] hover:border-[#1B1AFE]/30 rounded-2xl px-8 shadow-sm hover:shadow-lg data-[state=open]:shadow-xl data-[state=open]:border-[#1B1AFE]/50 transition-all overflow-hidden">
                <AccordionTrigger className="text-left font-bold text-[#0D1F1A] hover:text-[#1B1AFE] hover:no-underline py-6 text-lg transition-colors">
                  <span className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#1B1AFE]/10 to-[#CA9BFA]/10 flex items-center justify-center text-[#1B1AFE] font-bold text-sm mt-1">6</span>
                    <span className="flex-1">Comment mesurez-vous les résultats ?</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-[#47534E] pb-6 pt-2 pl-12 leading-relaxed text-base">
                  Nous suivons les KPIs clés : portée, engagement, croissance d'abonnés, clics et conversions. Des rapports détaillés vous sont transmis régulièrement avec des recommandations actionnables.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-br from-[#F9FAF9] to-white border-2 border-[#E7EBE9]">
              <p className="text-[#47534E] text-lg">Vous ne trouvez pas la réponse à votre question ?</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#1B1AFE] to-[#CA9BFA] text-white font-semibold hover:opacity-90 transition-opacity">Contactez notre équipe<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-help w-4 h-4">
  <circle cx="12" cy="12" r="10"></circle>
  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
  <path d="M12 17h.01"></path>
</svg></Link>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
