import Link from "next/link";
import { ArrowRight } from "lucide-react";

const sectors = [
  {
    number: "01",
    name: "Government & Public Sector",
    description: "Quantum Intel supports ministries, agencies, and offices of government in strengthening institutional capability across security, intelligence, communications, and emerging technology.",
    href: "/sectors/government",
  },
  {
    number: "02",
    name: "Security Agencies & Defence Institutions",
    description: "Programmes designed and delivered under the confidentiality and operational sensitivity required by military formations, intelligence services, and specialised security bodies.",
    href: "/sectors/security-and-defence",
  },
  {
    number: "03",
    name: "Corporate Security & Risk",
    description: "Capability development calibrated to the enterprise-scale operations and risk exposure of banks, telcos, energy operators, and multinationals across African markets.",
    href: "/sectors/corporate",
  },
];

export default function SectorsSection() {
  return (
    <section
      className="py-28 md:py-36"
      style={{ background: "#0A1A2F", borderTop: "1px solid rgba(242,239,233,0.06)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-center gap-4 mb-14">
          <span
            className="text-[10px] tracking-[0.28em] uppercase"
            style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
          >
            03 — Who We Work With
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.08)" }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-20 mb-16">
          <div>
            <h2
              className="text-[38px] md:text-[46px] font-semibold leading-[1.06] tracking-tight"
              style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
            >
              Three sector communities.
            </h2>
          </div>
          <div className="flex items-end">
            <p
              className="text-[15px] leading-[1.75] max-w-[420px]"
              style={{ color: "#C9C6BF", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
            >
              Quantum Intel serves government, security and defence, and
              corporate clients through tailored, confidential engagements.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sectors.map((sector) => (
            <div key={sector.number}
                className="flex flex-col h-full p-10 border qi-card-hover"
                style={{
                  background: "#FFFFFF",
                  borderColor: "rgba(10,26,47,0.1)",
                  minHeight: "280px",
                }}
              >
                <span
                  className="text-[11px] tracking-[0.22em] uppercase font-medium mb-5 block"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  {sector.number}
                </span>
                <h3
                  className="text-[20px] font-semibold leading-snug mb-4"
                  style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
                >
                  {sector.name}
                </h3>
                <p
                  className="text-[14px] leading-relaxed flex-1 mb-8"
                  style={{ color: "#5A5550" }}
                >
                  {sector.description}
                </p>
                <Link
                  href={sector.href}
                  className="inline-flex items-center gap-2 text-[12px] tracking-[0.08em] uppercase font-medium qi-text-hover-gold group"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Explore sector
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
