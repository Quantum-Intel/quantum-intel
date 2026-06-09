import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Initiate a confidential conversation with Quantum Intel. Enquiry routes for proposals, partnerships, and media.",
};

const enquiryRoutes = [
  {
    number: "01",
    title: "General Enquiry",
    description:
      "For questions about Quantum Intel, our work, and initial introductions. Handled through our standard confidential channels.",
    href: "#general-enquiry",
    anchor: true,
    cta: "Send an Enquiry",
  },
  {
    number: "02",
    title: "Request a Proposal",
    description:
      "For government and corporate institutions seeking a structured proposal for a training or capability development programme.",
    href: "/contact/request-proposal",
    anchor: false,
    cta: "Request a Proposal",
  },
  {
    number: "03",
    title: "Partner With Us",
    description:
      "For faculty, institutional, and technology partnership enquiries. Open to senior practitioners and organisations aligned with our mission.",
    href: "/contact/partner-with-us",
    anchor: false,
    cta: "Partnership Enquiry",
  },
  {
    number: "04",
    title: "Media Enquiries",
    description:
      "For press and media enquiries. Responses are provided to credentialled journalists only and subject to editorial discretion.",
    href: "/contact/media",
    anchor: false,
    cta: "Media Enquiry",
  },
];

const offices = [
  {
    city: "Lagos",
    country: "Nigeria",
    email: "lagos@quantumintel.africa",
    note: "West Africa operations",
  },
  {
    city: "Abuja",
    country: "Nigeria",
    email: "abuja@quantumintel.africa",
    note: "Government & federal engagement",
  },
];

export default function ContactPage() {
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
            <div className="max-w-[680px]">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-px shrink-0" style={{ background: "#B8945A" }} />
                <span
                  className="text-[10.5px] tracking-[0.3em] uppercase"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  Contact Quantum Intel
                </span>
              </div>

              <h1
                className="text-[48px] md:text-[58px] lg:text-[66px] font-semibold leading-[1.04] tracking-tight mb-9"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Initiate a confidential conversation.
              </h1>

              <div className="w-full h-px mb-9" style={{ background: "rgba(242,239,233,0.07)" }} />

              <p
                className="text-[17px] md:text-[18px] leading-[1.8] mb-12"
                style={{
                  color: "#C9C6BF",
                  fontFamily: "var(--font-editorial)",
                  fontStyle: "italic",
                }}
              >
                Quantum Intel engages with institutional and corporate clients through structured, confidential channels. Select the appropriate route below to initiate a conversation.
              </p>

              <div
                className="inline-flex items-center gap-3 px-4 py-3 border text-[12px] leading-[1.6]"
                style={{
                  borderColor: "rgba(184,148,90,0.3)",
                  color: "#C9C6BF",
                  fontFamily: "var(--font-display)",
                }}
              >
                <div className="w-1 h-1 rounded-full shrink-0" style={{ background: "#B8945A" }} />
                All enquiries are handled with strict confidentiality. Quantum Intel does not disclose client enquiries or identities.
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
                Contact
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-6">
              <Link
                href="/contact/request-proposal"
                className="text-[11px] tracking-[0.08em] uppercase qi-text-hover-stone"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Request Proposal
              </Link>
              <Link
                href="/contact/partner-with-us"
                className="text-[11px] tracking-[0.08em] uppercase qi-text-hover-stone"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Partner
              </Link>
              <Link
                href="/contact/media"
                className="text-[11px] tracking-[0.08em] uppercase qi-text-hover-stone"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Media
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Enquiry Routes ───────────────────────────────── */}
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
              01 — Enquiry Routes
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 border-t border-l"
            style={{ borderColor: "rgba(10,26,47,0.07)" }}
          >
            {enquiryRoutes.map((route) => (
              <div
                key={route.number}
                className="p-8 lg:p-10 border-b border-r qi-card-hover"
                style={{ borderColor: "rgba(10,26,47,0.07)" }}
              >
                <span
                  className="text-[10px] tracking-[0.24em] uppercase block mb-6"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  {route.number}
                </span>
                <h2
                  className="text-[22px] font-semibold mb-4 leading-snug"
                  style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
                >
                  {route.title}
                </h2>
                <p
                  className="text-[14px] leading-[1.8] mb-8"
                  style={{ color: "#5A5550", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
                >
                  {route.description}
                </p>
                <Link
                  href={route.href}
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-semibold qi-text-hover-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {route.cta}
                  <ArrowRight size={11} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── General Enquiry Form ─────────────────────────── */}
      <section
        id="general-enquiry"
        className="py-24 md:py-32"
        style={{ background: "#F7F4EE", borderTop: "1px solid rgba(10,26,47,0.07)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span
              className="text-[10px] tracking-[0.28em] uppercase"
              style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
            >
              02 — General Enquiry
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-20">
            <div>
              <h2
                className="text-[28px] md:text-[34px] font-semibold leading-[1.08] tracking-tight mb-6"
                style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
              >
                Send us a message.
              </h2>
              <p
                className="text-[14px] leading-[1.8] mb-8"
                style={{ color: "#5A5550", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
              >
                For general enquiries that do not require a full proposal. All messages are handled through our structured confidential channels.
              </p>
              <div
                className="p-5 border"
                style={{ borderColor: "rgba(10,26,47,0.1)", background: "#FFFFFF" }}
              >
                <p
                  className="text-[11px] leading-[1.7]"
                  style={{ color: "#6B6660", fontFamily: "var(--font-display)" }}
                >
                  <strong style={{ color: "#0A1A2F" }}>Security & Confidentiality.</strong> Quantum Intel handles every enquiry through structured, confidential channels. Enquiry data is processed in accordance with the Nigeria Data Protection Act and our{" "}
                  <Link href="/legal/privacy" className="underline underline-offset-2" style={{ color: "#B8945A" }}>
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>

            <form
              method="POST"
              action="/api/enquiry"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[10.5px] tracking-[0.1em] uppercase mb-2"
                    style={{ color: "#6B6660", fontFamily: "var(--font-display)" }}
                  >
                    Full Name <span style={{ color: "#B8945A" }}>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3.5 text-[14px] border outline-none focus:border-[rgba(184,148,90,0.6)]"
                    style={{
                      background: "#FFFFFF",
                      borderColor: "rgba(10,26,47,0.15)",
                      color: "#0A1A2F",
                      fontFamily: "var(--font-display)",
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="organisation"
                    className="block text-[10.5px] tracking-[0.1em] uppercase mb-2"
                    style={{ color: "#6B6660", fontFamily: "var(--font-display)" }}
                  >
                    Organisation <span style={{ color: "#B8945A" }}>*</span>
                  </label>
                  <input
                    id="organisation"
                    name="organisation"
                    type="text"
                    required
                    className="w-full px-4 py-3.5 text-[14px] border outline-none focus:border-[rgba(184,148,90,0.6)]"
                    style={{
                      background: "#FFFFFF",
                      borderColor: "rgba(10,26,47,0.15)",
                      color: "#0A1A2F",
                      fontFamily: "var(--font-display)",
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="role"
                    className="block text-[10.5px] tracking-[0.1em] uppercase mb-2"
                    style={{ color: "#6B6660", fontFamily: "var(--font-display)" }}
                  >
                    Role / Title <span style={{ color: "#B8945A" }}>*</span>
                  </label>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    required
                    className="w-full px-4 py-3.5 text-[14px] border outline-none focus:border-[rgba(184,148,90,0.6)]"
                    style={{
                      background: "#FFFFFF",
                      borderColor: "rgba(10,26,47,0.15)",
                      color: "#0A1A2F",
                      fontFamily: "var(--font-display)",
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="block text-[10.5px] tracking-[0.1em] uppercase mb-2"
                    style={{ color: "#6B6660", fontFamily: "var(--font-display)" }}
                  >
                    Country <span style={{ color: "#B8945A" }}>*</span>
                  </label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    required
                    className="w-full px-4 py-3.5 text-[14px] border outline-none focus:border-[rgba(184,148,90,0.6)]"
                    style={{
                      background: "#FFFFFF",
                      borderColor: "rgba(10,26,47,0.15)",
                      color: "#0A1A2F",
                      fontFamily: "var(--font-display)",
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[10.5px] tracking-[0.1em] uppercase mb-2"
                    style={{ color: "#6B6660", fontFamily: "var(--font-display)" }}
                  >
                    Work Email <span style={{ color: "#B8945A" }}>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3.5 text-[14px] border outline-none focus:border-[rgba(184,148,90,0.6)]"
                    style={{
                      background: "#FFFFFF",
                      borderColor: "rgba(10,26,47,0.15)",
                      color: "#0A1A2F",
                      fontFamily: "var(--font-display)",
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[10.5px] tracking-[0.1em] uppercase mb-2"
                    style={{ color: "#6B6660", fontFamily: "var(--font-display)" }}
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-3.5 text-[14px] border outline-none focus:border-[rgba(184,148,90,0.6)]"
                    style={{
                      background: "#FFFFFF",
                      borderColor: "rgba(10,26,47,0.15)",
                      color: "#0A1A2F",
                      fontFamily: "var(--font-display)",
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[10.5px] tracking-[0.1em] uppercase mb-2"
                  style={{ color: "#6B6660", fontFamily: "var(--font-display)" }}
                >
                  Enquiry Summary <span style={{ color: "#B8945A" }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3.5 text-[14px] border outline-none focus:border-[rgba(184,148,90,0.6)] resize-none"
                  style={{
                    background: "#FFFFFF",
                    borderColor: "rgba(10,26,47,0.15)",
                    color: "#0A1A2F",
                    fontFamily: "var(--font-display)",
                  }}
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-1 shrink-0"
                  style={{ accentColor: "#B8945A" }}
                />
                <label
                  htmlFor="consent"
                  className="text-[12px] leading-[1.7]"
                  style={{ color: "#6B6660", fontFamily: "var(--font-display)" }}
                >
                  By submitting this form I confirm that the information provided is accurate and that I am authorised to contact Quantum Intel on behalf of the organisation named. Quantum Intel processes enquiry data in accordance with the Nigeria Data Protection Act and the{" "}
                  <Link href="/legal/privacy" className="underline underline-offset-2" style={{ color: "#B8945A" }}>
                    Privacy Policy
                  </Link>
                  . <span style={{ color: "#B8945A" }}>*</span>
                </label>
              </div>

              {/* Honeypot */}
              <input type="text" name="_trap" className="hidden" tabIndex={-1} aria-hidden="true" />

              <div>
                <button
                  type="submit"
                  className="qi-btn-gold inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Send Enquiry
                  <ArrowRight size={12} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ─── Contact Information ──────────────────────────── */}
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
              03 — Offices
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.08)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {offices.map((office) => (
              <div
                key={office.city}
                className="border p-8"
                style={{
                  borderColor: "rgba(242,239,233,0.08)",
                  background: "rgba(242,239,233,0.02)",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-1 rounded-full" style={{ background: "#B8945A" }} />
                  <span
                    className="text-[10px] tracking-[0.24em] uppercase"
                    style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                  >
                    {office.city}
                  </span>
                </div>
                <p
                  className="text-[20px] font-semibold mb-1"
                  style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
                >
                  {office.city}, {office.country}
                </p>
                <p
                  className="text-[12px] mb-5"
                  style={{ color: "rgba(242,239,233,0.35)", fontFamily: "var(--font-display)" }}
                >
                  {office.note}
                </p>
                <a
                  href={`mailto:${office.email}`}
                  className="text-[13px] qi-text-hover-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {office.email}
                </a>
              </div>
            ))}

            <div
              className="border p-8"
              style={{
                borderColor: "rgba(242,239,233,0.08)",
                background: "rgba(242,239,233,0.02)",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-1 rounded-full" style={{ background: "#B8945A" }} />
                <span
                  className="text-[10px] tracking-[0.24em] uppercase"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  General
                </span>
              </div>
              <p
                className="text-[20px] font-semibold mb-1"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                General Enquiries
              </p>
              <p
                className="text-[12px] mb-5"
                style={{ color: "rgba(242,239,233,0.35)", fontFamily: "var(--font-display)" }}
              >
                All initial enquiries
              </p>
              <a
                href="mailto:corporate@quantumintel.co"
                className="text-[13px] qi-text-hover-gold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                corporate@quantumintel.co
              </a>
            </div>
          </div>

          {/* Email directory */}
          <div
            className="border"
            style={{ borderColor: "rgba(242,239,233,0.08)", background: "rgba(242,239,233,0.02)" }}
          >
            <div
              className="px-8 py-5 border-b"
              style={{ borderColor: "rgba(242,239,233,0.06)" }}
            >
              <p
                className="text-[10px] tracking-[0.25em] uppercase"
                style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
              >
                Email directory
              </p>
            </div>
            {[
              { purpose: "General enquiries", email: "corporate@quantumintel.co" },
              { purpose: "Proposals & programme requests", email: "proposals@quantumintel.africa" },
              { purpose: "Partnership enquiries", email: "partners@quantumintel.africa" },
              { purpose: "Media & press", email: "media@quantumintel.africa" },
              { purpose: "Security & confidentiality", email: "security@quantumintel.africa" },
            ].map((item) => (
              <div
                key={item.email}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-8 py-4 border-b"
                style={{ borderColor: "rgba(242,239,233,0.06)" }}
              >
                <span
                  className="text-[12.5px]"
                  style={{ color: "rgba(242,239,233,0.45)", fontFamily: "var(--font-display)" }}
                >
                  {item.purpose}
                </span>
                <a
                  href={`mailto:${item.email}`}
                  className="text-[13px] qi-text-hover-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
