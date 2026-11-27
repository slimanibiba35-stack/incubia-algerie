"use client"

// "Calculateur Marketing & Boost" of /tarifs, rebuilt from the live compiled code (BudgetCalculator, 26/11/2026).
// Only change from live: Incubia management fees never go below FEE_FLOOR (owner decision, 26/11/2026,
// previewed in preview/pricing.js). Live used a 35 000 DA floor on the low end.
import { useMemo, useState } from "react"
import { Check, Copy, Send } from "lucide-react"

const FEE_FLOOR = 55000

const sectors = {
  standard: "Secteur standard",
  ecommerce: "E-commerce",
  restaurant: "Restaurant / café",
  formation: "Formation",
  services: "Services B2B",
  beauty: "Beauté / santé",
} as const
const tracking = { basic: "Suivi simple", pixel: "Pixel + événements", advanced: "Tracking avancé" } as const
type Platform = "Facebook" | "Instagram" | "TikTok"

const nf = new Intl.NumberFormat("fr-FR")
const da = (n: number) => `${nf.format(5000 * Math.round(n / 5000))} DA`

const optionClass = (active: boolean) =>
  active
    ? "border-[#1B1AFE] bg-[#EFF3FC] text-[#0D1F1A]"
    : "border-[#E7EBE9] bg-[#F9FAF9] text-[#344054] hover:border-[#1B1AFE]/40"
const selectClass =
  "w-full px-4 py-3.5 rounded-2xl border border-[#E7EBE9] bg-[#F9FAF9] text-sm font-semibold text-[#344054] outline-none focus:border-[#1B1AFE]"
const rowHead = "flex flex-col gap-1 sm:flex-row sm:justify-between text-sm font-bold text-[#0D1F1A] mb-2"

export function BudgetCalculator() {
  const [objective, setObjective] = useState<"visibility" | "sales">("visibility")
  const [platforms, setPlatforms] = useState<Record<Platform, boolean>>({ Facebook: true, Instagram: true, TikTok: false })
  const [budget, setBudget] = useState(30000)
  const [campaigns, setCampaigns] = useState(2)
  const [creatives, setCreatives] = useState(8)
  const [sector, setSector] = useState<keyof typeof sectors>("standard")
  const [track, setTrack] = useState<keyof typeof tracking>("basic")
  const [copied, setCopied] = useState(false)

  const active = useMemo(() => (Object.keys(platforms) as Platform[]).filter((p) => platforms[p]), [platforms])

  const est = useMemo(() => {
    let t = objective === "sales" ? 55000 : 45000
    if (active.length > 2) t += (active.length - 2) * 10000
    if (active.includes("TikTok")) t += 8000
    t += 8000 * Math.max(0, campaigns - 2)
    t += 1500 * Math.max(0, creatives - 8)
    if (budget > 100000) t += (budget - 100000) * 0.08
    if (budget > 250000) t += 15000
    if (sector === "ecommerce") t += 12000
    if (sector === "services") t += 8000
    if (sector === "formation") t += 6000
    if (track === "pixel") t += 10000
    if (track === "advanced") t += 22000
    t = Math.max(45000, 5000 * Math.round(t / 5000))
    const lowFee = Math.max(FEE_FLOOR, t - 10000)
    const highFee = Math.max(t + 10000, lowFee + 10000)
    const highTotal = highFee + budget
    const pack = highTotal >= 280000 ? "Performance Boost" : highTotal >= 160000 ? "Growth Boost" : "Starter Boost"
    return { lowFee, highFee, lowTotal: lowFee + budget, highTotal, pack }
  }, [objective, active, campaigns, creatives, budget, sector, track])

  const message = `Bonjour Incubia, je souhaite recevoir un devis Publicité & Boost.

Objectif : ${objective === "sales" ? "Plus de ventes en ligne" : "Plus de visibilité"}
Plateformes : ${active.join(", ")}
Budget sponsorisé mensuel : ${da(budget)}
Campagnes actives : ${campaigns}
Créatifs / visuels par mois : ${creatives}
Tracking : ${tracking[track]}
Estimation affichée : ${da(est.lowTotal)} — ${da(est.highTotal)} / mois

Merci de me proposer le pack adapté.`
  const waHref = `https://wa.me/213542999301?text=${encodeURIComponent(message)}`

  async function copy() {
    try {
      await navigator.clipboard.writeText(message)
    } catch {}
    setCopied(true)
    setTimeout(() => setCopied(false), 1400)
  }

  return (
    <section id="calculateur" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="rounded-3xl border border-[#E7EBE9] shadow-[0_20px_60px_rgba(13,31,26,0.08)] overflow-hidden">
          <div className="p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#F9FAF9] to-white border-b border-[#E7EBE9] flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="text-[#1B1AFE] text-xs font-bold uppercase tracking-[0.14em] mb-3">Calculateur Marketing &amp; Boost</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1F1A] mb-3">Estimez votre budget publicité.</h2>
              <p className="text-[#47534E] max-w-xl">
                Répondez à quelques questions comme dans un onboarding. Le calculateur donne une fourchette mensuelle basée sur
                l&apos;objectif, les plateformes, le volume créatif et le budget sponsorisé.
              </p>
            </div>
            <div className="max-w-sm bg-white/80 border border-[#E7EBE9] rounded-2xl p-4 text-sm text-[#47534E]">
              <strong className="text-[#0D1F1A]">Logique de prix :</strong> entrée accessible pour PME, puis ajustement selon
              complexité. Les campagnes orientées ventes demandent plus de suivi qu&apos;une campagne de visibilité.
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#E7EBE9] space-y-8">
              <div role="radiogroup" aria-labelledby="calc-q1">
                <h3 id="calc-q1" className="text-lg font-bold text-[#0D1F1A] mb-3.5">1. Votre objectif principal</h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {[
                    { value: "visibility" as const, label: "Plus de visibilité" },
                    { value: "sales" as const, label: "Plus de ventes en ligne" },
                  ].map((o) => (
                    <label
                      key={o.value}
                      className={`flex items-center gap-2.5 px-4 py-3.5 rounded-2xl border cursor-pointer text-sm font-semibold transition-colors ${optionClass(objective === o.value)}`}
                    >
                      <input
                        type="radio"
                        name="objective"
                        value={o.value}
                        checked={objective === o.value}
                        onChange={() => setObjective(o.value)}
                        className="accent-[#1B1AFE] w-4 h-4"
                      />
                      {o.label}
                    </label>
                  ))}
                </div>
              </div>

              <div role="group" aria-labelledby="calc-q2" className="pt-8 border-t border-[#E7EBE9]">
                <h3 id="calc-q2" className="text-lg font-bold text-[#0D1F1A] mb-3.5">2. Plateformes à utiliser</h3>
                <div className="grid sm:grid-cols-3 gap-2.5">
                  {(["Facebook", "Instagram", "TikTok"] as Platform[]).map((p) => (
                    <label
                      key={p}
                      className={`flex items-center gap-2 px-3 py-3.5 rounded-2xl border cursor-pointer text-sm font-semibold transition-colors ${optionClass(platforms[p])}`}
                    >
                      <input
                        type="checkbox"
                        checked={platforms[p]}
                        onChange={() =>
                          setPlatforms((prev) => {
                            const next = { ...prev, [p]: !prev[p] }
                            return Object.values(next).some(Boolean) ? next : prev
                          })
                        }
                        className="accent-[#1B1AFE] w-4 h-4"
                      />
                      {p}
                    </label>
                  ))}
                </div>
                <p className="text-xs text-[#8A96A8] mt-3">
                  Facebook + Instagram sont recommandés pour commencer. TikTok ajoute plus de production créative.
                </p>
              </div>

              <div className="pt-8 border-t border-[#E7EBE9] space-y-6">
                <h3 className="text-lg font-bold text-[#0D1F1A] -mb-2">3. Volume de campagne</h3>
                <div>
                  <div className={rowHead}>
                    <label htmlFor="calc-budget">Budget sponsorisé mensuel</label>
                    <span className="text-[#1B1AFE]">{da(budget)}</span>
                  </div>
                  <input id="calc-budget" type="range" min={20000} max={500000} step={5000} value={budget} onChange={(e) => setBudget(Number(e.target.value))} className="w-full accent-[#1B1AFE]" />
                  <p className="text-xs text-[#8A96A8] mt-1.5">Budget conseillé à investir dans les plateformes publicitaires.</p>
                </div>
                <div>
                  <div className={rowHead}>
                    <label htmlFor="calc-campaigns">Nombre de campagnes actives</label>
                    <span className="text-[#1B1AFE]">
                      {campaigns} {campaigns > 1 ? "campagnes" : "campagne"}
                    </span>
                  </div>
                  <input id="calc-campaigns" type="range" min={1} max={8} step={1} value={campaigns} onChange={(e) => setCampaigns(Number(e.target.value))} className="w-full accent-[#1B1AFE]" />
                </div>
                <div>
                  <div className={rowHead}>
                    <label htmlFor="calc-creatives">Créatifs / visuels par mois</label>
                    <span className="text-[#1B1AFE]">
                      {creatives} {creatives > 1 ? "visuels" : "visuel"}
                    </span>
                  </div>
                  <input id="calc-creatives" type="range" min={4} max={30} step={2} value={creatives} onChange={(e) => setCreatives(Number(e.target.value))} className="w-full accent-[#1B1AFE]" />
                </div>
              </div>

              <div className="pt-8 border-t border-[#E7EBE9]">
                <h3 className="text-lg font-bold text-[#0D1F1A] mb-3.5">4. Options avancées</h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  <select aria-label="Secteur d'activité" value={sector} onChange={(e) => setSector(e.target.value as keyof typeof sectors)} className={selectClass}>
                    {Object.entries(sectors).map(([k, v]) => (
                      <option key={k} value={k}>{v}</option>
                    ))}
                  </select>
                  <select aria-label="Niveau de tracking" value={track} onChange={(e) => setTrack(e.target.value as keyof typeof tracking)} className={selectClass}>
                    {Object.entries(tracking).map(([k, v]) => (
                      <option key={k} value={k}>{v}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10 bg-[linear-gradient(135deg,#0D1F1A_0%,#12233F_52%,#0825A3_100%)] text-white" aria-live="polite">
              <div className="inline-flex w-max px-3 py-1.5 rounded-full bg-[#CA9BFA]/15 border border-[#CA9BFA]/25 text-[#E9D5FF] text-xs font-bold mb-5">{est.pack}</div>
              <h3 className="text-2xl font-bold mb-1.5">Votre estimation</h3>
              <p className="text-sm text-white/60 mb-6">Fourchette indicative avant diagnostic final.</p>
              <div className="rounded-3xl bg-white/10 border border-white/15 p-5 mb-5">
                <div className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Total mensuel estimé</div>
                <div className="text-3xl font-bold">
                  {da(est.lowTotal)} — {da(est.highTotal)}
                </div>
              </div>
              <div className="space-y-2.5 mb-6">
                {[
                  { label: "Gestion Incubia", value: `${da(est.lowFee)} — ${da(est.highFee)}` },
                  { label: "Budget sponsorisé conseillé", value: da(budget) },
                  { label: "Plateformes", value: active.join(", ") },
                  { label: "Objectif", value: objective === "sales" ? "Ventes en ligne" : "Visibilité" },
                ].map((r) => (
                  <div key={r.label} className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-3 text-sm text-white/75 pb-2.5 border-b border-white/10">
                    <span>{r.label}</span>
                    <strong className="text-white sm:text-right">{r.value}</strong>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/55 leading-relaxed mb-5">
                Cette estimation sert à qualifier le besoin. Le devis final dépend des contenus disponibles, du secteur, de la
                concurrence et du niveau de suivi demandé.
              </p>
              <textarea
                readOnly
                value={message}
                aria-label="Message de demande de devis"
                className="w-full min-h-[110px] rounded-2xl border border-white/15 bg-white/10 text-white/85 p-3.5 text-xs outline-none resize-none mb-3"
              />
              <div className="grid sm:grid-cols-2 gap-2.5">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white text-[#0D1F1A] font-bold text-sm hover:bg-white/90 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Envoyer la demande
                </a>
                <button
                  type="button"
                  onClick={copy}
                  className="inline-flex min-h-12 items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white/10 border border-white/15 text-white font-bold text-sm hover:bg-white/15 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copié" : "Copier"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
