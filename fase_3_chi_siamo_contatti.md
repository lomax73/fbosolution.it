# FASE 3 — Chi Siamo e Contatti
## fbosolution.it

> ⚠️ **DISCUTI QUESTO PROMPT CON CLAUDE PRIMA DI ESEGUIRLO**
> Prima di eseguire, prepara i contenuti reali: storia aziendale (anno fondazione,
> come è nata l'idea delle due divisioni), foto profilo (se disponibile),
> indirizzo o almeno la città, e se vuoi includere altri membri del team.
> Il prompt ha placeholder: più dati reali fornisci, migliore il risultato.
>
> **Prerequisiti:** Fase 2 completata (`fase_2_divisioni_portfolio_eseguito.md`)
> **Risultato atteso:** Pagine /chi-siamo e /contatti complete.
> **Stato file:** rinomina in `fase_3_chi_siamo_contatti_incorso.md` quando inizi,
> in `fase_3_chi_siamo_contatti_eseguito.md` quando completata.

---

## Prompt da incollare in Claude Code

```
Crea le pagine /chi-siamo e /contatti per fbosolution.it.

━━━ PAGINA /chi-siamo ━━━

HERO:
- Layout: testo a sinistra, elemento grafico a destra (sfondo sfumato #1A3A5C → #2E5D8E
  con forma geometrica astratta in SVG — due elementi interconnessi che rappresentano
  le due divisioni)
- H1: "Chi siamo"
- Sub: "Un'azienda italiana nata dalla passione per la tecnologia applicata."

SEZIONE "LA NOSTRA STORIA":
Box narrativo (max-w-3xl, centrato):
Placeholder da sostituire con storia reale — struttura consigliata in 3 paragrafi:
[Paragrafo 1] Anno di fondazione e primo settore (infrastrutture di rete)
"Fbosolution.it nasce nel [anno] con l'obiettivo di portare sul territorio
soluzioni di rete ad alte prestazioni, quelle che i grandi integratori riservano
solo alle grandi aziende. [Aggiungi dettagli reali]"

[Paragrafo 2] Espansione alla divisione materiali
"La svolta arriva con la scoperta dei materiali nanotecnologici i-GlooKlima e
i-GlooAdvance: tecnologie con performance misurabili e uniche sul mercato italiano.
[Aggiungi come e quando è avvenuto il contatto con il produttore]"

[Paragrafo 3] La visione attuale
"Oggi Fbosolution.it opera con due divisioni specializzate che condividono un'unica
filosofia: portare innovazione concreta, con dati verificabili e garanzie reali,
nei settori in cui altri portano solo promesse. [Aggiungi missione/visione personale]"
Nota nel codice: <!-- Sostituire con la storia reale dell'azienda -->

SEZIONE "I NOSTRI VALORI" (sfondo #F8FAFC, 3 card):
- Competenza Tecnica
  "Aggiornamento costante su normative, tecnologie e prodotti. Certificazioni
   e formazione continua, non solo per il prodotto ma per il settore."
- Dati Concreti
  "Non partiamo dalle promesse: partiamo dalle specifiche tecniche. λ = 0,0014.
   20 ore. 10 anni assicurati. I numeri parlano meglio dei claim generici."
- Presenza Locale
  "Sopralluogo, consulenza, supporto post-vendita. Siamo qui, non solo online.
   Quello che i brand nazionali non sanno fare a livello territoriale."

SEZIONE TEAM (sfondo bianco):
Titolo: "Il team"
Card profilo principale:
- Foto: placeholder con iniziali "FL" su sfondo #1A3A5C (se no foto disponibile)
  oppure: next/image se fornita foto reale
- Nome: "Fabrizio L."
- Ruolo: "Fondatore & Technical Lead"
- Bio breve (2-3 righe): placeholder da sostituire con bio reale
  "Specializzato in infrastrutture di rete e materiali tecnologici per l'edilizia.
   [Aggiungi background, anni di esperienza, certificazioni reali]"
- LinkedIn: icona → link profilo personale
Nota nel codice: <!-- Aggiungere altri membri del team se necessario -->

SEZIONE "LAVORA CON NOI" (sfondo #F8FAFC):
Box semplice:
Titolo: "Hai le competenze giuste?"
Testo: "Siamo sempre aperti a collaborazioni con professionisti del settore reti
e dell'edilizia tecnica. Se hai esperienza e vuoi fare cose buone, scrivici."
CTA: "Contattaci" → /contatti

━━━ PAGINA /contatti ━━━

Layout a 2 colonne su desktop (form sinistra 60%, info destra 40%).

FORM CONTATTO (colonna sinistra):
Titolo: "Scrivici"
Campi:
- Nome (required)
- Cognome (required)
- Email (required)
- Telefono (optional)
- Azienda / Ente (optional)
- Argomento: select required →
  "Infrastrutture di rete / WiFi" | "Materiali edili nanotecnologici" |
  "Partnership / Collaborazione" | "Informazioni generali" | "Altro"
- Messaggio (textarea, required, max 800 caratteri)
- Privacy (required con link a /privacy)
Bottone: "Invia messaggio" sfondo #1A3A5C.
Server Action: email a CONTACT_EMAIL + conferma al mittente.
Dopo submit: messaggio successo inline con nome utente.

INFO CONTATTO (colonna destra):
Card con bordo #E2E8F0:
- Email: f.lomazzi@fbosolution.it (link mailto)
- LinkedIn: icona + "linkedin.com/company/fbosolution"
- WhatsApp: icona + link wa.me + "Risposta rapida per richieste urgenti"
- Orari: "Lun – Ven · 9:00 – 18:00"
- Sede: "[Città] — [Provincia]" (placeholder, da inserire dato reale)

Box "Divisione Materiali":
"Per richieste specifiche su IGK2, SuperFluid e SuperElastiK:"
Link: "→ Vai a nanopower.it/richiedi-info" (link esterno)

Metadata SEO:
title: "Contatti — Fbosolution.it"
description: "Contatta Fbosolution.it per infrastrutture di rete, WiFi enterprise
o materiali edili nanotecnologici. Risposta entro 24 ore lavorative."
```
