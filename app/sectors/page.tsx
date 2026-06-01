import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Sectors",
  description:
    "Quantum Intel serves government institutions, security and defence agencies, and corporate organisations across Africa.",
};

const sectors = [
  {
    number: "01",
    title: "Government & Public Sector",
    href: "/sectors/government",
    description:
      "Quantum Intel supports ministries, agencies, and offices of government in strengthening institutional capability across security, intelligence, communications, and emerging technology. Engagements are designed for the policy, operational, and accountability environment in which African public institutions operate.",
    tags: ["Federal Ministries", "Security Offices", "Public Agencies", "State Enterprises"],
  },
  {
    number: "02",
    title: "Security Agencies & Defence Institutions",
    href: "/sectors/security-and-defence",
    description:
      "Quantum Intel delivers capability development to security agencies, defence formations, and intelligence services. Programmes are designed and delivered under the confidentiality and operational sensitivity these institutions require.",
    tags: ["Military Formations", "Intelligence Services", "Internal Security", "Specialised Bodies"],
  },
  {
    number: "03",
    title: "Corporate Security & Risk",
    href: "/sectors/corporate",
    description:
      "Quantum Intel partners with major corporate organisations whose risk exposure intersects with national security, cyber, geopolitical, and emerging technology dynamics. We support Chief Security Officers, Heads of Risk, and executive leadership with capability development calibrated to enterprise-scale operations.",
    tags: ["Financial Institutions", "Telecoms", "Energy & Infrastructure", "Multinationals"],
  },
];

export default function SectorsPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section
        className="relative min-h-[72vh] flex flex-col"
        style={{ background: "#0A1A2F" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: `
              linear-gradient(rgba(242,239,233,0.022) 1px, transparent 1px),
              linear-gradient(90deg, rgba(242,239,233,0.022) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
        <div
          className="absolute top-0 right-0 w-px h-[360px] hidden xl:block pointer-events-none"
          aria-hidden="true"
          style={{ background: "linear-gradient(to bottom, rgba(184,148,90,0.18), transparent)" }}
        />

        <div className="relative z-10 flex-1 flex items-center max-w-[1280px] mx-auto px-6 w-full">
          <div className="w-full pt-32 pb-20">
            <div className="grid grid-cols-1 xl:grid-cols-[62%_38%] gap-0">
              <div className="pr-0 xl:pr-24">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-8 h-px shrink-0" style={{ background: "#B8945A" }} />
                  <span
                    className="text-[10.5px] tracking-[0.3em] uppercase"
                    style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                  >
                    Who We Work With
                  </span>
                </div>

                <h1
                  className="text-[48px] md:text-[58px] lg:text-[66px] font-semibold leading-[1.04] tracking-tight mb-9"
                  style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
                >
                  Three distinct sector communities.
                </h1>

                <div className="w-full h-px mb-9" style={{ background: "rgba(242,239,233,0.07)" }} />

                <p
                  className="text-[17px] md:text-[18px] leading-[1.8] max-w-[520px] mb-12"
                  style={{
                    color: "#C9C6BF",
                    fontFamily: "var(--font-editorial)",
                    fontStyle: "italic",
                  }}
                >
                  Quantum Intel serves government, security and defence, and corporate clients with tailored capability development. Each sector engagement is structured around the specific mandate, seniority profile, and confidentiality requirements of the client institution.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact/request-proposal"
                    className="qi-btn-gold inline-flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Request a Proposal
                    <ArrowRight size={12} />
                  </Link>
                  <Link
                    href="/capabilities"
                    className="qi-btn-outline inline-flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Our Capabilities
                  </Link>
                </div>
              </div>

              <div className="hidden xl:flex flex-col justify-center pl-16 border-l" style={{ borderColor: "rgba(242,239,233,0.06)" }}>
                <p
                  className="text-[9px] tracking-[0.3em] uppercase mb-7"
                  style={{ color: "rgba(242,239,233,0.2)", fontFamily: "var(--font-display)" }}
                >
                  Sectors
                </p>
                <div className="space-y-5">
                  {sectors.map((s) => (
                    <div key={s.number} className="flex items-center gap-4">
                      <span
                        className="text-[10px] tracking-[0.2em] shrink-0 w-6"
                        style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                      >
                        {s.number}
                      </span>
                      <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.08)" }} />
                      <span
                        className="text-[11.5px] tracking-[0.03em] text-right"
                        style={{ color: "rgba(242,239,233,0.4)", fontFamily: "var(--font-display)" }}
                      >
                        {s.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t w-full" style={{ borderColor: "rgba(242,239,233,0.05)" }}>
          <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-px h-6" style={{ background: "rgba(184,148,90,0.5)" }} />
              <span
                className="text-[10px] tracking-[0.24em] uppercase"
                style={{ color: "rgba(242,239,233,0.28)", fontFamily: "var(--font-display)" }}
              >
                Sectors
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-6">
              {sectors.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="text-[11px] tracking-[0.08em] uppercase qi-text-hover-stone"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.title.split("&")[0].trim()}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Sector Cards ─────────────────────────────────── */}
      <section
        className="py-24 md:py-32"
        style={{ background: "#FFFFFF", borderTop: "1px solid rgba(10,26,47,0.07)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span
              className="text-[10px] tracking-[0.28em] uppercase"
              style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
            >
              01 — Sector Profiles
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
          </div>

          <div className="space-y-0 border-t" style={{ borderColor: "rgba(10,26,47,0.07)" }}>
            {sectors.map((sector, i) => (
              <div
                key={sector.number}
                className="group border-b py-12 md:py-16"
                style={{ borderColor: "rgba(10,26,47,0.07)" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[72px_1fr_auto] gap-8 lg:gap-12 items-start">
                  <span
                    className="text-[10px] tracking-[0.28em] uppercase pt-1"
                    style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                  >
                    {sector.number}
                  </span>

                  <div>
                    <h2
                      className="text-[28px] md:text-[34px] font-semibold leading-[1.1] tracking-tight mb-5"
                      style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
                    >
                      {sector.title}
                    </h2>
                    <p
                      className="text-[15px] md:text-[16px] leading-[1.85] mb-7 max-w-[600px]"
                      style={{
                        color: "#5A5550",
                        fontFamily: "var(--font-editorial)",
                        fontStyle: "italic",
                      }}
                    >
                      {sector.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {sector.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-[10px] tracking-[0.12em] uppercase border"
                          style={{
                            color: "#6B6660",
                            borderColor: "rgba(10,26,47,0.12)",
                            fontFamily: "var(--font-display)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:pt-1">
                    <Link
                      href={sector.href}
                      className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-semibold qi-text-hover-gold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Explore Sector
                      <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Confidentiality Band ─────────────────────────── */}
      <section
        className="py-20 md:py-24"
        style={{ background: "#0A1A2F", borderTop: "1px solid rgba(242,239,233,0.05)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px" style={{ background: "#B8945A" }} />
                <span
                  className="text-[10px] tracking-[0.28em] uppercase"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  Confidentiality
                </span>
              </div>
              <h2
                className="text-[32px] md:text-[42px] font-semibold leading-[1.06] tracking-tight"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Every engagement is confidential by default.
              </h2>
            </div>
            <div>
              <p
                className="text-[16px] leading-[1.85] mb-6"
                style={{ color: "#C9C6BF", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
              >
                Quantum Intel treats every engagement, enquiry, and item of client information as confidential by default. We do not publish client identifying information without written authorisation, and we do not name security, intelligence, or defence clients on this website under any circumstances.
              </p>
              <p
                className="text-[14px] leading-[1.75]"
                style={{ color: "rgba(242,239,233,0.4)" }}
              >
                Enquiries are handled through structured channels and accessed only by designated personnel. All engagement content is governed by internal access controls and standard release procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Closing CTA ──────────────────────────────────── */}
      <section
        className="py-24 md:py-32"
        style={{ background: "#0A1A2F", borderTop: "1px solid rgba(242,239,233,0.05)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-end">
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-px" style={{ background: "#B8945A" }} />
                <span
                  className="text-[10px] tracking-[0.28em] uppercase"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  Engage
                </span>
              </div>
              <h2
                className="text-[38px] md:text-[50px] font-semibold leading-[1.05] tracking-tight mb-7 max-w-[580px]"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Initiate a confidential conversation.
              </h2>
              <p
                className="text-[16px] leading-[1.8] max-w-[440px]"
                style={{
                  color: "#C9C6BF",
                  fontFamily: "var(--font-editorial)",
                  fontStyle: "italic",
                }}
              >
                Quantum Intel engages with institutional and corporate clients through structured, confidential channels.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Link
                href="/contact/request-proposal"
                className="qi-btn-gold inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Request a Proposal
                <ArrowRight size={12} />
              </Link>
              <Link
                href="/contact/partner-with-us"
                className="qi-btn-outline inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
