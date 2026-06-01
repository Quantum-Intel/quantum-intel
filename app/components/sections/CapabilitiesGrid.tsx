import Link from "next/link";
import { ArrowRight } from "lucide-react";

const capabilities = [
  {
    number: "01",
    name: "Strategic Communications",
    description: "Capability development for influence, narrative, and information operations in complex environments.",
    href: "/capabilities/strategic-communications",
  },
  {
    number: "02",
    name: "Military Intelligence",
    description: "Training across the intelligence cycle, analytic tradecraft, and operational decision support.",
    href: "/capabilities/military-intelligence",
  },
  {
    number: "03",
    name: "Cyber Security & Infrastructure Defence",
    description: "Capability building for the protection of national and corporate digital infrastructure.",
    href: "/capabilities/cyber-security",
  },
  {
    number: "04",
    name: "Artificial Intelligence",
    description: "Applied AI training for defence, security, and intelligence environments.",
    href: "/capabilities/artificial-intelligence",
  },
  {
    number: "05",
    name: "Emerging Technologies in Modern Warfare",
    description: "Capability development across the technologies reshaping contemporary conflict.",
    href: "/capabilities/emerging-technologies",
  },
];

export default function CapabilitiesGrid() {
  return (
    <section className="py-24 md:py-32" style={{ background: "#0A1A2F", borderTop: "1px solid rgba(242,239,233,0.05)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-center gap-4 mb-14">
          <span
            className="text-[10px] tracking-[0.28em] uppercase"
            style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
          >
            01 — Capabilities
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.08)" }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-20 mb-16">
          <div>
            <h2
              className="text-[38px] md:text-[46px] font-semibold leading-[1.06] tracking-tight"
              style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
            >
              Five integrated capability domains.
            </h2>
          </div>
          <div className="flex items-end">
            <p
              className="text-[15px] leading-[1.75] max-w-[440px]"
              style={{ color: "#C9C6BF", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
            >
              Each domain is delivered as standalone training and capability
              development, and combined into the Advanced Capability Program for
              institutions seeking comprehensive uplift.
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: "rgba(242,239,233,0.06)" }}
        >
          {capabilities.map((cap) => (
            <Link key={cap.number}
                href={cap.href}
                className="block group h-full qi-card-hover"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid transparent",
                  padding: "40px 36px",
                  minHeight: "240px",
                }}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <span
                      className="text-[11px] tracking-[0.22em] uppercase font-medium mb-4 block"
                      style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                    >
                      {cap.number}
                    </span>
                    <h3
                      className="text-[18px] font-semibold leading-snug mb-4 transition-colors duration-150 group-hover:text-qi-gold"
                      style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
                    >
                      {cap.name}
                    </h3>
                    <p className="text-[14px] leading-relaxed" style={{ color: "#5A5550" }}>
                      {cap.description}
                    </p>
                  </div>
                  <div
                    className="flex items-center gap-2 mt-8 text-[12px] tracking-[0.08em] uppercase font-medium transition-all duration-150 group-hover:gap-3"
                    style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                  >
                    Learn more
                    <ArrowRight size={12} />
                  </div>
                </div>
            </Link>
          ))}
          {/* 6th cell */}
          <div className="hidden lg:flex items-end" style={{ background: "#FFFFFF", padding: "40px 36px" }}>
            <Link
              href="/capabilities"
              className="qi-btn-gold-outline text-[12px] tracking-[0.1em] uppercase font-semibold px-5 py-3 inline-flex items-center gap-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              All Capabilities
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
