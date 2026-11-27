// Rebuilt from the live incubia-algerie.com footer (server-rendered HTML, 26/11/2026).
import Link from "next/link"
import Image from "next/image"

export function SiteFooter({ stats = true }: { stats?: boolean }) {
  return (
    <footer className="relative bg-gradient-to-br from-[#0D1F1A] via-[#1a1a2e] to-[#0D1F1A] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1B1AFE] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#CA9BFA] rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {stats && (
        <div className="py-12 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1B1AFE] to-[#CA9BFA] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-7 h-7 text-white">
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">16+</div>
                <div className="text-sm text-white/70">Clients B2B</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1B1AFE] to-[#CA9BFA] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-7 h-7 text-white">
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                  <path d="M20 3v4"></path>
                  <path d="M22 5h-4"></path>
                  <path d="M4 17v2"></path>
                  <path d="M5 18H3"></path>
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">5</div>
                <div className="text-sm text-white/70">Services Digitaux</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1B1AFE] to-[#CA9BFA] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-7 h-7 text-white">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">90%</div>
                <div className="text-sm text-white/70">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
        )}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-2 lg:col-span-4">
              <Link className="inline-block mb-6" href="/">
                <Image src="/logoincubia.svg" alt="Incubia-algerie Logo" width={160} height={35} className="h-10 w-auto brightness-0 invert" />
              </Link>
              <p className="text-white/80 mb-8 leading-relaxed text-base"><strong className="text-white">Incubia</strong>{" accompagne les entreprises algériennes sur trois leviers concrets : visibilité, acquisition de prospects et organisation commerciale."}</p>
              <div className="space-y-3 mb-8">
                <a href="mailto:contact@incubia-algerie.com" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-5 h-5">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <span className="text-sm">contact@incubia-algerie.com</span>
                </a>
                <a href="tel:042055188" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-5 h-5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <span className="text-sm">042 05 51 88</span>
                </a>
                <div className="flex items-start gap-3 text-white/70">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-5 h-5">
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span className="text-sm">Oran, Algérie</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-4">
                <p className="text-sm font-bold text-white flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4 text-[#CA9BFA]">
  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
  <path d="M20 3v4"></path>
  <path d="M22 5h-4"></path>
  <path d="M4 17v2"></path>
  <path d="M5 18H3"></path>
</svg>Diagnostic gratuit</p>
                <p className="text-sm text-white/70">Faites le point sur votre visibilité, votre prospection et votre organisation commerciale avec notre équipe.</p>
                <Link data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-160 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(151,210,199,0.12)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-white hover:bg-[#97D2C7] hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(12,97,88,0.06)] h-11 px-5 py-3 has-[>svg]:px-4 w-full bg-gradient-to-r from-[#1B1AFE] to-[#CA9BFA] hover:opacity-90 rounded-xl" href="/contact">Demander mon diagnostic</Link>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h4 className="font-bold text-white mb-5 text-base">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group" href="/services/commercial/prospection-b2b"><span className="w-1 h-1 rounded-full bg-[#1B1AFE] opacity-0 group-hover:opacity-100 transition-opacity"></span>Prospection B2B</Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group" href="/services/commercial/assistance-commerciale"><span className="w-1 h-1 rounded-full bg-[#1B1AFE] opacity-0 group-hover:opacity-100 transition-opacity"></span>Assistance Commerciale</Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group" href="/services/digital/site-web"><span className="w-1 h-1 rounded-full bg-[#1B1AFE] opacity-0 group-hover:opacity-100 transition-opacity"></span>Création de Site Web</Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group" href="/services/digital/publicite-digitale"><span className="w-1 h-1 rounded-full bg-[#1B1AFE] opacity-0 group-hover:opacity-100 transition-opacity"></span>{"Publicité & Boost"}</Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group" href="/services/digital/community-management"><span className="w-1 h-1 rounded-full bg-[#1B1AFE] opacity-0 group-hover:opacity-100 transition-opacity"></span>Community Management</Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h4 className="font-bold text-white mb-5 text-base flex items-center gap-2">Formations<span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-[#CA9BFA] to-[#E9D5FF] text-white text-[9px] font-bold">NOUVEAU</span></h4>
              <ul className="space-y-3">
                <li>
                  <Link className="text-white/70 hover:text-[#CA9BFA] transition-colors text-sm flex items-center gap-2 group" href="/services/formation/catalogue"><span className="w-1 h-1 rounded-full bg-[#CA9BFA] opacity-0 group-hover:opacity-100 transition-opacity"></span>Catalogue Complet<span className="px-1.5 py-0.5 rounded bg-[#CA9BFA]/20 text-[#CA9BFA] text-[9px] font-bold">NOUVEAU</span></Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-[#CA9BFA] transition-colors text-sm flex items-center gap-2 group" href="/services/formation/mentorat"><span className="w-1 h-1 rounded-full bg-[#CA9BFA] opacity-0 group-hover:opacity-100 transition-opacity"></span>Mentorat</Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-[#CA9BFA] transition-colors text-sm flex items-center gap-2 group" href="/services/formation/b2b"><span className="w-1 h-1 rounded-full bg-[#CA9BFA] opacity-0 group-hover:opacity-100 transition-opacity"></span>Formations B2B</Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h4 className="font-bold text-white mb-5 text-base">Ressources</h4>
              <ul className="space-y-3">
                <li>
                  <Link className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group" href="/guide-entreprises"><span className="w-1 h-1 rounded-full bg-[#0284C7] opacity-0 group-hover:opacity-100 transition-opacity"></span>Guide Entreprises</Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group" href="/blog"><span className="w-1 h-1 rounded-full bg-[#0284C7] opacity-0 group-hover:opacity-100 transition-opacity"></span>{"Blog & Articles"}</Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group" href="/realisations"><span className="w-1 h-1 rounded-full bg-[#0284C7] opacity-0 group-hover:opacity-100 transition-opacity"></span>Nos Réalisations</Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group" href="/evenements"><span className="w-1 h-1 rounded-full bg-[#0284C7] opacity-0 group-hover:opacity-100 transition-opacity"></span>Événements</Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h4 className="font-bold text-white mb-5 text-base">Entreprise</h4>
              <ul className="space-y-3">
                <li>
                  <Link className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group" href="/tarifs"><span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>Tarifs</Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group" href="/a-propos"><span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>À propos</Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group" href="/equipe"><span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>Notre Équipe</Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group" href="/services/acceleration"><span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>Accélération PME</Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group" href="/contact"><span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/60">
              <p>{"© "}2026{" Incubia. Tous droits réservés."}</p>
              <div className="flex items-center gap-4">
                <Link className="hover:text-white transition-colors" href="/mentions-legales">Mentions légales</Link>
                <span className="text-white/30">•</span>
                <Link className="hover:text-white transition-colors" href="/confidentialite">Confidentialité</Link>
                <span className="text-white/30">•</span>
                <Link className="hover:text-white transition-colors" href="/cgv">CGV</Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#1B1AFE] hover:to-[#CA9BFA] transition-all group" href="https://facebook.com/incubadz">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook w-5 h-5 group-hover:scale-110 transition-transform">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#1B1AFE] hover:to-[#CA9BFA] transition-all group" href="https://linkedin.com/company/incubadz">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin w-5 h-5 group-hover:scale-110 transition-transform">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#1B1AFE] hover:to-[#CA9BFA] transition-all group" href="https://instagram.com/incubadz">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram w-5 h-5 group-hover:scale-110 transition-transform">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
