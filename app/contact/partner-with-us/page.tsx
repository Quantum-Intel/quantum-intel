import type { Metadata } from "next";
import Link from "next/link";
import PartnerForm from "@/app/components/forms/PartnerForm";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Institutional, faculty, and technology partnership enquiries. Partner with Quantum Intel.",
};

const partnerTypes = [
  {
    number: "01",
    title: "Faculty Partnership",
    description:
      "Senior practitioners and subject-matter authorities with backgrounds in defence, intelligence, security, technology, or policy who wish to contribute to programme delivery.",
  },
  {
    number: "02",
    title: "Institutional Partnership",
    description:
      "Institutions — academic, research, or operational — seeking to collaborate with Quantum Intel on programme design, accreditation, or joint delivery.",
  },
  {
    number: "03",
    title: "Technology Partnership",
    description:
      "Technology providers whose products and platforms are relevant to the defence, security, intelligence, and emerging technology training environment.",
  },
];

export default function PartnerWithUsPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20"
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
        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <Link
              href="/contact"
              className="text-[10px] tracking-[0.24em] uppercase qi-text-hover-stone"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Contact
            </Link>
            <div className="w-4 h-px" style={{ background: "rgba(242,239,233,0.2)" }} />
            <span
              className="text-[10.5px] tracking-[0.3em] uppercase"
              style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
            >
              Partner With Us
            </span>
          </div>

          <div className="max-w-[700px]">
            <h1
              className="text-[44px] md:text-[54px] font-semibold leading-[1.05] tracking-tight mb-8"
              style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
            >
              Partner with Quantum Intel.
            </h1>
            <p
              className="text-[17px] leading-[1.8]"
              style={{
                color: "#C9C6BF",
                fontFamily: "var(--font-editorial)",
                fontStyle: "italic",
              }}
            >
              Quantum Intel partners with senior practitioners, institutions, and technology organisations aligned with our mission of strengthening African capability in defence, intelligence, security, and emerging technology.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Partner Types ────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "#14171C", borderTop: "1px solid rgba(242,239,233,0.05)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <span
              className="text-[10px] tracking-[0.28em] uppercase"
              style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
            >
              Partnership Types
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.06)" }} />
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 border-t border-l"
            style={{ borderColor: "rgba(242,239,233,0.06)" }}
          >
            {partnerTypes.map((type) => (
              <div
                key={type.number}
                className="p-8 border-b border-r"
                style={{ borderColor: "rgba(242,239,233,0.06)" }}
              >
                <span
                  className="text-[10px] tracking-[0.24em] uppercase block mb-5"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  {type.number}
                </span>
                <h3
                  className="text-[18px] font-semibold mb-4 leading-snug"
                  style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
                >
                  {type.title}
                </h3>
                <p
                  className="text-[13.5px] leading-[1.8]"
                  style={{ color: "#C9C6BF" }}
                >
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Form Section ─────────────────────────────────── */}
      <section
        className="py-20 md:py-28"
        style={{ background: "#0A1A2F", borderTop: "1px solid rgba(242,239,233,0.05)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-20">
            {/* Left — context */}
            <div className="lg:pt-2">
              <div
                className="p-6 border mb-8"
                style={{
                  borderColor: "rgba(242,239,233,0.08)",
                  background: "rgba(242,239,233,0.02)",
                }}
              >
                <p
                  className="text-[10px] tracking-[0.2em] uppercase mb-4"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  Partnership Criteria
                </p>
                <p
                  className="text-[12.5px] leading-[1.75]"
                  style={{ color: "rgba(242,239,233,0.5)", fontFamily: "var(--font-display)" }}
                >
                  Quantum Intel partners with individuals and organisations who bring genuine depth in their domain and who align with our commitment to institutional seriousness, discretion, and African context.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase mb-1"
                    style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                  >
                    Response time
                  </p>
                  <p
                    className="text-[13px]"
                    style={{ color: "rgba(242,239,233,0.45)", fontFamily: "var(--font-display)" }}
                  >
                    Within 5 business days
                  </p>
                </div>
                <div className="h-px" style={{ background: "rgba(242,239,233,0.06)" }} />
                <div>
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase mb-1"
                    style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                  >
                    Direct contact
                  </p>
                  <a
                    href="mailto:corporate@email.quantumintel.co"
                    className="text-[13px] qi-text-hover-gold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    corporate@email.quantumintel.co
                  </a>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <PartnerForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
