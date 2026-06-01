import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of the Quantum Intel website.",
};

const sections = [
  {
    number: "1",
    title: "Acceptance of Terms",
    content:
      "By accessing and using this website (quantumintel.africa), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, you must not use this website. These terms apply to all visitors, users, and others who access this website.",
  },
  {
    number: "2",
    title: "Permitted Use",
    content:
      "This website is provided for informational purposes relating to Quantum Intel's capability development and training services. You may access and use this website for lawful purposes only. You must not use this website in any way that violates applicable law, infringes the rights of any third party, or damages, disrupts, or impairs the functioning of the website.",
  },
  {
    number: "3",
    title: "Intellectual Property",
    content:
      "All content on this website — including text, graphics, logos, images, and programme descriptions — is the property of Quantum Intel or its content suppliers and is protected by applicable intellectual property law. The Quantum Intel name, logo, and related marks are trademarks of Quantum Intel. You may not reproduce, distribute, modify, or create derivative works from any content on this website without the prior written consent of Quantum Intel.",
  },
  {
    number: "4",
    title: "No Advisory Relationship",
    content:
      "Nothing on this website constitutes professional, legal, security, intelligence, or other advice. The content on this website is provided for general information purposes only. Use of this website does not create a client, advisory, or other professional relationship between you and Quantum Intel. Quantum Intel disclaims all liability for any reliance placed on the content of this website.",
  },
  {
    number: "5",
    title: "Disclaimers",
    content:
      "This website is provided on an 'as is' and 'as available' basis without warranty of any kind, express or implied. Quantum Intel does not warrant that this website will be uninterrupted, error-free, or free of viruses or other harmful components. Quantum Intel makes no representations about the accuracy, completeness, or suitability of the information on this website for any particular purpose.",
  },
  {
    number: "6",
    title: "Limitation of Liability",
    content:
      "To the fullest extent permitted by applicable law, Quantum Intel excludes all liability for any loss or damage of any kind arising from use of this website, including but not limited to direct, indirect, incidental, punitive, and consequential losses, whether arising in contract, tort, or otherwise, even if Quantum Intel has been advised of the possibility of such loss or damage.",
  },
  {
    number: "7",
    title: "Third-Party Links",
    content:
      "This website may contain links to third-party websites. Such links are provided for convenience only. Quantum Intel does not endorse and is not responsible for the content of any linked third-party website. Accessing linked websites is at your own risk.",
  },
  {
    number: "8",
    title: "Governing Law and Jurisdiction",
    content:
      "These Terms of Use are governed by the laws of the Federal Republic of Nigeria. Any dispute arising in connection with these terms or this website shall be subject to the exclusive jurisdiction of the courts of Nigeria.",
  },
  {
    number: "9",
    title: "Changes to These Terms",
    content:
      "Quantum Intel reserves the right to amend these Terms of Use at any time. Changes will be posted to this page with an updated effective date. Continued use of the website following such changes constitutes acceptance of the updated terms.",
  },
];

export default function TermsPage() {
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
              Terms of Use
            </span>
          </div>
          <h1
            className="text-[42px] md:text-[52px] font-semibold leading-[1.06] tracking-tight mb-6"
            style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
          >
            Terms of Use
          </h1>
          <p
            className="text-[15px] leading-[1.75] max-w-[540px]"
            style={{ color: "#C9C6BF", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
          >
            Terms governing your access to and use of the Quantum Intel website. Governed by the laws of the Federal Republic of Nigeria.
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
                <Link href="/legal/privacy" className="block text-[11px] tracking-[0.08em] uppercase qi-text-hover-gold" style={{ fontFamily: "var(--font-display)" }}>Privacy Policy</Link>
                <Link href="/legal/cookies" className="block text-[11px] tracking-[0.08em] uppercase qi-text-hover-gold" style={{ fontFamily: "var(--font-display)" }}>Cookie Policy</Link>
                <Link href="/legal/security" className="block text-[11px] tracking-[0.08em] uppercase qi-text-hover-gold" style={{ fontFamily: "var(--font-display)" }}>Security & Confidentiality</Link>
              </div>
            </div>

            <div>
              <div className="space-y-10">
                {sections.map((s) => (
                  <div key={s.number} className="pb-10 border-b" style={{ borderColor: "rgba(10,26,47,0.07)" }}>
                    <h2 className="text-[18px] font-semibold mb-4" style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}>
                      {s.number}. {s.title}
                    </h2>
                    <p className="text-[15px] leading-[1.85]" style={{ color: "#5A5550" }}>
                      {s.content}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-[12.5px] leading-[1.7]" style={{ color: "#9A9690" }}>
                For enquiries about these terms: <a href="mailto:enquiries@quantumintel.africa" style={{ color: "#B8945A" }}>enquiries@quantumintel.africa</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
