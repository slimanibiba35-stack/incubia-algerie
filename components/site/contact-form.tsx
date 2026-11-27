"use client"

// Contact form of /contact, rebuilt from the live compiled code (ContactContent, 26/11/2026).
// Posts to the existing /api/contact route with the same fields as live.
import { useState, type ChangeEvent, type FormEvent } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const empty = { firstName: "", lastName: "", email: "", phone: "", company: "", message: "" }
const labelClass = "text-sm font-bold text-[#0D1F1A] ml-1 uppercase tracking-wider"
const inputClass = "h-12 rounded-xl border-[#E7EBE9] bg-[#F9FAF9] focus:bg-white transition-all text-base"

export function ContactForm() {
  const [data, setData] = useState(empty)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Failed to send message")
      setSending(false)
      setSent(true)
      setTimeout(() => {
        setSent(false)
        setData(empty)
      }, 3000)
    } catch (err) {
      console.error("Error submitting form:", err)
      setSending(false)
      alert("Une erreur est survenue. Veuillez réessayer.")
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData((d) => ({ ...d, [e.target.name]: e.target.value }))

  if (sent) {
    return (
      <div className="py-20 text-center animate-scale-in" role="status">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        <h3 className="text-3xl font-bold text-[#0D1F1A] mb-4">Message Envoyé !</h3>
        <p className="text-[#47534E] text-lg max-w-sm mx-auto">
          Merci de nous avoir contactés. Nous reviendrons vers vous très prochainement.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label htmlFor="firstName" className={labelClass}>Prénom</label>
          <Input id="firstName" name="firstName" value={data.firstName} onChange={onChange} placeholder="Jean" className={inputClass} required autoComplete="given-name" />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className={labelClass}>Nom</label>
          <Input id="lastName" name="lastName" value={data.lastName} onChange={onChange} placeholder="Dupont" className={inputClass} required autoComplete="family-name" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label htmlFor="email" className={labelClass}>Email Professionnel</label>
          <Input id="email" name="email" type="email" value={data.email} onChange={onChange} placeholder="jean@entreprise.com" className={inputClass} required autoComplete="email" />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className={labelClass}>Téléphone</label>
          <Input id="phone" name="phone" type="tel" value={data.phone} onChange={onChange} placeholder="+213 5XX XX XX XX" className={inputClass} required autoComplete="tel" />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="company" className={labelClass}>Entreprise / Projet</label>
        <Input id="company" name="company" value={data.company} onChange={onChange} placeholder="Le nom de votre structure" className={inputClass} autoComplete="organization" />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className={labelClass}>Votre Message</label>
        <Textarea
          id="message"
          name="message"
          value={data.message}
          onChange={onChange}
          placeholder="Décrivez-nous votre projet ou votre demande..."
          className="min-h-[140px] rounded-2xl border-[#E7EBE9] bg-[#F9FAF9] focus:bg-white transition-all text-base resize-none p-4"
          required
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full h-14 bg-[#1B1AFE] hover:bg-[#0D0CFE] text-white text-base font-bold rounded-2xl shadow-xl shadow-[#1B1AFE]/20 transition-all group overflow-hidden relative"
        disabled={sending}
      >
        {sending ? (
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
            Traitement en cours...
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2 group-hover:gap-4 transition-all">
            <span>Envoyer mon message</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        )}
      </Button>
      <p className="text-sm text-[#47534E] text-center font-medium">
        En envoyant ce formulaire, vous acceptez nos{" "}
        <a href="/confidentialite" className="text-[#1B1AFE] hover:underline font-bold">mentions légales</a>
      </p>
    </form>
  )
}
