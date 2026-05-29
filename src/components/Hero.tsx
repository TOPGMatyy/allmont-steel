"use client";

import { ArrowRight, Shield, Clock, Wrench } from "lucide-react";

const stats = [
  { value: "30+", label: "let zkušeností" },
  { value: "500+", label: "dokončených projektů" },
  { value: "100%", label: "certifikovaní odborníci" },
  { value: "24/7", label: "servisní podpora" },
];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg,#0a1929 0%,#0e0f12 55%,#141518 100%)" }}
    >
      {/* CSS grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(96,165,250,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96,165,250,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(232,101,10,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Right diagonal accent */}
      <div
        className="absolute right-0 top-0 bottom-0 w-2/5 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(59,130,246,0.04) 0%, rgba(232,101,10,0.05) 100%)",
          clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />

      {/* Diagonal steel lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[0.15, 0.35, 0.55, 0.75].map((x, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${x * 100}%`,
              top: 0,
              bottom: 0,
              width: "1px",
              background: `linear-gradient(180deg, transparent, rgba(232,101,10,${0.06 + i * 0.02}), transparent)`,
              transform: "skewX(-8deg)",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36 w-full">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1
            className="font-black leading-none tracking-tight mb-6"
            style={{
              fontFamily: "var(--font-barlow)",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              color: "#f8fafc",
            }}
          >
            SPECIALISTÉ NA{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #E8650A 0%, #fb923c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              OCELOVÉ
            </span>{" "}
            <span style={{ color: "#93c5fd" }}>KONSTRUKCE</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
            Výroba, montáž a servis ocelových konstrukcí s více než{" "}
            <strong className="text-white">30 lety zkušeností</strong>. Průmyslové haly,
            anténní stožáry, jeřábové systémy a výškové práce – vše pod jednou střechou.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={() => scrollTo("kontakt")}
              className="group flex items-center gap-2 px-7 py-3.5 rounded font-bold text-white transition-all hover:opacity-90 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #E8650A 0%, #c2500a 100%)",
                fontFamily: "var(--font-barlow)",
                fontSize: "1rem",
                letterSpacing: "0.06em",
                boxShadow: "0 4px 24px rgba(232,101,10,0.4)",
              }}
            >
              NEZÁVAZNÁ POPTÁVKA
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("sluzby")}
              className="flex items-center gap-2 px-7 py-3.5 rounded font-bold transition-all hover:bg-white/10 active:scale-95"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#e2e8f0",
                fontFamily: "var(--font-barlow)",
                fontSize: "1rem",
                letterSpacing: "0.06em",
              }}
            >
              NAŠE SLUŽBY
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6">
            {[
              { icon: <Clock size={14} />, text: "Zkušenosti od roku 1992" },
              { icon: <Wrench size={14} />, text: "Vlastní technické vybavení" },
              { icon: <Shield size={14} />, text: "Certifikace TI Praha" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2 text-sm" style={{ color: "#94a3b8" }}>
                <span style={{ color: "#E8650A" }}>{b.icon}</span>
                {b.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="relative border-t"
        style={{
          background: "rgba(14,15,18,0.9)",
          backdropFilter: "blur(12px)",
          borderColor: "rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center px-6 py-2"
              style={{
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}
            >
              <div
                className="font-black leading-none mb-1"
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontSize: "2.2rem",
                  background: "linear-gradient(135deg, #E8650A 0%, #fb923c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </div>
              <div className="text-xs text-slate-400 tracking-wider uppercase font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
