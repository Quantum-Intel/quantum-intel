import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { capabilities } from "@/app/data/capabilities";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Quantum Intel's five capability domains: strategic communications, military intelligence, cyber security, artificial intelligence, and emerging technologies in modern warfare.",
};

export default function CapabilitiesPage() {
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
          className="absolute top-0 right-0 w-px h-[420px] hidden xl:block pointer-events-none"
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
                    Capabilities
                  </span>
                </div>

                <h1
                  className="text-[48px] md:text-[58px] lg:text-[66px] font-semibold leading-[1.04] tracking-tight mb-9"
                  style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
                >
                  Five integrated capability domains.
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
                  Each domain is delivered as standalone training and capability development, and combined into the Advanced Capability Program for institutions seeking comprehensive uplift across all five areas.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/training/advanced-capability-program"
                    className="qi-btn-gold inline-flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Advanced Capability Program
                    <ArrowRight size={12} />
                  </Link>
                  <Link
                    href="/contact/request-proposal"
                    className="qi-btn-outline inline-flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Request a Briefing
                  </Link>
                </div>
              </div>

              {/* Right — capability index */}
              <div className="hidden xl:flex flex-col justify-center pl-16 border-l" style={{ borderColor: "rgba(242,239,233,0.06)" }}>
                <p
                  className="text-[9px] tracking-[0.3em] uppercase mb-7"
                  style={{ color: "rgba(242,239,233,0.2)", fontFamily: "var(--font-display)" }}
                >
                  Capability Domains
                </p>
                <div className="space-y-5">
                  {capabilities.map((cap) => (
                    <div key={cap.slug} className="flex items-center gap-4">
                      <span
                        className="text-[10px] tracking-[0.2em] shrink-0 w-6"
                        style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                      >
                        {cap.number}
                      </span>
                      <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.08)" }} />
                      <span
                        className="text-[11.5px] tracking-[0.03em] text-right"
                        style={{ color: "rgba(242,239,233,0.4)", fontFamily: "var(--font-display)" }}
                      >
                        {cap.shortTitle}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t w-full" style={{ borderColor: "rgba(242,239,233,0.05)" }}>
          <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center gap-6 overflow-x-auto">
            {capabilities.map((cap) => (
              <Link
                key={cap.slug}
                href={`/capabilities/${cap.slug}`}
                className="shrink-0 text-[11px] tracking-[0.08em] uppercase qi-text-hover-stone"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {cap.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Capabilities Grid ────────────────────────────── */}
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
              01 — Capability Domains
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
          </div>

          <div className="space-y-0 border-t" style={{ borderColor: "rgba(10,26,47,0.07)" }}>
            {capabilities.map((cap) => (
              <div
                key={cap.slug}
                className="group py-12 md:py-14 border-b"
                style={{ borderColor: "rgba(10,26,47,0.07)" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[72px_1fr_320px] gap-8 lg:gap-12 items-start">
                  <span
                    className="text-[10px] tracking-[0.28em] uppercase pt-1"
                    style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                  >
                    {cap.number}
                  </span>

                  <div>
                    <h2
                      className="text-[26px] md:text-[32px] font-semibold leading-[1.1] tracking-tight mb-4"
                      style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
                    >
                      {cap.title}
                    </h2>
                    <p
                      className="text-[15px] md:text-[16px] leading-[1.85] mb-6 max-w-[520px]"
                      style={{
                        color: "#5A5550",
                        fontFamily: "var(--font-editorial)",
                        fontStyle: "italic",
                      }}
                    >
                      {cap.definition}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cap.areasOfFocus.slice(0, 3).map((area) => (
                        <span
                          key={area}
                          className="px-3 py-1.5 text-[10px] tracking-[0.08em] border"
                          style={{
                            color: "#6B6660",
                            borderColor: "rgba(10,26,47,0.1)",
                            fontFamily: "var(--font-display)",
                          }}
                        >
                          {area}
                        </span>
                      ))}
                      {cap.areasOfFocus.length > 3 && (
                        <span
                          className="px-3 py-1.5 text-[10px] tracking-[0.08em] border"
                          style={{
                            color: "#9A9690",
                            borderColor: "rgba(10,26,47,0.07)",
                            fontFamily: "var(--font-display)",
                          }}
                        >
                          +{cap.areasOfFocus.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 lg:items-start lg:pt-1">
                    <Link
                      href={`/capabilities/${cap.slug}`}
                      className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-semibold qi-text-hover-gold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Explore Capability
                      <ArrowRight size={11} />
                    </Link>
                    <Link
                      href={`/training/${cap.trainingSlug}`}
                      className="inline-flex items-center gap-2 text-[11px] tracking-[0.08em] uppercase"
                      style={{ color: "#9A9690", fontFamily: "var(--font-display)" }}
                    >
                      Training Programme
                      <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How We Deliver ───────────────────────────────── */}
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
              02 — How We Deliver
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.08)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-20 mb-14">
            <div>
              <h2
                className="text-[36px] md:text-[44px] font-semibold leading-[1.06] tracking-tight"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Assess. Design. Deliver.
              </h2>
            </div>
            <div className="flex items-end">
              <p
                className="text-[15px] leading-[1.75] max-w-[420px]"
                style={{ color: "#C9C6BF", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
              >
                Every programme begins with an assessment of institutional capability requirements. We do not deliver catalogue training.
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 border-t border-l"
            style={{ borderColor: "rgba(242,239,233,0.06)" }}
          >
            {[
              {
                step: "01",
                title: "Assess",
                body: "We conduct a structured assessment of the institution's capability requirements, current baseline, and the operational and mandate context in which the programme will be applied.",
              },
              {
                step: "02",
                title: "Design",
                body: "We design a programme matched to the institution's specific requirements — seniority profile, capability gaps, confidentiality requirements, and delivery format preferences.",
              },
              {
                step: "03",
                title: "Deliver",
                body: "Programmes are delivered by senior faculty and subject-matter authorities under agreed protocols. Follow-on support is structured around demonstrated capability outcomes.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="p-8 lg:p-10 border-b border-r"
                style={{ borderColor: "rgba(242,239,233,0.06)" }}
              >
                <span
                  className="text-[10px] tracking-[0.24em] uppercase block mb-6"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  {item.step}
                </span>
                <h3
                  className="text-[20px] font-semibold mb-4 leading-snug"
                  style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[13.5px] leading-[1.8]" style={{ color: "#C9C6BF" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ACP Callout ──────────────────────────────────── */}
      <section
        className="py-20 md:py-24"
        style={{ background: "#14171C", borderTop: "1px solid rgba(242,239,233,0.05)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <p
                className="text-[10px] tracking-[0.28em] uppercase mb-4"
                style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
              >
                Flagship Programme
              </p>
              <h2
                className="text-[30px] md:text-[38px] font-semibold leading-[1.06] tracking-tight mb-4"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                The Advanced Capability Program
              </h2>
              <p
                className="text-[15px] leading-[1.8] max-w-[520px]"
                style={{ color: "#C9C6BF", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
              >
                An integrated programme across all five capability domains for institutions requiring comprehensive uplift. Delivered as a residential cohort, tailored to the seniority and mandate of the institution.
              </p>
            </div>
            <Link
              href="/training/advanced-capability-program"
              className="qi-btn-gold inline-flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold shrink-0"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Explore the Programme
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Closing CTA ──────────────────────────────────── */}
      <section
        className="py-24 md:py-32"
        style={{ background: "#0A1A2F", borderTop: "1px solid rgba(242,239,233,0.05)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end">
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-px" style={{ background: "#B8945A" }} />
                <span
                  className="text-[10px] tracking-[0.28em] uppercase"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  Request a Briefing
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
                Quantum Intel engages with institutional and corporate clients through structured, confidential channels. Contact us to discuss a specific capability requirement.
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
                Who We Work With
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
