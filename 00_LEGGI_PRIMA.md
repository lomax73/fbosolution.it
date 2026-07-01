# fbosolution.it — Guida allo Sviluppo con Claude Code

## Come usare questa cartella

Ogni fase di sviluppo ha un file dedicato. I prompt sono pronti ma vanno **discussi con Claude
prima di essere eseguiti** — potrebbero servire aggiustamenti in base a ciò che è già stato fatto,
a dati aziendali disponibili, o a preferenze di design emerse durante lo sviluppo.

---

## Regola d'oro: inizia sempre dalla Fase -1

La **Fase -1** crea la landing coming soon istituzionale e va deployata subito su Vercel,
in parallelo alla Fase -1 di nanopower.it. Raccoglie contatti B2B mentre il sito completo
è in sviluppo.

**Ordine di priorità:**

| Priorità | Fase | File | Descrizione |
|----------|------|------|-------------|
| 🔴 Urgente | -1 | `fase_-1_coming_soon.md` | Landing coming soon corporate → **deploy in parallelo a nanopower.it** |
| 🟠 Alta | 1 | `fase_1_struttura_corporate.md` | Struttura base, navbar corporate, homepage |
| 🟠 Alta | 2 | `fase_2_divisioni_portfolio.md` | Pagine divisioni (infrastrutture + materiali) e portfolio |
| 🟡 Media | 3 | `fase_3_chi_siamo_contatti.md` | Chi siamo, team, pagina contatti |
| 🟢 Bassa | 4 | `fase_4_seo_ottimizzazione.md` | SEO avanzato, structured data, ottimizzazione performance |

> **Nota:** fbosolution.it è il sito corporate. Non deve generare lead di prodotto
> (quelli vanno a nanopower.it). Il suo obiettivo è costruire credibilità istituzionale
> e presentare l'azienda come partner tecnologico affidabile.

---

## Come gestire i file durante lo sviluppo

Ogni file di fase ha tre stati, segnalati rinominando il file:

| Stato | Come rinominare il file |
|-------|------------------------|
| Da fare | `fase_X_nome.md` ← nome originale |
| In lavorazione | `fase_X_nome_incorso.md` |
| Completata | `fase_X_nome_eseguito.md` |

**Esempio pratico:**
1. Apri `fase_-1_coming_soon.md` → discuti il prompt con Claude
2. Rinomina in `fase_-1_coming_soon_incorso.md` → inizia lo sviluppo
3. Quando la fase è completata e deployata → rinomina in `fase_-1_coming_soon_eseguito.md`

---

## Prima di eseguire qualsiasi prompt

1. **Leggi il file della fase** per capire cosa verrà creato
2. **Apri una sessione con Claude Code** e incolla il contenuto del prompt
3. **Discuti eventuali dubbi** prima di avviare l'esecuzione:
   - P.IVA Fbosolution.it
   - Indirizzo/sede aziendale (opzionale, anche solo città)
   - Anni di attività / anno di fondazione
   - Numero di progetti completati (per i numeri in homepage)
   - Numero di persone nel team (per la pagina Chi Siamo)
   - URL LinkedIn aziendale
   - Numero WhatsApp aziendale
4. **Esegui solo dopo aver concordato** ogni aspetto con Claude

---

## Variabili d'ambiente da preparare prima della Fase -1

Crea un file `.env.local` nella root del progetto con:

```env
BREVO_API_KEY=               # stessa chiave di nanopower.it o chiave separata
CONTACT_EMAIL=f.lomazzi@fbosolution.it
NEXT_PUBLIC_GA_ID=           # G-XXXXXXXXXX (diverso da nanopower.it)
NEXT_PUBLIC_WHATSAPP=39      # es. 393331234567 (senza +)
NEXTAUTH_URL=https://fbosolution.it
```

> **Nota:** fbosolution.it è un sito molto più semplice di nanopower.it.
> Non ha autenticazione, area riservata o CMS blog.
> Per la Fase -1 bastano solo `BREVO_API_KEY` e `CONTACT_EMAIL`.

---

## Relazione con nanopower.it

fbosolution.it e nanopower.it si supportano reciprocamente:

- **fbosolution.it** presenta l'azienda e le divisioni → linka a nanopower.it per i prodotti
- **nanopower.it** presenta i prodotti → linka a fbosolution.it come "azienda madre"
- I due siti hanno stack identico (Next.js 14 + Tailwind) → componenti condivisibili
- Il deploy è su due progetti Vercel separati con domini distinti

---

## Stack tecnico

| Componente | Tecnologia |
|------------|------------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + shadcn/ui |
| Form | React Hook Form + Zod |
| CRM / Email | Brevo (condiviso con nanopower.it) |
| Analytics | Google Analytics 4 (tracking separato) |
| Deploy | Vercel (progetto separato) |

---

*Documento generato con Claude AI — Fbosolution.it © 2026*
