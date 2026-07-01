# FASE 2 — Divisioni e Portfolio
## fbosolution.it

> ⚠️ **DISCUTI QUESTO PROMPT CON CLAUDE PRIMA DI ESEGUIRLO**
> Prima di eseguire, discuti con Claude: hai foto o immagini di progetti reali
> da usare nel portfolio? Hai casi studio specifici della divisione infrastrutture?
> Vuoi che la pagina /divisione-materiali rimandi direttamente a nanopower.it
> o preferisci tenere i prodotti anche qui in forma sintetica?
>
> **Prerequisiti:** Fase 1 completata (`fase_1_struttura_corporate_eseguito.md`)
> **Risultato atteso:** Pagine /divisione-infrastrutture, /divisione-materiali, /portfolio.
> **Stato file:** rinomina in `fase_2_divisioni_portfolio_incorso.md` quando inizi,
> in `fase_2_divisioni_portfolio_eseguito.md` quando completata.

---

## Prompt da incollare in Claude Code

```
Crea le pagine delle divisioni e il portfolio per fbosolution.it.

━━━ PAGINA /divisione-infrastrutture ━━━

HERO:
- Sfondo: gradiente sottile #1A3A5C → #2E5D8E (solo nel header hero)
- Titolo H1 bianco: "Infrastrutture di Rete & WiFi Enterprise"
- Sub bianco: "Progettiamo, installiamo e certifichiamo reti dati e sistemi wireless
  ad alta performance per aziende, cantieri e strutture pubbliche."
- CTA: "Richiedi un preventivo" (sfondo #00A896)

SEZIONE SERVIZI (sfondo bianco, 4 card in griglia 2x2):
Per ogni servizio: icona SVG outline, titolo, descrizione 2-3 righe.
- Reti Dati Strutturate:
  "Progettazione e installazione di infrastrutture cablate: cat.6A, fibra ottica,
   rack, patch panel. Certificazione con strumentazione FLUKE per ogni impianto."
- WiFi Enterprise:
  "Sistemi wireless mesh ad alta densità, copertura multi-piano, gestione centralizzata.
   Analisi heat map, progettazione radio, deployment e configurazione."
- Progettazione Reti:
  "Topologie di rete su misura, documentazione As-Built, analisi dei requisiti,
   preventivazione dettagliata. Normative TIA-568, ISO/IEC 11801."
- Manutenzione e Assistenza:
  "SLA personalizzati, monitoraggio remoto, troubleshooting, aggiornamenti firmware,
   espansioni di rete. Intervento on-site in tempi concordati."

SEZIONE "SETTORI CHE SERVIAMO" (griglia icone, sfondo #F8FAFC):
- 🏢 Aziende e uffici
- 🏭 Cantieri e capannoni industriali
- 🏥 Strutture sanitarie
- 🏨 Alberghi e hospitality
- 🏛️ Pubblica Amministrazione
- 🏗️ Condomini e residenziale smart

SEZIONE "IL NOSTRO PROCESSO" (timeline 4 step):
Timeline orizzontale desktop, verticale mobile. Ogni step: numero cerchio + titolo + testo breve.
1. Sopralluogo e analisi → "Valutazione dello stato attuale e dei requisiti"
2. Progettazione → "Schema di rete, scelta apparati, documentazione tecnica"
3. Installazione e test → "Posa impianto, configurazione, collaudo funzionale"
4. Certificazione → "Test con strumentazione certificata, documentazione finale"

FORM CONTATTO DIVISIONE RETI:
Titolo: "Hai una rete da progettare o potenziare?"
Campi: Nome, Azienda, Email, Telefono, Tipo struttura (select: Ufficio, Capannone,
Struttura sanitaria, Hotel, PA, Altro), Numero utenti/postazioni (number), Note, Privacy.
Server Action: email notifica a CONTACT_EMAIL "🔔 Lead infrastrutture fbosolution.it"

━━━ PAGINA /divisione-materiali ━━━

HERO:
- Sfondo bianco con accento teal
- H1: "Materiali Edili Nanotecnologici"
- Sub: "Rivenditore autorizzato in Italia per i-GlooKlima e i-GlooAdvance.
  Tre prodotti con differenziatori tecnici unici sul mercato."

3 CARD PRODOTTO (sintesi):
Per ogni prodotto: nome, un dato tecnico chiave, 2 righe di descrizione.
- IGK2: λ = 0,0014 W/mk — "Il rasante nanotecnologico con la conducibilità più bassa sul mercato"
- SuperFluid: Garanzia 10 anni assicurata — "L'unico additivo per massetti con copertura €10M"
- SuperElastiK: EN 14891 + EN 1504-2 — "Membrana elastica che copre fessure fino a 2,8 mm"

BOX PROMINENTE (sfondo #00A896, testo bianco):
Testo: "Per schede tecniche complete, calcolatore risparmio, formazione e richiesta preventivo:"
CTA grande: "Visita nanopower.it →" (link esterno, bottone bianco con testo teal)
Sottotesto: "nanopower.it è il sito dedicato alla divisione materiali di Fbosolution.it"

Paragrafo: "La divisione materiali nasce dalla nostra visione di ambienti più efficienti
e duraturi. Portiamo in Italia tecnologie nanotecnologiche che cambiano i parametri
del costruire e ristrutturare, con garanzie reali e supporto tecnico locale."

━━━ PAGINA /portfolio ━━━

Layout: griglia 3 colonne desktop, 2 tablet, 1 mobile.

CARD PROGETTO (struttura):
- Area immagine: sfondo gradiente colorato per categoria + icona SVG al centro (placeholder)
  Infrastrutture: gradiente #1A3A5C → #2E5D8E
  Materiali: gradiente #00A896 → #007A6E
- Badge categoria: "Infrastrutture" (blu) | "Materiali" (teal)
- Titolo progetto
- Location (es. "Lombardia")
- Breve descrizione: sfida, soluzione, risultato (3 righe max)
- Tag tecnici (pill piccole)

CREA 6 CARD PLACEHOLDER (3 per divisione):

Infrastruttura 1:
Titolo: "Rete WiFi enterprise — Struttura ricettiva"
Location: Lombardia
Desc: "Progettazione e installazione di 24 access point WiFi 6 in una struttura con 80 camere.
Copertura omogenea, gestione centralizzata, segregazione VLAN ospiti/staff."
Tag: WiFi 6 · VLAN · 80 camere · Certificazione FLUKE

Infrastruttura 2:
Titolo: "Rete dati strutturata — Capannone industriale"
Location: Veneto
Desc: "Cablaggio cat.6A per 150 postazioni su 3000 m². Fibra ottica dorsale,
rack certificati, documentazione As-Built completa."
Tag: Cat.6A · Fibra ottica · 150 postazioni

Infrastruttura 3:
Titolo: "Infrastruttura WiFi — Uffici direzionali"
Location: Milano
Desc: "Sostituzione rete obsoleta con soluzione mesh gestita. 12 access point,
sistema di monitoraggio centralizzato, intervento senza interruzione attività."
Tag: WiFi mesh · Monitoraggio · Zero downtime

Materiali 1:
Titolo: "Isolamento IGK2 — Edificio storico vincolato"
Location: Toscana
Desc: "800 m² di rasante IGK2 su edificio con vincolo architettonico. Cappotto
esterno non applicabile. Risparmio energetico stimato 35% senza alterare la facciata."
Tag: IGK2 · Edificio storico · 800 m²

Materiali 2:
Titolo: "Massetti SuperFluid — Complesso residenziale"
Location: Emilia-Romagna
Desc: "12 appartamenti, 2.400 m² di massetti. Calpestabilità in 20 ore: riduzione
dei tempi di cantiere di 4 giorni. Release Certificate emesso per ogni unità."
Tag: SuperFluid · 2.400 m² · Garanzia 10 anni

Materiali 3:
Titolo: "Impermeabilizzazione SuperElastiK — Struttura in CA"
Location: Veneto
Desc: "600 m² di membrana SuperElastiK su fondazioni e pareti interrate.
Fessure fino a 2 mm pontate. Protezione dalla carbonatazione garantita 50+ anni."
Tag: SuperElastiK · 600 m² · EN 14891

Nota nel codice HTML di ogni card: <!-- Sostituire con progetto reale -->

FILTRO CATEGORIA:
- Pill buttons: "Tutti" | "Infrastrutture" | "Materiali"
- Filtro client-side con useState
```
