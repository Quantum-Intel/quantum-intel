import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Quantum Intel's programme delivery record — past engagements, programme photography, and video content from capability development across Africa.",
};

const sections = [
  {
    number: "01",
    title: "Past Engagements",
    href: "/programmes/past-engagements",
    description:
      "A selection of anonymised programme engagements drawn from Quantum Intel's portfolio. Client identities and participant details are withheld in accordance with our confidentiality commitments.",
    meta: "6 engagements · Anonymised",
    cta: "View Engagements",
  },
  {
    number: "02",
    title: "Photo Gallery",
    href: "/programmes/gallery/photos",
    description:
      "Programme photography from Quantum Intel engagements across Africa. All images are anonymised — no participant names, institution identifiers, or operational details are disclosed.",
    meta: "Pending publication · Review in progress",
    cta: "View Gallery",
  },
  {
    number: "03",
    title: "Video Gallery",
    href: "/programmes/gallery/videos",
    description:
      "Faculty-led programme overviews, capability explainers, and selected b-roll from Quantum Intel engagements. Subject to the same confidentiality standards as programme delivery.",
    meta: "Pending publication · Review in progress",
    cta: "View Videos",
  },
];

export default function ProgrammesPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section
        className="relative min-h-[70vh] flex flex-col"
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
                    Programme Delivery
                  </span>
                </div>

                <h1
                  className="text-[48px] md:text-[58px] lg:text-[66px] font-semibold leading-[1.04] tracking-tight mb-9"
                  style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
                >
                  A record of delivery.
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
                  Quantum Intel's programme record — anonymised engagement histories, photography, and video content from capability development across Nigeria and Africa. All content is published in accordance with our strict confidentiality policy.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/programmes/past-engagements"
                    className="qi-btn-gold inline-flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Past Engagements
                    <ArrowRight size={12} />
                  </Link>
                  <Link
                    href="/contact/request-proposal"
                    className="qi-btn-outline inline-flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Request a Proposal
                  </Link>
                </div>
              </div>

              {/* Right — section index */}
              <div className="hidden xl:flex flex-col justify-center pl-16 border-l" style={{ borderColor: "rgba(242,239,233,0.06)" }}>
                <p
                  className="text-[9px] tracking-[0.3em] uppercase mb-7"
                  style={{ color: "rgba(242,239,233,0.2)", fontFamily: "var(--font-display)" }}
                >
                  In this section
                </p>
                <div className="space-y-5">
                  {sections.map((s) => (
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
                Programmes
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-6">
              <Link
                href="/programmes/past-engagements"
                className="text-[11px] tracking-[0.08em] uppercase qi-text-hover-stone"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Past Engagements
              </Link>
              <Link
                href="/programmes/gallery/photos"
                className="text-[11px] tracking-[0.08em] uppercase qi-text-hover-stone"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Photos
              </Link>
              <Link
                href="/programmes/gallery/videos"
                className="text-[11px] tracking-[0.08em] uppercase qi-text-hover-stone"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Videos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section Cards ────────────────────────────────── */}
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
              01 — Programme Record
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
          </div>

          <div className="space-y-0 border-t" style={{ borderColor: "rgba(10,26,47,0.07)" }}>
            {sections.map((section) => (
              <div
                key={section.number}
                className="py-12 md:py-16 border-b"
                style={{ borderColor: "rgba(10,26,47,0.07)" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[72px_1fr_auto] gap-8 lg:gap-12 items-start">
                  <span
                    className="text-[10px] tracking-[0.28em] uppercase pt-1"
                    style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                  >
                    {section.number}
                  </span>

                  <div>
                    <h2
                      className="text-[26px] md:text-[32px] font-semibold leading-[1.1] tracking-tight mb-4"
                      style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
                    >
                      {section.title}
                    </h2>
                    <p
                      className="text-[15px] md:text-[16px] leading-[1.85] mb-5 max-w-[560px]"
                      style={{
                        color: "#5A5550",
                        fontFamily: "var(--font-editorial)",
                        fontStyle: "italic",
                      }}
                    >
                      {section.description}
                    </p>
                    <span
                      className="inline-block px-3 py-1.5 text-[10px] tracking-[0.1em] uppercase border"
                      style={{
                        color: "#9A9690",
                        borderColor: "rgba(10,26,47,0.1)",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {section.meta}
                    </span>
                  </div>

                  <div className="lg:pt-1">
                    <Link
                      href={section.href}
                      className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-semibold qi-text-hover-gold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {section.cta}
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
                  Publication Policy
                </span>
              </div>
              <h2
                className="text-[32px] md:text-[40px] font-semibold leading-[1.06] tracking-tight"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                All programme content is published under a structured review process.
              </h2>
            </div>
            <div>
              <p
                className="text-[16px] leading-[1.85] mb-6"
                style={{ color: "#C9C6BF", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
              >
                No engagement record, photograph, or video is published without passing a two-stage internal review: content and confidentiality sign-off by the programme lead, followed by consent verification by the security and legal reviewer.
              </p>
              <p
                className="text-[14px] leading-[1.75]"
                style={{ color: "rgba(242,239,233,0.4)" }}
              >
                Client identities, participant names, and operational detail are withheld from all published content by default. Engagement references are available to qualified institutional enquirers on request.
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
                  Commission a Programme
                </span>
              </div>
              <h2
                className="text-[38px] md:text-[50px] font-semibold leading-[1.05] tracking-tight mb-7 max-w-[580px]"
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
                Quantum Intel designs and delivers programmes tailored to the mandate, seniority, and confidentiality requirements of each client institution.
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
                href="/training/advanced-capability-program"
                className="qi-btn-outline inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Advanced Capability Program
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
