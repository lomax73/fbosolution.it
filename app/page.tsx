import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
      <Header />

      {/* HERO */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span
              className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{ backgroundColor: "#EBF3FB", color: "#2E5D8E" }}
            >
              Presto Online
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: "#1A3A5C" }}
          >
            Innovazione Applicata agli Ambienti
          </h1>

          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8"
            style={{ color: "#334155" }}
          >
            Fbosolution.it porta tecnologia avanzata dove altri portano soluzioni standard:
            dalle infrastrutture di rete digitale ai materiali edili nanotecnologici
            di ultima generazione.
          </p>

          {/* Decorative line */}
          <div
            className="mx-auto h-[3px] rounded-full max-w-xs"
            style={{ background: "linear-gradient(90deg, #2E5D8E, #00A896)" }}
          />
        </div>
      </section>

      {/* DIVISIONI */}
      <section className="py-20 px-6" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 — Infrastrutture */}
            <div
              className="bg-white rounded-2xl p-8 border"
              style={{ borderColor: "#E2E8F0" }}
            >
              <div className="mb-5">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="4" stroke="#2E5D8E" strokeWidth="2" />
                  <circle cx="8" cy="12" r="3" stroke="#2E5D8E" strokeWidth="2" />
                  <circle cx="40" cy="12" r="3" stroke="#2E5D8E" strokeWidth="2" />
                  <circle cx="8" cy="36" r="3" stroke="#2E5D8E" strokeWidth="2" />
                  <circle cx="40" cy="36" r="3" stroke="#2E5D8E" strokeWidth="2" />
                  <line x1="11" y1="13.5" x2="20" y2="21" stroke="#2E5D8E" strokeWidth="1.5" />
                  <line x1="37" y1="13.5" x2="28" y2="21" stroke="#2E5D8E" strokeWidth="1.5" />
                  <line x1="11" y1="34.5" x2="20" y2="27" stroke="#2E5D8E" strokeWidth="1.5" />
                  <line x1="37" y1="34.5" x2="28" y2="27" stroke="#2E5D8E" strokeWidth="1.5" />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#1A3A5C" }}>
                Infrastrutture di Rete & WiFi
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#64748B" }}>
                Progettazione, installazione e configurazione di reti dati strutturate
                e sistemi WiFi enterprise. Fibra ottica, reti cablate, wireless mesh
                ad alta densità per aziende, cantieri e strutture pubbliche.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Fibra ottica", "WiFi 6", "Reti dati", "Certificazioni FLUKE"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: "#EBF3FB", color: "#2E5D8E" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2 — Materiali */}
            <div
              className="bg-white rounded-2xl p-8 border"
              style={{ borderColor: "#E2E8F0" }}
            >
              <div className="mb-5">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <polygon points="24,4 38,14 38,34 24,44 10,34 10,14" stroke="#00A896" strokeWidth="2" fill="none" />
                  <polygon points="24,14 32,19 32,29 24,34 16,29 16,19" stroke="#00A896" strokeWidth="1.5" fill="none" />
                  <line x1="24" y1="4" x2="24" y2="14" stroke="#00A896" strokeWidth="1.5" />
                  <line x1="38" y1="14" x2="32" y2="19" stroke="#00A896" strokeWidth="1.5" />
                  <line x1="38" y1="34" x2="32" y2="29" stroke="#00A896" strokeWidth="1.5" />
                  <line x1="24" y1="44" x2="24" y2="34" stroke="#00A896" strokeWidth="1.5" />
                  <line x1="10" y1="34" x2="16" y2="29" stroke="#00A896" strokeWidth="1.5" />
                  <line x1="10" y1="14" x2="16" y2="19" stroke="#00A896" strokeWidth="1.5" />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#1A3A5C" }}>
                Materiali Edili Nanotecnologici
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#64748B" }}>
                Rivenditore autorizzato in Italia di materiali ad alte prestazioni:
                isolamento termico IGK2, massetti SuperFluid con garanzia decennale assicurativa,
                membrane impermeabilizzanti SuperElastiK.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["IGK2", "SuperFluid", "SuperElastiK"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: "#E6F7F5", color: "#00A896" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://nanopower.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: "#00A896" }}
              >
                → Scopri nanopower.it
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NUMERI */}
      <section className="py-16 px-6" style={{ backgroundColor: "#1A3A5C" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
            {/* Aggiornare con dati reali aziendali */}
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-sm font-medium opacity-75">Progetti completati</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10</div>
              <div className="text-sm font-medium opacity-75">Anni di esperienza</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2</div>
              <div className="text-sm font-medium opacity-75">Regioni servite</div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM CONTATTI */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: "#1A3A5C" }}>
              Vuoi sapere quando siamo online?
            </h2>
            <p style={{ color: "#64748B" }}>
              Raccontaci di cosa hai bisogno: ti rispondo personalmente nel frattempo.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6" style={{ backgroundColor: "#1A3A5C" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
            <span className="text-xl font-bold">
              fbosolution<span style={{ color: "#00A896" }}>.it</span>
            </span>

            <div className="flex items-center gap-6">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/fbosolution"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-75 hover:opacity-100 transition-opacity"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:f.lomazzi@fbosolution.it"
                className="text-sm opacity-75 hover:opacity-100 transition-opacity"
              >
                f.lomazzi@fbosolution.it
              </a>
            </div>
          </div>

          <div
            className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
            style={{ borderTop: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}
          >
            <span>© 2026 Fbosolution.it — P.IVA 03536370129 — Carbonate (CO) / Tradate</span>
            <span>nanopower.it è un brand di Fbosolution.it</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
