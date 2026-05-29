"use client";

import {
  Radio,
  Building2,
  ArrowUpDown,
  Settings,
  Layers,
  Package,
  Trash2,
  GitBranch,
  Cog,
  ClipboardCheck,
  SlidersHorizontal,
  MoveUp,
} from "lucide-react";

const services = [
  {
    icon: <Radio size={24} />,
    title: "Montáže anténních stožárů",
    desc: "Atypické konstrukce anténních stožárů pro telekomunikační operátory. Reference: O2, vysílač Praděd a další.",
    highlight: true,
  },
  {
    icon: <Building2 size={24} />,
    title: "Průmyslové haly",
    desc: "Montáže nosných ocelových konstrukcí průmyslových hal, skladů a výrobních objektů.",
    highlight: false,
  },
  {
    icon: <ArrowUpDown size={24} />,
    title: "Rektifikace jeřábových hal",
    desc: "Přesné vyrovnání a rektifikace jeřábových drah v průmyslových halách pro bezpečný a spolehlivý provoz.",
    highlight: false,
  },
  {
    icon: <Settings size={24} />,
    title: "Opravy zdvíhacích zařízení",
    desc: "Opravy, údržba a servis zdvíhacích zařízení certifikovanými techniky s oprávněním TI Praha.",
    highlight: false,
  },
  {
    icon: <Layers size={24} />,
    title: "Jeřábové kolejnice GANTRAL",
    desc: "Montáž jeřábových kolejnic systémem GANTRAL – moderní technologie pro přesné a spolehlivé vedení kolejnic.",
    highlight: true,
  },
  {
    icon: <Package size={24} />,
    title: "Dodávky ocelových konstrukcí",
    desc: "Kompletní dodávky ocelových konstrukcí včetně povrchových ochran – nátěry, žárové zinkování.",
    highlight: false,
  },
  {
    icon: <Trash2 size={24} />,
    title: "Demontáž ocelových konstrukcí",
    desc: "Bezpečná a efektivní demontáž stávajících ocelových konstrukcí, strojů a zařízení.",
    highlight: false,
  },
  {
    icon: <GitBranch size={24} />,
    title: "Demontáž potrubních řádů",
    desc: "Profesionální demontáže průmyslových potrubních řádů v souladu s bezpečnostními předpisy.",
    highlight: false,
  },
  {
    icon: <Cog size={24} />,
    title: "Demontáž technologických celků",
    desc: "Komplexní demontáže průmyslových technologických celků a výrobních linek.",
    highlight: false,
  },
  {
    icon: <ClipboardCheck size={24} />,
    title: "Revize kotevních lan",
    desc: "Pravidelné revize ocelových kotevních lan na anténních stožárech dle platných předpisů a norem.",
    highlight: true,
  },
  {
    icon: <SlidersHorizontal size={24} />,
    title: "Úprava tahových momentů lan",
    desc: "Profesionální nastavení a úprava tahových momentů kotevních lan pro optimální stabilitu stožárů.",
    highlight: false,
  },
  {
    icon: <MoveUp size={24} />,
    title: "Výškové práce",
    desc: "Specializované výškové práce na průmyslových objektech, stožárech a věžích s vlastním záchranným vybavením.",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section
      id="sluzby"
      className="relative py-24 md:py-32"
      style={{ background: "linear-gradient(180deg,#111316 0%,#0e0f12 100%)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(232,101,10,0.4),transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div
            className="inline-block text-xs font-bold tracking-widest mb-4 px-3 py-1 rounded"
            style={{ background: "rgba(232,101,10,0.1)", color: "#fb923c", fontFamily: "var(--font-barlow)" }}
          >
            SLUŽBY
          </div>
          <h2
            className="font-black leading-tight mb-4"
            style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(2rem,4vw,3rem)", color: "#f8fafc" }}
          >
            Kompletní řešení{" "}
            <span style={{ background: "linear-gradient(90deg,#60a5fa,#93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              od projektu po servis
            </span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Pokrýváme celý životní cyklus ocelové konstrukce – od výroby a montáže, přes servis a revize,
            až po demontáž. S vlastním vybavením a certifikovaným týmem.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: s.highlight
                  ? "linear-gradient(135deg,rgba(232,101,10,0.08),rgba(28,29,34,0.9))"
                  : "rgba(28,29,34,0.7)",
                border: s.highlight
                  ? "1px solid rgba(232,101,10,0.2)"
                  : "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 2px 20px rgba(0,0,0,0.3)",
              }}
            >
              {s.highlight && (
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl"
                  style={{ background: "linear-gradient(90deg,#E8650A,#fb923c)" }}
                />
              )}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all"
                style={{
                  background: s.highlight ? "rgba(232,101,10,0.15)" : "rgba(96,165,250,0.08)",
                  color: s.highlight ? "#E8650A" : "#60a5fa",
                  border: `1px solid ${s.highlight ? "rgba(232,101,10,0.25)" : "rgba(96,165,250,0.15)"}`,
                }}
              >
                {s.icon}
              </div>
              <h3 className="font-bold text-white mb-2 text-base leading-snug">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-6">
            Potřebujete specifické řešení nebo nezdráváte zda vaši zakázku zvládneme?
          </p>
          <button
            onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-8 py-4 rounded font-bold text-white transition-all hover:opacity-90 active:scale-95"
            style={{
              background: "linear-gradient(135deg,#E8650A,#c2500a)",
              fontFamily: "var(--font-barlow)",
              letterSpacing: "0.06em",
              boxShadow: "0 4px 20px rgba(232,101,10,0.3)",
            }}
          >
            KONTAKTUJTE NÁS
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(59,130,246,0.2),transparent)" }} />
    </section>
  );
}
