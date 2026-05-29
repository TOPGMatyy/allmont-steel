"use client";

import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Domů" },
  { href: "#o-spolecnosti", label: "O společnosti" },
  { href: "#sluzby", label: "Služby" },
  { href: "#reference", label: "Reference" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Footer() {
  const scroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#080a0d",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="6" fill="#E8650A"/>
                <polygon points="18,6 28,28 23,28 18,16 13,28 8,28" fill="white"/>
                <rect x="11" y="21" width="14" height="3" fill="#E8650A"/>
                <text x="21" y="30" fontSize="7" fontWeight="800" fill="white" fontFamily="system-ui">S</text>
              </svg>
              <div>
                <div
                  className="font-bold text-white tracking-widest"
                  style={{ fontFamily: "var(--font-barlow)", fontSize: "14px", letterSpacing: "0.12em" }}
                >
                  ALLMONT STEEL s.r.o.
                </div>
                <div style={{ fontSize: "10px", color: "#E8650A", letterSpacing: "0.2em", fontFamily: "var(--font-barlow)" }}>
                  SPECIALISTA NA OCELOVÉ KONSTRUKCE
                </div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-4">
              Výroba a montáž ocelových konstrukcí od roku 1992.
              Certifikovaní odborníci, vlastní vybavení, průmyslové projekty po celé ČR.
            </p>
            <div
              className="inline-block text-xs px-3 py-1.5 rounded"
              style={{ background: "rgba(59,130,246,0.08)", color: "#60a5fa", border: "1px solid rgba(59,130,246,0.15)" }}
            >
              Certifikace TI Praha · ev. č. 0916/7/00
            </div>
          </div>

          {/* Nav */}
          <div>
            <div
              className="text-xs font-bold tracking-widest mb-5 uppercase"
              style={{ color: "#E8650A", fontFamily: "var(--font-barlow)" }}
            >
              Navigace
            </div>
            <nav className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scroll(l.href)}
                  className="text-left text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div
              className="text-xs font-bold tracking-widest mb-5 uppercase"
              style={{ color: "#E8650A", fontFamily: "var(--font-barlow)" }}
            >
              Kontakt
            </div>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#E8650A" }} />
                <span>U sýpky 37<br />719 00 Ostrava – Kunčice</span>
              </div>
              <a href="tel:+420596237471" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} style={{ color: "#E8650A" }} />
                +420 596 237 471
              </a>
              <a href="tel:+420602714611" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} style={{ color: "#E8650A" }} />
                +420 602 714 611
              </a>
              <a href="mailto:allmont@volny.cz" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} style={{ color: "#E8650A" }} />
                allmont@volny.cz
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <span>© {new Date().getFullYear()} Allmont Steel s.r.o. · IČ: 25856057 · Všechna práva vyhrazena.</span>
          <span>Jednatel: Tomáš Bohačík</span>
        </div>
      </div>
    </footer>
  );
}
