import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    slug: "applied-ai-in-african-intelligence-analysis",
    title: "Applied AI in African Intelligence Analysis",
    excerpt: "How applied machine learning is reshaping analytic tradecraft across African intelligence environments — capability gaps, institutional readiness, and a framework for adoption.",
    capability: "Artificial Intelligence",
    readingTime: 9,
    date: "March 2026",
  },
  {
    slug: "strategic-communications-in-complex-environments",
    title: "Strategic Communications in Complex Security Environments",
    excerpt: "A practitioner's framework for developing strategic communications capability in institutions operating under information environment pressure.",
    capability: "Strategic Communications",
    readingTime: 7,
    date: "February 2026",
  },
  {
    slug: "emerging-technologies-and-african-security",
    title: "Emerging Technologies and African Security: A Capability Assessment",
    excerpt: "An assessment of the emerging technology landscape relevant to African defence and security institutions — uncrewed systems, electronic warfare, and the orbital environment.",
    capability: "Emerging Technologies",
    readingTime: 11,
    date: "January 2026",
  },
];

export default function InsightsPreview() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "#FFFFFF", borderTop: "1px solid rgba(10,26,47,0.07)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-center gap-4 mb-14">
          <span
            className="text-[10px] tracking-[0.28em] uppercase"
            style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
          >
            06 — Insights
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-medium qi-text-hover-gold shrink-0"
            style={{ fontFamily: "var(--font-display)" }}
          >
            All Insights
            <ArrowRight size={11} />
          </Link>
        </div>

        <div className="mb-12">
          <h2
            className="text-[38px] md:text-[46px] font-semibold leading-[1.06] tracking-tight"
            style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
          >
            Analytical perspective.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l" style={{ borderColor: "rgba(10,26,47,0.07)" }}>
          {articles.map((article) => (
            <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="flex flex-col border-b border-r group qi-card-border-hover"
                style={{ background: "#FAFAF8" }}
              >
                <div
                  className="px-7 py-4 border-b flex items-center justify-between"
                  style={{ borderColor: "rgba(10,26,47,0.08)" }}
                >
                  <span
                    className="text-[11px] tracking-[0.15em] uppercase"
                    style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                  >
                    {article.capability}
                  </span>
                  <div
                    className="flex items-center gap-1.5 text-[11px]"
                    style={{ color: "rgba(10,26,47,0.35)", fontFamily: "var(--font-display)" }}
                  >
                    <Clock size={11} />
                    {article.readingTime} min
                  </div>
                </div>
                <div className="px-7 py-7 flex flex-col flex-1">
                  <h3
                    className="text-[18px] font-semibold leading-snug mb-4 transition-colors duration-150 group-hover:text-qi-gold"
                    style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-[14px] leading-[1.7] flex-1 mb-6" style={{ color: "#5A5550" }}>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[12px]"
                      style={{ color: "rgba(10,26,47,0.3)", fontFamily: "var(--font-display)" }}
                    >
                      {article.date}
                    </span>
                    <span
                      className="flex items-center gap-1.5 text-[12px] tracking-[0.08em] uppercase transition-all duration-150 group-hover:gap-2.5"
                      style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                    >
                      Read
                      <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
