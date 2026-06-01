import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Security & Risk Solutions",
  description:
    "Capability development for corporate security, risk, and executive leadership in Africa — for organisations whose risk exposure intersects with national security and emerging technology dynamics.",
};

const clientCategories = [
  { label: "Financial institutions and banks" },
  { label: "Telecommunications operators" },
  { label: "Energy and critical infrastructure operators" },
  { label: "Resource and extractives companies" },
  { label: "Multinational corporates operating across African markets" },
  { label: "Corporate security and risk functions at board level" },
];

const howWeEngage = [
  {
    number: "01",
    title: "Risk-Anchored Assessment",
    body: "We begin with an assessment of the corporate client's risk exposure — geopolitical, cyber, intelligence, and technology threats — and design a programme that addresses capability gaps relative to that specific risk profile.",
  },
  {
    number: "02",
    title: "Executive-Level Design",
    body: "Programmes for corporate clients are calibrated to board and senior leadership level. We develop content that supports strategic decision-making, not technical compliance or procedural awareness.",
  },
  {
    number: "03",
    title: "Confidential Delivery",
    body: "Corporate engagements are delivered under the same confidentiality protocols as our government and security sector work. Client identities, programme content, and outcomes are protected by default.",
  },
];

const illustrativeCapabilities = [
  { label: "Cyber Security & Infrastructure Defence", href: "/capabilities/cyber-security" },
  { label: "Artificial Intelligence for Defence & Security", href: "/capabilities/artificial-intelligence" },
  { label: "Strategic Communications", href: "/capabilities/strategic-communications" },
  { label: "Military Intelligence", href: "/capabilities/military-intelligence" },
  { label: "Emerging Technologies in Modern Warfare", href: "/capabilities/emerging-technologies" },
];

export default function CorporateSectorPage() {
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
            <div className="pr-0 xl:pr-[38%]">
              <div className="flex items-center gap-4 mb-10">
                <Link
                  href="/sectors"
                  className="text-[10px] tracking-[0.24em] uppercase qi-text-hover-stone"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Sectors
                </Link>
                <div className="w-4 h-px" style={{ background: "rgba(242,239,233,0.2)" }} />
                <span
                  className="text-[10.5px] tracking-[0.3em] uppercase"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  Corporate
                </span>
              </div>

              <h1
                className="text-[44px] md:text-[54px] lg:text-[62px] font-semibold leading-[1.05] tracking-tight mb-9"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Corporate security and risk capability development.
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
                Capability development for major corporate organisations whose risk exposure intersects with national security, cyber, geopolitical, and emerging technology dynamics.
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
                  href="/capabilities/cyber-security"
                  className="qi-btn-outline inline-flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Cyber Security Capability
                </Link>
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
                Corporate Security & Risk
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-6">
              <Link
                href="/sectors/government"
                className="text-[11px] tracking-[0.08em] uppercase qi-text-hover-stone"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Government
              </Link>
              <Link
                href="/sectors/security-and-defence"
                className="text-[11px] tracking-[0.08em] uppercase qi-text-hover-stone"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Security & Defence
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Overview ─────────────────────────────────────── */}
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
              01 — Overview
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-24">
            <div className="lg:pt-2">
              <p
                className="text-[13px] leading-[1.75]"
                style={{ color: "#6B6660", fontFamily: "var(--font-display)" }}
              >
                Corporate clients engage Quantum Intel when the complexity of their security and risk environment requires capability at the level of a state institution, not a commercial security provider.
              </p>
              <div className="mt-8 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
              <div className="mt-8 space-y-4">
                <Link
                  href="/capabilities/cyber-security"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-medium qi-text-hover-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Cyber Security
                  <ArrowRight size={11} />
                </Link>
                <br />
                <Link
                  href="/capabilities/artificial-intelligence"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-medium qi-text-hover-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Artificial Intelligence
                  <ArrowRight size={11} />
                </Link>
              </div>
            </div>

            <div>
              <p
                className="text-[20px] md:text-[23px] leading-[1.75] mb-8"
                style={{
                  color: "#1A2535",
                  fontFamily: "var(--font-editorial)",
                  fontStyle: "italic",
                }}
              >
                Quantum Intel partners with major corporate organisations whose risk exposure intersects with national security, cyber, geopolitical, and emerging technology dynamics. We support Chief Security Officers, Heads of Risk, and executive leadership with capability development calibrated to enterprise-scale operations.
              </p>

              <div className="h-px mb-8" style={{ background: "rgba(10,26,47,0.07)" }} />

              <p
                className="text-[16px] leading-[1.85] mb-6"
                style={{ color: "#5A5550" }}
              >
                Large African corporations — particularly in financial services, telecoms, energy, and extractives — operate in security environments that were historically the domain of government. The convergence of cyber threats, geopolitical risk, and technology disruption has fundamentally changed the capability requirements of corporate security and risk functions.
              </p>

              <p
                className="text-[16px] leading-[1.85]"
                style={{ color: "#5A5550" }}
              >
                Quantum Intel brings the same rigour and faculty depth to corporate engagements that we bring to government and defence clients. Corporate clients receive capability development designed for board-level decision-making — not technical awareness training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Who We Work With ─────────────────────────────── */}
      <section
        className="py-24 md:py-32"
        style={{ background: "#F7F4EE", borderTop: "1px solid rgba(10,26,47,0.07)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span
              className="text-[10px] tracking-[0.28em] uppercase"
              style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
            >
              02 — Client Categories
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-20 mb-12">
            <div>
              <h2
                className="text-[36px] md:text-[44px] font-semibold leading-[1.06] tracking-tight"
                style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
              >
                Corporate client categories.
              </h2>
            </div>
            <div className="flex items-end">
              <p
                className="text-[15px] leading-[1.75] max-w-[420px]"
                style={{ color: "#5A5550", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
              >
                Client identities are confidential. The categories below describe the types of organisations we serve.
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l"
            style={{ borderColor: "rgba(10,26,47,0.07)" }}
          >
            {clientCategories.map((cat, i) => (
              <div
                key={i}
                className="p-8 border-b border-r flex items-start gap-4"
                style={{ borderColor: "rgba(10,26,47,0.07)" }}
              >
                <div
                  className="w-1 h-1 rounded-full mt-2 shrink-0"
                  style={{ background: "#B8945A" }}
                />
                <p
                  className="text-[14px] leading-[1.7]"
                  style={{ color: "#3A3530" }}
                >
                  {cat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How We Engage ────────────────────────────────── */}
      <section
        className="py-24 md:py-32"
        style={{ background: "#0A1A2F", borderTop: "1px solid rgba(242,239,233,0.05)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span
              className="text-[10px] tracking-[0.28em] uppercase"
              style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
            >
              03 — How We Engage
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.08)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l" style={{ borderColor: "rgba(242,239,233,0.06)" }}>
            {howWeEngage.map((step) => (
              <div
                key={step.number}
                className="p-8 lg:p-10 border-b border-r"
                style={{ borderColor: "rgba(242,239,233,0.06)" }}
              >
                <span
                  className="text-[10px] tracking-[0.24em] uppercase block mb-6"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  {step.number}
                </span>
                <h3
                  className="text-[18px] font-semibold mb-4 leading-snug"
                  style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[13.5px] leading-[1.8]" style={{ color: "#C9C6BF" }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Capabilities ─────────────────────────────────── */}
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
              04 — Capability Areas
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-20">
            <div>
              <h2
                className="text-[32px] md:text-[38px] font-semibold leading-[1.08] tracking-tight"
                style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
              >
                Illustrative programme areas for corporate clients.
              </h2>
            </div>
            <div>
              <div className="space-y-0 border-t" style={{ borderColor: "rgba(10,26,47,0.07)" }}>
                {illustrativeCapabilities.map((cap) => (
                  <div
                    key={cap.href}
                    className="flex items-center justify-between py-5 border-b"
                    style={{ borderColor: "rgba(10,26,47,0.07)" }}
                  >
                    <span
                      className="text-[15px] font-medium"
                      style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
                    >
                      {cap.label}
                    </span>
                    <Link
                      href={cap.href}
                      className="inline-flex items-center gap-2 text-[10.5px] tracking-[0.1em] uppercase qi-text-hover-gold shrink-0 ml-6"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      View <ArrowRight size={10} />
                    </Link>
                  </div>
                ))}
              </div>
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
                  Corporate Enquiries
                </span>
              </div>
              <h2
                className="text-[38px] md:text-[50px] font-semibold leading-[1.05] tracking-tight mb-7 max-w-[560px]"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Request a confidential proposal.
              </h2>
              <p
                className="text-[16px] leading-[1.8] max-w-[440px]"
                style={{
                  color: "#C9C6BF",
                  fontFamily: "var(--font-editorial)",
                  fontStyle: "italic",
                }}
              >
                Corporate engagements are structured around the specific risk profile and mandate of the institution. Use the proposal request form to initiate a confidential conversation.
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
                href="/sectors"
                className="qi-btn-outline inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                All Sectors
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
