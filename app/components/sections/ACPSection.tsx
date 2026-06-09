import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tracks = [
  "Strategic Communications",
  "Military Intelligence",
  "Cyber Security & Infrastructure Defence",
  "Artificial Intelligence for Defence & Security",
  "Emerging Technologies in Modern Warfare",
];

export default function ACPSection() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "#FFFFFF", borderTop: "1px solid rgba(10,26,47,0.07)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span
            className="text-[10px] tracking-[0.28em] uppercase"
            style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
          >
            02 — Featured Program
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Program identity panel */}
          <div>
            <div
              className="border p-10 mb-8"
              style={{
                background: "#F7F4EE",
                borderColor: "rgba(10,26,47,0.08)",
              }}
            >
              <div
                className="border-b pb-6 mb-6"
                style={{ borderColor: "rgba(10,26,47,0.08)" }}
              >
                <span
                  className="text-[10px] tracking-[0.25em] uppercase block mb-2"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  Flagship Program
                </span>
                <h2
                  className="text-[28px] md:text-[34px] font-semibold leading-tight tracking-tight"
                  style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
                >
                  The Advanced Capability Program
                </h2>
              </div>
              <ul className="space-y-3">
                {tracks.map((track, i) => (
                  <li key={track} className="flex items-center gap-4">
                    <span
                      className="text-[10px] shrink-0 w-5 text-right"
                      style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-px h-4 shrink-0" style={{ background: "rgba(10,26,47,0.1)" }} />
                    <span
                      className="text-[13px] leading-relaxed"
                      style={{ color: "#2A2F36", fontFamily: "var(--font-display)" }}
                    >
                      {track}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="flex items-center justify-between p-5 border"
              style={{ borderColor: "rgba(10,26,47,0.08)", background: "#F7F4EE" }}
            >
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase mb-0.5" style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}>Delivery</p>
                <p className="text-[12px]" style={{ color: "#5A5550", fontFamily: "var(--font-display)" }}>In-person residential, private cohort</p>
              </div>
              <div className="w-px h-8" style={{ background: "rgba(10,26,47,0.1)" }} />
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase mb-0.5" style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}>Duration</p>
                <p className="text-[12px]" style={{ color: "#5A5550", fontFamily: "var(--font-display)" }}>Tailored — 2 to 6 weeks</p>
              </div>
            </div>
          </div>

          {/* Right — Description */}
          <div className="flex flex-col justify-start">
            <p
              className="text-[18px] md:text-[20px] leading-[1.75] mb-6"
              style={{ color: "#0A1A2F", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
            >
              An integrated capability development program across the five
              domains shaping the future of African security and governance.
            </p>
            <div className="h-px mb-6" style={{ background: "rgba(10,26,47,0.07)" }} />
            <p
              className="text-[15px] leading-[1.8] mb-6"
              style={{ color: "#5A5550" }}
            >
              Designed for institutions that require coordinated uplift across
              multiple domains rather than isolated training. Delivered in cohort
              formats appropriate to the seniority, mandate, and confidentiality
              requirements of the participating organisation.
            </p>
            <p
              className="text-[15px] leading-[1.8] mb-10"
              style={{ color: "#5A5550" }}
            >
              The program draws on senior practitioners and subject-matter
              authorities across defence, intelligence, security, technology, and
              policy backgrounds. Engagements are conducted with strict
              confidentiality as a default.
            </p>
            <Link
              href="/training/advanced-capability-program"
              className="qi-btn-gold-outline inline-flex items-center gap-2.5 px-6 py-4 text-[11px] tracking-[0.12em] uppercase font-semibold self-start"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Explore the Program
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
