import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

// Same pages as the live sitemap (26/11/2026), plus the blog posts and the newer service URLs
// that the live navigation links to.
const pages = [
  "",
  "/acceleration-entreprises",
  "/formations",
  "/services",
  "/services/commercial/prospection-b2b",
  "/services/commercial/assistance-commerciale",
  "/services/digital/site-web",
  "/services/digital/produit-digital",
  "/services/digital/publicite-digitale",
  "/services/digital/community-management",
  "/services/formation",
  "/services/acceleration",
  "/services/prospection-b2b",
  "/services/assistance-commerciale",
  "/services/site-web",
  "/services/publicite-digitale",
  "/services/community-management",
  "/realisations",
  "/tarifs",
  "/guide-entreprises",
  "/contact",
  "/equipe",
  "/ressources",
  "/blog",
  "/blog/developper-entreprise-algerie-5-leviers",
  "/blog/erreurs-prospection-b2b",
  "/blog/crm-simple-suivi-prospects",
  "/blog/structurer-cycle-commercial-30-jours",
  "/blog/publicite-digitale-budget-utile",
  "/blog/cas-client-offre-demandes-qualifiees",
  "/evenements",
  "/a-propos",
  "/partenaires",
  "/mentions-legales",
  "/confidentialite",
  "/cgv",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: new Date(),
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p.split("/").length <= 2 ? 0.8 : 0.6,
  }))
}
