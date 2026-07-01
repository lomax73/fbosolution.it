"use client";

import { useEffect, useState } from "react";

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
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span
          className="text-xl font-bold tracking-tight select-none"
          style={{ color: "#1A3A5C" }}
        >
          fbosolution<span style={{ color: "#00A896" }}>.it</span>
        </span>
        <a
          href="mailto:f.lomazzi@fbosolution.it"
          className="text-sm transition-colors hover:underline"
          style={{ color: "#64748B" }}
        >
          f.lomazzi@fbosolution.it
        </a>
      </div>
    </header>
  );
}
