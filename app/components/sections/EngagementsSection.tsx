const engagements = [
  {
    ref: "QI-2024-017",
    sector: "National security institution",
    capability: "Military Intelligence",
    country: "Nigeria",
    duration: "3 weeks",
    cohort: "30–40 participants",
    brief: "A residential capability programme delivered for a national security institution, covering the intelligence cycle, analytic tradecraft, and intelligence support to decision-making.",
    outcome: "Participants completed structured assessments demonstrating applied proficiency across core analytic tradecraft disciplines. A programme extension was commissioned within three months of completion.",
  },
  {
    ref: "QI-2024-023",
    sector: "Federal ministry",
    capability: "Strategic Communications",
    country: "Nigeria",
    duration: "2 weeks",
    cohort: "25–35 participants",
    brief: "An intensive strategic communications programme for senior officials with responsibility for public communications and information environment management in a sensitive operational context.",
    outcome: "The institution developed and published an internal strategic communications framework based on outputs from the programme. A second cohort was contracted at programme conclusion.",
  },
  {
    ref: "QI-2024-031",
    sector: "Tier-1 bank",
    capability: "Cyber Security & Infrastructure Defence",
    country: "Nigeria",
    duration: "10 days",
    cohort: "20–30 participants",
    brief: "A cyber security capability programme for senior risk, technology, and security leadership, focused on institutional cyber posture, governance, and incident response at enterprise scale.",
    outcome: "The institution adopted programme recommendations into its cyber risk governance framework and initiated a follow-on engagement covering threat intelligence and adversary tracking.",
  },
];

export default function EngagementsSection() {
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
            05 — Selected Engagements
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.08)" }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-20 mb-16">
          <div>
            <h2
              className="text-[38px] md:text-[46px] font-semibold leading-[1.06] tracking-tight"
              style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
            >
              A track record of institutional delivery.
            </h2>
          </div>
          <div className="flex items-end">
            <p
              className="text-[15px] leading-[1.75] max-w-[420px]"
              style={{ color: "#C9C6BF", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
            >
              Selected engagements are presented in anonymised form consistent
              with our confidentiality commitments.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engagements.map((eng) => (
              <div
                key={eng.ref}
                className="flex flex-col border qi-card-hover"
                style={{ background: "#FFFFFF", borderColor: "rgba(10,26,47,0.1)" }}
              >
                {/* Header */}
                <div
                  className="px-8 py-5 border-b flex items-center justify-between"
                  style={{ borderColor: "rgba(10,26,47,0.08)" }}
                >
                  <span
                    className="text-[11px] tracking-[0.18em] uppercase font-medium"
                    style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                  >
                    {eng.sector}
                  </span>
                  <span
                    className="text-[10px] tracking-[0.15em]"
                    style={{ color: "rgba(10,26,47,0.3)", fontFamily: "var(--font-display)" }}
                  >
                    {eng.ref}
                  </span>
                </div>

                {/* Body */}
                <div className="px-8 py-7 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {[eng.capability, eng.country, eng.duration, eng.cohort].map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 tracking-wide"
                        style={{
                          background: "rgba(10,26,47,0.05)",
                          color: "#2A2F36",
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-[14px] leading-[1.7] mb-4 flex-1" style={{ color: "#2A2F36" }}>
                    {eng.brief}
                  </p>
                  <p
                    className="text-[13px] leading-[1.7] pb-6 border-b"
                    style={{
                      color: "#5A5550",
                      borderColor: "rgba(10,26,47,0.08)",
                      fontFamily: "var(--font-editorial)",
                      fontStyle: "italic",
                    }}
                  >
                    {eng.outcome}
                  </p>
                  <p
                    className="text-[11px] tracking-[0.08em] mt-5"
                    style={{ color: "rgba(10,26,47,0.3)", fontFamily: "var(--font-display)" }}
                  >
                    Engagement reference available on request to qualified institutional enquirers.
                  </p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
