import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { WebVitalsReporter } from "@/components/web-vitals-reporter"
import { SecurityMonitor } from "@/components/security-monitor"
import { PerformanceMonitor } from "@/components/performance-monitor"
import { SITE_URL } from "@/lib/site"
import "./globals.css"
import "./redesign.css"
import { WhatsAppFloat } from "@/components/site/whatsapp"

// --font-inter: the self-hosted Inter, used by app/redesign.css (next/font renames the family).
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

// Site-wide metadata copied from the live site (26/11/2026). Only change: URLs use the real domain
// instead of the old Vercel address (incubia-algerie-v0.vercel.app), which the site is leaving.

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Incubia Algérie — Services B2B pour Entreprises",
    template: "%s | Incubia Algérie",
  },
  description:
    "Services B2B pour entreprises algériennes : prospection commerciale, création de site web, publicité digitale, community management et accompagnement accélération PME.",
  keywords: [
    "services B2B algérie",
    "prospection B2B algérie",
    "création site web algérie",
    "publicité digitale algérie",
    "community management algérie",
    "accompagnement commercial",
    "formation B2B",
    "accélération PME",
    "digitalisation entreprise",
    "création entreprise algérie",
    "financement PME algérie",
  ],
  authors: [{ name: "Incubia Algérie" }],
  creator: "Incubia Algérie",
  publisher: "Incubia Algérie",
  generator: "v0.app",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "fr_DZ",
    url: SITE_URL,
    siteName: "Incubia Algérie",
    title: "Incubia Algérie — Services B2B pour Entreprises",
    description: "Services B2B pour entreprises algériennes : prospection, digitalisation, publicité et accompagnement commercial.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Incubia Algérie - Services B2B" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Incubia Algérie — Services B2B pour Entreprises",
    description: "Services B2B pour entreprises algériennes : prospection, digitalisation, publicité et accompagnement.",
    images: ["/og-image.jpg"],
    creator: "@incubia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: [{ url: "/logoincubia.svg", type: "image/svg+xml" }],
    apple: "/logoincubia.svg",
  },
}

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Incubia Algérie",
  description: "Services B2B pour entreprises algériennes : prospection, digitalisation, publicité et accompagnement commercial",
  url: SITE_URL,
  logo: `${SITE_URL}/logoincubia.svg`,
  contactPoint: {
    "@type": "ContactPoint",
    // Owner-confirmed number (20/11/2026); the live site still had a "+213-XX-XX-XX-XX" placeholder here.
    telephone: "+213-42-05-51-88",
    contactType: "Customer Service",
    areaServed: "DZ",
    availableLanguage: ["French", "Arabic"],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} ${inter.variable} antialiased overflow-x-hidden`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />
        {children}
        <WhatsAppFloat />
        <WebVitalsReporter />
        <SecurityMonitor />
        <PerformanceMonitor />
      </body>
    </html>
  )
}
