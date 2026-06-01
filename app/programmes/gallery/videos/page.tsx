import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "Programme Gallery — Videos",
  description:
    "Selected video content from Quantum Intel programmes and faculty. All content is anonymised in accordance with our confidentiality policy.",
};

const permittedContent = [
  {
    title: "Programme overviews",
    description:
      "Faculty-led overviews of Quantum Intel capability programmes and their design, structure, and intended outcomes.",
  },
  {
    title: "Capability explainers",
    description:
      "Short faculty-led explainers on key concepts, frameworks, and developments across the five capability domains.",
  },
  {
    title: "Anonymised programme b-roll",
    description:
      "Environment and delivery footage from programme settings — no participants identified, no operational detail disclosed.",
  },
  {
    title: "Anonymised testimonials",
    description:
      "Participant perspectives, attributed by sector and role only (e.g. 'Director, Federal Ministry'). Never by name or institution.",
  },
];

export default function VideoGalleryPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section
        className="relative min-h-[58vh] flex flex-col"
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

        <div className="relative z-10 flex-1 flex items-center max-w-[1280px] mx-auto px-6 w-full">
          <div className="w-full pt-32 pb-20">
            <div className="max-w-[680px]">
              <div className="flex items-center gap-4 mb-10">
                <Link
                  href="/programmes"
                  className="text-[10px] tracking-[0.24em] uppercase qi-text-hover-stone"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Programmes
                </Link>
                <div className="w-4 h-px" style={{ background: "rgba(242,239,233,0.2)" }} />
                <Link
                  href="/programmes/gallery/photos"
                  className="text-[10px] tracking-[0.24em] uppercase qi-text-hover-stone"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Photos
                </Link>
                <div className="w-4 h-px" style={{ background: "rgba(242,239,233,0.2)" }} />
                <span
                  className="text-[10.5px] tracking-[0.3em] uppercase"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  Videos
                </span>
              </div>

              <h1
                className="text-[48px] md:text-[56px] lg:text-[62px] font-semibold leading-[1.04] tracking-tight mb-9"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Programme video content.
              </h1>

              <div className="w-full h-px mb-9" style={{ background: "rgba(242,239,233,0.07)" }} />

              <p
                className="text-[16px] md:text-[17px] leading-[1.8]"
                style={{
                  color: "#C9C6BF",
                  fontFamily: "var(--font-editorial)",
                  fontStyle: "italic",
                }}
              >
                Faculty-led programme overviews, capability explainers, and selected b-roll from Quantum Intel engagements. All content is subject to the same confidentiality standards as our programme delivery.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t w-full" style={{ borderColor: "rgba(242,239,233,0.05)" }}>
          <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-px h-6" style={{ background: "rgba(184,148,90,0.5)" }} />
              <span
                className="text-[10px] tracking-[0.24em] uppercase"
                style={{ color: "rgba(242,239,233,0.28)", fontFamily: "var(--font-display)" }}
              >
                Video Gallery
              </span>
            </div>
            <Link
              href="/programmes/gallery/photos"
              className="text-[11px] tracking-[0.08em] uppercase qi-text-hover-stone"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Photo Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Coming Soon State ────────────────────────────── */}
      <section
        className="py-32 md:py-40"
        style={{ background: "#FFFFFF", borderTop: "1px solid rgba(10,26,47,0.07)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-[480px] mx-auto">
            <div
              className="w-16 h-16 flex items-center justify-center mb-8 border"
              style={{ borderColor: "rgba(10,26,47,0.1)" }}
            >
              <Video size={24} style={{ color: "#B8945A", opacity: 0.6 }} />
            </div>
            <p
              className="text-[10px] tracking-[0.28em] uppercase mb-5"
              style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
            >
              Gallery — Pending
            </p>
            <h2
              className="text-[28px] md:text-[34px] font-semibold leading-[1.1] tracking-tight mb-6"
              style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
            >
              Video content will be published here.
            </h2>
            <p
              className="text-[15px] leading-[1.8] mb-8"
              style={{
                color: "#5A5550",
                fontFamily: "var(--font-editorial)",
                fontStyle: "italic",
              }}
            >
              Video content — faculty briefings, programme explainers, and selected programme b-roll — will be published to this gallery following the same two-person review process applied to all published gallery assets.
            </p>
            <div
              className="w-full border p-6 text-left"
              style={{ borderColor: "rgba(10,26,47,0.1)", background: "#F7F4EE" }}
            >
              <p
                className="text-[10px] tracking-[0.2em] uppercase mb-4"
                style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
              >
                Permitted video content
              </p>
              {permittedContent.map((item, i) => (
                <div
                  key={i}
                  className="py-3 border-b"
                  style={{ borderColor: "rgba(10,26,47,0.07)" }}
                >
                  <p
                    className="text-[12.5px] font-medium mb-1"
                    style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-[12px] leading-[1.65]"
                    style={{ color: "#6B6660", fontFamily: "var(--font-display)" }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Video Policy ─────────────────────────────────── */}
      <section
        className="py-20 md:py-24"
        style={{ background: "#0A1A2F", borderTop: "1px solid rgba(242,239,233,0.05)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <span
              className="text-[10px] tracking-[0.28em] uppercase"
              style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
            >
              Video Policy
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.08)" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h2
                className="text-[28px] md:text-[34px] font-semibold leading-[1.1] tracking-tight mb-6"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                What is and is not published.
              </h2>
              <p
                className="text-[15px] leading-[1.85] mb-6"
                style={{ color: "#C9C6BF", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
              >
                Quantum Intel's video gallery is a controlled showcase of programme delivery. It is not a marketing channel, and it does not compromise the confidentiality of participants or client institutions.
              </p>
              <p
                className="text-[14px] leading-[1.8]"
                style={{ color: "rgba(242,239,233,0.5)" }}
              >
                No video is published that identifies a client institution, reveals a participant by name or rank, or discloses any operational detail of any programme.
              </p>
            </div>

            <div
              className="border"
              style={{ borderColor: "rgba(242,239,233,0.08)", background: "rgba(242,239,233,0.02)" }}
            >
              <div
                className="px-8 py-5 border-b"
                style={{ borderColor: "rgba(242,239,233,0.06)" }}
              >
                <p
                  className="text-[10px] tracking-[0.2em] uppercase"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  What is prohibited
                </p>
              </div>
              {[
                "Content identifying a client institution",
                "Content identifying a participant by name, rank, or unit",
                "Operational detail of any kind",
                "Named testimonials from security/intelligence clients",
                "Location data beyond city level",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 px-8 py-4 border-b"
                  style={{ borderColor: "rgba(242,239,233,0.06)" }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    style={{ background: "rgba(242,239,233,0.2)" }}
                  />
                  <p
                    className="text-[13px] leading-[1.65]"
                    style={{ color: "rgba(242,239,233,0.45)", fontFamily: "var(--font-display)" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "#0A1A2F", borderTop: "1px solid rgba(242,239,233,0.05)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex flex-wrap items-center justify-between gap-8">
          <div>
            <p
              className="text-[22px] md:text-[28px] font-semibold"
              style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
            >
              Explore our capabilities and programmes.
            </p>
            <p
              className="text-[14px] mt-2"
              style={{ color: "#C9C6BF", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
            >
              Five integrated capability domains, delivered to institutional standard.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/capabilities"
              className="qi-btn-gold inline-flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold shrink-0"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Capabilities
              <ArrowRight size={12} />
            </Link>
            <Link
              href="/programmes/gallery/photos"
              className="qi-btn-outline inline-flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold shrink-0"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Photo Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
