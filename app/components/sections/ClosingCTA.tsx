import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ClosingCTA() {
  return (
    <section
      className="py-24 md:py-36 relative"
      style={{ background: "#0A1A2F", borderTop: "1px solid rgba(242,239,233,0.05)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-end">
          {/* Left — heading and sub */}
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
              className="text-[42px] md:text-[54px] lg:text-[62px] font-semibold leading-[1.04] tracking-tight mb-8 max-w-[680px]"
              style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
            >
              Initiate a confidential conversation.
            </h2>
            <p
              className="text-[17px] md:text-[18px] leading-[1.75] max-w-[480px]"
              style={{
                color: "#C9C6BF",
                fontFamily: "var(--font-editorial)",
                fontStyle: "italic",
              }}
            >
              Quantum Intel engages with institutional and corporate clients
              through structured, confidential channels.
            </p>
          </div>

          {/* Right — CTAs */}
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
              href="/contact/partner-with-us"
              className="qi-btn-outline inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Partner With Us
            </Link>
          </div>
        </div>

        {/* Confidentiality note */}
        <div className="mt-16 pt-8 border-t" style={{ borderColor: "rgba(242,239,233,0.05)" }}>
          <p
            className="text-[11.5px] leading-[1.7] max-w-[600px]"
            style={{ color: "rgba(242,239,233,0.28)", fontFamily: "var(--font-display)" }}
          >
            Security & Confidentiality — Quantum Intel treats every enquiry and item of client
            information as confidential by default. Enquiries are handled through structured,
            confidential channels.
          </p>
        </div>
      </div>
    </section>
  );
}
