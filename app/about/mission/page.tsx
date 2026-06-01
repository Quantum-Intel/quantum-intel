import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "Quantum Intel strengthens the capability of African defence, intelligence, security, and governance institutions through advanced training and capability development.",
};

const commitments = [
  {
    number: "01",
    title: "We design for the institution, not the individual.",
    body: "Our programmes are structured to produce measurable capability uplift at institutional level — not personal certificates. The unit of outcome is the institution's ability to function more effectively, not the participant's credentials.",
  },
  {
    number: "02",
    title: "We work in the African operating environment.",
    body: "Programme content is grounded in the specific doctrine, threat environment, institutional culture, and operating realities of African states and organisations. We do not repackage Western curricula.",
  },
  {
    number: "03",
    title: "We treat confidentiality as a condition of engagement.",
    body: "Client identities, programme content, and participant information are protected by default. This is not a policy position — it is a fundamental requirement of working with the institutions we serve.",
  },
  {
    number: "04",
    title: "We deliver to a practitioner standard.",
    body: "Faculty are senior practitioners with direct operational, analytical, or policy experience in their domains. We do not deliver academic content through academic faculty.",
  },
  {
    number: "05",
    title: "We engage structurally, not transactionally.",
    body: "Our engagements are designed to build durable institutional capability, not to fulfil annual training budgets. We maintain relationships with client institutions over time and measure outcomes against capability goals.",
  },
];

export default function MissionPage() {
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
          className="absolute top-0 right-0 w-px h-[380px] hidden xl:block pointer-events-none"
          aria-hidden="true"
          style={{ background: "linear-gradient(to bottom, rgba(184,148,90,0.18), transparent)" }}
        />

        <div className="relative z-10 flex-1 flex items-center max-w-[1280px] mx-auto px-6 w-full">
          <div className="w-full pt-32 pb-20">
            <div className="grid grid-cols-1 xl:grid-cols-[62%_38%] gap-0">
              <div className="pr-0 xl:pr-24">
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
                    Our Mission
                  </span>
                </div>

                <h1
                  className="text-[44px] md:text-[54px] lg:text-[62px] font-semibold leading-[1.05] tracking-tight mb-9"
                  style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
                >
                  Why we exist.
                </h1>

                <div className="w-full h-px mb-9" style={{ background: "rgba(242,239,233,0.07)" }} />

                <p
                  className="text-[17px] md:text-[19px] leading-[1.8] max-w-[560px]"
                  style={{
                    color: "#C9C6BF",
                    fontFamily: "var(--font-editorial)",
                    fontStyle: "italic",
                  }}
                >
                  Our mission is to strengthen the capability of African institutions to defend, govern, and operate in an increasingly complex security and technology environment.
                </p>
              </div>

              {/* Right — page index */}
              <div className="hidden xl:flex flex-col justify-center pl-16 border-l" style={{ borderColor: "rgba(242,239,233,0.06)" }}>
                <p
                  className="text-[9px] tracking-[0.3em] uppercase mb-7"
                  style={{ color: "rgba(242,239,233,0.2)", fontFamily: "var(--font-display)" }}
                >
                  On this page
                </p>
                <div className="space-y-5">
                  {[
                    { number: "01", label: "The Mission" },
                    { number: "02", label: "Why This Matters" },
                    { number: "03", label: "How We Work" },
                  ].map((item) => (
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

        <div className="relative z-10 border-t w-full" style={{ borderColor: "rgba(242,239,233,0.05)" }}>
          <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-px h-6" style={{ background: "rgba(184,148,90,0.5)" }} />
              <span
                className="text-[10px] tracking-[0.24em] uppercase"
                style={{ color: "rgba(242,239,233,0.28)", fontFamily: "var(--font-display)" }}
              >
                Mission
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-6">
              <Link
                href="/about"
                className="text-[11px] tracking-[0.08em] uppercase qi-text-hover-stone"
                style={{ fontFamily: "var(--font-display)" }}
              >
                About
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

      {/* ─── 01 Mission Statement ─────────────────────────── */}
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
              01 — The Mission
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-24">
            <div className="lg:pt-2">
              <div
                className="border-l-2 pl-5"
                style={{ borderColor: "#B8945A" }}
              >
                <p
                  className="text-[12px] leading-[1.8] uppercase tracking-[0.1em]"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  Mission statement
                </p>
              </div>
              <div className="mt-8 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
              <div className="mt-8 space-y-4">
                <Link
                  href="/capabilities"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-medium qi-text-hover-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Our Capabilities
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

            <div>
              <p
                className="text-[28px] md:text-[34px] lg:text-[38px] leading-[1.45] font-normal mb-10"
                style={{
                  color: "#0A1A2F",
                  fontFamily: "var(--font-editorial)",
                  fontStyle: "italic",
                }}
              >
                Our mission is to strengthen the capability of African institutions to defend, govern, and operate in an increasingly complex security and technology environment.
              </p>

              <div className="h-px mb-10" style={{ background: "rgba(10,26,47,0.07)" }} />

              <p className="text-[16px] leading-[1.9] mb-7" style={{ color: "#5A5550" }}>
                We believe Africa's defence, intelligence, security, and governance institutions deserve capability development of the same calibre delivered to peer institutions globally. We design programmes that meet that standard while remaining anchored in the operating realities, doctrine, and priorities of the African continent.
              </p>

              <p className="text-[16px] leading-[1.9]" style={{ color: "#5A5550" }}>
                We do this through confidential, structured engagements with the institutions and organisations that carry these responsibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 02 Why This Matters ──────────────────────────── */}
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
              02 — Why This Matters Now
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.08)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2
                className="text-[34px] md:text-[42px] font-semibold leading-[1.1] tracking-tight mb-8"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                The African security environment is changing faster than institutional capability can keep pace.
              </h2>
            </div>

            <div className="space-y-6">
              <p
                className="text-[17px] leading-[1.85]"
                style={{
                  color: "#C9C6BF",
                  fontFamily: "var(--font-editorial)",
                  fontStyle: "italic",
                }}
              >
                African states face a compounding set of security challenges: persistent armed conflict, the rapid proliferation of uncrewed systems and asymmetric capabilities, aggressive information operations by external state actors, an accelerating cyber threat to critical national infrastructure, and the disruptive implications of artificial intelligence for every domain of security and governance.
              </p>
              <p className="text-[15px] leading-[1.85]" style={{ color: "rgba(242,239,233,0.55)" }}>
                These challenges are occurring simultaneously, and they are occurring in an environment where many African security and intelligence institutions have not had access to the structured, high-quality capability development that would allow them to respond effectively.
              </p>
              <p className="text-[15px] leading-[1.85]" style={{ color: "rgba(242,239,233,0.55)" }}>
                The gap between the threat environment and institutional capability is not a failure of intent — it is a failure of access. African institutions have not lacked the commitment or the personnel. They have lacked the quality of training and capability development available to their counterparts in more established defence and intelligence communities.
              </p>
              <p className="text-[15px] leading-[1.85]" style={{ color: "rgba(242,239,233,0.55)" }}>
                Quantum Intel exists to close that gap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 03 How We Work ───────────────────────────────── */}
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
              03 — How We Work
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-20 mb-14">
            <div>
              <h2
                className="text-[36px] md:text-[44px] font-semibold leading-[1.06] tracking-tight"
                style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
              >
                Operating commitments.
              </h2>
            </div>
            <div className="flex items-end">
              <p
                className="text-[15px] leading-[1.75] max-w-[440px]"
                style={{ color: "#5A5550", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
              >
                These are not principles we aspire to — they describe the actual terms on which we design and deliver every engagement.
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l"
            style={{ borderColor: "rgba(10,26,47,0.07)" }}
          >
            {commitments.map((c) => (
              <div
                key={c.number}
                className="p-8 lg:p-10 border-b border-r"
                style={{ borderColor: "rgba(10,26,47,0.07)" }}
              >
                <span
                  className="text-[10px] tracking-[0.24em] uppercase block mb-5"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  {c.number}
                </span>
                <h3
                  className="text-[15px] font-semibold mb-4 leading-snug"
                  style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
                >
                  {c.title}
                </h3>
                <p className="text-[13.5px] leading-[1.8]" style={{ color: "#5A5550" }}>
                  {c.body}
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
                Explore our capabilities.
              </h2>
              <p
                className="text-[16px] leading-[1.8] max-w-[440px]"
                style={{
                  color: "#C9C6BF",
                  fontFamily: "var(--font-editorial)",
                  fontStyle: "italic",
                }}
              >
                Quantum Intel delivers capability development across five integrated domains — for governments, security agencies, defence institutions, intelligence communities, and major corporate organisations.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Link
                href="/capabilities"
                className="qi-btn-gold inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Explore Capabilities
                <ArrowRight size={12} />
              </Link>
              <Link
                href="/about/leadership"
                className="qi-btn-outline inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Meet the Leadership Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
