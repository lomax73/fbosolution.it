"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 bg-white transition-shadow duration-200"
      style={{ boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.08)" : "none" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="FBO Solution SRL"
            width={44}
            height={44}
            className="rounded-full"
            priority
          />
          <span
            className="select-none leading-none"
            style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 700,
              fontSize: "1.65rem",
              letterSpacing: "0.02em",
              color: "#1A3A5C",
            }}
          >
            FboSolution <span style={{ color: "#1EC8E8" }}>S.r.l.</span>
          </span>
        </div>
        <a
          href="mailto:contatti@fbosolution.it"
          className="text-sm font-semibold px-4 py-2 rounded-lg border-2 transition-all hover:text-white"
          style={{
            color: "#1A3A5C",
            borderColor: "#1EC8E8",
            backgroundColor: "transparent",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1EC8E8";
            (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
            (e.currentTarget as HTMLAnchorElement).style.color = "#1A3A5C";
          }}
        >
          contatti@fbosolution.it
        </a>
      </div>
    </header>
  );
}
