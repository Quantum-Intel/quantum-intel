import type { Metadata } from "next";
import { Inter, Inter_Tight, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quantumintel.africa"),
  title: {
    default: "Quantum Intel — Defence, Intelligence & Security Capability Partner in Africa",
    template: "%s — Quantum Intel",
  },
  description:
    "Quantum Intel delivers advanced training and capability development for governments, security agencies, defence institutions, and corporate clients across Nigeria and Africa.",
  openGraph: {
    siteName: "Quantum Intel",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@quantumintel",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${sourceSerif.variable}`}
    >
      <body>
        <a href="#main-content" className="qi-skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
