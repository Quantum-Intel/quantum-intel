import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Leadership & Faculty",
  description:
    "Quantum Intel is led by senior practitioners and supported by a faculty of subject-matter authorities across defence, intelligence, security, and emerging technology.",
};

type Leader = {
  name: string;
  role: string;
  category: "executive" | "advisory" | "faculty";
  capabilityAreas: string[];
  bioShort: string;
  linkedinUrl?: string;
  confidential: boolean;
  initials?: string;
};

const executive: Leader[] = [
  {
    name: "Victor Sonde",
    role: "Founder & Chief Executive",
    category: "executive",
    capabilityAreas: ["Strategic Communications", "Military Intelligence"],
    bioShort:
      "Victor Sonde founded Quantum Intel to address a critical gap in the quality and specificity of capability development available to African security and governance institutions. He brings extensive experience across defence, intelligence, and strategic communications in West Africa.",
    confidential: false,
    initials: "VS",
  },
  {
    name: "Director, Programmes",
    role: "Director, Programmes & Capability Development",
    category: "executive",
    capabilityAreas: ["Capability Development", "Programme Design"],
    bioShort:
      "Senior background in programme design, capability assessment, and institutional training delivery across the African defence and security sector. Responsible for the design and quality assurance of all Quantum Intel programmes.",
    confidential: true,
    initials: "DP",
  },
];

const advisory: Leader[] = [
  {
    name: "Senior Advisor",
    role: "Senior Advisor, Intelligence & National Security",
    category: "advisory",
    capabilityAreas: ["Military Intelligence", "National Security"],
    bioShort:
      "Senior background in national intelligence and security policy in West Africa. Brings institutional knowledge of the intelligence requirements and operating environment of African security agencies.",
    confidential: true,
    initials: "SA",
  },
  {
    name: "Senior Advisor",
    role: "Senior Advisor, Cyber Security & Critical Infrastructure",
    category: "advisory",
    capabilityAreas: ["Cyber Security", "Critical Infrastructure"],
    bioShort:
      "Senior practitioner background in cyber security operations, critical national infrastructure protection, and security policy across African and international contexts.",
    confidential: true,
    initials: "SC",
  },
  {
    name: "Senior Advisor",
    role: "Senior Advisor, Emerging Technologies",
    category: "advisory",
    capabilityAreas: ["Emerging Technologies", "Defence Planning"],
    bioShort:
      "Background in defence planning, technology acquisition, and the operational implications of emerging technology systems in the African security environment.",
    confidential: true,
    initials: "SE",
  },
];

const facultyByDomain: {
  domain: string;
  slug: string;
  members: Leader[];
}[] = [
  {
    domain: "Strategic Communications",
    slug: "strategic-communications",
    members: [
      {
        name: "Faculty Lead",
        role: "Faculty Lead, Strategic Communications",
        category: "faculty",
        capabilityAreas: ["Strategic Communications", "Information Operations"],
        bioShort:
          "Senior background in strategic communications, information operations, and public affairs in government and security contexts across Africa.",
        confidential: true,
        initials: "SC",
      },
      {
        name: "Faculty",
        role: "Faculty, Counter-Disinformation & Influence",
        category: "faculty",
        capabilityAreas: ["Counter-Disinformation", "Strategic Communications"],
        bioShort:
          "Practitioner background in information environment analysis, counter-disinformation, and the assessment of hostile information operations in the West African context.",
        confidential: true,
        initials: "CD",
      },
    ],
  },
  {
    domain: "Military Intelligence",
    slug: "military-intelligence",
    members: [
      {
        name: "Faculty Lead",
        role: "Faculty Lead, Military Intelligence",
        category: "faculty",
        capabilityAreas: ["Military Intelligence", "Analytic Tradecraft"],
        bioShort:
          "Senior background in military intelligence, all-source analysis, and structured analytic tradecraft across defence and national intelligence environments.",
        confidential: true,
        initials: "MI",
      },
      {
        name: "Faculty",
        role: "Faculty, OSINT & Collection",
        category: "faculty",
        capabilityAreas: ["OSINT", "Intelligence Collection"],
        bioShort:
          "Background in open-source intelligence collection and exploitation, with specific expertise in African open-source environments and social media intelligence.",
        confidential: true,
        initials: "OS",
      },
    ],
  },
  {
    domain: "Cyber Security & Infrastructure Defence",
    slug: "cyber-security",
    members: [
      {
        name: "Faculty Lead",
        role: "Faculty Lead, Cyber Security & Infrastructure Defence",
        category: "faculty",
        capabilityAreas: ["Cyber Security", "Critical Infrastructure"],
        bioShort:
          "Senior practitioner background in cyber defence operations, threat intelligence, and critical national infrastructure protection across government and private sector contexts.",
        confidential: true,
        initials: "CS",
      },
    ],
  },
  {
    domain: "Artificial Intelligence",
    slug: "artificial-intelligence",
    members: [
      {
        name: "Faculty Lead",
        role: "Faculty Lead, Artificial Intelligence for Defence & Security",
        category: "faculty",
        capabilityAreas: ["Artificial Intelligence", "AI Governance"],
        bioShort:
          "Background in applied AI in intelligence and security contexts, AI governance, and the assessment of adversarial AI capabilities.",
        confidential: true,
        initials: "AI",
      },
    ],
  },
  {
    domain: "Emerging Technologies",
    slug: "emerging-technologies",
    members: [
      {
        name: "Faculty Lead",
        role: "Faculty Lead, Emerging Technologies in Modern Warfare",
        category: "faculty",
        capabilityAreas: ["Emerging Technologies", "Uncrewed Systems"],
        bioShort:
          "Background in defence technology assessment, uncrewed systems operations, and technology horizon scanning for defence planners.",
        confidential: true,
        initials: "ET",
      },
    ],
  },
];

function Avatar({ initials, size = "lg" }: { initials: string; size?: "sm" | "lg" }) {
  const dim = size === "lg" ? "w-16 h-16" : "w-12 h-12";
  const text = size === "lg" ? "text-[13px]" : "text-[11px]";
  return (
    <div
      className={`${dim} flex items-center justify-center shrink-0 border`}
      style={{
        background: "rgba(184,148,90,0.08)",
        borderColor: "rgba(184,148,90,0.2)",
      }}
    >
      <span
        className={`${text} tracking-[0.1em] font-semibold`}
        style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
      >
        {initials}
      </span>
    </div>
  );
}

function LeaderCard({ leader, dark = false }: { leader: Leader; dark?: boolean }) {
  const textPrimary = dark ? "#F2EFE9" : "#0A1A2F";
  const textSecondary = dark ? "#C9C6BF" : "#5A5550";
  const textMuted = dark ? "rgba(242,239,233,0.4)" : "#9A9690";
  const borderColor = dark ? "rgba(242,239,233,0.06)" : "rgba(10,26,47,0.07)";

  return (
    <div
      className="p-8 border-b border-r"
      style={{ borderColor }}
    >
      <div className="flex items-start gap-5 mb-5">
        <Avatar initials={leader.initials ?? leader.name.slice(0, 2).toUpperCase()} />
        <div className="min-w-0">
          <p
            className="text-[15px] font-semibold leading-snug mb-1"
            style={{ color: textPrimary, fontFamily: "var(--font-display)" }}
          >
            {leader.confidential ? leader.role.split(",")[0] : leader.name}
          </p>
          <p
            className="text-[12px] leading-[1.5]"
            style={{ color: textMuted, fontFamily: "var(--font-display)" }}
          >
            {leader.role}
          </p>
        </div>
      </div>

      <p
        className="text-[13.5px] leading-[1.8] mb-5"
        style={{ color: textSecondary }}
      >
        {leader.bioShort}
      </p>

      <div className="flex flex-wrap items-center gap-2">
        {leader.capabilityAreas.map((area) => (
          <span
            key={area}
            className="px-2.5 py-1 text-[9.5px] tracking-[0.1em] uppercase border"
            style={{
              color: dark ? "rgba(184,148,90,0.8)" : "#B8945A",
              borderColor: dark ? "rgba(184,148,90,0.2)" : "rgba(184,148,90,0.25)",
              fontFamily: "var(--font-display)",
            }}
          >
            {area}
          </span>
        ))}
        {leader.linkedinUrl && (
          <a
            href={leader.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto"
            aria-label="LinkedIn profile"
          >
            <svg
              width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              style={{ color: dark ? "rgba(242,239,233,0.3)" : "#9A9690" }}
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        )}
      </div>

      {leader.confidential && (
        <p
          className="text-[10px] tracking-[0.08em] mt-4"
          style={{ color: textMuted, fontFamily: "var(--font-display)", fontStyle: "italic" }}
        >
          Serves under confidentiality arrangements appropriate to prior service.
        </p>
      )}
    </div>
  );
}

export default function LeadershipPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section
        className="relative min-h-[68vh] flex flex-col"
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
                  href="/about"
                  className="text-[10px] tracking-[0.24em] uppercase qi-text-hover-stone"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  About
                </Link>
                <div className="w-4 h-px" style={{ background: "rgba(242,239,233,0.2)" }} />
                <span
                  className="text-[10.5px] tracking-[0.3em] uppercase"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  Leadership & Faculty
                </span>
              </div>

              <h1
                className="text-[44px] md:text-[54px] lg:text-[62px] font-semibold leading-[1.05] tracking-tight mb-9"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Led and delivered by practitioners.
              </h1>

              <div className="w-full h-px mb-9" style={{ background: "rgba(242,239,233,0.07)" }} />

              <p
                className="text-[17px] md:text-[18px] leading-[1.8] max-w-[560px]"
                style={{
                  color: "#C9C6BF",
                  fontFamily: "var(--font-editorial)",
                  fontStyle: "italic",
                }}
              >
                Quantum Intel is led by an executive team and supported by a faculty of senior practitioners drawn from defence, intelligence, security, technology, and policy backgrounds across Africa and beyond.
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
                Leadership & Faculty
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-6">
              <Link
                href="/about/mission"
                className="text-[11px] tracking-[0.08em] uppercase qi-text-hover-stone"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Mission
              </Link>
              <Link
                href="/contact/partner-with-us"
                className="text-[11px] tracking-[0.08em] uppercase qi-text-hover-stone"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Intro Band ───────────────────────────────────── */}
      <section
        className="py-16"
        style={{ background: "#FFFFFF", borderTop: "1px solid rgba(10,26,47,0.07)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 lg:gap-20 items-start">
            <div>
              <p
                className="text-[10px] tracking-[0.28em] uppercase mb-3"
                style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
              >
                Note on confidentiality
              </p>
            </div>
            <div>
              <p
                className="text-[16px] leading-[1.85]"
                style={{
                  color: "#5A5550",
                  fontFamily: "var(--font-editorial)",
                  fontStyle: "italic",
                }}
              >
                The individuals listed below represent Quantum Intel's executive leadership and selected faculty. Additional contributors serve under confidentiality arrangements appropriate to their prior service and the nature of their work. Where a faculty member's background is sensitive, the profile describes domain and institutional category rather than specific organisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Executive Leadership ─────────────────────────── */}
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
              01 — Executive Leadership
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 border-t border-l"
            style={{ borderColor: "rgba(10,26,47,0.07)" }}
          >
            {executive.map((leader) => (
              <LeaderCard key={leader.role} leader={leader} dark={false} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Advisory Board ───────────────────────────────── */}
      <section
        className="py-20 md:py-24"
        style={{ background: "#F7F4EE", borderTop: "1px solid rgba(10,26,47,0.07)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <span
              className="text-[10px] tracking-[0.28em] uppercase"
              style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
            >
              02 — Advisory Board
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l"
            style={{ borderColor: "rgba(10,26,47,0.07)" }}
          >
            {advisory.map((leader) => (
              <LeaderCard key={leader.role} leader={leader} dark={false} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Faculty ──────────────────────────────────────── */}
      <section
        className="py-20 md:py-24"
        style={{ background: "#0A1A2F", borderTop: "1px solid rgba(242,239,233,0.05)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <span
              className="text-[10px] tracking-[0.28em] uppercase"
              style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
            >
              03 — Selected Faculty
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.08)" }} />
          </div>

          <p
            className="text-[13px] leading-[1.7] mb-14 max-w-[560px]"
            style={{ color: "rgba(242,239,233,0.4)", fontFamily: "var(--font-display)" }}
          >
            Faculty are grouped by capability domain. All faculty serve under confidentiality arrangements — profiles describe domain and institutional category rather than specific prior organisations.
          </p>

          <div className="space-y-14">
            {facultyByDomain.map((domain) => (
              <div key={domain.slug}>
                <div className="flex items-center gap-4 mb-8">
                  <Link
                    href={`/capabilities/${domain.slug}`}
                    className="text-[10px] tracking-[0.2em] uppercase qi-text-hover-gold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {domain.domain}
                  </Link>
                  <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.06)" }} />
                  <Link
                    href={`/capabilities/${domain.slug}`}
                    className="inline-flex items-center gap-1 text-[10px] tracking-[0.08em] uppercase qi-text-hover-stone shrink-0"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Capability <ArrowRight size={9} />
                  </Link>
                </div>

                <div
                  className="grid grid-cols-1 md:grid-cols-2 border-t border-l"
                  style={{ borderColor: "rgba(242,239,233,0.06)" }}
                >
                  {domain.members.map((member) => (
                    <LeaderCard key={member.role} leader={member} dark={true} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Join the Faculty ─────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "#14171C", borderTop: "1px solid rgba(242,239,233,0.05)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <p
                className="text-[10px] tracking-[0.28em] uppercase mb-4"
                style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
              >
                Faculty Partnership
              </p>
              <h2
                className="text-[28px] md:text-[34px] font-semibold leading-[1.1] tracking-tight mb-4"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Contribute to Quantum Intel's faculty.
              </h2>
              <p
                className="text-[15px] leading-[1.8] max-w-[500px]"
                style={{ color: "#C9C6BF", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
              >
                We partner with senior practitioners and subject-matter authorities who bring genuine depth and align with our commitment to institutional seriousness, discretion, and African context.
              </p>
            </div>
            <Link
              href="/contact/partner-with-us"
              className="qi-btn-gold inline-flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold shrink-0"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Partner With Us
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
                  Engage
                </span>
              </div>
              <h2
                className="text-[38px] md:text-[50px] font-semibold leading-[1.05] tracking-tight mb-7 max-w-[560px]"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Request a proposal.
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
                href="/about"
                className="qi-btn-outline inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                About Quantum Intel
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
