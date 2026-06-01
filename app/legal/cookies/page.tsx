import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Quantum Intel uses cookies and similar technologies.",
};

export default function CookiesPage() {
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
              Cookie Policy
            </span>
          </div>
          <h1
            className="text-[42px] md:text-[52px] font-semibold leading-[1.06] tracking-tight mb-6"
            style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
          >
            Cookie Policy
          </h1>
          <p
            className="text-[15px] leading-[1.75] max-w-[540px]"
            style={{ color: "#C9C6BF", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
          >
            How Quantum Intel uses cookies and similar technologies on this website.
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
                <Link href="/legal/security" className="block text-[11px] tracking-[0.08em] uppercase qi-text-hover-gold" style={{ fontFamily: "var(--font-display)" }}>Security & Confidentiality</Link>
              </div>
            </div>

            <div className="space-y-10">
              {[
                {
                  number: "1",
                  title: "What Are Cookies",
                  content: "Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work more efficiently, to remember your preferences, and to provide information to website operators about how the site is being used.",
                },
                {
                  number: "2",
                  title: "Cookies We Use",
                  content: "Quantum Intel uses strictly necessary cookies required for the website to function, including session management and security (CSRF protection) cookies. If analytics are deployed, we use Plausible Analytics in cookieless mode, which does not place any cookies on your device and does not require a consent banner.",
                },
                {
                  number: "3",
                  title: "Strictly Necessary Cookies",
                  content: "These cookies are essential for the website to function and cannot be disabled. They include cookies set for form security (CSRF tokens) and session state. They do not collect personal information that could be used for marketing or to track your browsing activity across other websites.",
                },
                {
                  number: "4",
                  title: "Analytics",
                  content: "Where analytics are used, Quantum Intel implements privacy-respecting, cookieless analytics (Plausible Analytics). This approach does not use cookies, does not track individual users across sessions, and does not collect personally identifiable information. No consent banner is required for cookieless analytics.",
                },
                {
                  number: "5",
                  title: "Third-Party Cookies",
                  content: "Quantum Intel aims to minimise third-party cookies. Where third-party services are used (such as a video player), those services may set their own cookies subject to their own privacy policies. We configure such services with the most privacy-protective settings available.",
                },
                {
                  number: "6",
                  title: "How to Control Cookies",
                  content: "You can control and manage cookies through your browser settings. Blocking strictly necessary cookies may affect the functionality of this website. For guidance on managing cookies in your browser, visit the help pages of your browser provider. Note that restricting cookies may affect your ability to use some features of this website.",
                },
                {
                  number: "7",
                  title: "Updates",
                  content: "This policy may be updated from time to time. The current version will always be available at this URL.",
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

              <p className="text-[12.5px] leading-[1.7]" style={{ color: "#9A9690" }}>
                For cookie-related enquiries: <a href="mailto:security@quantumintel.africa" style={{ color: "#B8945A" }}>security@quantumintel.africa</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
