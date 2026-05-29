"use client";

import { Users, Truck, Award, HardHat, Flame, CheckCircle } from "lucide-react";

const timeline = [
  {
    year: "1992",
    title: "Založení společnosti",
    desc: "Allmont Steel s.r.o. zahájila svou činnost v Ostravě jako specializovaný dodavatel ocelových konstrukcí.",
  },
  {
    year: "2000",
    title: "Rozšíření kapacit",
    desc: "Pořízení autojeřábu AD 080 a rozšíření strojního vybavení pro náročnější projekty.",
  },
  {
    year: "2005",
    title: "Klíčové reference",
    desc: "Realizace projektu Anilin a dalších průmyslových zakázek, upevnění pozice na trhu.",
  },
  {
    year: "Dnes",
    title: "Moderní dodavatel",
    desc: "Tým zkušených odborníků, certifikace Technické inspekce Praha a portfolio stovek projektů.",
  },
];

const advantages = [
  { icon: <Award size={20} />, title: "Certifikovaná firma", desc: "Oprávnění TI Praha č. 0916/7/00 pro opravy, generální opravy, rekonstrukce a revize zdvihacích zařízení." },
  { icon: <Users size={20} />, title: "Kvalifikovaný tým", desc: "Montéři ocelových konstrukcí a svářeči se státní zkouškou včetně svařování v ochranné atmosféře argonu." },
  { icon: <Truck size={20} />, title: "Vlastní vybavení", desc: "Autojeřáb AD 080, vlastní dopravní a montážní mechanismy pro maximální flexibilitu na stavbě." },
  { icon: <HardHat size={20} />, title: "Výškové práce", desc: "Specializované kapacity pro montáže a servis ve výškách – anténní stožáry, průmyslové haly i kostelní věže." },
  { icon: <Flame size={20} />, title: "Atypické projekty", desc: "Zkušenosti s realizací nestandardních konstrukcí přesně dle specifikací zákazníka." },
  { icon: <CheckCircle size={20} />, title: "30+ let na trhu", desc: "Nepřetržitý provoz od roku 1992 je zárukou stability, důvěryhodnosti a hlubokých znalostí oboru." },
];

export default function About() {
  return (
    <section
      id="o-spolecnosti"
      className="relative py-24 md:py-32"
      style={{ background: "linear-gradient(180deg,#0e0f12 0%,#111316 100%)" }}
    >
      {/* top divider */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(232,101,10,0.4),transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div
            className="inline-block text-xs font-bold tracking-widest mb-4 px-3 py-1 rounded"
            style={{ background: "rgba(232,101,10,0.1)", color: "#fb923c", fontFamily: "var(--font-barlow)" }}
          >
            O SPOLEČNOSTI
          </div>
          <h2
            className="font-black leading-tight mb-4"
            style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(2rem,4vw,3rem)", color: "#f8fafc" }}
          >
            Tři dekády{" "}
            <span style={{ background: "linear-gradient(90deg,#E8650A,#fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              průmyslové excellence
            </span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Allmont Steel s.r.o. je ostravská firma s více než třicetiletou tradicí ve výrobě a montáži ocelových konstrukcí.
            Každý projekt realizujeme přesně podle požadavků zákazníka, s vlastním vybavením a týmem certifikovaných odborníků.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <div>
            <h3
              className="text-base font-bold tracking-widest mb-8 uppercase"
              style={{ color: "#fb923c", fontFamily: "var(--font-barlow)" }}
            >
              Historie firmy
            </h3>
            <div className="relative">
              {/* vertical line */}
              <div
                className="absolute left-4 top-0 bottom-0 w-px"
                style={{ background: "linear-gradient(180deg,#E8650A,rgba(232,101,10,0.1))" }}
              />
              <div className="flex flex-col gap-8">
                {timeline.map((item, i) => (
                  <div key={i} className="relative pl-12">
                    <div
                      className="absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black border"
                      style={{
                        background: i === timeline.length - 1 ? "#E8650A" : "#141518",
                        borderColor: "#E8650A",
                        color: i === timeline.length - 1 ? "white" : "#E8650A",
                        fontFamily: "var(--font-barlow)",
                        fontSize: "0.7rem",
                      }}
                    >
                      {item.year === "Dnes" ? "★" : item.year.slice(-2)}
                    </div>
                    <div
                      className="text-sm font-bold tracking-widest mb-1"
                      style={{ color: "#E8650A", fontFamily: "var(--font-barlow)" }}
                    >
                      {item.year}
                    </div>
                    <div className="font-semibold text-white mb-1">{item.title}</div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Advantages grid */}
          <div>
            <h3
              className="text-base font-bold tracking-widest mb-8 uppercase"
              style={{ color: "#fb923c", fontFamily: "var(--font-barlow)" }}
            >
              Proč Allmont Steel
            </h3>
            <div className="grid gap-4">
              {advantages.map((a, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-lg"
                  style={{
                    background: "rgba(28,29,34,0.7)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(232,101,10,0.12)", color: "#E8650A" }}
                  >
                    {a.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm mb-1">{a.title}</div>
                    <p className="text-slate-400 text-xs leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(59,130,246,0.2),transparent)" }} />
    </section>
  );
}
