import Link from "next/link";
import { ArrowRight } from "lucide-react";

const sectionIndex = [
  { number: "01", label: "Capabilities" },
  { number: "02", label: "Advanced Capability Program" },
  { number: "03", label: "Who We Work With" },
  { number: "04", label: "How We Operate" },
  { number: "05", label: "Selected Engagements" },
  { number: "06", label: "Insights" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col"
      style={{ background: "#0A1A2F" }}
    >
      {/* Static structural grid */}
      {/* <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(242,239,233,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(242,239,233,0.022) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      /> */}

      {/* Vertical accent rule */}
      {/* <div
        className="absolute top-0 bottom-0 w-px hidden xl:block pointer-events-none"
        aria-hidden="true"
        style={{ left: "62%", background: "rgba(184,148,90,0.1)" }}
      /> */}

      {/* Diagonal gold accent — top-right corner */}
      <div
        className="absolute top-0 right-0 w-px h-[420px] hidden xl:block pointer-events-none"
        aria-hidden="true"
        style={{ background: "linear-gradient(to bottom, rgba(184,148,90,0.18), transparent)" }}
      />

      {/* Main content area */}
      <div className="relative z-10 flex-1 flex items-center max-w-[1280px] mx-auto px-6 w-full">
        <div className="w-full pt-32 pb-24">
          <div className="grid grid-cols-1 xl:grid-cols-[62%_38%] gap-0">

            {/* Left — primary content */}
            <div className="pr-0 xl:pr-24">
              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-px shrink-0" style={{ background: "#B8945A" }} />
                <span
                  className="text-[10.5px] tracking-[0.3em] uppercase"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  Advanced Capability Partner · Africa
                </span>
              </div>

              {/* H1 */}
              <h1
                className="text-[48px] md:text-[58px] lg:text-[66px] font-semibold leading-[1.04] tracking-tight mb-9"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Advanced capability for Africa&apos;s defence, intelligence, and security institutions.
              </h1>

              {/* Divider */}
              <div className="w-full h-px mb-9" style={{ background: "rgba(242,239,233,0.07)" }} />

              {/* Sub */}
              <p
                className="text-[17px] md:text-[18px] leading-[1.8] mb-12 max-w-[520px]"
                style={{
                  color: "#C9C6BF",
                  fontFamily: "var(--font-editorial)",
                  fontStyle: "italic",
                }}
              >
                Quantum Intel designs and delivers training and capability development for governments, security agencies, defence institutions, intelligence communities, and corporate entities across Nigeria and Africa.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/capabilities"
                  className="qi-btn-gold inline-flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Explore Capabilities
                  <ArrowRight size={12} />
                </Link>
                <Link
                  href="/contact/request-proposal"
                  className="qi-btn-outline inline-flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Request a Confidential Briefing
                </Link>
              </div>
            </div>

            {/* Right — section index (desktop only) */}
            {/* <div className="hidden xl:flex flex-col justify-center pl-16" style={{ borderColor: "rgba(242,239,233,0.06)" }}>
              <p
                className="text-[9px] tracking-[0.3em] uppercase mb-7"
                style={{ color: "rgba(242,239,233,0.2)", fontFamily: "var(--font-display)" }}
              >
                Contents
              </p>
              <div className="space-y-5">
                {sectionIndex.map((item) => (
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
            </div> */}

          </div>
        </div>
      </div>

      {/* Bottom status bar */}
      {/* <div
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
              Scroll to explore
            </span>
          </div>
          <span
            className="text-[10px] tracking-[0.2em] uppercase"
            style={{ color: "rgba(242,239,233,0.15)", fontFamily: "var(--font-display)" }}
          >
            01 — Hero
          </span>
        </div>
      </div> */}
    </section>
  );
}

