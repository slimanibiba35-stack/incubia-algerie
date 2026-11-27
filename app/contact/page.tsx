// Rebuilt from the live page /contact (server-rendered HTML snapshot, 26/11/2026) by scripts/rebuild-from-live.mjs.
import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { ContactForm } from '@/components/site/contact-form'

export const metadata: Metadata = {
  "title": {
    "absolute": "Contactez-nous | Incubia Algérie"
  },
  "description": "Prenez contact avec Incubia Algérie pour faire le point sur votre visibilité, votre prospection et votre organisation commerciale."
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFD] overflow-hidden">
      <SiteHeader />
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#1B1AFE]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#4B4AFF]/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] right-[-5%] rotate-90 origin-center select-none text-[15vw] font-black text-[#0D1F1A]/[0.02] leading-none uppercase">Incubia</div>
        <div className="absolute bottom-[10%] left-[-5%] select-none text-[12vw] font-black text-[#1B1AFE]/[0.02] leading-none uppercase">Contact</div>
      </div>
      <section className="relative pt-24 pb-8 lg:pt-32 lg:pb-12 z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#1B1AFE]/10 text-[#1B1AFE] text-sm font-bold mb-8 shadow-sm"><span className="relative flex h-2 w-2">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1B1AFE] opacity-75"></span>
  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1B1AFE]"></span>
</span>DISPONIBLE 24/7</div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[#0D1F1A] mb-4 lg:mb-6 tracking-tight leading-[1.1]">{"Clarifions Vos "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF]">Priorités</span></h1>
            <p className="text-base lg:text-xl text-[#47534E] font-medium max-w-2xl mx-auto leading-relaxed">Que vous cherchiez plus de visibilité, plus de prospects ou une meilleure organisation commerciale, notre équipe est prête à vous aider à cadrer les prochaines actions.</p>
          </div>
        </div>
      </section>
      <section className="relative py-8 lg:py-12 z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <div className="relative p-0.5 rounded-3xl bg-gradient-to-br from-[#E7EBE9] via-white to-[#E7EBE9] shadow-2xl shadow-black/5">
                <div className="bg-white rounded-[1.4rem] p-6 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 lg:mb-8">
                    <div className="w-10 h-10 rounded-xl bg-[#1B1AFE] flex items-center justify-center text-white shadow-lg shadow-[#1B1AFE]/20 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square w-5 h-5">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#0D1F1A]">Envoyez un message</h2>
                      <p className="text-xs sm:text-sm text-[#47534E]">Réponse garantie sous 24 heures</p>
                    </div>
                  </div>
                  <ContactForm />
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-10">
              <div className="grid gap-6">
                <h3 className="text-2xl font-black text-[#0D1F1A] mb-1 uppercase tracking-tight">Coordonnées</h3>
                <p className="text-base text-[#47534E] mb-3">Retrouvez-nous ou contactez-nous directement.</p>
                <div className="grid gap-4">
                  <a href="mailto:contact@incubia-algerie.com" className="group p-4 sm:p-5 rounded-3xl bg-white border border-[#E7EBE9] hover:border-[#1B1AFE] hover:shadow-2xl hover:shadow-[#1B1AFE]/5 transition-all flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#1B1AFE]/5 flex items-center justify-center text-[#1B1AFE] group-hover:bg-[#1B1AFE] group-hover:text-white transition-all duration-500 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-6 h-6 sm:w-7 sm:h-7">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-[10px] sm:text-xs font-bold text-[#47534E] uppercase tracking-widest mb-0.5">Email</h4>
                      <p className="text-base sm:text-lg font-bold text-[#0D1F1A] truncate break-all sm:break-normal">contact@incubia-algerie.com</p>
                    </div>
                  </a>
                  <a href="https://wa.me/213542999301" target="_blank" rel="noopener noreferrer" className="group p-4 sm:p-5 rounded-3xl bg-white border border-[#E7EBE9] hover:border-[#25D366] hover:shadow-2xl hover:shadow-[#25D366]/5 transition-all flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#25D366]/5 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all duration-500 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle w-6 h-6 sm:w-7 sm:h-7">
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-[10px] sm:text-xs font-bold text-[#47534E] uppercase tracking-widest mb-0.5">WhatsApp</h4>
                      <p className="text-base sm:text-lg font-bold text-[#0D1F1A]">Discutez avec nous en direct</p>
                    </div>
                  </a>
                  <a href="tel:042055188" className="group p-4 sm:p-5 rounded-3xl bg-white border border-[#E7EBE9] hover:border-[#1B1AFE] hover:shadow-2xl hover:shadow-[#1B1AFE]/5 transition-all flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#00DDA3]/5 flex items-center justify-center text-[#00DDA3] group-hover:bg-[#00DDA3] group-hover:text-white transition-all duration-500 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-6 h-6 sm:w-7 sm:h-7">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[10px] sm:text-xs font-bold text-[#47534E] uppercase tracking-widest mb-0.5">Téléphone</h4>
                      <p className="text-base sm:text-lg font-bold text-[#0D1F1A]">042 05 51 88</p>
                    </div>
                  </a>
                  <div className="group p-4 sm:p-5 rounded-3xl bg-white border border-[#E7EBE9] hover:border-[#FF6B6B] hover:shadow-2xl hover:shadow-[#FF6B6B]/5 transition-all flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FF6B6B]/5 flex items-center justify-center text-[#FF6B6B] group-hover:bg-[#FF6B6B] group-hover:text-white transition-all duration-500 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-6 h-6 sm:w-7 sm:h-7">
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[10px] sm:text-xs font-bold text-[#47534E] uppercase tracking-widest mb-0.5">Adresse</h4>
                      <p className="text-base sm:text-lg font-bold text-[#0D1F1A]">Oran, Algérie</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative p-6 sm:p-8 rounded-[2.5rem] bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] text-white overflow-hidden shadow-2xl shadow-[#1B1AFE]/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock absolute top-[-20%] right-[-10%] w-64 h-64 text-white/5 -rotate-12">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6 sm:mb-8">
                    <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-5 h-5 text-white">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold">Horaires d'Ouverture</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-white/80 font-medium text-xs sm:text-sm">Lundi - Jeudi</span>
                      <span className="text-base sm:text-lg font-bold">09h00 - 17h00</span>
                    </div>
                    {/* Owner request (20/11/2026): Friday is no longer a working day. */}
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 font-medium text-sm sm:text-base">Vendredi - Dimanche</span>
                      <span className="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-sm text-[10px] sm:text-sm font-bold uppercase tracking-wider">Fermé</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[2.5rem] overflow-hidden h-[250px] sm:h-[300px] border-4 border-white shadow-2xl relative group">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <iframe src="https://maps.google.com/maps?q=Oran,+Alg%C3%A9rie&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{border: "0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Incubia Algérie - Localisation" className="w-full h-full grayscale-[0.3] hover:grayscale-0 transition-all duration-700"></iframe>
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md shadow-xl flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-sm font-bold text-[#0D1F1A]">Notre Siège à Oran</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 lg:py-12 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] rotate-3 bg-[#F9FAF9] z-0"></div>
        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-[#1B1AFE] mb-1">16+</div>
              <div className="text-xs font-bold text-[#47534E] uppercase tracking-widest">Entreprises accompagnées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-[#1B1AFE] mb-1">12</div>
              <div className="text-xs font-bold text-[#47534E] uppercase tracking-widest">Experts dédiés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-[#1B1AFE] mb-1">98%</div>
              <div className="text-xs font-bold text-[#47534E] uppercase tracking-widest">Satisfaction client</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-[#1B1AFE] mb-1">5+</div>
              <div className="text-xs font-bold text-[#47534E] uppercase tracking-widest">Années d'expérience</div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
