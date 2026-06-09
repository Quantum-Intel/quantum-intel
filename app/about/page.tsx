import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "About Quantum Intel — Defence & Security Capability Partner",
  },
  description:
    "Quantum Intel partners with African governments, security agencies, defence institutions, and corporate organisations to deliver advanced training and capability development.",
};

const whatWeDo = [
  {
    number: "01",
    title: "Training",
    body: "Residential and cohort-based training programmes delivered to state and corporate institutions across Nigeria and Africa. Programmes are structured, confidential, and calibrated to the seniority and mandate of participants.",
  },
  {
    number: "02",
    title: "Capability Development",
    body: "Sustained engagements that build institutional capacity beyond individual training cycles. We work with institutions to assess gaps, design programmes, and measure uplift against defined capability benchmarks.",
  },
  {
    number: "03",
    title: "Advisory",
    body: "Structured advisory support for senior leaders on capability strategy, institutional posture, and the intersection of security, technology, and governance. Delivered under confidentiality arrangements appropriate to the mandate.",
  },
];

const principles = [
  {
    number: "01",
    title: "Discretion",
    body: "Every engagement is conducted under strict confidentiality as a default. We do not publish client identifying information without written authorisation, and we do not name security, intelligence, or defence clients on this website under any circumstances.",
  },
  {
    number: "02",
    title: "African Context",
    body: "Programmes are grounded in the African operating environment, doctrine, and the specific institutional, geopolitical, and technological challenges facing states and organisations on the continent.",
  },
  {
    number: "03",
    title: "Institutional Rigour",
    body: "Curricula draw on contemporary international doctrine and applied practice. We deliver to the standard expected by state-grade institutions — not the standard of commercial training providers.",
  },
  {
    number: "04",
    title: "Consultant Calibre",
    body: "Delivery is led by senior practitioners and subject-matter authorities drawn from defence, intelligence, security, technology, and policy backgrounds across Africa and internationally.",
  },
];

const engagementSteps = [
  {
    number: "01",
    title: "Confidential Enquiry",
    body: "All engagements begin through a structured, confidential enquiry channel. We do not publicise client relationships or programme details without written authorisation.",
  },
  {
    number: "02",
    title: "Assessment & Design",
    body: "We conduct a structured capability assessment and design a programme matched to the institution's mandate, seniority profile, and confidentiality requirements.",
  },
  {
    number: "03",
    title: "Delivery & Follow-on",
    body: "Programmes are delivered by senior faculty under agreed protocols. Follow-on engagements are structured around demonstrated capability outcomes rather than contract renewal cycles.",
  },
];

const pageSections = [
  { number: "01", label: "Introduction" },
  { number: "02", label: "What We Do" },
  { number: "03", label: "Where We Operate" },
  { number: "04", label: "Operating Principles" },
  { number: "05", label: "How We Engage" },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Page Hero ────────────────────────────────────── */}
      <section
        className="relative min-h-[82vh] flex flex-col"
        style={{ background: "#0A1A2F" }}
      >
        {/* Static structural grid */}
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

        {/* Main content */}
        <div className="relative z-10 flex-1 flex items-center max-w-[1280px] mx-auto px-6 w-full">
          <div className="w-full pt-32 pb-20">
            <div className="grid grid-cols-1 xl:grid-cols-[62%_38%] gap-0">

              {/* Left */}
              <div className="pr-0 xl:pr-24">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-8 h-px shrink-0" style={{ background: "#B8945A" }} />
                  <span
                    className="text-[10.5px] tracking-[0.3em] uppercase"
                    style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                  >
                    About Quantum Intel
                  </span>
                </div>

                <h1
                  className="text-[48px] md:text-[58px] lg:text-[66px] font-semibold leading-[1.04] tracking-tight mb-9"
                  style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
                >
                  An African capability partner.
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
                  Quantum Intel is a capability partner to government institutions, security agencies, defence formations, intelligence communities, and major corporate organisations across Nigeria and Africa.
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
                    href="/about/mission"
                    className="qi-btn-outline inline-flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Our Mission
                  </Link>
                </div>
              </div>

              {/* Right — page section index */}
              <div className="hidden xl:flex flex-col justify-center pl-16 border-l" style={{ borderColor: "rgba(242,239,233,0.06)" }}>
                <p
                  className="text-[9px] tracking-[0.3em] uppercase mb-7"
                  style={{ color: "rgba(242,239,233,0.2)", fontFamily: "var(--font-display)" }}
                >
                  On this page
                </p>
                <div className="space-y-5">
                  {pageSections.map((item) => (
                    <div key={item.number} className="flex items-center gap-4">
                      <span
                        className="text-[10px] tracking-[0.2em] shrink-0 w-6"
                        style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                      >
                        {item.number}
                      </span>
                      <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.08)" }} />
                      <span
                        className="text-[11.5px] tracking-[0.03em] text-right"
                        style={{ color: "rgba(242,239,233,0.4)", fontFamily: "var(--font-display)" }}
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="relative z-10 border-t w-full"
          style={{ borderColor: "rgba(242,239,233,0.05)" }}
        >
          <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-px h-6" style={{ background: "rgba(184,148,90,0.5)" }} />
              <span
                className="text-[10px] tracking-[0.24em] uppercase"
                style={{ color: "rgba(242,239,233,0.28)", fontFamily: "var(--font-display)" }}
              >
                About
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-6">
              <Link
                href="/about/mission"
                className="text-[11px] tracking-[0.08em] uppercase qi-text-hover-stone"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Mission
              </Link>
              <Link
                href="/about/leadership"
                className="text-[11px] tracking-[0.08em] uppercase qi-text-hover-stone"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Leadership
              </Link>
              <Link
                href="/capabilities"
                className="text-[11px] tracking-[0.08em] uppercase qi-text-hover-stone"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 01 Introduction ──────────────────────────────── */}
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
              01 — Introduction
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-24">
            {/* Left — context note and internal links */}
            <div className="lg:pt-2">
              <p
                className="text-[13px] leading-[1.75]"
                style={{ color: "#6B6660", fontFamily: "var(--font-display)" }}
              >
                Established to address a gap in the quality and specificity of capability development available to African institutions in defence, intelligence, security, and emerging technology.
              </p>
              <div className="mt-8 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
              <div className="mt-8 space-y-4">
                <Link
                  href="/about/mission"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-medium qi-text-hover-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Our Mission
                  <ArrowRight size={11} />
                </Link>
                <br />
                <Link
                  href="/about/leadership"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-medium qi-text-hover-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Leadership & Faculty
                  <ArrowRight size={11} />
                </Link>
              </div>
            </div>

            {/* Right — editorial copy */}
            <div>
              <p
                className="text-[20px] md:text-[23px] leading-[1.75] mb-8"
                style={{
                  color: "#1A2535",
                  fontFamily: "var(--font-editorial)",
                  fontStyle: "italic",
                }}
              >
                Quantum Intel is a capability partner to government institutions, security agencies, defence formations, intelligence communities, and major corporate organisations across Nigeria and Africa. We design and deliver advanced training and capability development programmes in strategic communications, military intelligence, cyber security, artificial intelligence, and the emerging technologies reshaping modern warfare.
              </p>

              <div className="h-px mb-8" style={{ background: "rgba(10,26,47,0.07)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 02 What We Do ────────────────────────────────── */}
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
              02 — What We Do
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-20 mb-14">
            <div>
              <h2
                className="text-[38px] md:text-[46px] font-semibold leading-[1.06] tracking-tight"
                style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
              >
                Three modes of engagement.
              </h2>
            </div>
            <div className="flex items-end">
              <p
                className="text-[15px] leading-[1.75] max-w-[420px]"
                style={{ color: "#5A5550", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
              >
                Each mode is calibrated to the specific requirements, seniority profile, and confidentiality obligations of the client institution.
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 border-t border-l"
            style={{ borderColor: "rgba(10,26,47,0.07)" }}
          >
            {whatWeDo.map((item) => (
              <div
                key={item.number}
                className="p-8 lg:p-10 border-b border-r"
                style={{ borderColor: "rgba(10,26,47,0.07)" }}
              >
                <span
                  className="text-[10px] tracking-[0.24em] uppercase block mb-6"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  {item.number}
                </span>
                <h3
                  className="text-[22px] font-semibold mb-5 leading-snug"
                  style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[14px] leading-[1.85]" style={{ color: "#5A5550" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t flex flex-wrap gap-6" style={{ borderColor: "rgba(10,26,47,0.07)" }}>
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-medium qi-text-hover-gold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              All Capability Domains
              <ArrowRight size={11} />
            </Link>
            <Link
              href="/training/advanced-capability-program"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-medium qi-text-hover-gold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Advanced Capability Program
              <ArrowRight size={11} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 03 Where We Operate ──────────────────────────── */}
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
              03 — Where We Operate
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.08)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left */}
            <div>
              <h2
                className="text-[38px] md:text-[46px] font-semibold leading-[1.06] tracking-tight mb-9"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Nigeria and Africa, with selective international reach.
              </h2>
              <p
                className="text-[16px] leading-[1.85] mb-7"
                style={{ color: "#C9C6BF" }}
              >
                Quantum Intel is headquartered in Nigeria, with offices in Lagos and Abuja. Our primary operating environment is Nigeria and the African continent, with selective international engagement where client mandates extend beyond the continent.
              </p>
              <p
                className="text-[16px] leading-[1.85] mb-7"
                style={{ color: "#C9C6BF" }}
              >
                Programme delivery locations are determined by client requirements and confidentiality arrangements. We have delivered programmes across West, East, and Southern Africa, and support clients in Francophone and Anglophone contexts.
              </p>
              <p
                className="text-[15px] leading-[1.8]"
                style={{
                  color: "rgba(242,239,233,0.4)",
                  fontFamily: "var(--font-editorial)",
                  fontStyle: "italic",
                }}
              >
                Specific programme locations are disclosed only to confirmed participants, consistent with our confidentiality commitments.
              </p>
            </div>

            {/* Right — coverage register */}
            <div>
              <div
                className="border"
                style={{ borderColor: "rgba(242,239,233,0.08)", background: "rgba(242,239,233,0.02)" }}
              >
                <div
                  className="px-8 py-5 border-b"
                  style={{ borderColor: "rgba(242,239,233,0.06)" }}
                >
                  <p
                    className="text-[10px] tracking-[0.25em] uppercase"
                    style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                  >
                    Coverage register
                  </p>
                </div>
                {[
                  { region: "Primary", detail: "Nigeria — Lagos & Abuja" },
                  { region: "West Africa", detail: "Programme delivery across the sub-region" },
                  { region: "East Africa", detail: "Selected engagements and faculty networks" },
                  { region: "Southern Africa", detail: "Engagements on request" },
                  { region: "International", detail: "Selective, where client mandates require" },
                ].map((item) => (
                  <div
                    key={item.region}
                    className="flex items-start gap-6 px-8 py-5 border-b"
                    style={{ borderColor: "rgba(242,239,233,0.06)" }}
                  >
                    <span
                      className="text-[10.5px] tracking-[0.1em] uppercase shrink-0 w-28 pt-0.5"
                      style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                    >
                      {item.region}
                    </span>
                    <span
                      className="text-[13px] leading-[1.65]"
                      style={{ color: "rgba(242,239,233,0.55)", fontFamily: "var(--font-display)" }}
                    >
                      {item.detail}
                    </span>
                  </div>
                ))}
                <div className="px-8 py-5">
                  <p
                    className="text-[11px]"
                    style={{ color: "rgba(242,239,233,0.2)", fontFamily: "var(--font-display)" }}
                  >
                    Registered in the Federal Republic of Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 04 Operating Principles ──────────────────────── */}
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
              04 — Operating Principles
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-20 mb-14">
            <div>
              <h2
                className="text-[38px] md:text-[46px] font-semibold leading-[1.06] tracking-tight"
                style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
              >
                How we conduct our work.
              </h2>
            </div>
            <div className="flex items-end">
              <p
                className="text-[15px] leading-[1.75] max-w-[420px]"
                style={{ color: "#5A5550", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
              >
                These principles are not aspirational. They describe the actual terms on which we engage with every client, on every programme.
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 border-t border-l"
            style={{ borderColor: "rgba(10,26,47,0.07)" }}
          >
            {principles.map((p) => (
              <div
                key={p.number}
                className="p-8 lg:p-10 border-b border-r"
                style={{ borderColor: "rgba(10,26,47,0.07)" }}
              >
                <span
                  className="text-[10px] tracking-[0.24em] uppercase block mb-6"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  {p.number}
                </span>
                <h3
                  className="text-[20px] font-semibold mb-4 leading-snug"
                  style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
                >
                  {p.title}
                </h3>
                <p className="text-[14px] leading-[1.85]" style={{ color: "#5A5550" }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 05 How We Engage ─────────────────────────────── */}
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
              05 — How We Engage
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.08)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-20 mb-14">
            <div>
              <h2
                className="text-[38px] md:text-[46px] font-semibold leading-[1.06] tracking-tight"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Confidential, structured, institutional.
              </h2>
            </div>
            <div className="flex items-end">
              <p
                className="text-[15px] leading-[1.75] max-w-[420px]"
                style={{ color: "#C9C6BF", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
              >
                We do not operate through unsolicited outreach. All engagements are initiated by qualified institutions through our structured enquiry channels.
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 border-t border-l"
            style={{ borderColor: "rgba(242,239,233,0.06)" }}
          >
            {engagementSteps.map((step) => (
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
                Request a confidential introduction.
              </h2>
              <p
                className="text-[16px] leading-[1.8] max-w-[440px]"
                style={{
                  color: "#C9C6BF",
                  fontFamily: "var(--font-editorial)",
                  fontStyle: "italic",
                }}
              >
                Quantum Intel engages with qualified institutions through structured, confidential channels. To initiate an enquiry, use the link below or contact us directly.
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
                href="/capabilities"
                className="qi-btn-outline inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Explore Capabilities
              </Link>
            </div>
          </div>

          {/* Internal navigation */}
          <div
            className="mt-16 pt-8 border-t flex flex-wrap gap-x-8 gap-y-4"
            style={{ borderColor: "rgba(242,239,233,0.05)" }}
          >
            {[
              { label: "Our Mission", href: "/about/mission" },
              { label: "Leadership & Faculty", href: "/about/leadership" },
              { label: "Capabilities", href: "/capabilities" },
              { label: "Who We Work With", href: "/sectors" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-medium qi-text-hover-stone"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {link.label}
                <ArrowRight size={11} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
