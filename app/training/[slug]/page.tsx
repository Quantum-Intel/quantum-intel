import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programmes, getProgrammeBySlug } from "@/app/data/training";
import { getCapabilityBySlug } from "@/app/data/capabilities";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const prog = getProgrammeBySlug(slug);
  if (!prog) return {};
  return {
    title: prog.seo.title.replace(" — Quantum Intel", ""),
    description: prog.seo.description,
  };
}

export default async function TrainingDetailPage({ params }: Props) {
  const { slug } = await params;
  const prog = getProgrammeBySlug(slug);
  if (!prog) notFound();

  const capability = prog.capabilitySlug ? getCapabilityBySlug(prog.capabilitySlug) : null;
  const otherProgrammes = programmes.filter((p) => p.slug !== prog.slug);

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
                    href="/training"
                    className="text-[10px] tracking-[0.24em] uppercase qi-text-hover-stone"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Training
                  </Link>
                  {capability && (
                    <>
                      <div className="w-4 h-px" style={{ background: "rgba(242,239,233,0.2)" }} />
                      <span
                        className="text-[10.5px] tracking-[0.3em] uppercase"
                        style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                      >
                        {capability.number}
                      </span>
                    </>
                  )}
                  {prog.isACP && (
                    <>
                      <div className="w-4 h-px" style={{ background: "rgba(242,239,233,0.2)" }} />
                      <span
                        className="text-[10.5px] tracking-[0.3em] uppercase"
                        style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                      >
                        Flagship Programme
                      </span>
                    </>
                  )}
                </div>

                <h1
                  className="text-[44px] md:text-[54px] lg:text-[60px] font-semibold leading-[1.05] tracking-tight mb-8"
                  style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
                >
                  {prog.title}
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
                  {prog.oneLiner}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact/request-proposal"
                    className="qi-btn-gold inline-flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Request a Private Cohort
                    <ArrowRight size={12} />
                  </Link>
                  <Link
                    href="/contact"
                    className="qi-btn-outline inline-flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Confidential Enquiry
                  </Link>
                </div>
              </div>

              {/* Right — programme spec card */}
              <div className="hidden xl:flex flex-col justify-center pl-16 border-l" style={{ borderColor: "rgba(242,239,233,0.06)" }}>
                <p
                  className="text-[9px] tracking-[0.3em] uppercase mb-6"
                  style={{ color: "rgba(242,239,233,0.2)", fontFamily: "var(--font-display)" }}
                >
                  Programme details
                </p>
                <div
                  className="border divide-y"
                  style={{ borderColor: "rgba(242,239,233,0.08)" }}
                >
                  {[
                    { label: "Delivery", value: prog.deliveryFormat.split(".")[0] },
                    { label: "Duration", value: prog.duration },
                    { label: "Format", value: prog.isACP ? "Integrated — 5 modules" : `${prog.modules.length} modules` },
                    { label: "Cohort", value: "Private, by arrangement" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col gap-0.5 px-5 py-3.5"
                      style={{ borderColor: "rgba(242,239,233,0.06)" }}
                    >
                      <span
                        className="text-[9px] tracking-[0.2em] uppercase"
                        style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                      >
                        {item.label}
                      </span>
                      <span
                        className="text-[12.5px] leading-snug"
                        style={{ color: "rgba(242,239,233,0.7)", fontFamily: "var(--font-display)" }}
                      >
                        {item.value}
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
            <span
              className={`shrink-0 text-[11px] tracking-[0.08em] uppercase ${prog.isACP ? "" : "qi-text-hover-stone"}`}
              style={{ color: prog.isACP ? "#B8945A" : undefined, fontFamily: "var(--font-display)", fontWeight: prog.isACP ? 600 : 400 }}
            >
              ACP
            </span>
            {programmes.filter((p) => !p.isACP).map((p) => (
              <Link
                key={p.slug}
                href={`/training/${p.slug}`}
                className="shrink-0 text-[11px] tracking-[0.08em] uppercase"
                style={{
                  color: p.slug === prog.slug ? "#B8945A" : "rgba(242,239,233,0.35)",
                  fontFamily: "var(--font-display)",
                  fontWeight: p.slug === prog.slug ? 600 : 400,
                }}
              >
                {p.capabilityLabel}
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
              01 — Programme Overview
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-24">
            {/* Left — links */}
            <div className="lg:pt-2">
              {capability && (
                <>
                  <p className="text-[13px] leading-[1.75]" style={{ color: "#6B6660", fontFamily: "var(--font-display)" }}>
                    {capability.definition}
                  </p>
                  <div className="mt-8 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
                  <div className="mt-8 space-y-4">
                    <Link
                      href={`/capabilities/${capability.slug}`}
                      className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-medium qi-text-hover-gold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Capability Overview
                      <ArrowRight size={11} />
                    </Link>
                  </div>
                </>
              )}
              {prog.isACP && (
                <>
                  <p className="text-[13px] leading-[1.75]" style={{ color: "#6B6660", fontFamily: "var(--font-display)" }}>
                    Quantum Intel's flagship integrated programme, covering all five capability domains in a single residential cohort.
                  </p>
                  <div className="mt-8 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
                  <div className="mt-8 space-y-4">
                    <Link
                      href="/capabilities"
                      className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-medium qi-text-hover-gold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      All Capabilities
                      <ArrowRight size={11} />
                    </Link>
                  </div>
                </>
              )}
              <div className="mt-6 space-y-4">
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

            {/* Right — overview copy */}
            <div className="space-y-6">
              {prog.overview.map((para, i) => (
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

      {/* ─── Who It Is For ────────────────────────────────── */}
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
              02 — Who It Is For
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-20">
            <div>
              <h2
                className="text-[32px] md:text-[38px] font-semibold leading-[1.08] tracking-tight"
                style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
              >
                Intended participants.
              </h2>
            </div>
            <div>
              <div className="space-y-0 border-t" style={{ borderColor: "rgba(10,26,47,0.08)" }}>
                {prog.whoFor.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-5 py-4 border-b"
                    style={{ borderColor: "rgba(10,26,47,0.08)" }}
                  >
                    <div
                      className="w-1 h-1 rounded-full mt-2.5 shrink-0"
                      style={{ background: "#B8945A" }}
                    />
                    <p
                      className="text-[14.5px] leading-[1.7]"
                      style={{ color: "#2A2520", fontFamily: "var(--font-display)" }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Learning Outcomes ────────────────────────────── */}
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
              03 — Learning Outcomes
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.08)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-20">
            <div>
              <h2
                className="text-[32px] md:text-[38px] font-semibold leading-[1.08] tracking-tight"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Participants will be able to…
              </h2>
            </div>
            <div>
              <div
                className="space-y-0 border-t"
                style={{ borderColor: "rgba(242,239,233,0.06)" }}
              >
                {prog.outcomes.map((outcome, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-5 py-4 border-b"
                    style={{ borderColor: "rgba(242,239,233,0.06)" }}
                  >
                    <span
                      className="text-[10px] tracking-[0.2em] shrink-0 mt-0.5"
                      style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p
                      className="text-[14.5px] leading-[1.7]"
                      style={{ color: "rgba(242,239,233,0.8)", fontFamily: "var(--font-display)" }}
                    >
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Modules ─────────────────────────────────── */}
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
              04 — Core Modules
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-20">
            <div>
              <h2
                className="text-[32px] md:text-[38px] font-semibold leading-[1.08] tracking-tight mb-6"
                style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
              >
                Programme structure.
              </h2>
              <p
                className="text-[13.5px] leading-[1.75]"
                style={{ color: "#6B6660", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
              >
                Module sequence and duration are indicative — final programme agenda is tailored per cohort.
              </p>
            </div>
            <div>
              <div
                className="border divide-y"
                style={{ borderColor: "rgba(10,26,47,0.08)" }}
              >
                {prog.modules.map((mod) => (
                  <div
                    key={mod.number}
                    className="grid grid-cols-[56px_1fr] gap-4 p-6"
                    style={{ borderColor: "rgba(10,26,47,0.07)" }}
                  >
                    <span
                      className="text-[11px] tracking-[0.2em] pt-0.5"
                      style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                    >
                      {mod.number}
                    </span>
                    <div>
                      <p
                        className="text-[15px] font-semibold mb-2"
                        style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
                      >
                        {mod.name}
                      </p>
                      <p
                        className="text-[13px] leading-[1.7]"
                        style={{ color: "#5A5550" }}
                      >
                        {mod.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Delivery & Duration ──────────────────────────── */}
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
              05 — Delivery & Duration
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.06)" }} />
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l"
            style={{ borderColor: "rgba(242,239,233,0.06)" }}
          >
            {[
              { label: "Format", value: prog.deliveryFormat.split(".")[0] },
              { label: "Duration", value: prog.duration },
              { label: "Cohort type", value: "Private, by arrangement" },
              { label: "Locations", value: "Abuja, Lagos, and by client arrangement" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-8 border-b border-r"
                style={{ borderColor: "rgba(242,239,233,0.06)" }}
              >
                <p
                  className="text-[9.5px] tracking-[0.22em] uppercase mb-3"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-[14px] leading-[1.6]"
                  style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Faculty Note ─────────────────────────────────── */}
      <section
        className="py-16 md:py-20"
        style={{ background: "#0A1A2F", borderTop: "1px solid rgba(242,239,233,0.05)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-10 items-start">
            <div>
              <p
                className="text-[10px] tracking-[0.28em] uppercase mb-3"
                style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
              >
                Faculty
              </p>
              <h3
                className="text-[22px] font-semibold leading-snug"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Delivered by senior practitioners.
              </h3>
            </div>
            <div>
              <p
                className="text-[15px] leading-[1.8] mb-5"
                style={{ color: "#C9C6BF", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
              >
                Programme delivery is led by senior practitioners and subject-matter authorities drawn from defence, intelligence, security, technology, and policy backgrounds across Africa and internationally.
              </p>
              <p
                className="text-[13.5px] leading-[1.75]"
                style={{ color: "rgba(242,239,233,0.4)" }}
              >
                Where faculty members have served in sensitive roles, bios describe domain and institutional background rather than specific organisation — consistent with our confidentiality commitments.
              </p>
              <div className="mt-6">
                <Link
                  href="/about/leadership"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-medium qi-text-hover-stone"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Leadership & Faculty
                  <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Confidentiality Note ─────────────────────────── */}
      <section
        className="py-10"
        style={{ background: "#14171C", borderTop: "1px solid rgba(242,239,233,0.05)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div
            className="flex items-start gap-4 px-6 py-5 border"
            style={{ borderColor: "rgba(184,148,90,0.2)", background: "rgba(184,148,90,0.04)" }}
          >
            <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: "#B8945A" }} />
            <p
              className="text-[12.5px] leading-[1.7]"
              style={{ color: "rgba(242,239,233,0.55)", fontFamily: "var(--font-display)" }}
            >
              <strong style={{ color: "rgba(242,239,233,0.8)" }}>Security & Confidentiality.</strong> Quantum Intel handles every enquiry through structured, confidential channels. Programme materials and participant information are governed by internal access controls. We do not publish client identifying information without written authorisation, and we do not name security, intelligence, or defence clients on this website under any circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTAs ─────────────────────────────────────────── */}
      <section
        className="py-24 md:py-32"
        style={{ background: "#0A1A2F", borderTop: "1px solid rgba(242,239,233,0.05)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-14">
            <span
              className="text-[10px] tracking-[0.28em] uppercase"
              style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
            >
              Commission this Programme
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.08)" }} />
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 border-t border-l"
            style={{ borderColor: "rgba(242,239,233,0.06)" }}
          >
            {[
              {
                number: "01",
                title: "Download Programme Brochure",
                body: "Request the programme brochure and sample agenda via the proposal form — available to qualified institutional enquirers.",
                href: "/contact/request-proposal",
                cta: "Request Brochure",
              },
              {
                number: "02",
                title: "Request a Private Cohort",
                body: "Commission a private cohort for your institution, tailored to your mandate, seniority profile, and confidentiality requirements.",
                href: "/contact/request-proposal",
                cta: "Request a Cohort",
              },
              {
                number: "03",
                title: "Confidential Enquiry",
                body: "For initial enquiries that do not yet require a full proposal — handled through our structured confidential channels.",
                href: "/contact",
                cta: "Send Enquiry",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="p-8 lg:p-10 border-b border-r"
                style={{ borderColor: "rgba(242,239,233,0.06)" }}
              >
                <span
                  className="text-[10px] tracking-[0.24em] uppercase block mb-5"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  {item.number}
                </span>
                <h3
                  className="text-[17px] font-semibold mb-4 leading-snug"
                  style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[13px] leading-[1.8] mb-8"
                  style={{ color: "#C9C6BF" }}
                >
                  {item.body}
                </p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-semibold qi-text-hover-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.cta}
                  <ArrowRight size={11} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Other Programmes ─────────────────────────────── */}
      {otherProgrammes.length > 0 && (
        <section
          className="py-16 md:py-20"
          style={{ background: "#14171C", borderTop: "1px solid rgba(242,239,233,0.05)" }}
        >
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex items-center gap-4 mb-10">
              <span
                className="text-[10px] tracking-[0.28em] uppercase"
                style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
              >
                Other Programmes
              </span>
              <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.06)" }} />
              <Link
                href="/training"
                className="text-[11px] tracking-[0.08em] uppercase qi-text-hover-stone shrink-0"
                style={{ fontFamily: "var(--font-display)" }}
              >
                All Programmes →
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {otherProgrammes.slice(0, 4).map((p) => (
                <Link
                  key={p.slug}
                  href={`/training/${p.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 border text-[11px] tracking-[0.08em] uppercase qi-card-border-hover"
                  style={{
                    borderColor: "rgba(242,239,233,0.1)",
                    color: "rgba(242,239,233,0.5)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {p.isACP ? "Advanced Capability Program" : p.capabilityLabel}
                  <ArrowRight size={10} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
