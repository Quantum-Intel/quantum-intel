import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Past Engagements",
  description:
    "Selected anonymised engagements from Quantum Intel's portfolio of capability development programmes for government, security, and corporate clients across Africa.",
};

const engagements = [
  {
    reference: "QI-2025-019",
    sector: "National security institution",
    capability: "Military Intelligence",
    capabilitySlug: "military-intelligence",
    country: "Nigeria",
    year: "2025",
    duration: "3 weeks",
    cohortSize: "20–30 participants",
    brief:
      "Delivery of a structured capability development programme covering the intelligence cycle, analytic tradecraft, and structured analytic techniques for a national security institution. The programme was designed for senior analysts and operations staff with cross-domain intelligence responsibilities.",
    outcome:
      "Participants demonstrated measurable improvement in structured analytic product quality and in the application of intelligence requirements management processes. The institution requested a follow-on module to address advanced OSINT tradecraft within six months of completion.",
  },
  {
    reference: "QI-2025-017",
    sector: "Federal ministry",
    capability: "Strategic Communications",
    capabilitySlug: "strategic-communications",
    country: "Nigeria",
    year: "2025",
    duration: "5 days",
    cohortSize: "15–25 participants",
    brief:
      "A residential programme for senior communications and policy officials at a federal ministry with significant public-facing security responsibilities. The programme covered information environment assessment, counter-disinformation frameworks, and crisis communications in security-sensitive contexts.",
    outcome:
      "The ministry developed an internal rapid response protocol for information operations incidents, drawing directly on programme frameworks. Senior participants reported improved capacity to assess and counter influence operations targeting institutional communications.",
  },
  {
    reference: "QI-2025-014",
    sector: "Tier-1 bank",
    capability: "Cyber Security & Infrastructure Defence",
    capabilitySlug: "cyber-security",
    country: "Nigeria",
    year: "2025",
    duration: "2 days",
    cohortSize: "10–20 participants",
    brief:
      "Board and senior executive capability development programme for a major financial institution. The programme addressed cyber risk governance at institutional scale, adversary threat intelligence, and the intersection of national security and financial infrastructure protection.",
    outcome:
      "The institution's board adopted a revised cyber risk governance framework and commissioned a full infrastructure security assessment within 90 days of programme completion. Three participating executives requested individual follow-on advisory sessions.",
  },
  {
    reference: "QI-2024-028",
    sector: "Regional security body",
    capability: "Emerging Technologies in Modern Warfare",
    capabilitySlug: "emerging-technologies",
    country: "West Africa",
    year: "2024",
    duration: "4 days",
    cohortSize: "25–40 participants",
    brief:
      "Multi-country cohort programme for senior military and security officials from a regional security coordination body. The programme covered uncrewed systems, counter-UAS doctrine, and the operational implications of emerging technology for regional security architecture.",
    outcome:
      "Participating nations jointly developed a shared capability assessment framework for counter-UAS readiness. The programme resulted in a regional working group on emerging technology doctrine, facilitated through the host organisation.",
  },
  {
    reference: "QI-2024-023",
    sector: "Intelligence service",
    capability: "Artificial Intelligence",
    capabilitySlug: "artificial-intelligence",
    country: "Sub-Saharan Africa",
    year: "2024",
    duration: "3 days",
    cohortSize: "10–15 participants",
    brief:
      "An executive-level programme for a national intelligence service covering foundations of AI in intelligence analysis, AI procurement and evaluation frameworks, and AI governance and ethics in intelligence contexts. Programme delivered under enhanced confidentiality protocols.",
    outcome:
      "The institution established an internal AI governance working group and developed an AI adoption policy informed directly by programme content. Engagement reference available to qualified institutional enquirers on request.",
  },
  {
    reference: "QI-2024-019",
    sector: "Energy sector operator",
    capability: "Cyber Security & Infrastructure Defence",
    capabilitySlug: "cyber-security",
    country: "Nigeria",
    year: "2024",
    duration: "2 days",
    cohortSize: "15–25 participants",
    brief:
      "Critical infrastructure protection programme for a major energy operator, focused on cyber threat intelligence, incident response for OT/IT environments, and the intersection of physical and cyber security in energy infrastructure contexts.",
    outcome:
      "The operator restructured its security operations function to integrate OT threat intelligence following the programme. A follow-on table-top exercise was conducted three months after programme completion.",
  },
];

const sectorFilters = ["All", "Government", "Security & Intelligence", "Defence", "Corporate"];
const capabilityFilters = [
  "All",
  "Military Intelligence",
  "Strategic Communications",
  "Cyber Security",
  "Artificial Intelligence",
  "Emerging Technologies",
];

export default function PastEngagementsPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section
        className="relative min-h-[62vh] flex flex-col"
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
            <div className="max-w-[700px]">
              <div className="flex items-center gap-4 mb-10">
                <Link
                  href="/programmes"
                  className="text-[10px] tracking-[0.24em] uppercase qi-text-hover-stone"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Programmes
                </Link>
                <div className="w-4 h-px" style={{ background: "rgba(242,239,233,0.2)" }} />
                <span
                  className="text-[10.5px] tracking-[0.3em] uppercase"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  Past Engagements
                </span>
              </div>

              <h1
                className="text-[48px] md:text-[58px] lg:text-[64px] font-semibold leading-[1.04] tracking-tight mb-9"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Selected engagements.
              </h1>

              <div className="w-full h-px mb-9" style={{ background: "rgba(242,239,233,0.07)" }} />

              <p
                className="text-[17px] md:text-[18px] leading-[1.8]"
                style={{
                  color: "#C9C6BF",
                  fontFamily: "var(--font-editorial)",
                  fontStyle: "italic",
                }}
              >
                A selection of anonymised programme engagements drawn from Quantum Intel's portfolio. Client identities and participant details are withheld in accordance with our confidentiality commitments.
              </p>
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
                {engagements.length} engagements shown
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <span
                className="text-[10px] tracking-[0.12em] uppercase"
                style={{ color: "rgba(242,239,233,0.2)", fontFamily: "var(--font-display)" }}
              >
                All client identities withheld
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Confidentiality Notice ───────────────────────── */}
      <section
        className="py-8"
        style={{ background: "#14171C", borderTop: "1px solid rgba(242,239,233,0.05)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div
            className="flex items-start gap-4 px-6 py-5 border"
            style={{
              borderColor: "rgba(184,148,90,0.2)",
              background: "rgba(184,148,90,0.04)",
            }}
          >
            <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: "#B8945A" }} />
            <p
              className="text-[12.5px] leading-[1.7]"
              style={{ color: "rgba(242,239,233,0.55)", fontFamily: "var(--font-display)" }}
            >
              <strong style={{ color: "rgba(242,239,233,0.8)" }}>Confidentiality policy.</strong> All engagements are described in anonymised terms. Client names, institution identities, specific locations beyond country level, and participant details are withheld by default. Engagement references are available to qualified institutional enquirers on request to{" "}
              <a
                href="mailto:enquiries@quantumintel.africa"
                className="underline underline-offset-2"
                style={{ color: "#B8945A" }}
              >
                enquiries@quantumintel.africa
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ─── Engagement Cards ─────────────────────────────── */}
      <section
        className="py-20 md:py-24"
        style={{ background: "#FFFFFF", borderTop: "1px solid rgba(10,26,47,0.07)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <span
              className="text-[10px] tracking-[0.28em] uppercase"
              style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
            >
              Engagement Record
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
          </div>

          <div className="space-y-0 border-t" style={{ borderColor: "rgba(10,26,47,0.07)" }}>
            {engagements.map((eng) => (
              <div
                key={eng.reference}
                className="py-10 md:py-12 border-b"
                style={{ borderColor: "rgba(10,26,47,0.07)" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-16">
                  {/* Left — metadata */}
                  <div className="space-y-4">
                    <div>
                      <p
                        className="text-[9.5px] tracking-[0.2em] uppercase mb-1"
                        style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                      >
                        Reference
                      </p>
                      <p
                        className="text-[13px] font-medium"
                        style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
                      >
                        {eng.reference}
                      </p>
                    </div>
                    <div className="h-px" style={{ background: "rgba(10,26,47,0.07)" }} />

                    <div>
                      <p
                        className="text-[9.5px] tracking-[0.2em] uppercase mb-1"
                        style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                      >
                        Sector
                      </p>
                      <p
                        className="text-[13px]"
                        style={{ color: "#3A3530", fontFamily: "var(--font-display)" }}
                      >
                        {eng.sector}
                      </p>
                    </div>
                    <div className="h-px" style={{ background: "rgba(10,26,47,0.07)" }} />

                    <div>
                      <p
                        className="text-[9.5px] tracking-[0.2em] uppercase mb-1"
                        style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                      >
                        Capability Area
                      </p>
                      <Link
                        href={`/capabilities/${eng.capabilitySlug}`}
                        className="text-[13px] qi-text-hover-gold"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {eng.capability}
                      </Link>
                    </div>
                    <div className="h-px" style={{ background: "rgba(10,26,47,0.07)" }} />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p
                          className="text-[9.5px] tracking-[0.2em] uppercase mb-1"
                          style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                        >
                          Country
                        </p>
                        <p
                          className="text-[13px]"
                          style={{ color: "#3A3530", fontFamily: "var(--font-display)" }}
                        >
                          {eng.country}
                        </p>
                      </div>
                      <div>
                        <p
                          className="text-[9.5px] tracking-[0.2em] uppercase mb-1"
                          style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                        >
                          Year
                        </p>
                        <p
                          className="text-[13px]"
                          style={{ color: "#3A3530", fontFamily: "var(--font-display)" }}
                        >
                          {eng.year}
                        </p>
                      </div>
                    </div>
                    <div className="h-px" style={{ background: "rgba(10,26,47,0.07)" }} />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p
                          className="text-[9.5px] tracking-[0.2em] uppercase mb-1"
                          style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                        >
                          Duration
                        </p>
                        <p
                          className="text-[13px]"
                          style={{ color: "#3A3530", fontFamily: "var(--font-display)" }}
                        >
                          {eng.duration}
                        </p>
                      </div>
                      <div>
                        <p
                          className="text-[9.5px] tracking-[0.2em] uppercase mb-1"
                          style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                        >
                          Cohort
                        </p>
                        <p
                          className="text-[13px]"
                          style={{ color: "#3A3530", fontFamily: "var(--font-display)" }}
                        >
                          {eng.cohortSize}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right — brief and outcome */}
                  <div>
                    <div className="mb-8">
                      <p
                        className="text-[10px] tracking-[0.2em] uppercase mb-4"
                        style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                      >
                        Engagement brief
                      </p>
                      <p
                        className="text-[15px] leading-[1.85]"
                        style={{
                          color: "#2A2520",
                          fontFamily: "var(--font-editorial)",
                          fontStyle: "italic",
                        }}
                      >
                        {eng.brief}
                      </p>
                    </div>

                    <div
                      className="pt-8 border-t"
                      style={{ borderColor: "rgba(10,26,47,0.07)" }}
                    >
                      <p
                        className="text-[10px] tracking-[0.2em] uppercase mb-4"
                        style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                      >
                        Outcome
                      </p>
                      <p
                        className="text-[14px] leading-[1.85] mb-5"
                        style={{ color: "#5A5550" }}
                      >
                        {eng.outcome}
                      </p>
                      <p
                        className="text-[11.5px]"
                        style={{
                          color: "#9A9690",
                          fontFamily: "var(--font-display)",
                          fontStyle: "italic",
                        }}
                      >
                        Engagement reference available on request to qualified institutional enquirers.
                      </p>
                    </div>
                  </div>
                </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px" style={{ background: "#B8945A" }} />
                <span
                  className="text-[10px] tracking-[0.28em] uppercase"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  Engage
                </span>
              </div>
              <h2
                className="text-[36px] md:text-[46px] font-semibold leading-[1.06] tracking-tight mb-6 max-w-[560px]"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Commission a programme for your institution.
              </h2>
              <p
                className="text-[15px] leading-[1.8] max-w-[440px]"
                style={{
                  color: "#C9C6BF",
                  fontFamily: "var(--font-editorial)",
                  fontStyle: "italic",
                }}
              >
                Quantum Intel designs and delivers programmes tailored to the specific mandate, seniority, and confidentiality requirements of the client institution.
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
