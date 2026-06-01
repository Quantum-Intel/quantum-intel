import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles, getArticleBySlug } from "@/app/data/insights";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = articles.filter(
    (a) => a.slug !== article.slug && a.capabilitySlug === article.capabilitySlug
  ).slice(0, 2);

  const others = articles.filter(
    (a) => a.slug !== article.slug && a.capabilitySlug !== article.capabilitySlug
  ).slice(0, 2);

  const moreArticles = [...related, ...others].slice(0, 3);

  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-16"
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
        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-12">
            <Link
              href="/insights"
              className="text-[10px] tracking-[0.24em] uppercase qi-text-hover-stone"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Insights
            </Link>
            <div className="w-4 h-px" style={{ background: "rgba(242,239,233,0.2)" }} />
            <span
              className="text-[10px] tracking-[0.24em] uppercase"
              style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
            >
              {article.capabilityLabel}
            </span>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-12 xl:gap-20 items-start">
            {/* Left — title */}
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
                  {article.capabilityLabel}
                </span>
                <span
                  className="text-[11px]"
                  style={{ color: "rgba(242,239,233,0.35)", fontFamily: "var(--font-display)" }}
                >
                  {article.readingTime} min read
                </span>
              </div>

              <h1
                className="text-[36px] md:text-[46px] lg:text-[52px] font-semibold leading-[1.07] tracking-tight mb-8"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                {article.title}
              </h1>

              <p
                className="text-[17px] md:text-[18px] leading-[1.8] max-w-[600px]"
                style={{
                  color: "#C9C6BF",
                  fontFamily: "var(--font-editorial)",
                  fontStyle: "italic",
                }}
              >
                {article.excerpt}
              </p>
            </div>

            {/* Right — article metadata */}
            <div
              className="border"
              style={{ borderColor: "rgba(242,239,233,0.08)", background: "rgba(242,239,233,0.02)" }}
            >
              <div
                className="px-6 py-4 border-b"
                style={{ borderColor: "rgba(242,239,233,0.06)" }}
              >
                <p
                  className="text-[9.5px] tracking-[0.2em] uppercase"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  Article details
                </p>
              </div>
              {[
                { label: "Author", value: article.author },
                { label: "Role", value: article.authorRole },
                { label: "Published", value: formatDate(article.date) },
                { label: "Reading time", value: `${article.readingTime} minutes` },
                { label: "Capability", value: article.capabilityLabel },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-0.5 px-6 py-4 border-b"
                  style={{ borderColor: "rgba(242,239,233,0.06)" }}
                >
                  <span
                    className="text-[9.5px] tracking-[0.15em] uppercase"
                    style={{ color: "rgba(242,239,233,0.3)", fontFamily: "var(--font-display)" }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-[13px]"
                    style={{ color: "rgba(242,239,233,0.7)", fontFamily: "var(--font-display)" }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Article Body ─────────────────────────────────── */}
      <section
        className="py-20 md:py-24"
        style={{ background: "#FFFFFF", borderTop: "1px solid rgba(10,26,47,0.07)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-12 xl:gap-20 items-start">
            {/* Article text */}
            <article>
              <div className="space-y-7">
                {article.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className={`leading-[1.9] ${i === 0 ? "text-[18px] md:text-[20px]" : "text-[16px] md:text-[17px]"}`}
                    style={{
                      color: i === 0 ? "#1A2535" : "#3A3530",
                      fontFamily: "var(--font-editorial)",
                      fontStyle: i === 0 ? "italic" : "normal",
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Article footer */}
              <div
                className="mt-14 pt-10 border-t"
                style={{ borderColor: "rgba(10,26,47,0.08)" }}
              >
                <div className="flex flex-wrap items-center justify-between gap-6">
                  <div>
                    <p
                      className="text-[11px] tracking-[0.1em] uppercase mb-1"
                      style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                    >
                      {article.author}
                    </p>
                    <p
                      className="text-[12px]"
                      style={{ color: "#9A9690", fontFamily: "var(--font-display)" }}
                    >
                      {article.authorRole}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className="text-[11px]"
                      style={{ color: "#9A9690", fontFamily: "var(--font-display)" }}
                    >
                      Share:
                    </span>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=https://quantumintel.africa/insights/${article.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] tracking-[0.08em] uppercase qi-text-hover-gold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      LinkedIn
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=https://quantumintel.africa/insights/${article.slug}&text=${encodeURIComponent(article.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] tracking-[0.08em] uppercase qi-text-hover-gold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      X
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Capability link */}
              <div
                className="border p-6"
                style={{ borderColor: "rgba(10,26,47,0.1)", background: "#F7F4EE" }}
              >
                <p
                  className="text-[9.5px] tracking-[0.2em] uppercase mb-4"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  Related Capability
                </p>
                <p
                  className="text-[14px] font-semibold mb-3"
                  style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
                >
                  {article.capabilityLabel}
                </p>
                <Link
                  href={`/capabilities/${article.capabilitySlug}`}
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-medium qi-text-hover-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Explore Capability
                  <ArrowRight size={10} />
                </Link>
              </div>

              {/* Training link */}
              <div
                className="border p-6"
                style={{ borderColor: "rgba(10,26,47,0.1)", background: "#F7F4EE" }}
              >
                <p
                  className="text-[9.5px] tracking-[0.2em] uppercase mb-4"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  Training Programme
                </p>
                <p
                  className="text-[13px] leading-[1.65] mb-4"
                  style={{ color: "#5A5550" }}
                >
                  Quantum Intel delivers structured training and capability development in {article.capabilityLabel.toLowerCase()}.
                </p>
                <Link
                  href={`/training/${article.capabilitySlug}`}
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-medium qi-text-hover-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  View Programme
                  <ArrowRight size={10} />
                </Link>
              </div>

              {/* Request proposal */}
              <div
                className="border p-6"
                style={{ borderColor: "rgba(10,26,47,0.1)", background: "#0A1A2F" }}
              >
                <p
                  className="text-[9.5px] tracking-[0.2em] uppercase mb-4"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  Engage
                </p>
                <p
                  className="text-[13px] leading-[1.65] mb-5"
                  style={{ color: "#C9C6BF" }}
                >
                  Request a programme for your institution through our confidential channels.
                </p>
                <Link
                  href="/contact/request-proposal"
                  className="qi-btn-gold inline-flex items-center gap-2 px-5 py-3 text-[10.5px] tracking-[0.12em] uppercase font-semibold w-full justify-center"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Request a Proposal
                  <ArrowRight size={10} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ─── More Articles ────────────────────────────────── */}
      {moreArticles.length > 0 && (
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
                More from Insights
              </span>
              <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
              <Link
                href="/insights"
                className="text-[11px] tracking-[0.08em] uppercase qi-text-hover-stone shrink-0"
                style={{ fontFamily: "var(--font-display)" }}
              >
                All Articles →
              </Link>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-3 border-t border-l"
              style={{ borderColor: "rgba(10,26,47,0.07)" }}
            >
              {moreArticles.map((a) => (
                <div
                  key={a.slug}
                  className="p-8 border-b border-r"
                  style={{ borderColor: "rgba(10,26,47,0.07)" }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="px-2.5 py-1 text-[9.5px] tracking-[0.12em] uppercase border"
                      style={{
                        color: "#B8945A",
                        borderColor: "rgba(184,148,90,0.3)",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {a.capabilityLabel}
                    </span>
                    <span
                      className="text-[11px]"
                      style={{ color: "#9A9690", fontFamily: "var(--font-display)" }}
                    >
                      {a.readingTime} min
                    </span>
                  </div>
                  <h3
                    className="text-[16px] font-semibold leading-snug mb-3"
                    style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
                  >
                    {a.title}
                  </h3>
                  <p
                    className="text-[13px] leading-[1.75] mb-6"
                    style={{ color: "#5A5550", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
                  >
                    {a.excerpt.slice(0, 120)}…
                  </p>
                  <Link
                    href={`/insights/${a.slug}`}
                    className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-semibold qi-text-hover-gold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Read Article
                    <ArrowRight size={10} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
