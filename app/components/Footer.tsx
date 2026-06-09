import Link from "next/link";
import Image from "next/image";

const capabilities = [
  { label: "Strategic Communications", href: "/capabilities/strategic-communications" },
  { label: "Military Intelligence", href: "/capabilities/military-intelligence" },
  { label: "Cyber Security & Infrastructure Defence", href: "/capabilities/cyber-security" },
  { label: "Artificial Intelligence", href: "/capabilities/artificial-intelligence" },
  { label: "Emerging Technologies", href: "/capabilities/emerging-technologies" },
];

const engage = [
  { label: "Request a Proposal", href: "/contact/request-proposal" },
  { label: "Partner With Us", href: "/contact/partner-with-us" },
  { label: "Media Enquiries", href: "/contact/media" },
  { label: "Insights", href: "/insights" },
];

const legal = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Use", href: "/legal/terms" },
  { label: "Cookie Policy", href: "/legal/cookies" },
  { label: "Security & Confidentiality", href: "/legal/security" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    path: "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z",
  },
  {
    label: "X",
    href: "https://x.com",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#14171C", borderTop: "1px solid #2F3540" }}>
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Col 1 — Brand */}
          <div>
            <Link href="/" className="inline-block mb-7">
              <Image
                src="/QILogoWhite.png"
                alt="Quantum Intel"
                width={140}
                height={36}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-[13px] leading-relaxed mb-6" style={{ color: "#C9C6BF" }}>
              Advanced training and capability development for governments,
              security agencies, defence institutions, and corporate clients
              across Africa.
            </p>
            <div className="space-y-1.5">
              <p className="text-[12px]" style={{ color: "#C9C6BF" }}>Lagos, Nigeria</p>
              <p className="text-[12px]" style={{ color: "#C9C6BF" }}>Abuja, Nigeria</p>
              <a
                href="mailto:corporate@quantumintel.co"
                className="text-[12px] qi-text-hover-gold block"
              >
                corporate@quantumintel.co
              </a>
            </div>
          </div>

          {/* Col 2 — Capabilities */}
          <div>
            <h3
              className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-5"
              style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
            >
              Capabilities
            </h3>
            <ul className="space-y-3">
              {capabilities.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] leading-snug qi-text-hover-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Engage */}
          <div>
            <h3
              className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-5"
              style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
            >
              Engage
            </h3>
            <ul className="space-y-3">
              {engage.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] leading-snug qi-text-hover-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Trust & Legal */}
          <div>
            <h3
              className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-5"
              style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
            >
              Trust & Legal
            </h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] leading-snug qi-text-hover-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Base bar */}
      <div className="border-t" style={{ borderColor: "#2F3540" }}>
        <div className="max-w-[1280px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-[12px]" style={{ color: "#C9C6BF" }}>
              © {new Date().getFullYear()} Quantum Intel. All rights reserved.
            </p>
            <span className="hidden sm:block text-[12px]" style={{ color: "#2F3540" }}>·</span>
            <p className="text-[12px]" style={{ color: "#C9C6BF" }}>
              Registered in the Federal Republic of Nigeria.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="qi-text-hover-gold"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
