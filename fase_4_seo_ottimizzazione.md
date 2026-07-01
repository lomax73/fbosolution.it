# FASE 4 — SEO Avanzato e Ottimizzazione Performance
## fbosolution.it

> ⚠️ **DISCUTI QUESTO PROMPT CON CLAUDE PRIMA DI ESEGUIRLO**
> Prima di eseguire, assicurati di avere: account Google Search Console verificato
> per fbosolution.it, account GA4 configurato, e che tutte le pagine abbiano
> contenuto reale (non solo placeholder). Il SEO su placeholder non ha senso.
> Discuti con Claude quali pagine sono già ottimizzate e quali no.
>
> **Prerequisiti:** Fase 3 completata (`fase_3_chi_siamo_contatti_eseguito.md`)
> **Risultato atteso:** Sito ottimizzato per SEO, PageSpeed > 90, structured data completi.
> **Stato file:** rinomina in `fase_4_seo_ottimizzazione_incorso.md` quando inizi,
> in `fase_4_seo_ottimizzazione_eseguito.md` quando completata.

---

## Prompt da incollare in Claude Code

```
Completa l'ottimizzazione SEO tecnica e le performance di fbosolution.it.

━━━ 1. METADATA DINAMICI PER OGNI PAGINA ━━━

Usa generateMetadata() in ogni app/[pagina]/page.tsx.
Rispetta i limiti: title max 60 caratteri, description max 160 caratteri.

/ (Homepage):
title: "Fbosolution.it — Innovazione Applicata agli Ambienti"
description: "Reti dati, WiFi enterprise e materiali edili nanotecnologici in Italia.
Fbosolution.it: due divisioni specializzate, soluzioni con prestazioni certificate."

/chi-siamo:
title: "Chi Siamo — Fbosolution.it"
description: "Fbosolution.it: azienda italiana con due divisioni specializzate.
Infrastrutture digitali e materiali edili nanotecnologici. Innovazione concreta."

/divisione-infrastrutture:
title: "Infrastrutture di Rete & WiFi Enterprise — Fbosolution.it"
description: "Progettazione e installazione reti dati strutturate e sistemi WiFi.
Cat.6A, fibra ottica, wireless mesh. Certificazione FLUKE. Nord Italia."

/divisione-materiali:
title: "Materiali Edili Nanotecnologici — Fbosolution.it"
description: "Rivenditore autorizzato IGK2, SuperFluid e SuperElastiK in Italia.
Isolamento nanotecnologico, massetti con garanzia 10 anni, membrane EN 14891."

/portfolio:
title: "Portfolio Progetti — Fbosolution.it"
description: "Progetti realizzati: reti WiFi enterprise, infrastrutture dati,
isolamento IGK2, massetti SuperFluid, impermeabilizzazione SuperElastiK."

/contatti:
title: "Contatti — Fbosolution.it"
description: "Contatta Fbosolution.it per reti dati, WiFi enterprise o materiali
edili nanotecnologici. Risposta entro 24 ore lavorative."

━━━ 2. OPEN GRAPH E TWITTER CARD ━━━

Per ogni pagina, aggiungi a generateMetadata():
openGraph: {
  title: [stesso di title],
  description: [stesso di description],
  url: "https://fbosolution.it/[slug]",
  siteName: "Fbosolution.it",
  images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  locale: "it_IT",
  type: "website"
}
twitter: {
  card: "summary_large_image",
  title: [stesso di title],
  description: [stesso di description],
  images: ["/og-image.png"]
}

Crea og-image.png come immagine statica in /public/:
- Dimensioni: 1200x630px
- Sfondo: #1A3A5C
- Logo testuale "fbosolution.it" centrato in bianco
- Tagline: "Innovazione Applicata agli Ambienti"
Puoi usare @vercel/og (ImageResponse) per generarla dinamicamente: crea
app/opengraph-image.tsx con la stessa struttura.

━━━ 3. STRUCTURED DATA (JSON-LD) ━━━

HOMEPAGE — Organization:
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Fbosolution.it",
  "url": "https://fbosolution.it",
  "logo": "https://fbosolution.it/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "f.lomazzi@fbosolution.it",
    "contactType": "customer service",
    "availableLanguage": "Italian"
  },
  "sameAs": [
    "https://linkedin.com/company/fbosolution",
    "https://nanopower.it"
  ],
  "description": "Azienda italiana specializzata in infrastrutture di rete e materiali edili nanotecnologici."
}

/divisione-infrastrutture — Service:
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Infrastrutture di Rete & WiFi Enterprise",
  "provider": { "@type": "Organization", "name": "Fbosolution.it" },
  "serviceType": "Progettazione e installazione reti dati e WiFi",
  "areaServed": { "@type": "Country", "name": "Italy" },
  "description": "Progettazione, installazione e certificazione di reti dati strutturate e sistemi WiFi enterprise."
}

/divisione-materiali — Service:
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Materiali Edili Nanotecnologici",
  "provider": { "@type": "Organization", "name": "Fbosolution.it" },
  "serviceType": "Rivendita materiali edili ad alte prestazioni",
  "areaServed": { "@type": "Country", "name": "Italy" }
}

/portfolio — ItemList:
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Portfolio Progetti Fbosolution.it",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "[Titolo progetto 1]" },
    ...
  ]
}

━━━ 4. PERFORMANCE ━━━

Audit con Lighthouse (target PageSpeed > 90 mobile e desktop).

Ottimizzazioni da verificare e applicare:
- Tutte le immagini: usa next/image con width, height espliciti e priority su above-fold
- Font: assicurati che next/font sia usato (no Google Fonts da CDN esterno)
- Nessun CSS o JS render-blocking
- Lazy loading su tutte le immagini below-the-fold
- Verifica bundle size: next build + analisi con @next/bundle-analyzer se necessario
- Compressione Vercel: assicurati compress: true in next.config.js

━━━ 5. ROBOTS.TXT E SITEMAP ━━━

/public/robots.txt:
User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://fbosolution.it/sitemap.xml

next-sitemap.config.js:
- siteUrl: "https://fbosolution.it"
- generateRobotsTxt: false (il robots.txt è già in /public/)
- Tutte le pagine con priority 0.8 tranne homepage (1.0)
- changefreq: "monthly" per pagine statiche

━━━ 6. GOOGLE ANALYTICS — EVENTI CUSTOM ━━━

Aggiungi tracking eventi GA4 su:
- Click CTA "Contattaci" (navbar e homepage): evento "contact_click", parametro location
- Submit form /contatti: evento "lead_generated", parametro argomento
- Click link "nanopower.it" da /divisione-materiali: evento "cross_domain_click"
- Click WhatsApp: evento "whatsapp_click"

Crea utility: lib/analytics.ts con funzione trackEvent(name, params) che usa gtag.

━━━ 7. VERIFICA FINALE ━━━

Alla fine della fase, esegui questa checklist e riporta i risultati:
□ Lighthouse mobile > 90 per ogni pagina principale
□ Tutti i meta tag presenti e corretti (verifica con curl -s URL | grep og:)
□ Sitemap.xml accessibile e valida
□ Robots.txt corretto
□ Schema.org validato su schema.org/validator
□ Google Analytics riceve eventi (verifica in GA4 DebugView)
□ Tutti i link cross-domain (→ nanopower.it) funzionanti
□ Form contatti: test invio e ricezione email
```
