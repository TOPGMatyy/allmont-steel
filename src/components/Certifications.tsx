"use client";

import { ShieldCheck, FileText, Wrench, RefreshCw, ClipboardList } from "lucide-react";

const items = [
  { icon: <Wrench size={18} />, label: "Opravy zdvihacích zařízení" },
  { icon: <RefreshCw size={18} />, label: "Generální opravy" },
  { icon: <FileText size={18} />, label: "Rekonstrukce" },
  { icon: <ClipboardList size={18} />, label: "Revize vyhrazených zdvihacích zařízení" },
];

export default function Certifications() {
  return (
    <section
      className="relative py-16 md:py-20"
      style={{ background: "#0a1929" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(59,130,246,0.3),transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <div
          className="relative rounded-2xl overflow-hidden p-8 md:p-12"
          style={{
            background: "linear-gradient(135deg,rgba(14,22,35,0.95),rgba(20,21,24,0.98))",
            border: "1px solid rgba(59,130,246,0.15)",
          }}
        >
          {/* Corner accent */}
          <div
            className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
            style={{
              background: "radial-gradient(circle at top right, rgba(59,130,246,0.08) 0%, transparent 70%)",
            }}
          />

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.2)", color: "#60a5fa" }}
                >
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div
                    className="text-xs font-bold tracking-widest"
                    style={{ color: "#60a5fa", fontFamily: "var(--font-barlow)" }}
                  >
                    CERTIFIKACE
                  </div>
                  <div className="font-semibold text-white text-sm">Technická inspekce Praha</div>
                </div>
              </div>

              <h3
                className="font-black leading-tight mb-4"
                style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#f8fafc" }}
              >
                Oprávnění TI Praha
              </h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Společnost Allmont Steel s.r.o. vlastní oprávnění Technické inspekce Praha
                pro provádění prací na vyhrazených zdvihacích zařízeních.
              </p>
              <div
                className="inline-block px-4 py-2 rounded text-sm font-mono"
                style={{
                  background: "rgba(59,130,246,0.08)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  color: "#93c5fd",
                }}
              >
                Ev. č.:{" "}
                <strong className="text-white">0916/7/00/ZZ-M, O, G, R, Z-I,II</strong>
              </div>
            </div>

            <div>
              <div
                className="text-xs font-bold tracking-widest mb-4 uppercase"
                style={{ color: "#60a5fa", fontFamily: "var(--font-barlow)" }}
              >
                Rozsah oprávnění
              </div>
              <div className="grid gap-3">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg"
                    style={{
                      background: "rgba(59,130,246,0.05)",
                      border: "1px solid rgba(59,130,246,0.1)",
                    }}
                  >
                    <span style={{ color: "#60a5fa" }}>{item.icon}</span>
                    <span className="text-slate-300 text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(232,101,10,0.3),transparent)" }} />
    </section>
  );
}
