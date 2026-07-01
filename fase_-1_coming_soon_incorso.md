# FASE -1 — Landing "Coming Soon" Corporate
## fbosolution.it

> ⚠️ **DISCUTI QUESTO PROMPT CON CLAUDE PRIMA DI ESEGUIRLO**
> Prima di eseguire, prepara: P.IVA aziendale, numero WhatsApp, URL LinkedIn,
> e una descrizione in 2 righe delle due divisioni con dati reali (anni, progetti, ecc.).
>
> **Prerequisiti:** nessuno — prima fase di fbosolution.it.
> **Risultato atteso:** pagina corporate coming soon con form contatto B2B, live su Vercel.
> **Stato file:** rinomina in `fase_-1_coming_soon_incorso.md` quando inizi,
> in `fase_-1_coming_soon_eseguito.md` quando online e funzionante.

---

## Prompt da incollare in Claude Code

```
Crea un progetto Next.js 14 (App Router) con Tailwind CSS per il sito fbosolution.it.

Questa è una pagina coming soon istituzionale e corporate, destinata a un pubblico B2B
(aziende, PA, grandi cantieri). Il tone è professionale, affidabile, innovativo.
NON ha l'estetica "dark/tech" di nanopower.it: qui il design è pulito, minimal, con
molto spazio bianco e autorevolezza visiva.

━━━ SETUP PROGETTO ━━━

- Crea il progetto: npx create-next-app@latest fbosolution --typescript --tailwind --app
- Installa: react-hook-form @hookform/resolvers zod
- Crea .env.local con: BREVO_API_KEY, CONTACT_EMAIL, NEXT_PUBLIC_WHATSAPP

━━━ DESIGN E IDENTITÀ VISIVA ━━━

Palette (corporate, istituzionale):
- Sfondo: #FFFFFF con sezioni alternate #F8FAFC
- Primario: #1A3A5C (blu notte aziendale)
- Accento: #2E5D8E (blu medio per link e hover)
- Verde: #00A896 (solo per CTA e accenti speciali)
- Testo corpo: #334155
- Testo secondario: #64748B
- Bordi: #E2E8F0

Font: Inter via next/font — pesi 300/400/500/600/700
NO effetti particelle, NO animazioni elaborate.
Design pulito: spazio bianco generoso, tipografia curata, linee sottili.

━━━ STRUTTURA PAGINA ━━━

1. HEADER MINIMALISTA (sticky, bianco, ombra sottile allo scroll)
   - Sinistra: logo "fbosolution" peso 700 colore #1A3A5C + ".it" in #00A896
   - Destra: link mailto "f.lomazzi@fbosolution.it" in colore #64748B

2. HERO SECTION (sfondo bianco, molto spazio)
   - Pill badge: "PRESTO ONLINE" (sfondo #EBF3FB, testo #2E5D8E)
   - H1 grande (peso 700, colore #1A3A5C):
     "Innovazione Applicata agli Ambienti"
   - Sottotitolo (colore #334155, max-w-2xl):
     "Fbosolution.it porta tecnologia avanzata dove altri portano soluzioni standard:
      dalle infrastrutture di rete digitale ai materiali edili nanotecnologici
      di ultima generazione."
   - Linea decorativa: gradiente orizzontale #2E5D8E → #00A896, altezza 3px, max-w-xs

3. LE DUE DIVISIONI (2 card su sfondo #F8FAFC, affiancate desktop/stack mobile)

   Card 1 — DIVISIONE INFRASTRUTTURE DIGITALI
   - Icona SVG: rete/wifi (stile outline, colore #2E5D8E)
   - Titolo: "Infrastrutture di Rete & WiFi"
   - Testo: "Progettazione, installazione e configurazione di reti dati strutturate
     e sistemi WiFi enterprise. Fibra ottica, reti cablate, wireless mesh
     ad alta densità per aziende, cantieri e strutture pubbliche."
   - Tag pill: "Fibra ottica" · "WiFi 6" · "Reti dati" · "Certificazioni FLUKE"

   Card 2 — DIVISIONE MATERIALI TECNOLOGICI
   - Icona SVG: molecola/cristallo (stile outline, colore #00A896)
   - Titolo: "Materiali Edili Nanotecnologici"
   - Testo: "Rivenditore autorizzato in Italia di materiali ad alte prestazioni:
     isolamento termico IGK2, massetti SuperFluid con garanzia decennale assicurativa,
     membrane impermeabilizzanti SuperElastiK."
   - Link: "→ Scopri nanopower.it" (colore #00A896, apre in nuova tab)
   - Tag pill: "IGK2" · "SuperFluid" · "SuperElastiK"

4. SEZIONE NUMERI (sfondo #1A3A5C, testo bianco)
   3 stat in riga (placeholder da personalizzare con dati reali):
   - "XX+ Progetti completati"
   - "XX Anni di esperienza"
   - "X Regioni servite"
   Nota nel codice: <!-- Aggiornare con dati reali aziendali -->

5. FORM CONTATTI ISTITUZIONALI

   Titolo: "Vuoi sapere quando siamo online?"
   Sottotitolo: "Raccontaci di cosa hai bisogno: ti rispondo personalmente nel frattempo."

   Campi (React Hook Form + Zod):
   - Nome e Cognome (required)
   - Azienda / Ente di riferimento (required)
   - Email (required, formato email)
   - Telefono (optional)
   - Sei interessato a (checkbox multipli, almeno 1 required):
     □ Infrastrutture di rete / WiFi
     □ Materiali edili nanotecnologici
     □ Entrambe le divisioni
     □ Informazioni generali sull'azienda
   - Messaggio (textarea, max 300 caratteri, contatore)
   - Privacy (required, con link placeholder a /privacy)

   Bottone: "Invia richiesta" sfondo #1A3A5C, hover #2E5D8E.

   Server Action: POST a Brevo API con attributi AZIENDA, DIVISIONE_INTERESSE,
   MESSAGGIO. Poi email notifica a CONTACT_EMAIL:
   Oggetto: "🔔 Nuovo contatto fbosolution.it — [Azienda]"
   Email conferma al mittente: "Abbiamo ricevuto il tuo messaggio — ti rispondo entro 24 ore"

   Dopo submit: messaggio successo inline (no redirect), con check verde animato.

6. FOOTER MINIMAL (sfondo #1A3A5C, testo bianco)
   - Logo testuale bianco
   - "© 2026 Fbosolution.it"
   - Link: icona LinkedIn SVG → linkedin.com/company/fbosolution
   - Email: f.lomazzi@fbosolution.it
   - Testo piccolo: "nanopower.it è un brand di Fbosolution.it"

━━━ METADATA SEO ━━━

title: "Fbosolution.it — Innovazione Applicata agli Ambienti | In arrivo"
description: "Fbosolution.it: infrastrutture di rete WiFi enterprise e materiali edili
nanotecnologici (IGK2, SuperFluid, SuperElastiK). Innovazione tecnologica applicata
agli ambienti. Presto online."

━━━ DEPLOYMENT ━━━

Crea vercel.json. Alla fine mostra:
1. npm i -g vercel && vercel --prod
2. Lista env vars da impostare nel pannello Vercel
```
