# FASE 1 — Struttura Corporate
## fbosolution.it

> ⚠️ **DISCUTI QUESTO PROMPT CON CLAUDE PRIMA DI ESEGUIRLO**
> Prima di eseguire, discuti con Claude: hai il logo in SVG o usi ancora
> il logo testuale? Vuoi un menu "Lavora con noi" già dalla struttura base?
> Vuoi un cookie banner (GDPR)?
>
> **Prerequisiti:** Fase -1 completata (`fase_-1_coming_soon_eseguito.md`)
> **Risultato atteso:** Homepage completa, navbar corporate, footer, struttura routing.
> **Stato file:** rinomina in `fase_1_struttura_corporate_incorso.md` quando inizi,
> in `fase_1_struttura_corporate_eseguito.md` quando completata.

---

## Prompt da incollare in Claude Code

```
Partendo dal progetto fbosolution della Fase -1, evolvi il sito per il corporate completo.
La coming soon viene sostituita dalla homepage definitiva.

━━━ 1. NAVBAR CORPORATE ━━━

Componente: components/Navbar.tsx
- Logo "fbosolution.it" (peso 700, #1A3A5C, ".it" in #00A896) → link a /
- Link desktop:
  * "Chi Siamo" → /chi-siamo
  * "Divisioni" con dropdown:
    - Infrastrutture Digitali → /divisione-infrastrutture
    - Materiali Tecnologici → /divisione-materiali (con "(→ nanopower.it)" in piccolo)
  * "Portfolio" → /portfolio
  * "Contatti" → /contatti
- CTA: bottone "Contattaci" sfondo #1A3A5C, hover #2E5D8E
- Menu hamburger su mobile con drawer
- Sticky, sfondo bianco, ombra sottile allo scroll (box-shadow)

━━━ 2. FOOTER CORPORATE ━━━

Componente: components/Footer.tsx
3 colonne su desktop, stack su mobile:

Col 1 — Brand:
- Logo testuale + descrizione 2 righe: "Azienda italiana specializzata in infrastrutture
  digitali e materiali edili nanotecnologici. Innovazione applicata agli ambienti."
- Social: icona LinkedIn SVG, email
- Testo: "nanopower.it è un brand di Fbosolution.it"

Col 2 — Navigazione:
- Chi Siamo, Portfolio, Blog nanopower.it (link esterno), Contatti

Col 3 — Divisioni:
- Infrastrutture Digitali (/divisione-infrastrutture)
- Materiali Tecnologici (/divisione-materiali)
- Link esterno: "nanopower.it →" (prodotti)

Barra copyright:
- "© 2026 Fbosolution.it — P.IVA [da inserire] — [Città]"
- Link: Privacy Policy | Cookie Policy

━━━ 3. HOMEPAGE (app/page.tsx) ━━━

HERO (sfondo bianco, grande spazio):
- H1: "Innovazione Applicata agli Ambienti"
- Sub (max-w-2xl, colore #334155):
  "Portiamo tecnologia avanzata dove crea valore reale: reti digitali ad alta performance
   e materiali edili nanotecnologici con prestazioni certificate. Due divisioni, un'unica
   visione: soluzioni che funzionano davvero."
- 2 CTA: "Scopri le divisioni" (primario, #1A3A5C) | "Contattaci" (outline)
- Immagine/grafica decorativa: composition astratta con elementi geometrici
  (rete digitale a sinistra, cristallo/molecola a destra) in SVG inline

SEZIONE 2 DIVISIONI (sfondo #F8FAFC):
2 card grandi affiancate (desktop), stack mobile.
Stessa struttura della Fase -1 ma più ricca:
- Icona grande (SVG 48px)
- Titolo divisione
- Descrizione 3-4 righe
- 3 bullet punto chiave (✓)
- CTA: "Scopri di più →"

SEZIONE "PERCHÉ FBOSOLUTION" (sfondo bianco):
3 colonne con icona + titolo + testo:
- Competenza Tecnica: "Formazione continua, certificazioni, aggiornamento normativo costante"
- Soluzioni Concrete: "Dati misurabili, garanzie reali, performance certificate. Non solo marketing."
- Presenza Locale: "Sopralluogo, consulenza, supporto. Dove i big brand non arrivano."

SEZIONE NUMERI (sfondo #1A3A5C, testo bianco):
Stessa sezione della Fase -1, con animazione count-up IntersectionObserver.
(I numeri placeholder vanno sostituiti con dati reali)

CTA FINALE (sfondo bianco):
- Titolo: "Hai un progetto? Parliamoci."
- Sub: "Che si tratti di una rete WiFi per un capannone o di materiali per una ristrutturazione,
  siamo il partner tecnico che fa la differenza."
- Bottone: "Contattaci" → /contatti

━━━ 4. SETUP TECNICO ━━━

- Google Analytics 4: componente GoogleAnalytics con next/script
- next-sitemap: npm install next-sitemap + config + script postbuild
- robots.txt: allow tutto tranne /api/
- Metadata in app/layout.tsx per homepage
- Schema.org Organization in app/layout.tsx (JSON-LD script):
  name: "Fbosolution.it", url: "https://fbosolution.it",
  contactPoint: { email: "f.lomazzi@fbosolution.it" },
  sameAs: [ "https://linkedin.com/company/fbosolution", "https://nanopower.it" ]
```
