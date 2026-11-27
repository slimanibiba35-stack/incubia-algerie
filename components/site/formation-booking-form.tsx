"use client"

// Booking form of /reservation-formation, rebuilt from the live compiled code (26/11/2026).
// Posts to the existing /api/formation-booking route with the same fields as live.
import { useState, type ChangeEvent, type FormEvent } from "react"
import { CheckCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formations = [
  "Stratégie & Positionnement",
  "Marketing Digital & Growth",
  "Vente & Négociation",
  "Finance & Levée de Fonds",
  "Product Management",
  "Leadership & Management",
  "Opérations & Scaling",
  "Legal & Compliance",
]
const availabilities = ["Immédiatement", "Dans 2 semaines", "Dans 1 mois", "Dans 2-3 mois", "À définir"]
const empty = { firstName: "", lastName: "", email: "", phone: "", company: "", formation: "", experience: "", objectives: "", availability: "" }

const label = "block text-sm font-semibold text-[#0D1F1A] mb-2"
const select =
  "w-full h-12 px-4 rounded-lg border border-[#E7EBE9] bg-white text-[#0D1F1A] focus:outline-none focus:ring-2 focus:ring-[#CA9BFA] focus:border-transparent"

function Step({ n, title, badge, box, children }: { n: number; title: string; badge: string; box: string; children: React.ReactNode }) {
  return (
    <div className={`p-8 rounded-3xl bg-gradient-to-br ${box} to-white border border-[#E7EBE9]`}>
      <h2 className="text-2xl font-bold text-[#0D1F1A] mb-6 flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${badge} flex items-center justify-center text-white font-bold`}>{n}</div>
        {title}
      </h2>
      {children}
    </div>
  )
}

export function FormationBookingForm() {
  const [data, setData] = useState(empty)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch("/api/formation-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Failed to send booking request")
      setSending(false)
      setSent(true)
      setTimeout(() => {
        setSent(false)
        setData(empty)
      }, 5000)
    } catch (err) {
      console.error("Error submitting booking:", err)
      setSending(false)
      alert("Une erreur est survenue. Veuillez réessayer.")
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setData((d) => ({ ...d, [e.target.name]: e.target.value }))

  if (sent) {
    return (
      <div className="p-12 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 text-center" role="status">
        <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-green-900 mb-4">Demande Envoyée avec Succès !</h2>
        <p className="text-lg text-green-700 mb-2">Merci pour votre intérêt pour nos formations.</p>
        <p className="text-green-600">
          Notre équipe examinera votre candidature et vous contactera dans les <strong>48 heures</strong>.
        </p>
        <div className="mt-8 p-6 bg-white/50 rounded-2xl">
          <h3 className="font-bold text-green-900 mb-3">Prochaines étapes :</h3>
          <ol className="text-left text-green-700 space-y-2 max-w-md mx-auto">
            <li>✓ Examen de votre profil</li>
            <li>✓ Entretien téléphonique (si nécessaire)</li>
            <li>✓ Confirmation de votre place</li>
            <li>✓ Envoi des détails de la formation</li>
          </ol>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <Step n={1} title="Informations Personnelles" badge="from-[#1B1AFE] to-[#4B4AFF]" box="from-[#F9FAF9]">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className={label}>Prénom *</label>
            <Input id="firstName" name="firstName" value={data.firstName} onChange={onChange} placeholder="Votre prénom" required className="h-12" autoComplete="given-name" />
          </div>
          <div>
            <label htmlFor="lastName" className={label}>Nom *</label>
            <Input id="lastName" name="lastName" value={data.lastName} onChange={onChange} placeholder="Votre nom" required className="h-12" autoComplete="family-name" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <label htmlFor="email" className={label}>Email *</label>
            <Input id="email" name="email" type="email" value={data.email} onChange={onChange} placeholder="votre@email.com" required className="h-12" autoComplete="email" />
          </div>
          <div>
            <label htmlFor="phone" className={label}>Téléphone *</label>
            <Input id="phone" name="phone" type="tel" value={data.phone} onChange={onChange} placeholder="+213 XX XX XX XX" required className="h-12" autoComplete="tel" />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="company" className={label}>Entreprise / Projet (optionnel)</label>
          <Input id="company" name="company" value={data.company} onChange={onChange} placeholder="Nom de votre entreprise ou projet" className="h-12" autoComplete="organization" />
        </div>
      </Step>

      <Step n={2} title="Détails de la Formation" badge="from-[#CA9BFA] to-[#E9D5FF]" box="from-[#CA9BFA]/5">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="formation" className={label}>Formation souhaitée *</label>
            <select id="formation" name="formation" value={data.formation} onChange={onChange} required className={select}>
              <option value="">Sélectionnez une formation</option>
              {formations.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="availability" className={label}>Disponibilité *</label>
            <select id="availability" name="availability" value={data.availability} onChange={onChange} required className={select}>
              <option value="">Sélectionnez votre disponibilité</option>
              {availabilities.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>
        </div>
      </Step>

      <Step n={3} title="Votre Profil" badge="from-[#0284C7] to-[#0EA5E9]" box="from-[#1B1AFE]/5">
        <div className="space-y-6">
          <div>
            <label htmlFor="experience" className={label}>Expérience entrepreneuriale *</label>
            <Textarea id="experience" name="experience" value={data.experience} onChange={onChange} placeholder="Décrivez brièvement votre parcours entrepreneurial, vos projets actuels ou passés..." rows={4} required className="resize-none" />
          </div>
          <div>
            <label htmlFor="objectives" className={label}>Objectifs de la formation *</label>
            <Textarea id="objectives" name="objectives" value={data.objectives} onChange={onChange} placeholder="Quels sont vos objectifs ? Que souhaitez-vous accomplir grâce à cette formation ?" rows={4} required className="resize-none" />
          </div>
        </div>
      </Step>

      <div className="text-center">
        <Button
          type="submit"
          size="lg"
          className="w-full md:w-auto px-12 h-14 text-lg bg-gradient-to-r from-[#CA9BFA] to-[#E9D5FF] hover:opacity-90 text-white shadow-xl shadow-[#CA9BFA]/30"
          disabled={sending}
        >
          {sending ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Envoyer ma Demande
            </>
          )}
        </Button>
        <p className="text-xs text-[#47534E] mt-4">
          En soumettant ce formulaire, vous acceptez notre{" "}
          <a href="/confidentialite" className="text-[#CA9BFA] hover:underline">politique de confidentialité</a>
        </p>
      </div>
    </form>
  )
}
