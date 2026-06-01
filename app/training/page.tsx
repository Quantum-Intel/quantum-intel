import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programmes } from "@/app/data/training";

export const metadata: Metadata = {
  title: "Training & Capability Development",
  description:
    "Advanced training programmes across strategic communications, military intelligence, cyber security, artificial intelligence, and emerging technologies.",
};

const domainProgrammes = programmes.filter((p) => !p.isACP);
const acp = programmes.find((p) => p.isACP)!;

export default function TrainingPage() {
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
                    Training & Capability Development
                  </span>
                </div>

                <h1
                  className="text-[48px] md:text-[58px] lg:text-[66px] font-semibold leading-[1.04] tracking-tight mb-9"
                  style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
                >
                  Programmes built for institutions.
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
                  Quantum Intel delivers training and capability development across five integrated domains — as standalone programmes for specific requirements, or combined into the Advanced Capability Program for comprehensive institutional uplift.
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
                    Request a Private Cohort
                  </Link>
                </div>
              </div>

              {/* Right — programme index */}
              <div className="hidden xl:flex flex-col justify-center pl-16 border-l" style={{ borderColor: "rgba(242,239,233,0.06)" }}>
                <p
                  className="text-[9px] tracking-[0.3em] uppercase mb-7"
                  style={{ color: "rgba(242,239,233,0.2)", fontFamily: "var(--font-display)" }}
                >
                  Programmes
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span
                      className="text-[10px] tracking-[0.2em] shrink-0 text-right"
                      style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                    >
                      ★
                    </span>
                    <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.08)" }} />
                    <Link
                      href="/training/advanced-capability-program"
                      className="text-[11.5px] tracking-[0.03em] text-right qi-text-hover-stone"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Advanced Capability Program
                    </Link>
                  </div>
                  {domainProgrammes.map((p, i) => (
                    <div key={p.slug} className="flex items-center gap-4">
                      <span
                        className="text-[10px] tracking-[0.2em] shrink-0 w-6"
                        style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                      >
                        0{i + 1}
                      </span>
                      <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.08)" }} />
                      <Link
                        href={`/training/${p.slug}`}
                        className="text-[11.5px] tracking-[0.03em] text-right qi-text-hover-stone"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {p.capabilityLabel}
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
            <Link
              href="/training/advanced-capability-program"
              className="shrink-0 text-[11px] tracking-[0.08em] uppercase qi-text-hover-stone"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ACP
            </Link>
            {domainProgrammes.map((p) => (
              <Link
                key={p.slug}
                href={`/training/${p.slug}`}
                className="shrink-0 text-[11px] tracking-[0.08em] uppercase qi-text-hover-stone"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {p.capabilityLabel}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ACP Feature ──────────────────────────────────── */}
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
              Flagship Programme
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left — identity panel */}
            <div>
              <div
                className="border p-10 mb-6"
                style={{ background: "#F7F4EE", borderColor: "rgba(10,26,47,0.08)" }}
              >
                <div
                  className="border-b pb-6 mb-6"
                  style={{ borderColor: "rgba(10,26,47,0.08)" }}
                >
                  <span
                    className="text-[10px] tracking-[0.25em] uppercase block mb-2"
                    style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                  >
                    Flagship Programme
                  </span>
                  <h2
                    className="text-[28px] md:text-[34px] font-semibold leading-tight tracking-tight"
                    style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
                  >
                    The Advanced Capability Program
                  </h2>
                </div>
                <div className="space-y-3">
                  {acp.modules.map((mod) => (
                    <div key={mod.number} className="flex items-center gap-4">
                      <span
                        className="text-[10px] shrink-0 w-5 text-right"
                        style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                      >
                        {mod.number}
                      </span>
                      <div className="w-px h-4 shrink-0" style={{ background: "rgba(10,26,47,0.1)" }} />
                      <span
                        className="text-[13px]"
                        style={{ color: "#2A2F36", fontFamily: "var(--font-display)" }}
                      >
                        {mod.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="flex items-center justify-between p-5 border"
                style={{ borderColor: "rgba(10,26,47,0.08)", background: "#F7F4EE" }}
              >
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-0.5" style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}>Delivery</p>
                  <p className="text-[12px]" style={{ color: "#5A5550", fontFamily: "var(--font-display)" }}>{acp.deliveryFormat.split(".")[0]}</p>
                </div>
                <div className="w-px h-8" style={{ background: "rgba(10,26,47,0.1)" }} />
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-0.5" style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}>Duration</p>
                  <p className="text-[12px]" style={{ color: "#5A5550", fontFamily: "var(--font-display)" }}>{acp.duration.split(".")[1]?.trim() ?? acp.duration}</p>
                </div>
              </div>
            </div>

            {/* Right — description */}
            <div>
              <p
                className="text-[19px] md:text-[22px] leading-[1.7] mb-6"
                style={{ color: "#0A1A2F", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
              >
                {acp.oneLiner}
              </p>
              <div className="h-px mb-6" style={{ background: "rgba(10,26,47,0.07)" }} />
              {acp.overview.slice(0, 2).map((para, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-[1.8] mb-5"
                  style={{ color: "#5A5550" }}
                >
                  {para}
                </p>
              ))}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/training/advanced-capability-program"
                  className="qi-btn-gold-outline inline-flex items-center gap-2.5 px-6 py-4 text-[11px] tracking-[0.12em] uppercase font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Explore the Programme
                  <ArrowRight size={12} />
                </Link>
                <Link
                  href="/contact/request-proposal"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-medium qi-text-hover-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Request a Private Cohort
                  <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Domain Programmes ────────────────────────────── */}
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
              Domain Programmes
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
          </div>

          <div className="space-y-0 border-t" style={{ borderColor: "rgba(10,26,47,0.08)" }}>
            {domainProgrammes.map((prog, i) => (
              <div
                key={prog.slug}
                className="group py-10 md:py-12 border-b"
                style={{ borderColor: "rgba(10,26,47,0.08)" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[72px_1fr_auto] gap-8 lg:gap-12 items-start">
                  <span
                    className="text-[10px] tracking-[0.28em] uppercase pt-1"
                    style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                  >
                    0{i + 1}
                  </span>

                  <div>
                    <h3
                      className="text-[24px] md:text-[28px] font-semibold leading-[1.1] tracking-tight mb-4"
                      style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
                    >
                      {prog.title}
                    </h3>
                    <p
                      className="text-[15px] leading-[1.85] mb-5 max-w-[560px]"
                      style={{
                        color: "#5A5550",
                        fontFamily: "var(--font-editorial)",
                        fontStyle: "italic",
                      }}
                    >
                      {prog.oneLiner}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="px-3 py-1.5 text-[10px] tracking-[0.08em] border"
                        style={{ color: "#6B6660", borderColor: "rgba(10,26,47,0.1)", fontFamily: "var(--font-display)" }}
                      >
                        {prog.deliveryFormat.split(".")[0]}
                      </span>
                      <span
                        className="px-3 py-1.5 text-[10px] tracking-[0.08em] border"
                        style={{ color: "#6B6660", borderColor: "rgba(10,26,47,0.1)", fontFamily: "var(--font-display)" }}
                      >
                        {prog.duration.split(":")[1]?.trim() ?? prog.duration}
                      </span>
                    </div>
                  </div>

                  <div className="lg:pt-1 flex flex-col gap-2 lg:items-start">
                    <Link
                      href={`/training/${prog.slug}`}
                      className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-semibold qi-text-hover-gold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      View Programme
                      <ArrowRight size={11} />
                    </Link>
                    {prog.capabilitySlug && (
                      <Link
                        href={`/capabilities/${prog.capabilitySlug}`}
                        className="inline-flex items-center gap-2 text-[10.5px] tracking-[0.08em] uppercase"
                        style={{ color: "#9A9690", fontFamily: "var(--font-display)" }}
                      >
                        Capability Domain
                        <ArrowRight size={10} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Private Cohort CTA ───────────────────────────── */}
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
                  Private Cohort
                </span>
              </div>
              <h2
                className="text-[38px] md:text-[50px] font-semibold leading-[1.05] tracking-tight mb-7 max-w-[600px]"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Request a programme for your institution.
              </h2>
              <p
                className="text-[16px] leading-[1.8] max-w-[440px]"
                style={{
                  color: "#C9C6BF",
                  fontFamily: "var(--font-editorial)",
                  fontStyle: "italic",
                }}
              >
                All Quantum Intel programmes are available as private cohorts, tailored to the specific mandate, seniority profile, and confidentiality requirements of the client institution.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Link
                href="/contact/request-proposal"
                className="qi-btn-gold inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Request a Private Cohort
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
        </div>
      </section>
    </>
  );
}
