import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Security Agencies & Defence Institutions",
  description:
    "Confidential capability development for security agencies, defence formations, and intelligence services across Africa.",
};

const clientCategories = [
  { label: "Military formations and training institutions" },
  { label: "Intelligence services and analytical organisations" },
  { label: "Internal security and law enforcement institutions" },
  { label: "Specialised national security bodies" },
  { label: "Joint and inter-agency security structures" },
  { label: "Defence planning and policy institutions" },
];

const howWeEngage = [
  {
    number: "01",
    title: "Confidential Initiation",
    body: "All engagements with security and defence institutions begin through dedicated confidential channels. No details are disclosed without prior authorisation, and all initial conversations are subject to non-disclosure arrangements.",
  },
  {
    number: "02",
    title: "Operationally Sensitive Design",
    body: "Programmes are designed with full awareness of the operational sensitivity of the institution's work. Curricula, delivery formats, locations, and participant management are structured accordingly.",
  },
  {
    number: "03",
    title: "Practitioner Faculty",
    body: "Delivery is led by senior practitioners with relevant operational and institutional backgrounds — not academic trainers or commercial consultants. Where faculty have served under confidentiality, bios describe domain rather than organisation.",
  },
];

const illustrativeCapabilities = [
  { label: "Military Intelligence", href: "/capabilities/military-intelligence" },
  { label: "Cyber Security & Infrastructure Defence", href: "/capabilities/cyber-security" },
  { label: "Strategic Communications", href: "/capabilities/strategic-communications" },
  { label: "Artificial Intelligence for Defence & Security", href: "/capabilities/artificial-intelligence" },
  { label: "Emerging Technologies in Modern Warfare", href: "/capabilities/emerging-technologies" },
];

export default function SecurityDefenceSectorPage() {
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
                  Security & Defence
                </span>
              </div>

              <h1
                className="text-[44px] md:text-[54px] lg:text-[62px] font-semibold leading-[1.05] tracking-tight mb-9"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Capability development for security agencies and defence institutions.
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
                Programmes designed and delivered under the confidentiality and operational sensitivity that security agencies, defence formations, and intelligence services require.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact/request-proposal"
                  className="qi-btn-gold inline-flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Confidential Enquiry
                  <ArrowRight size={12} />
                </Link>
                <Link
                  href="/training/advanced-capability-program"
                  className="qi-btn-outline inline-flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Advanced Capability Program
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
                Security Agencies & Defence
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
                href="/sectors/corporate"
                className="text-[11px] tracking-[0.08em] uppercase qi-text-hover-stone"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Corporate
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
                This is Quantum Intel's primary and most operationally sensitive sector. All engagements in this sector are subject to enhanced confidentiality protocols.
              </p>
              <div className="mt-8 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
              <div className="mt-8 space-y-4">
                <Link
                  href="/capabilities/military-intelligence"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-medium qi-text-hover-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Military Intelligence
                  <ArrowRight size={11} />
                </Link>
                <br />
                <Link
                  href="/capabilities/emerging-technologies"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-medium qi-text-hover-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Emerging Technologies
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
                Quantum Intel delivers capability development to security agencies, defence formations, and intelligence services. Programmes are designed and delivered under the confidentiality and operational sensitivity these institutions require.
              </p>

              <div className="h-px mb-8" style={{ background: "rgba(10,26,47,0.07)" }} />

              <p
                className="text-[16px] leading-[1.85] mb-6"
                style={{ color: "#5A5550" }}
              >
                Security and defence institutions operate in an environment of persistent threat, technological disruption, and complex institutional pressures. The capability requirements of these institutions are specific and demanding — and cannot be met by commercially available training.
              </p>

              <p
                className="text-[16px] leading-[1.85]"
                style={{ color: "#5A5550" }}
              >
                Quantum Intel has the faculty depth, institutional relationships, and operational awareness to deliver programmes to the standard these institutions require. All engagements are structured to protect participant identities, programme content, and the operational context of the institution.
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
              02 — Institutional Categories
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-20 mb-12">
            <div>
              <h2
                className="text-[36px] md:text-[44px] font-semibold leading-[1.06] tracking-tight"
                style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
              >
                Institutional client categories.
              </h2>
            </div>
            <div className="flex items-end">
              <p
                className="text-[15px] leading-[1.75] max-w-[420px]"
                style={{ color: "#5A5550", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
              >
                No security, intelligence, or defence client is named on this website under any circumstances. The categories below reflect the types of institutions we serve.
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
                Illustrative programme areas for security and defence clients.
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
                  Security & Defence Enquiries
                </span>
              </div>
              <h2
                className="text-[38px] md:text-[50px] font-semibold leading-[1.05] tracking-tight mb-7 max-w-[560px]"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Initiate a confidential engagement.
              </h2>
              <p
                className="text-[16px] leading-[1.8] max-w-[440px]"
                style={{
                  color: "#C9C6BF",
                  fontFamily: "var(--font-editorial)",
                  fontStyle: "italic",
                }}
              >
                Enquiries from security agencies and defence institutions are handled through dedicated confidential channels with enhanced access controls.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Link
                href="/contact/request-proposal"
                className="qi-btn-gold inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Confidential Enquiry
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
