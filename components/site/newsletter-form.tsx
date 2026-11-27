"use client"

// Newsletter box of /ressources, rebuilt from the live compiled code (NewsletterSection, 26/11/2026).
// NOTE: on the live site this form saves nothing — it only shows a thank-you message. Kept identical
// for now; flagged to the owner (connect it to a real mailing list, or remove it).
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  if (done) {
    return (
      <div className="p-6 rounded-2xl bg-white/20 backdrop-blur-sm" role="status">
        <p className="text-lg font-semibold">✓ Merci ! Vous êtes inscrit à notre newsletter.</p>
      </div>
    )
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setDone(true)
        setTimeout(() => {
          setDone(false)
          setEmail("")
        }, 3000)
      }}
      className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
    >
      <Input
        type="email"
        placeholder="Votre email"
        aria-label="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-white/20 border-white/40 text-white placeholder:text-white/70 focus:bg-white/30"
      />
      <Button type="submit" size="lg" variant="secondary" className="bg-white text-[#CA9BFA] hover:bg-white/90 shrink-0">
        S&apos;Abonner
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </form>
  )
}
