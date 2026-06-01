import type { Metadata } from "next";
import Link from "next/link";
import ProposalForm from "@/app/components/forms/ProposalForm";

export const metadata: Metadata = {
  title: "Request a Proposal",
  description:
    "Confidential proposal enquiries for government and corporate cohorts. Initiate a structured engagement with Quantum Intel.",
};

export default function RequestProposalPage() {
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
              Request a Proposal
            </span>
          </div>

          <div className="max-w-[700px]">
            <h1
              className="text-[44px] md:text-[54px] font-semibold leading-[1.05] tracking-tight mb-8"
              style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
            >
              Request a proposal.
            </h1>
            <p
              className="text-[17px] leading-[1.8]"
              style={{
                color: "#C9C6BF",
                fontFamily: "var(--font-editorial)",
                fontStyle: "italic",
              }}
            >
              For government and corporate institutions seeking a structured programme proposal. Complete the form below and a member of the engagement team will be in contact within two business days.
            </p>
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
                  Security & Confidentiality
                </p>
                <p
                  className="text-[12.5px] leading-[1.75]"
                  style={{ color: "rgba(242,239,233,0.5)", fontFamily: "var(--font-display)" }}
                >
                  Quantum Intel handles every enquiry through structured, confidential channels. Proposal requests are accessed only by designated personnel. Enquiry data is processed in accordance with the Nigeria Data Protection Act.
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
                    Within 2 business days
                  </p>
                </div>
                <div className="h-px" style={{ background: "rgba(242,239,233,0.06)" }} />
                <div>
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase mb-1"
                    style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                  >
                    Direct proposals
                  </p>
                  <a
                    href="mailto:proposals@quantumintel.africa"
                    className="text-[13px] qi-text-hover-gold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    proposals@quantumintel.africa
                  </a>
                </div>
                <div className="h-px" style={{ background: "rgba(242,239,233,0.06)" }} />
                <div>
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase mb-1"
                    style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                  >
                    Secure correspondence
                  </p>
                  <p
                    className="text-[12px] leading-[1.6]"
                    style={{ color: "rgba(242,239,233,0.35)", fontFamily: "var(--font-display)" }}
                  >
                    Signal available on request. Contact us by email to arrange.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <ProposalForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
