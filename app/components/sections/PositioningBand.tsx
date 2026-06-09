export default function PositioningBand() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "#FFFFFF", borderTop: "1px solid rgba(10,26,47,0.07)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 lg:gap-20 items-start">
          {/* Left label */}
          <div className="flex items-center gap-4 lg:pt-2">
            <div className="w-6 h-px shrink-0" style={{ background: "#B8945A" }} />
            <span
              className="text-[10px] tracking-[0.28em] uppercase"
              style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
            >
              Mission
            </span>
          </div>

          {/* Right — mission statement */}
          <div>
            <p
              className="text-[21px] md:text-[25px] leading-[1.72]"
              style={{
                color: "#1A2535",
                fontFamily: "var(--font-editorial)",
                fontStyle: "italic",
              }}
            >
              Quantum Intel partners with state institutions and major corporate
              organisations to strengthen capability across strategic
              communications, military intelligence, cyber security, artificial
              intelligence, and emerging technologies in modern warfare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
