import Image from "next/image";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden py-28 px-6" style={{ backgroundColor: "#F0F6FF" }}>
        {/* SVG background — rete digitale sinistra + struttura molecolare destra */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          aria-hidden="true"
        >
          {/* Gradiente di sfondo */}
          <defs>
            <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D9F4FA" />
              <stop offset="50%" stopColor="#F0F6FF" />
              <stop offset="100%" stopColor="#D9F4FA" />
            </linearGradient>
            {/* Bordi sfumati azzurro logo */}
            <linearGradient id="borderLeft" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1EC8E8" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#1EC8E8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="borderRight" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#1EC8E8" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#1EC8E8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="borderTop" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1EC8E8" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#1EC8E8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="borderBottom" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#1EC8E8" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#1EC8E8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="1200" height="600" fill="url(#bgGrad)" />
          {/* Sfumature bordi azzurro logo */}
          <rect width="300" height="600" fill="url(#borderLeft)" />
          <rect x="900" width="300" height="600" fill="url(#borderRight)" />
          <rect width="1200" height="200" fill="url(#borderTop)" />
          <rect y="400" width="1200" height="200" fill="url(#borderBottom)" />

          {/* === SINISTRA: rete digitale === */}
          {/* Nodi rete */}
          <circle cx="80" cy="120" r="5" fill="#2E5D8E" fillOpacity="0.35" />
          <circle cx="180" cy="80" r="4" fill="#2E5D8E" fillOpacity="0.3" />
          <circle cx="240" cy="180" r="6" fill="#2E5D8E" fillOpacity="0.4" />
          <circle cx="140" cy="260" r="4" fill="#2E5D8E" fillOpacity="0.25" />
          <circle cx="60" cy="320" r="5" fill="#2E5D8E" fillOpacity="0.3" />
          <circle cx="200" cy="340" r="4" fill="#2E5D8E" fillOpacity="0.2" />
          <circle cx="100" cy="440" r="5" fill="#2E5D8E" fillOpacity="0.25" />
          <circle cx="280" cy="420" r="4" fill="#2E5D8E" fillOpacity="0.2" />
          <circle cx="320" cy="280" r="5" fill="#1A3A5C" fillOpacity="0.3" />
          <circle cx="380" cy="160" r="4" fill="#2E5D8E" fillOpacity="0.2" />
          <circle cx="420" cy="380" r="4" fill="#2E5D8E" fillOpacity="0.18" />
          {/* Connessioni rete */}
          <line x1="80" y1="120" x2="180" y2="80" stroke="#2E5D8E" strokeOpacity="0.2" strokeWidth="1" />
          <line x1="180" y1="80" x2="240" y2="180" stroke="#2E5D8E" strokeOpacity="0.2" strokeWidth="1" />
          <line x1="80" y1="120" x2="240" y2="180" stroke="#2E5D8E" strokeOpacity="0.15" strokeWidth="1" />
          <line x1="240" y1="180" x2="140" y2="260" stroke="#2E5D8E" strokeOpacity="0.2" strokeWidth="1" />
          <line x1="140" y1="260" x2="60" y2="320" stroke="#2E5D8E" strokeOpacity="0.18" strokeWidth="1" />
          <line x1="140" y1="260" x2="200" y2="340" stroke="#2E5D8E" strokeOpacity="0.15" strokeWidth="1" />
          <line x1="60" y1="320" x2="100" y2="440" stroke="#2E5D8E" strokeOpacity="0.15" strokeWidth="1" />
          <line x1="200" y1="340" x2="280" y2="420" stroke="#2E5D8E" strokeOpacity="0.15" strokeWidth="1" />
          <line x1="240" y1="180" x2="320" y2="280" stroke="#1A3A5C" strokeOpacity="0.18" strokeWidth="1" />
          <line x1="320" y1="280" x2="200" y2="340" stroke="#1A3A5C" strokeOpacity="0.15" strokeWidth="1" />
          <line x1="180" y1="80" x2="380" y2="160" stroke="#2E5D8E" strokeOpacity="0.12" strokeWidth="1" />
          <line x1="320" y1="280" x2="420" y2="380" stroke="#2E5D8E" strokeOpacity="0.12" strokeWidth="1" />

          {/* === DESTRA: struttura molecolare/cristallina === */}
          {/* Esagono centrale grande */}
          <polygon points="1020,220 1060,198 1100,220 1100,264 1060,286 1020,264" stroke="#00A896" strokeOpacity="0.3" strokeWidth="1.5" fill="none" />
          {/* Esagoni satellite */}
          <polygon points="940,176 980,154 1020,176 1020,220 980,242 940,220" stroke="#00A896" strokeOpacity="0.2" strokeWidth="1" fill="none" />
          <polygon points="1100,176 1140,154 1180,176 1180,220 1140,242 1100,220" stroke="#00A896" strokeOpacity="0.18" strokeWidth="1" fill="none" />
          <polygon points="940,264 980,242 1020,264 1020,308 980,330 940,308" stroke="#00A896" strokeOpacity="0.2" strokeWidth="1" fill="none" />
          <polygon points="1100,264 1140,242 1180,264 1180,308 1140,330 1100,308" stroke="#00A896" strokeOpacity="0.18" strokeWidth="1" fill="none" />
          <polygon points="1020,308 1060,286 1100,308 1100,352 1060,374 1020,352" stroke="#00A896" strokeOpacity="0.15" strokeWidth="1" fill="none" />
          {/* Nodi molecolari */}
          <circle cx="1060" cy="242" r="6" fill="#00A896" fillOpacity="0.35" />
          <circle cx="980" cy="198" r="4" fill="#00A896" fillOpacity="0.25" />
          <circle cx="1140" cy="198" r="4" fill="#00A896" fillOpacity="0.25" />
          <circle cx="980" cy="286" r="4" fill="#00A896" fillOpacity="0.22" />
          <circle cx="1140" cy="286" r="4" fill="#00A896" fillOpacity="0.22" />
          <circle cx="1060" cy="330" r="4" fill="#00A896" fillOpacity="0.2" />
          <circle cx="860" cy="340" r="5" fill="#00A896" fillOpacity="0.18" />
          <circle cx="900" cy="420" r="4" fill="#00A896" fillOpacity="0.15" />
          <circle cx="820" cy="200" r="4" fill="#00A896" fillOpacity="0.15" />
          {/* Linee molecolari extra */}
          <line x1="860" y1="340" x2="940" y2="308" stroke="#00A896" strokeOpacity="0.15" strokeWidth="1" />
          <line x1="860" y1="340" x2="900" y2="420" stroke="#00A896" strokeOpacity="0.12" strokeWidth="1" />
          <line x1="820" y1="200" x2="940" y2="220" stroke="#00A896" strokeOpacity="0.12" strokeWidth="1" />

          {/* Linea di confine centrale — gradiente */}
          <line x1="600" y1="40" x2="600" y2="560" stroke="url(#centerLine)" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="6 8" />
          <defs>
            <linearGradient id="centerLine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2E5D8E" />
              <stop offset="50%" stopColor="#00A896" />
              <stop offset="100%" stopColor="#2E5D8E" />
            </linearGradient>
          </defs>
        </svg>

        {/* Contenuto hero — sopra l'SVG */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span
              className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{ backgroundColor: "rgba(235,243,251,0.9)", color: "#2E5D8E" }}
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

          <div
            className="mx-auto rounded-full max-w-xs mb-10"
            style={{ background: "linear-gradient(90deg, #2E5D8E, #00A896)", height: "3px" }}
          />

          <a
            href="#contatti"
            className="inline-block px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:scale-105 hover:opacity-85"
            style={{ backgroundColor: "#1A3A5C", boxShadow: "0 4px 20px rgba(26,58,92,0.25)" }}
          >
            Contattaci ora →
          </a>
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
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                  <defs>
                    <linearGradient id="netGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#1A3A5C" />
                      <stop offset="100%" stopColor="#2E5D8E" />
                    </linearGradient>
                    <linearGradient id="wifiGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1EC8E8" />
                      <stop offset="100%" stopColor="#2E5D8E" />
                    </linearGradient>
                  </defs>
                  {/* Sfondo cerchio */}
                  <circle cx="36" cy="36" r="34" fill="#EBF3FB" />
                  {/* Router centrale */}
                  <rect x="26" y="30" width="20" height="13" rx="3" fill="url(#netGrad)" />
                  <circle cx="30" cy="36.5" r="1.5" fill="#1EC8E8" />
                  <circle cx="36" cy="36.5" r="1.5" fill="#1EC8E8" />
                  <circle cx="42" cy="36.5" r="1.5" fill="#fff" fillOpacity="0.6" />
                  {/* Onde WiFi */}
                  <path d="M28 27 Q36 21 44 27" stroke="url(#wifiGrad)" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <path d="M23 23 Q36 14 49 23" stroke="url(#wifiGrad)" strokeWidth="2" strokeLinecap="round" fill="none" strokeOpacity="0.6" />
                  <path d="M18 19 Q36 7 54 19" stroke="url(#wifiGrad)" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeOpacity="0.3" />
                  {/* Cavo verso il basso / porta */}
                  <line x1="36" y1="43" x2="36" y2="49" stroke="#2E5D8E" strokeWidth="2" />
                  {/* Nodi rete collegati */}
                  <circle cx="20" cy="55" r="4" fill="url(#netGrad)" />
                  <circle cx="36" cy="55" r="4" fill="url(#netGrad)" />
                  <circle cx="52" cy="55" r="4" fill="url(#netGrad)" />
                  <line x1="20" y1="51" x2="20" y2="49" stroke="#2E5D8E" strokeWidth="1.5" />
                  <line x1="36" y1="51" x2="36" y2="49" stroke="#2E5D8E" strokeWidth="1.5" />
                  <line x1="52" y1="51" x2="52" y2="49" stroke="#2E5D8E" strokeWidth="1.5" />
                  <line x1="20" y1="49" x2="52" y2="49" stroke="#2E5D8E" strokeWidth="1.5" />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#1A3A5C" }}>
                Infrastrutture di Rete & WiFi
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#64748B" }}>
                Progettazione, installazione e configurazione di reti dati strutturate
                e sistemi <strong style={{ color: "#1A3A5C" }}>WiFi enterprise</strong>.{" "}
                <strong style={{ color: "#1A3A5C" }}>Fibra ottica</strong>, reti cablate,{" "}
                <strong style={{ color: "#1A3A5C" }}>wireless mesh</strong>{" "}
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
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                  <defs>
                    <linearGradient id="matGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#00A896" />
                      <stop offset="100%" stopColor="#007A6E" />
                    </linearGradient>
                    <linearGradient id="crystalGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1EC8E8" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#00A896" stopOpacity="0.15" />
                    </linearGradient>
                  </defs>
                  {/* Sfondo cerchio */}
                  <circle cx="36" cy="36" r="34" fill="#E6F7F5" />
                  {/* Esagono centrale — reticolo nanotecnologico */}
                  <polygon points="36,16 48,23 48,37 36,44 24,37 24,23" fill="url(#crystalGrad)" stroke="url(#matGrad)" strokeWidth="2" />
                  {/* Atomo centrale */}
                  <circle cx="36" cy="30" r="4" fill="url(#matGrad)" />
                  {/* Legami molecolari */}
                  <line x1="36" y1="16" x2="36" y2="26" stroke="#00A896" strokeWidth="1.5" />
                  <line x1="48" y1="23" x2="40" y2="27.5" stroke="#00A896" strokeWidth="1.5" />
                  <line x1="48" y1="37" x2="40" y2="32.5" stroke="#00A896" strokeWidth="1.5" />
                  <line x1="36" y1="44" x2="36" y2="34" stroke="#00A896" strokeWidth="1.5" />
                  <line x1="24" y1="37" x2="32" y2="32.5" stroke="#00A896" strokeWidth="1.5" />
                  <line x1="24" y1="23" x2="32" y2="27.5" stroke="#00A896" strokeWidth="1.5" />
                  {/* Atomi vertici */}
                  <circle cx="36" cy="16" r="3" fill="#00A896" fillOpacity="0.7" />
                  <circle cx="48" cy="23" r="3" fill="#00A896" fillOpacity="0.7" />
                  <circle cx="48" cy="37" r="3" fill="#00A896" fillOpacity="0.7" />
                  <circle cx="36" cy="44" r="3" fill="#00A896" fillOpacity="0.7" />
                  <circle cx="24" cy="37" r="3" fill="#00A896" fillOpacity="0.7" />
                  <circle cx="24" cy="23" r="3" fill="#00A896" fillOpacity="0.7" />
                  {/* Satellite molecole esterne */}
                  <circle cx="36" cy="57" r="2.5" fill="#1EC8E8" fillOpacity="0.6" />
                  <circle cx="56" cy="47" r="2" fill="#1EC8E8" fillOpacity="0.5" />
                  <circle cx="16" cy="47" r="2" fill="#1EC8E8" fillOpacity="0.5" />
                  <line x1="36" y1="47" x2="36" y2="54.5" stroke="#00A896" strokeWidth="1" strokeOpacity="0.4" />
                  <line x1="48" y1="40" x2="54" y2="45" stroke="#00A896" strokeWidth="1" strokeOpacity="0.4" />
                  <line x1="24" y1="40" x2="18" y2="45" stroke="#00A896" strokeWidth="1" strokeOpacity="0.4" />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#1A3A5C" }}>
                Materiali Edili Nanotecnologici
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#64748B" }}>
                Rivenditore autorizzato in Italia di materiali ad alte prestazioni:
                isolamento termico <strong style={{ color: "#1A3A5C" }}>IGK2</strong>,
                massetti <strong style={{ color: "#1A3A5C" }}>SuperFluid</strong> con garanzia decennale assicurativa,
                membrane impermeabilizzanti <strong style={{ color: "#1A3A5C" }}>SuperElastiK</strong>.
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
      <section id="contatti" className="py-20 px-6 bg-white">
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
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                <Image src="/logo.jpg" alt="FBO Solution SRL" width={36} height={36} />
              </div>
              <span
                className="leading-none"
                style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 700,
                  fontSize: "1.65rem",
                  letterSpacing: "0.02em",
                  color: "white",
                }}
              >
                FboSolution <span style={{ color: "#1EC8E8" }}>S.r.l.</span>
              </span>
            </div>

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
                href="mailto:contatti@fbosolution.it"
                className="text-sm opacity-75 hover:opacity-100 transition-opacity"
              >
                contatti@fbosolution.it
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
