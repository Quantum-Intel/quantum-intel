import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security & Confidentiality",
  description:
    "Quantum Intel's security and confidentiality policy — how every engagement, enquiry, and item of client information is handled.",
};

export default function SecurityPage() {
  return (
    <>
      <section
        className="relative pt-32 pb-16"
        style={{ background: "#0A1A2F" }}
      >
        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <span
              className="text-[10px] tracking-[0.24em] uppercase"
              style={{ color: "rgba(242,239,233,0.3)", fontFamily: "var(--font-display)" }}
            >
              Legal
            </span>
            <div className="w-4 h-px" style={{ background: "rgba(242,239,233,0.2)" }} />
            <span
              className="text-[10.5px] tracking-[0.3em] uppercase"
              style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
            >
              Security & Confidentiality
            </span>
          </div>
          <h1
            className="text-[42px] md:text-[52px] font-semibold leading-[1.06] tracking-tight mb-6"
            style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
          >
            Security & Confidentiality
          </h1>
          <p
            className="text-[17px] leading-[1.8] max-w-[580px]"
            style={{ color: "#C9C6BF", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
          >
            Quantum Intel treats every engagement, enquiry, and item of client information as confidential by default.
          </p>
        </div>
      </section>

      <section
        className="py-20 md:py-24"
        style={{ background: "#FFFFFF", borderTop: "1px solid rgba(10,26,47,0.07)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 lg:gap-20">
            <div className="hidden lg:block">
              <p
                className="text-[9.5px] tracking-[0.22em] uppercase mb-5"
                style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
              >
                Legal
              </p>
              <div className="space-y-3">
                <Link href="/legal/privacy" className="block text-[11px] tracking-[0.08em] uppercase qi-text-hover-gold" style={{ fontFamily: "var(--font-display)" }}>Privacy Policy</Link>
                <Link href="/legal/terms" className="block text-[11px] tracking-[0.08em] uppercase qi-text-hover-gold" style={{ fontFamily: "var(--font-display)" }}>Terms of Use</Link>
                <Link href="/legal/cookies" className="block text-[11px] tracking-[0.08em] uppercase qi-text-hover-gold" style={{ fontFamily: "var(--font-display)" }}>Cookie Policy</Link>
              </div>
              <div className="mt-8 pt-8 border-t" style={{ borderColor: "rgba(10,26,47,0.07)" }}>
                <p className="text-[11px] mb-2" style={{ color: "#9A9690", fontFamily: "var(--font-display)" }}>Security contact</p>
                <a
                  href="mailto:corporate@email.quantumintel.co"
                  className="text-[12px] qi-text-hover-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  corporate@email.quantumintel.co
                </a>
              </div>
            </div>

            <div className="space-y-10">
              {[
                {
                  number: "1",
                  title: "Confidentiality as Default",
                  content: "Quantum Intel treats every engagement, enquiry, and item of client information as confidential by default. Confidentiality is not a courtesy extended to clients who request it — it is the baseline condition of every interaction. We do not publish client identifying information without written authorisation, and we do not name security, intelligence, or defence clients on this website or in any public communication under any circumstances.",
                },
                {
                  number: "2",
                  title: "Enquiry Handling",
                  content: "Enquiries received through this website and through our contact channels are handled through structured internal workflows. Access to enquiry content is restricted to designated personnel on a need-to-know basis. Enquiries are not logged in external systems without appropriate data processing agreements in place. All enquiry channels are access-controlled.",
                },
                {
                  number: "3",
                  title: "Programme Materials",
                  content: "Programme materials — curricula, participant lists, session content, and programme outputs — are governed by internal access controls and are not shared externally without explicit written authorisation from the client institution. Materials for sensitive programmes are handled under enhanced access controls appropriate to the classification of the work.",
                },
                {
                  number: "4",
                  title: "Participant Information",
                  content: "The identities of programme participants are held in strict confidence. Participant names, roles, and institutional affiliations are not disclosed without the individual's explicit consent and, where relevant, the authorisation of the client institution. This applies without exception to participants from security, intelligence, and defence institutions.",
                },
                {
                  number: "5",
                  title: "Website Security",
                  content: "The Quantum Intel website is delivered over HTTPS with HSTS enabled. Security headers (Content Security Policy, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) are configured to industry baseline standards. All forms are protected against cross-site request forgery, and form submissions are validated server-side. The site is deployed behind a Web Application Firewall with managed ruleset and rate limiting.",
                },
                {
                  number: "6",
                  title: "Vulnerability Disclosure",
                  content: "If you identify a security vulnerability in this website or in Quantum Intel's systems, please report it responsibly to corporate@email.quantumintel.co. We will acknowledge your report within 2 business days and work to address confirmed vulnerabilities promptly. We ask that you do not publicly disclose vulnerabilities before we have had the opportunity to investigate and remediate.",
                },
                {
                  number: "7",
                  title: "Incident Response",
                  content: "Quantum Intel maintains an internal incident response process for security events affecting this website or our data systems. In the event of a data breach affecting personal data, we will notify affected individuals and, where required by law, the Nigeria Data Protection Commission, within the timeframes required by the Nigeria Data Protection Act 2023.",
                },
                {
                  number: "8",
                  title: "Secure Correspondence",
                  content: "For clients who require enhanced security for their enquiries, secure correspondence via Signal is available on request. Contact corporate@email.quantumintel.co to arrange. We also accept written correspondence at our registered offices in Lagos and Abuja.",
                },
              ].map((s) => (
                <div key={s.number} className="pb-10 border-b" style={{ borderColor: "rgba(10,26,47,0.07)" }}>
                  <h2 className="text-[18px] font-semibold mb-4" style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}>
                    {s.number}. {s.title}
                  </h2>
                  <p className="text-[15px] leading-[1.85]" style={{ color: "#5A5550" }}>
                    {s.content}
                  </p>
                </div>
              ))}

              <div
                className="p-6 border"
                style={{ borderColor: "rgba(184,148,90,0.25)", background: "rgba(184,148,90,0.04)" }}
              >
                <p className="text-[11px] tracking-[0.1em] uppercase mb-3" style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}>
                  Security contact
                </p>
                <p className="text-[14px] leading-[1.75]" style={{ color: "#5A5550" }}>
                  Security and confidentiality enquiries, vulnerability disclosures, and data subject requests:{" "}
                  <a href="mailto:corporate@email.quantumintel.co" style={{ color: "#B8945A" }}>
                    corporate@email.quantumintel.co
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
