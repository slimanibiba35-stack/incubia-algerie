// Rebuilt from the live page /a-propos (server-rendered HTML snapshot, 26/11/2026) by scripts/rebuild-from-live.mjs.
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { AboutRedesign } from "@/components/site/about-redesign"

export const metadata: Metadata = {
  "title": {
    "absolute": "À Propos d'Incubia | Partenaire B2B pour Entreprises Algériennes | Incubia Algérie"
  },
  "description": "Découvrez comment Incubia accompagne les entreprises algériennes sur la visibilité, la prospection et l'organisation commerciale."
}

export default function AProposPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <AboutRedesign />
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="inline-block py-2 px-4 rounded-full bg-[#1B1AFE]/10 text-[#1B1AFE] font-semibold text-sm mb-6">Notre Équipe B2B</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D1F1A] tracking-tight mb-6 text-balance">Des Opérateurs Qui Connaissent{" "}<span className="text-[#1B1AFE]">le Terrain Algérien</span></h2>
            <p className="text-lg md:text-xl text-[#47534E] leading-relaxed max-w-3xl mx-auto">Pas de théorie. Des experts qui ont créé, vendu et structuré des entreprises en Algérie. Ils vous aident à{" "}<strong className="text-[#1B1AFE]">structurer votre acquisition commerciale</strong>{" avec des méthodes éprouvées."}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="group">
              <div className="relative bg-white rounded-3xl p-8 border-2 border-[#E7EBE9] hover:border-[#1B1AFE]/30 hover:shadow-2xl transition-all duration-300">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden ring-4 ring-[#1B1AFE]/10 group-hover:ring-[#1B1AFE]/30 transition-all">
                  <Image src="/hichem-hammouche.png" alt="Hichem Hammouche" width={128} height={128} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F1A]/40 to-transparent"></div>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-[#0D1F1A] text-xl mb-2">Hichem Hammouche</h3>
                  <p className="text-[#47534E] text-sm mb-4">Expert Commercial B2B</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3E8FF] text-[#1B1AFE] text-xs font-semibold mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-3.5 h-3.5">
  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
  <circle cx="12" cy="8" r="6"></circle>
</svg>Vente B2B en Algérie</div>
                  <div className="pt-4 border-t border-[#E7EBE9]">
                    <p className="text-sm text-[#47534E]"><strong className="text-[#0D1F1A]">Focus:</strong>{" "}{"Prospection & closing"}</p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1B1AFE]/0 to-[#CA9BFA]/0 group-hover:from-[#1B1AFE]/5 group-hover:to-[#CA9BFA]/5 transition-all pointer-events-none"></div>
              </div>
            </div>
            <div className="group">
              <div className="relative bg-white rounded-3xl p-8 border-2 border-[#E7EBE9] hover:border-[#1B1AFE]/30 hover:shadow-2xl transition-all duration-300">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden ring-4 ring-[#1B1AFE]/10 group-hover:ring-[#1B1AFE]/30 transition-all">
                  <Image src="/radia-difallah.png" alt="Radia Diffalah" width={128} height={128} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F1A]/40 to-transparent"></div>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-[#0D1F1A] text-xl mb-2">Radia Diffalah</h3>
                  <p className="text-[#47534E] text-sm mb-4">Consultante Finance</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3E8FF] text-[#1B1AFE] text-xs font-semibold mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-3.5 h-3.5">
  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
  <circle cx="12" cy="8" r="6"></circle>
</svg>Structuration financière</div>
                  <div className="pt-4 border-t border-[#E7EBE9]">
                    <p className="text-sm text-[#47534E]"><strong className="text-[#0D1F1A]">Focus:</strong>{" "}{"Budget & pilotage"}</p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1B1AFE]/0 to-[#CA9BFA]/0 group-hover:from-[#1B1AFE]/5 group-hover:to-[#CA9BFA]/5 transition-all pointer-events-none"></div>
              </div>
            </div>
            <div className="group">
              <div className="relative bg-white rounded-3xl p-8 border-2 border-[#E7EBE9] hover:border-[#1B1AFE]/30 hover:shadow-2xl transition-all duration-300">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden ring-4 ring-[#1B1AFE]/10 group-hover:ring-[#1B1AFE]/30 transition-all">
                  <Image src="/professional-young-algerian-man-portrait.jpg" alt="Alexandre Mellal" width={128} height={128} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F1A]/40 to-transparent"></div>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-[#0D1F1A] text-xl mb-2">Alexandre Mellal</h3>
                  <p className="text-[#47534E] text-sm mb-4">Expert Événementiel</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3E8FF] text-[#1B1AFE] text-xs font-semibold mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-3.5 h-3.5">
  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
  <circle cx="12" cy="8" r="6"></circle>
</svg>Communication B2B</div>
                  <div className="pt-4 border-t border-[#E7EBE9]">
                    <p className="text-sm text-[#47534E]"><strong className="text-[#0D1F1A]">Focus:</strong>{" "}{"Événements & networking"}</p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1B1AFE]/0 to-[#CA9BFA]/0 group-hover:from-[#1B1AFE]/5 group-hover:to-[#CA9BFA]/5 transition-all pointer-events-none"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#F9FAF9] to-white border border-[#E7EBE9]">
              <div className="text-3xl md:text-4xl font-bold text-[#1B1AFE] mb-2">10+</div>
              <div className="text-sm text-[#47534E]">Années d'Expérience</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#F9FAF9] to-white border border-[#E7EBE9]">
              <div className="text-3xl md:text-4xl font-bold text-[#1B1AFE] mb-2">Terrain</div>
              <div className="text-sm text-[#47534E]">Approche Pratique</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#F9FAF9] to-white border border-[#E7EBE9]">
              <div className="text-3xl md:text-4xl font-bold text-[#1B1AFE] mb-2">B2B</div>
              <div className="text-sm text-[#47534E]">Spécialisation</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#F9FAF9] to-white border border-[#E7EBE9]">
              <div className="text-3xl md:text-4xl font-bold text-[#1B1AFE] mb-2">Résultats</div>
              <div className="text-sm text-[#47534E]">Orientation Action</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 relative overflow-hidden" style={{backgroundColor: "var(--about-bg-white)"}}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="relative text-center overflow-hidden" style={{background: "linear-gradient(135deg, var(--about-bg-dark) 0%, var(--about-bg-dark-end) 100%)", borderRadius: "var(--about-radius-hero)", padding: "3rem 2rem"}}>
            <div className="absolute inset-0 pointer-events-none" style={{borderRadius: "var(--about-radius-hero)"}}>
              <div className="absolute -top-20 left-1/4 w-72 h-72 rounded-full blur-[100px]" style={{backgroundColor: "var(--about-primary)"}}></div>
              <div className="absolute -bottom-10 right-1/4 w-60 h-60 rounded-full blur-[90px]" style={{backgroundColor: "var(--about-secondary)"}}></div>
            </div>
            <div className="absolute w-2 h-2 rounded-full opacity-50" style={{top: "1.5rem", left: "2.5rem", color: "var(--about-primary)", backgroundColor: "var(--about-primary)"}}></div>
            <div className="absolute w-2 h-2 rounded-full opacity-50" style={{top: "2rem", right: "3.5rem", color: "var(--about-secondary)", backgroundColor: "var(--about-secondary)"}}></div>
            <div className="absolute w-2 h-2 rounded-full opacity-50" style={{bottom: "2rem", left: "4rem", color: "var(--about-secondary)", backgroundColor: "var(--about-secondary)"}}></div>
            <div className="absolute w-2 h-2 rounded-full opacity-50" style={{bottom: "1.5rem", right: "2.5rem", color: "var(--about-primary)", backgroundColor: "var(--about-primary)"}}></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-6 border" style={{backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", borderColor: "rgba(255,255,255,0.15)"}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-4 h-4" style={{color: "var(--about-secondary)"}}>
  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>Passons à l'action</div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">Votre entreprise peut gagner en visibilité,{" "}<span className="bg-clip-text text-transparent" style={{backgroundImage: "linear-gradient(to right, var(--about-primary), var(--about-secondary))"}}>en prospects et en organisation.</span></h3>
              <p className="text-lg mb-10 leading-relaxed" style={{color: "rgba(255,255,255,0.6)"}}>Obtenez un diagnostic gratuit pour identifier les actions prioritaires à mettre en place dès maintenant.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div tabIndex={0}>
                  <Link data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#0C6158] hover:bg-[#97D2C7] hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] h-11 has-[>svg]:px-4 rounded-2xl px-8 border-0 font-bold text-white text-base" style={{background: "linear-gradient(to right, var(--about-primary), var(--about-primary-end))", boxShadow: "0 8px 32px color-mix(in srgb, var(--about-primary) 40%, transparent)"}} href="/contact">Diagnostic Gratuit<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 w-5 h-5">
  <path d="M5 12h14"></path>
  <path d="m12 5 7 7-7 7"></path>
</svg></Link>
                </div>
                <div tabIndex={0}>
                  <Link data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-[#97D2C7] bg-transparent hover:bg-[rgba(151,210,199,0.06)] h-11 has-[>svg]:px-4 rounded-2xl px-8 font-semibold text-base border text-white" style={{borderColor: "rgba(255,255,255,0.2)", backgroundColor: "rgba(255,255,255,0.1)"}} href="/equipe"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users mr-2 w-4 h-4">
  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
  <circle cx="9" cy="7" r="4"></circle>
  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>Rencontrer l'Équipe</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter stats={false} />
    </main>
  )
}
