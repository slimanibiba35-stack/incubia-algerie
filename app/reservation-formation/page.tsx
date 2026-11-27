// Rebuilt from the live page /reservation-formation (server-rendered HTML snapshot, 26/11/2026) by scripts/rebuild-from-live.mjs.
import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { FormationBookingForm } from '@/components/site/formation-booking-form'

export const metadata: Metadata = {}

export default function ReservationFormationPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#CA9BFA]/10 via-[#E9D5FF]/5 to-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#CA9BFA]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1B1AFE]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#CA9BFA] to-[#E9D5FF] text-white text-sm font-semibold mb-6"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap w-4 h-4">
  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
  <path d="M22 10v6"></path>
  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
</svg>Réservation Formation</div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0D1F1A] mb-6">Réservez Votre Place en Formation</h1>
            <p className="text-xl text-[#47534E] mb-8">Développez vos compétences entrepreneuriales avec nos formations pratiques et notre réseau de mentors expérimentés</p>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#E7EBE9]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-8 h-8 text-[#CA9BFA] mx-auto mb-2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <div className="text-2xl font-bold text-[#0D1F1A]">2-4 semaines</div>
                <div className="text-sm text-[#47534E]">Durée moyenne</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#E7EBE9]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-8 h-8 text-[#1B1AFE] mx-auto mb-2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <div className="text-2xl font-bold text-[#0D1F1A]">8-12 participants</div>
                <div className="text-sm text-[#47534E]">Par session</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#E7EBE9]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-8 h-8 text-[#0284C7] mx-auto mb-2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
                <div className="text-2xl font-bold text-[#0D1F1A]">100% pratique</div>
                <div className="text-sm text-[#47534E]">Orienté résultats</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <FormationBookingForm />
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0D1F1A] mb-4">Pourquoi Choisir Nos Formations ?</h2>
            <p className="text-lg text-[#47534E] max-w-2xl mx-auto">Des formations conçues par des entrepreneurs pour des entrepreneurs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#E7EBE9] hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap w-7 h-7">
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                  <path d="M22 10v6"></path>
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">Expertise Pratique</h3>
              <p className="text-[#47534E]">Formateurs expérimentés qui ont réellement construit et développé des entreprises</p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-[#E7EBE9] hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-7 h-7">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">Petits Groupes</h3>
              <p className="text-[#47534E]">Sessions limitées à 8-12 participants pour un accompagnement personnalisé</p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-[#E7EBE9] hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0284C7] to-[#0EA5E9] flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-7 h-7">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">Résultats Concrets</h3>
              <p className="text-[#47534E]">Focus sur l'application immédiate et les résultats mesurables pour votre projet</p>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
