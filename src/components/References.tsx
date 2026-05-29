"use client";

import { Building, Radio, Droplets, Zap, Factory, Church, Car, FlameKindling, Tv } from "lucide-react";

const projects = [
  {
    icon: <Factory size={20} />,
    title: "Zastřešení uhelné skládky",
    client: "Teplárna Olomouc",
    desc: "Realizace ocelové střešní konstrukce nad uhelnou skládkou v prostorách olomoucké teplárny.",
    category: "Průmyslová hala",
    color: "#E8650A",
  },
  {
    icon: <Radio size={20} />,
    title: "Opláštění vysílače Praděd",
    client: "Vysílač Praděd – 3. podlaží",
    desc: "Montáž atypického opláštění třetího podlaží vysílací věže na Pradědu v Jeseníkách.",
    category: "Výškové práce",
    color: "#60a5fa",
  },
  {
    icon: <Droplets size={20} />,
    title: "Vodárenská věž",
    client: "Atypická vodárenská věž",
    desc: "Montáž atypické nosné ocelové konstrukce vodárenské věže – nestandardní geometrie a zatížení.",
    category: "Atypická konstrukce",
    color: "#E8650A",
  },
  {
    icon: <Radio size={20} />,
    title: "Anténní stožáry O2",
    client: "O2 Czech Republic",
    desc: "Série montáží telekomunikačních anténních stožárů pro operátora O2 na celém území ČR.",
    category: "Anténní stožáry",
    color: "#60a5fa",
  },
  {
    icon: <Church size={20} />,
    title: "Kostelní věž Ostrava-Výškovice",
    client: "Kostel v Ostravě",
    desc: "Montáž atypické ocelové konstrukce kostelní věže v Ostravě-Výškovicích. Precizní výšková práce.",
    category: "Atypická montáž",
    color: "#E8650A",
  },
  {
    icon: <Car size={20} />,
    title: "Autosalón Hlaváček Olomouc",
    client: "Autosalón Hlaváček",
    desc: "Montáž ocelové nosné konstrukce autosalónu v Olomouci – komerční architektura na klíč.",
    category: "Komerční objekt",
    color: "#60a5fa",
  },
  {
    icon: <FlameKindling size={20} />,
    title: "Lakovna Ožog",
    client: "Lakovna Ožog",
    desc: "Ocelová konstrukce průmyslové lakovny – přesné rozměry a nároky na chemickou odolnost prostředí.",
    category: "Průmyslový objekt",
    color: "#E8650A",
  },
  {
    icon: <Zap size={20} />,
    title: "ČEZ Aréna",
    client: "ČEZ Aréna Ostrava",
    desc: "Dílčí ocelové konstrukce v rámci projektu víceúčelové ČEZ Arény v Ostravě.",
    category: "Velká zakázka",
    color: "#60a5fa",
  },
  {
    icon: <Tv size={20} />,
    title: "Anilin & projekty vysílačů",
    client: "Anilin (2005) + vysílače",
    desc: "Projekt Anilin a série realizací konstrukčních prací na vysílačích po celé České republice.",
    category: "Průmysl / telco",
    color: "#E8650A",
  },
];

export default function References() {
  return (
    <section
      id="reference"
      className="relative py-24 md:py-32"
      style={{ background: "linear-gradient(180deg,#0e0f12 0%,#111316 100%)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(232,101,10,0.4),transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div
            className="inline-block text-xs font-bold tracking-widest mb-4 px-3 py-1 rounded"
            style={{ background: "rgba(232,101,10,0.1)", color: "#fb923c", fontFamily: "var(--font-barlow)" }}
          >
            REFERENCE
          </div>
          <h2
            className="font-black leading-tight mb-4"
            style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(2rem,4vw,3rem)", color: "#f8fafc" }}
          >
            Projekty, na které{" "}
            <span style={{ background: "linear-gradient(90deg,#60a5fa,#93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              jsme hrdí
            </span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Za 30 let jsme realizovali stovky projektů napříč průmyslem, telekomunikacemi, energetikou
            i komerční výstavbou. Zde je výběr těch nejvýznamnějších.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: "rgba(28,29,34,0.8)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* top color bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg,${p.color},transparent)` }}
              />

              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center"
                  style={{
                    background: `rgba(${p.color === "#E8650A" ? "232,101,10" : "96,165,250"},0.1)`,
                    border: `1px solid rgba(${p.color === "#E8650A" ? "232,101,10" : "96,165,250"},0.2)`,
                    color: p.color,
                  }}
                >
                  {p.icon}
                </div>
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{
                    background: `rgba(${p.color === "#E8650A" ? "232,101,10" : "96,165,250"},0.08)`,
                    color: p.color,
                    fontFamily: "var(--font-barlow)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {p.category}
                </span>
              </div>

              <h3 className="font-bold text-white mb-1 text-base leading-snug">{p.title}</h3>
              <div className="text-xs font-medium mb-2" style={{ color: p.color }}>
                {p.client}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-14 text-center">
          <div
            className="inline-block px-6 py-4 rounded-xl text-sm text-slate-400"
            style={{ background: "rgba(28,29,34,0.5)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            Jde o výběr z naší bohaté referenční databáze. Pro úplný přehled realizací nás kontaktujte.
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(59,130,246,0.2),transparent)" }} />
    </section>
  );
}
