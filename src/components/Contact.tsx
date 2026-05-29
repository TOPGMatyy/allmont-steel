"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, Building2, Hash, User } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, wire to an API route or email service
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section
      id="kontakt"
      className="relative py-24 md:py-32"
      style={{ background: "linear-gradient(180deg,#111316 0%,#0a1929 100%)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(232,101,10,0.4),transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div
            className="inline-block text-xs font-bold tracking-widest mb-4 px-3 py-1 rounded"
            style={{ background: "rgba(232,101,10,0.1)", color: "#fb923c", fontFamily: "var(--font-barlow)" }}
          >
            KONTAKT
          </div>
          <h2
            className="font-black leading-tight mb-4"
            style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(2rem,4vw,3rem)", color: "#f8fafc" }}
          >
            Připraveni pro{" "}
            <span style={{ background: "linear-gradient(90deg,#E8650A,#fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              váš projekt
            </span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Pošlete nám nezávaznou poptávku nebo nás rovnou zavolejte.
            Odpovíme rychle a přijedeme na prohlídku.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            {/* Company card */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: "rgba(28,29,34,0.8)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(232,101,10,0.1)", color: "#E8650A", border: "1px solid rgba(232,101,10,0.2)" }}
                >
                  <Building2 size={22} />
                </div>
                <div>
                  <div className="font-black text-white" style={{ fontFamily: "var(--font-barlow)", fontSize: "1.2rem" }}>
                    ALLMONT STEEL s.r.o.
                  </div>
                  <div className="text-xs text-slate-400">Specialista na ocelové konstrukce</div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <ContactItem
                  icon={<MapPin size={18} />}
                  label="Adresa"
                  value={<>U sýpky 37<br />719 00 Ostrava – Kunčice</>}
                />
                <ContactItem
                  icon={<Phone size={18} />}
                  label="Telefon"
                  value={
                    <>
                      <a href="tel:+420596237471" className="hover:text-white transition-colors">+420 596 237 471</a>
                      <br />
                      <a href="tel:+420602714611" className="hover:text-white transition-colors">+420 602 714 611</a>
                    </>
                  }
                />
                <ContactItem
                  icon={<Mail size={18} />}
                  label="E-mail"
                  value={
                    <a href="mailto:allmont@volny.cz" className="hover:text-white transition-colors">
                      allmont@volny.cz
                    </a>
                  }
                />
                <ContactItem
                  icon={<Hash size={18} />}
                  label="IČ"
                  value="25856057"
                />
                <ContactItem
                  icon={<User size={18} />}
                  label="Jednatel"
                  value="Tomáš Bohačík"
                />
              </div>
            </div>

            {/* Map embed */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.06)", height: "220px" }}
            >
              <iframe
                title="Allmont Steel – mapa"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.85) contrast(0.9)" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.123!2d18.314!3d49.802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713fe3e9f8b4e9d%3A0x1!2sU+s%C3%BDpky+37%2C+719+00+Ostrava!5e0!3m2!1scs!2scz!4v1"
              />
            </div>
          </div>

          {/* Contact form */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: "rgba(28,29,34,0.8)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <h3 className="font-black text-white mb-6" style={{ fontFamily: "var(--font-barlow)", fontSize: "1.4rem" }}>
              Nezávazná poptávka
            </h3>

            {sent ? (
              <div
                className="rounded-xl p-6 text-center"
                style={{ background: "rgba(232,101,10,0.1)", border: "1px solid rgba(232,101,10,0.3)" }}
              >
                <div className="text-3xl mb-3">✓</div>
                <div className="font-bold text-white mb-1">Zpráva odeslána!</div>
                <p className="text-slate-400 text-sm">Ozveme se vám co nejdříve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    label="Jméno a příjmení *"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder="Jan Novák"
                    required
                  />
                  <FormField
                    label="E-mail *"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    type="email"
                    placeholder="jan@firma.cz"
                    required
                  />
                </div>
                <FormField
                  label="Telefon"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                  type="tel"
                  placeholder="+420 xxx xxx xxx"
                />
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    Popis požadavku *
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    placeholder="Popište váš projekt – typ konstrukce, lokace, časový rámec..."
                    className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all resize-none"
                    style={{
                      background: "rgba(14,15,18,0.8)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(232,101,10,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 py-3.5 px-6 rounded font-bold text-white transition-all hover:opacity-90 active:scale-95 mt-2"
                  style={{
                    background: "linear-gradient(135deg,#E8650A,#c2500a)",
                    fontFamily: "var(--font-barlow)",
                    letterSpacing: "0.06em",
                    boxShadow: "0 4px 20px rgba(232,101,10,0.35)",
                  }}
                >
                  <Send size={16} />
                  ODESLAT POPTÁVKU
                </button>

                <p className="text-xs text-slate-500 text-center">
                  Odesláním formuláře souhlasíte se zpracováním osobních údajů pro účely obchodní komunikace.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <div
        className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
        style={{ background: "rgba(232,101,10,0.08)", color: "#E8650A", border: "1px solid rgba(232,101,10,0.15)" }}
      >
        {icon}
      </div>
      <div>
        <div className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-0.5">{label}</div>
        <div className="text-slate-300 text-sm leading-relaxed">{value}</div>
      </div>
    </div>
  );
}

function FormField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all"
        style={{
          background: "rgba(14,15,18,0.8)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
        onFocus={(e) => (e.target.style.borderColor = "rgba(232,101,10,0.5)")}
        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
      />
    </div>
  );
}
