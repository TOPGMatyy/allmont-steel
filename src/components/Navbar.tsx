"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Domů" },
  { href: "#o-spolecnosti", label: "O společnosti" },
  { href: "#sluzby", label: "Služby" },
  { href: "#reference", label: "Reference" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(14,15,18,0.96)"
          : "rgba(14,15,18,0.30)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="flex items-center gap-3 group"
          aria-label="Allmont Steel – domů"
        >
          {/* SVG inline logo */}
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="6" fill="#E8650A"/>
            {/* A shape */}
            <polygon points="18,6 28,28 23,28 18,16 13,28 8,28" fill="white"/>
            {/* Cross bar */}
            <rect x="11" y="21" width="14" height="3" fill="#E8650A"/>
            {/* S mark bottom right */}
            <text x="21" y="30" fontSize="7" fontWeight="800" fill="white" fontFamily="system-ui">S</text>
          </svg>
          <div className="flex flex-col leading-none">
            <span
              className="font-bold text-white tracking-widest"
              style={{ fontFamily: "var(--font-barlow)", fontSize: "15px", letterSpacing: "0.12em" }}
            >
              ALLMONT
            </span>
            <span
              style={{
                fontFamily: "var(--font-barlow)",
                fontSize: "10px",
                letterSpacing: "0.25em",
                color: "#E8650A",
                fontWeight: 600,
              }}
            >
              STEEL
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded relative group"
              style={{ fontFamily: "var(--font-inter)", letterSpacing: "0.02em" }}
            >
              {l.label}
              <span
                className="absolute bottom-0 left-4 right-4 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                style={{ background: "#E8650A" }}
              />
            </button>
          ))}
          <button
            onClick={() => handleNav("#kontakt")}
            className="ml-4 px-5 py-2 rounded text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ background: "#E8650A", fontFamily: "var(--font-barlow)", letterSpacing: "0.06em" }}
          >
            POPTÁVKA
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-slate-300 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{
            background: "rgba(14,15,18,0.98)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-left px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#kontakt")}
              className="mt-2 px-5 py-3 rounded text-sm font-bold text-white text-center"
              style={{ background: "#E8650A" }}
            >
              NEZÁVAZNÁ POPTÁVKA
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
