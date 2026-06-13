import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Quantum Intel processes personal data under the Nigeria Data Protection Act.",
};

const sections = [
  {
    number: "1",
    title: "Data Controller",
    content:
      "Quantum Intel Limited (RC No. 8186539) is registered in the Federal Republic of Nigeria, with its principal office at Abuja, Federal Capital Territory, Nigeria. As data controller, Quantum Intel determines the purposes and means of processing personal data submitted through this website and through engagement channels. For data protection enquiries, contact: corporate@email.quantumintel.co.",
  },
  {
    number: "2",
    title: "Personal Data We Process",
    content:
      "We process personal data submitted through enquiry forms on this website (including name, role, organisation, country, and work email address), data collected automatically through server logs (IP address, browser type, access times), and any correspondence conducted through our contact channels. We do not process sensitive categories of personal data through this website.",
  },
  {
    number: "3",
    title: "Purposes of Processing and Legal Basis",
    content:
      "We process enquiry data for the purpose of responding to and managing institutional enquiries, on the legal basis of legitimate interests and, where a contractual relationship results, the performance of a contract. We process server log data for security and operational purposes on the legal basis of legitimate interests. Where newsletter subscription is offered, processing is on the basis of consent.",
  },
  {
    number: "4",
    title: "Recipients of Data",
    content:
      "Enquiry data may be shared with Quantum Intel's email service provider, CRM platform, and, where relevant, the designated engagement team member responsible for the enquiry. We do not sell personal data. We do not share personal data with third parties for marketing purposes. All processors are bound by appropriate data processing agreements.",
  },
  {
    number: "5",
    title: "International Transfers",
    content:
      "Where personal data is transferred to service providers outside Nigeria, we implement appropriate safeguards consistent with the requirements of the Nigeria Data Protection Act 2023. Details of transfer mechanisms are available on request to corporate@email.quantumintel.co.",
  },
  {
    number: "6",
    title: "Retention",
    content:
      "Enquiry data is retained for the period necessary to manage the enquiry and any resulting engagement, and for a reasonable period thereafter for record-keeping purposes. Server log data is retained for a limited operational period. Data subject to statutory retention obligations will be retained for the period required by applicable law.",
  },
  {
    number: "7",
    title: "Your Rights",
    content:
      "Under the Nigeria Data Protection Act 2023, you have the right to request access to, rectification or erasure of, and objection to or restriction of processing of your personal data. You have the right to data portability and the right to withdraw consent where processing is consent-based. To exercise any of these rights, contact corporate@email.quantumintel.co. You also have the right to lodge a complaint with the Nigeria Data Protection Commission (NDPC).",
  },
  {
    number: "8",
    title: "Security",
    content:
      "Quantum Intel implements technical and organisational measures appropriate to the risk of processing personal data. Enquiry data is handled through access-controlled systems and is accessible only to designated personnel. For details of our security and confidentiality approach, see the Security & Confidentiality statement.",
  },
  {
    number: "9",
    title: "Cookies",
    content:
      "Information about our use of cookies and similar technologies is set out in the Cookie Policy.",
  },
  {
    number: "10",
    title: "Updates",
    content:
      "This policy was last reviewed in 2026. We may update it from time to time. Material changes will be communicated through the website. Continued use of this website following such notification constitutes acceptance of the updated policy.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section
        className="relative pt-32 pb-16"
        style={{ background: "#0A1A2F" }}
      >
        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <Link
              href="/legal/terms"
              className="text-[10px] tracking-[0.24em] uppercase qi-text-hover-stone"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Legal
            </Link>
            <div className="w-4 h-px" style={{ background: "rgba(242,239,233,0.2)" }} />
            <span
              className="text-[10.5px] tracking-[0.3em] uppercase"
              style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
            >
              Privacy Policy
            </span>
          </div>
          <h1
            className="text-[42px] md:text-[52px] font-semibold leading-[1.06] tracking-tight mb-6"
            style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
          >
            Privacy Policy
          </h1>
          <p
            className="text-[15px] leading-[1.75] max-w-[540px]"
            style={{ color: "#C9C6BF", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
          >
            How Quantum Intel processes personal data submitted through this website and through our engagement channels. This policy is governed by the Nigeria Data Protection Act 2023.
          </p>
        </div>
      </section>

      <section
        className="py-20 md:py-24"
        style={{ background: "#FFFFFF", borderTop: "1px solid rgba(10,26,47,0.07)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 lg:gap-20">
            {/* Sticky nav */}
            <div className="hidden lg:block">
              <p
                className="text-[9.5px] tracking-[0.22em] uppercase mb-5"
                style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
              >
                Sections
              </p>
              <div className="space-y-2">
                {sections.map((s) => (
                  <p
                    key={s.number}
                    className="text-[12.5px] leading-[1.5]"
                    style={{ color: "#9A9690", fontFamily: "var(--font-display)" }}
                  >
                    {s.number}. {s.title}
                  </p>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t space-y-3" style={{ borderColor: "rgba(10,26,47,0.07)" }}>
                <Link
                  href="/legal/cookies"
                  className="block text-[11px] tracking-[0.08em] uppercase qi-text-hover-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Cookie Policy
                </Link>
                <Link
                  href="/legal/terms"
                  className="block text-[11px] tracking-[0.08em] uppercase qi-text-hover-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Terms of Use
                </Link>
                <Link
                  href="/legal/security"
                  className="block text-[11px] tracking-[0.08em] uppercase qi-text-hover-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Security & Confidentiality
                </Link>
              </div>
            </div>

            {/* Content */}
            <div>
              <div
                className="mb-10 p-5 border"
                style={{ borderColor: "rgba(184,148,90,0.25)", background: "rgba(184,148,90,0.04)" }}
              >
                <p className="text-[12.5px] leading-[1.7]" style={{ color: "#5A5550" }}>
                  <strong style={{ color: "#3A3530" }}>Note.</strong> This policy requires review by legal counsel before publication. The content below sets out the required structure and scope; final wording should be confirmed by a qualified Nigerian data protection practitioner prior to the site going live.
                </p>
              </div>

              <div className="space-y-10">
                {sections.map((s) => (
                  <div
                    key={s.number}
                    className="pb-10 border-b"
                    style={{ borderColor: "rgba(10,26,47,0.07)" }}
                  >
                    <h2
                      className="text-[18px] font-semibold mb-4"
                      style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
                    >
                      {s.number}. {s.title}
                    </h2>
                    <p className="text-[15px] leading-[1.85]" style={{ color: "#5A5550" }}>
                      {s.content}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t" style={{ borderColor: "rgba(10,26,47,0.07)" }}>
                <p className="text-[12.5px] leading-[1.7]" style={{ color: "#9A9690" }}>
                  Data protection enquiries:{" "}
                  <a href="mailto:corporate@email.quantumintel.co" style={{ color: "#B8945A" }}>
                    corporate@email.quantumintel.co
                  </a>
                  . Supervisory authority: Nigeria Data Protection Commission (NDPC), ndpc.gov.ng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
