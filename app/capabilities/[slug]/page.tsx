import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { capabilities, getCapabilityBySlug } from "@/app/data/capabilities";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cap = getCapabilityBySlug(slug);
  if (!cap) return {};
  return {
    title: cap.seo.title.replace(" — Quantum Intel", ""),
    description: cap.seo.description,
  };
}

export default async function CapabilityDetailPage({ params }: Props) {
  const { slug } = await params;
  const cap = getCapabilityBySlug(slug);
  if (!cap) notFound();

  const allCaps = capabilities.filter((c) => c.slug !== cap.slug);

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
                  <Link
                    href="/capabilities"
                    className="text-[10px] tracking-[0.24em] uppercase qi-text-hover-stone"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Capabilities
                  </Link>
                  <div className="w-4 h-px" style={{ background: "rgba(242,239,233,0.2)" }} />
                  <span
                    className="text-[10.5px] tracking-[0.3em] uppercase"
                    style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                  >
                    {cap.number}
                  </span>
                </div>

                <h1
                  className="text-[44px] md:text-[54px] lg:text-[62px] font-semibold leading-[1.05] tracking-tight mb-8"
                  style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
                >
                  {cap.title}
                </h1>

                <div className="w-full h-px mb-8" style={{ background: "rgba(242,239,233,0.07)" }} />

                <p
                  className="text-[17px] md:text-[18px] leading-[1.8] max-w-[520px] mb-12"
                  style={{
                    color: "#C9C6BF",
                    fontFamily: "var(--font-editorial)",
                    fontStyle: "italic",
                  }}
                >
                  {cap.definition}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/training/${cap.trainingSlug}`}
                    className="qi-btn-gold inline-flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Training Programme
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
                  All Capabilities
                </p>
                <div className="space-y-5">
                  {capabilities.map((c) => (
                    <div key={c.slug} className="flex items-center gap-4">
                      <span
                        className="text-[10px] tracking-[0.2em] shrink-0 w-6"
                        style={{ color: c.slug === cap.slug ? "#B8945A" : "rgba(184,148,90,0.4)", fontFamily: "var(--font-display)" }}
                      >
                        {c.number}
                      </span>
                      <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.08)" }} />
                      <Link
                        href={`/capabilities/${c.slug}`}
                        className="text-[11.5px] tracking-[0.03em] text-right transition-colors"
                        style={{
                          color: c.slug === cap.slug ? "#F2EFE9" : "rgba(242,239,233,0.3)",
                          fontFamily: "var(--font-display)",
                          fontWeight: c.slug === cap.slug ? 600 : 400,
                        }}
                      >
                        {c.shortTitle}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t w-full" style={{ borderColor: "rgba(242,239,233,0.05)" }}>
          <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center gap-6 overflow-x-auto">
            {capabilities.map((c) => (
              <Link
                key={c.slug}
                href={`/capabilities/${c.slug}`}
                className="shrink-0 text-[11px] tracking-[0.08em] uppercase"
                style={{
                  color: c.slug === cap.slug ? "#B8945A" : "rgba(242,239,233,0.35)",
                  fontFamily: "var(--font-display)",
                  fontWeight: c.slug === cap.slug ? 600 : 400,
                }}
              >
                {c.shortTitle}
              </Link>
            ))}
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

          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-24">
            <div className="lg:pt-2">
              <p
                className="text-[13px] leading-[1.75]"
                style={{ color: "#6B6660", fontFamily: "var(--font-display)" }}
              >
                {cap.definition}
              </p>
              <div className="mt-8 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
              <div className="mt-8 space-y-4">
                <Link
                  href={`/training/${cap.trainingSlug}`}
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-medium qi-text-hover-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Training Programme
                  <ArrowRight size={11} />
                </Link>
                <br />
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

            <div className="space-y-6">
              {cap.overview.map((para, i) => (
                <p
                  key={i}
                  className={`leading-[1.85] ${i === 0 ? "text-[19px] md:text-[21px]" : "text-[15px] md:text-[16px]"}`}
                  style={{
                    color: i === 0 ? "#1A2535" : "#5A5550",
                    fontFamily: i === 0 ? "var(--font-editorial)" : undefined,
                    fontStyle: i === 0 ? "italic" : undefined,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Areas of Focus ───────────────────────────────── */}
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
              02 — Areas of Focus
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-20">
            <div>
              <h2
                className="text-[32px] md:text-[38px] font-semibold leading-[1.08] tracking-tight"
                style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
              >
                What this capability covers.
              </h2>
            </div>
            <div>
              <div className="space-y-0 border-t" style={{ borderColor: "rgba(10,26,47,0.08)" }}>
                {cap.areasOfFocus.map((area, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-5 py-4 border-b"
                    style={{ borderColor: "rgba(10,26,47,0.08)" }}
                  >
                    <span
                      className="text-[10px] tracking-[0.2em] shrink-0"
                      style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p
                      className="text-[15px] leading-snug"
                      style={{ color: "#2A2520", fontFamily: "var(--font-display)" }}
                    >
                      {area}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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

          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-24 items-start">
            <div>
              <h2
                className="text-[32px] md:text-[38px] font-semibold leading-[1.08] tracking-tight"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Training, development, and advisory.
              </h2>
            </div>
            <div>
              <p
                className="text-[17px] leading-[1.85] mb-8"
                style={{
                  color: "#C9C6BF",
                  fontFamily: "var(--font-editorial)",
                  fontStyle: "italic",
                }}
              >
                {cap.howWeEngage}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/training/${cap.trainingSlug}`}
                  className="qi-btn-gold inline-flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  View Training Programme
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
          </div>
        </div>
      </section>

      {/* ─── Adjacent Capabilities ────────────────────────── */}
      <section
        className="py-20 md:py-24"
        style={{ background: "#14171C", borderTop: "1px solid rgba(242,239,233,0.05)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <span
              className="text-[10px] tracking-[0.28em] uppercase"
              style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
            >
              Related Capabilities
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.06)" }} />
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 border-t border-l"
            style={{ borderColor: "rgba(242,239,233,0.06)" }}
          >
            {cap.adjacent.map((adj) => {
              const adjCap = getCapabilityBySlug(adj.slug);
              return (
                <Link
                  key={adj.slug}
                  href={`/capabilities/${adj.slug}`}
                  className="group p-8 lg:p-10 border-b border-r block qi-card-border-hover"
                  style={{ borderColor: "rgba(242,239,233,0.06)" }}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <span
                        className="text-[10px] tracking-[0.22em] uppercase block mb-3"
                        style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                      >
                        {adjCap?.number}
                      </span>
                      <h3
                        className="text-[18px] font-semibold mb-3 leading-snug"
                        style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
                      >
                        {adj.title}
                      </h3>
                      {adjCap && (
                        <p
                          className="text-[13px] leading-[1.7]"
                          style={{ color: "#C9C6BF" }}
                        >
                          {adjCap.definition}
                        </p>
                      )}
                    </div>
                    <ArrowRight
                      size={16}
                      className="shrink-0 mt-1 transition-transform group-hover:translate-x-1"
                      style={{ color: "#B8945A" }}
                    />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-8">
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-medium qi-text-hover-stone"
              style={{ fontFamily: "var(--font-display)" }}
            >
              All Capabilities
              <ArrowRight size={11} />
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
                className="text-[38px] md:text-[50px] font-semibold leading-[1.05] tracking-tight mb-7 max-w-[560px]"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Request a briefing on {cap.shortTitle.toLowerCase()}.
              </h2>
              <p
                className="text-[16px] leading-[1.8] max-w-[440px]"
                style={{
                  color: "#C9C6BF",
                  fontFamily: "var(--font-editorial)",
                  fontStyle: "italic",
                }}
              >
                Quantum Intel handles all capability enquiries through structured, confidential channels. Contact us to discuss a programme for your institution.
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
                href={`/training/${cap.trainingSlug}`}
                className="qi-btn-outline inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Training Programme
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
