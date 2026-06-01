import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles } from "@/app/data/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Analytical insights from Quantum Intel faculty across strategic communications, military intelligence, cyber security, artificial intelligence, and emerging technologies.",
};

const capabilityFilters = [
  { label: "All", slug: null },
  { label: "Strategic Communications", slug: "strategic-communications" },
  { label: "Military Intelligence", slug: "military-intelligence" },
  { label: "Cyber Security", slug: "cyber-security" },
  { label: "Artificial Intelligence", slug: "artificial-intelligence" },
  { label: "Emerging Technologies", slug: "emerging-technologies" },
];

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function InsightsPage() {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section
        className="relative min-h-[62vh] flex flex-col"
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
                  Insights
                </span>
              </div>

              <h1
                className="text-[48px] md:text-[58px] lg:text-[66px] font-semibold leading-[1.04] tracking-tight mb-9"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Analysis from the field.
              </h1>

              <div className="w-full h-px mb-9" style={{ background: "rgba(242,239,233,0.07)" }} />

              <p
                className="text-[17px] md:text-[18px] leading-[1.8]"
                style={{
                  color: "#C9C6BF",
                  fontFamily: "var(--font-editorial)",
                  fontStyle: "italic",
                }}
              >
                Analytical pieces from Quantum Intel faculty on strategy, doctrine, capability, and the applied frameworks shaping defence, intelligence, security, and emerging technology in Africa.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t w-full" style={{ borderColor: "rgba(242,239,233,0.05)" }}>
          <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center gap-2 overflow-x-auto">
            {capabilityFilters.map((f) => (
              <span
                key={f.label}
                className="shrink-0 px-3.5 py-1.5 text-[10px] tracking-[0.1em] uppercase border cursor-default"
                style={{
                  borderColor: f.slug === null ? "rgba(184,148,90,0.5)" : "rgba(242,239,233,0.12)",
                  color: f.slug === null ? "#B8945A" : "rgba(242,239,233,0.4)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {f.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Article ─────────────────────────────── */}
      {featured && (
        <section
          className="py-20 md:py-24"
          style={{ background: "#FFFFFF", borderTop: "1px solid rgba(10,26,47,0.07)" }}
        >
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <span
                className="text-[10px] tracking-[0.28em] uppercase"
                style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
              >
                Featured
              </span>
              <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="px-3 py-1 text-[9.5px] tracking-[0.15em] uppercase border"
                    style={{
                      color: "#B8945A",
                      borderColor: "rgba(184,148,90,0.3)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {featured.capabilityLabel}
                  </span>
                  <span
                    className="text-[11px]"
                    style={{ color: "#9A9690", fontFamily: "var(--font-display)" }}
                  >
                    {featured.readingTime} min read
                  </span>
                </div>

                <h2
                  className="text-[34px] md:text-[44px] font-semibold leading-[1.1] tracking-tight mb-6"
                  style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
                >
                  {featured.title}
                </h2>

                <p
                  className="text-[17px] leading-[1.85] mb-8"
                  style={{
                    color: "#5A5550",
                    fontFamily: "var(--font-editorial)",
                    fontStyle: "italic",
                  }}
                >
                  {featured.excerpt}
                </p>

                <Link
                  href={`/insights/${featured.slug}`}
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-semibold qi-text-hover-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Read Article
                  <ArrowRight size={11} />
                </Link>
              </div>

              <div
                className="border p-8"
                style={{ borderColor: "rgba(10,26,47,0.1)", background: "#F7F4EE" }}
              >
                <p
                  className="text-[10px] tracking-[0.2em] uppercase mb-5"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  Article details
                </p>
                {[
                  { label: "Author", value: featured.author },
                  { label: "Role", value: featured.authorRole },
                  { label: "Published", value: formatDate(featured.date) },
                  { label: "Reading time", value: `${featured.readingTime} minutes` },
                  { label: "Capability", value: featured.capabilityLabel },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-0.5 py-3.5 border-b"
                    style={{ borderColor: "rgba(10,26,47,0.07)" }}
                  >
                    <span
                      className="text-[9.5px] tracking-[0.15em] uppercase"
                      style={{ color: "#9A9690", fontFamily: "var(--font-display)" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-[13px]"
                      style={{ color: "#2A2520", fontFamily: "var(--font-display)" }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
                <div className="mt-6">
                  <Link
                    href={`/insights/${featured.slug}`}
                    className="qi-btn-gold inline-flex items-center gap-3 w-full justify-center px-6 py-3.5 text-[11px] tracking-[0.12em] uppercase font-semibold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Read Article
                    <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── Article Index ────────────────────────────────── */}
      <section
        className="py-20 md:py-24"
        style={{ background: "#F7F4EE", borderTop: "1px solid rgba(10,26,47,0.07)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <span
              className="text-[10px] tracking-[0.28em] uppercase"
              style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
            >
              All Articles
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
            <span
              className="text-[11px]"
              style={{ color: "#9A9690", fontFamily: "var(--font-display)" }}
            >
              {articles.length} articles
            </span>
          </div>

          <div className="space-y-0 border-t" style={{ borderColor: "rgba(10,26,47,0.07)" }}>
            {articles.map((article) => (
              <div
                key={article.slug}
                className="group py-10 border-b"
                style={{ borderColor: "rgba(10,26,47,0.07)" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-6 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="px-3 py-1 text-[9.5px] tracking-[0.15em] uppercase border"
                        style={{
                          color: "#B8945A",
                          borderColor: "rgba(184,148,90,0.3)",
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {article.capabilityLabel}
                      </span>
                      <span
                        className="text-[11px]"
                        style={{ color: "#9A9690", fontFamily: "var(--font-display)" }}
                      >
                        {article.readingTime} min read
                      </span>
                    </div>

                    <h3
                      className="text-[22px] md:text-[26px] font-semibold leading-[1.15] tracking-tight mb-4"
                      style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
                    >
                      {article.title}
                    </h3>

                    <p
                      className="text-[14px] leading-[1.8] max-w-[600px]"
                      style={{
                        color: "#5A5550",
                        fontFamily: "var(--font-editorial)",
                        fontStyle: "italic",
                      }}
                    >
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-col items-start lg:items-end gap-3 lg:pt-1">
                    <span
                      className="text-[11px]"
                      style={{ color: "#9A9690", fontFamily: "var(--font-display)" }}
                    >
                      {formatDate(article.date)}
                    </span>
                    <Link
                      href={`/insights/${article.slug}`}
                      className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-semibold qi-text-hover-gold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Read Article
                      <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Editorial note */}
          <div
            className="mt-12 pt-8 border-t"
            style={{ borderColor: "rgba(10,26,47,0.07)" }}
          >
            <p
              className="text-[12.5px] leading-[1.7] max-w-[560px]"
              style={{ color: "#9A9690", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
            >
              Quantum Intel Insights is published by faculty and leadership for institutional audiences. Content focuses on doctrine, methodology, capability, and applied frameworks. Author bylines reflect Quantum Intel faculty and named contributors only.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Closing CTA ──────────────────────────────────── */}
      <section
        className="py-24 md:py-32"
        style={{ background: "#0A1A2F", borderTop: "1px solid rgba(242,239,233,0.05)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px" style={{ background: "#B8945A" }} />
                <span
                  className="text-[10px] tracking-[0.28em] uppercase"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  Engage
                </span>
              </div>
              <h2
                className="text-[36px] md:text-[46px] font-semibold leading-[1.06] tracking-tight mb-6 max-w-[520px]"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Explore our capability offering.
              </h2>
              <p
                className="text-[15px] leading-[1.8] max-w-[420px]"
                style={{
                  color: "#C9C6BF",
                  fontFamily: "var(--font-editorial)",
                  fontStyle: "italic",
                }}
              >
                Quantum Intel delivers advanced training and capability development across the five domains covered in these Insights.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Link
                href="/capabilities"
                className="qi-btn-gold inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Explore Capabilities
                <ArrowRight size={12} />
              </Link>
              <Link
                href="/contact/request-proposal"
                className="qi-btn-outline inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Request a Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
