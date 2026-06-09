import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Programme Gallery — Photos",
  description:
    "Selected photographs from Quantum Intel programme delivery across Africa. All content is anonymised in accordance with our confidentiality policy.",
};

const filters = {
  programme: [
    "Advanced Capability Program",
    "Strategic Communications",
    "Military Intelligence",
    "Cyber Security",
    "Artificial Intelligence",
    "Emerging Technologies",
  ],
  clientType: ["Government", "Security Agency", "Defence Institution", "Corporate"],
  country: ["Nigeria", "Kenya", "Rwanda", "West Africa Region"],
};

const photos = [
  {
    id: "01",
    src: "https://picsum.photos/seed/qi-field-01/1200/800",
    caption: "Scenario planning — threat assessment table exercise",
    programme: "Advanced Capability Program",
    region: "Abuja, Nigeria",
    year: "2024",
  },
  {
    id: "02",
    src: "https://picsum.photos/seed/qi-field-02/800/600",
    caption: "Intelligence analysis seminar, faculty-led",
    programme: "Military Intelligence",
    region: "Lagos, Nigeria",
    year: "2024",
  },
  {
    id: "03",
    src: "https://picsum.photos/seed/qi-field-03/800/600",
    caption: "Operational planning workshop — command post exercise",
    programme: "Strategic Communications",
    region: "Nairobi, Kenya",
    year: "2023",
  },
  {
    id: "04",
    src: "https://picsum.photos/seed/qi-field-04/800/600",
    caption: "Cyber threat simulation environment setup",
    programme: "Cyber Security",
    region: "Abuja, Nigeria",
    year: "2024",
  },
  {
    id: "05",
    src: "https://picsum.photos/seed/qi-field-05/800/600",
    caption: "Emerging technology briefing session",
    programme: "Emerging Technologies",
    region: "Kigali, Rwanda",
    year: "2024",
  },
  {
    id: "06",
    src: "https://picsum.photos/seed/qi-field-06/800/600",
    caption: "AI governance and ethics module — group discussion",
    programme: "Artificial Intelligence",
    region: "Lagos, Nigeria",
    year: "2023",
  },
  {
    id: "07",
    src: "https://picsum.photos/seed/qi-field-07/800/600",
    caption: "Programme completion ceremony, cohort 4",
    programme: "Advanced Capability Program",
    region: "Abuja, Nigeria",
    year: "2024",
  },
  {
    id: "08",
    src: "https://picsum.photos/seed/qi-field-08/800/600",
    caption: "Strategic communications — media exercise",
    programme: "Strategic Communications",
    region: "West Africa Region",
    year: "2023",
  },
  {
    id: "09",
    src: "https://picsum.photos/seed/qi-field-09/1200/800",
    caption: "Joint intelligence assessment briefing",
    programme: "Military Intelligence",
    region: "Abuja, Nigeria",
    year: "2024",
  },
  {
    id: "10",
    src: "https://picsum.photos/seed/qi-field-10/800/600",
    caption: "Counter-terrorism tabletop exercise",
    programme: "Advanced Capability Program",
    region: "Nairobi, Kenya",
    year: "2023",
  },
];

export default function PhotoGalleryPage() {
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
                  href="/programmes/gallery/videos"
                  className="text-[10px] tracking-[0.24em] uppercase qi-text-hover-stone"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Videos
                </Link>
                <div className="w-4 h-px" style={{ background: "rgba(242,239,233,0.2)" }} />
                <span
                  className="text-[10.5px] tracking-[0.3em] uppercase"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  Photos
                </span>
              </div>

              <h1
                className="text-[48px] md:text-[56px] lg:text-[62px] font-semibold leading-[1.04] tracking-tight mb-9"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                Programme photography.
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
                Selected programme photography from Quantum Intel engagements across Africa. All images are anonymised in accordance with our confidentiality policy — no participant names, institution identifiers, or operational details are disclosed.
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
                Photo Gallery
              </span>
            </div>
            <Link
              href="/programmes/gallery/videos"
              className="text-[11px] tracking-[0.08em] uppercase qi-text-hover-stone"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Video Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Filters ──────────────────────────────────────── */}
      <section
        className="py-8 border-b"
        style={{ background: "#14171C", borderColor: "rgba(242,239,233,0.05)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-wrap gap-x-8 gap-y-4 items-start">
            <div>
              <p
                className="text-[9px] tracking-[0.2em] uppercase mb-2"
                style={{ color: "rgba(242,239,233,0.25)", fontFamily: "var(--font-display)" }}
              >
                Programme
              </p>
              <div className="flex flex-wrap gap-2">
                {["All", ...filters.programme.slice(0, 3)].map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1.5 text-[10px] tracking-[0.08em] border cursor-default"
                    style={{
                      borderColor: f === "All" ? "rgba(184,148,90,0.5)" : "rgba(242,239,233,0.1)",
                      color: f === "All" ? "#B8945A" : "rgba(242,239,233,0.35)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p
                className="text-[9px] tracking-[0.2em] uppercase mb-2"
                style={{ color: "rgba(242,239,233,0.25)", fontFamily: "var(--font-display)" }}
              >
                Client Type
              </p>
              <div className="flex flex-wrap gap-2">
                {["All", ...filters.clientType].map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1.5 text-[10px] tracking-[0.08em] border cursor-default"
                    style={{
                      borderColor: "rgba(242,239,233,0.1)",
                      color: "rgba(242,239,233,0.35)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Gallery Grid ─────────────────────────────────── */}
      <section
        className="py-14 md:py-20"
        style={{ background: "#FFFFFF", borderTop: "1px solid rgba(10,26,47,0.07)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {photos.map((photo, i) => {
              const isFeatured = i === 0 || i === 8;
              return (
                <div
                  key={photo.id}
                  className={`qi-gallery-card${isFeatured ? " lg:col-span-2" : ""}`}
                >
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      aspectRatio: isFeatured ? "16/9" : "4/3",
                    }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.caption}
                      fill
                      unoptimized
                      className="qi-gallery-img"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div style={{ paddingTop: 10 }}>
                    <p
                      className="text-[9px] tracking-[0.2em] uppercase mb-1.5"
                      style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                    >
                      {photo.programme}
                    </p>
                    <p
                      className="text-[13px] leading-[1.55] mb-1"
                      style={{
                        color: "#1A1A1A",
                        fontFamily: "var(--font-editorial)",
                        fontStyle: "italic",
                      }}
                    >
                      {photo.caption}
                    </p>
                    <p className="text-[11px]" style={{ color: "#6B6660" }}>
                      {photo.region} — {photo.year}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <p
            className="text-[11px] tracking-[0.06em] mt-10 pt-8 border-t text-center"
            style={{
              color: "rgba(10,26,47,0.3)",
              borderColor: "rgba(10,26,47,0.07)",
              fontFamily: "var(--font-display)",
            }}
          >
            {photos.length} photographs — anonymised, consent-verified, EXIF stripped
          </p>
        </div>
      </section>

      {/* ─── Captioning Policy ────────────────────────────── */}
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
              Image Policy
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.08)" }} />
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l"
            style={{ borderColor: "rgba(242,239,233,0.06)" }}
          >
            {[
              {
                title: "Context-only captions",
                body: "Captions describe programme context — cohort type, capability area, approximate period — never participant names or institution identifiers.",
              },
              {
                title: "No facial identification",
                body: "Images are selected and cropped to avoid individual identification. Where required, faces are obscured in post-processing before publication.",
              },
              {
                title: "Consent on file",
                body: "A signed image release form is held by Quantum Intel for every photograph published. No image is published without documented consent.",
              },
              {
                title: "EXIF stripped",
                body: "All EXIF metadata — including location, device, and timestamp data — is removed from images before upload to the gallery.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 border-b border-r"
                style={{ borderColor: "rgba(242,239,233,0.06)" }}
              >
                <h3
                  className="text-[14px] font-semibold mb-3 leading-snug"
                  style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[13px] leading-[1.75]"
                  style={{ color: "#C9C6BF" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
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
              View our past programme engagements.
            </p>
            <p
              className="text-[14px] mt-2"
              style={{ color: "#C9C6BF", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
            >
              Anonymised engagement records from Quantum Intel&apos;s programme portfolio.
            </p>
          </div>
          <Link
            href="/programmes/past-engagements"
            className="qi-btn-gold inline-flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold shrink-0"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Past Engagements
            <ArrowRight size={12} />
          </Link>
        </div>
      </section>
    </>
  );
}
