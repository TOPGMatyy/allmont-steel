import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Allmont Steel s.r.o. | Specialista na ocelové konstrukce",
  description:
    "Allmont Steel s.r.o. – výroba a montáž ocelových konstrukcí od roku 1992. Průmyslové haly, anténní stožáry, jeřábové systémy, výškové práce. Ostrava.",
  keywords:
    "ocelové konstrukce, montáž ocelových konstrukcí, průmyslové haly, anténní stožáry, jeřábové systémy, výškové práce, Ostrava, Allmont Steel",
  openGraph: {
    title: "Allmont Steel s.r.o. | Specialista na ocelové konstrukce",
    description:
      "Výroba a montáž ocelových konstrukcí od roku 1992. Profesionální tým, vlastní vybavení, certifikovaná firma.",
    locale: "cs_CZ",
    type: "website",
    siteName: "Allmont Steel s.r.o.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://allmontsteel.cz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${inter.variable} ${barlow.variable} h-full`}
      style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "#0e0f12", color: "#e2e8f0" }}
      >
        {children}
      </body>
    </html>
  );
}
