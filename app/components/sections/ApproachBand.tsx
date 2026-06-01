const principles = [
  {
    number: "01",
    title: "Discretion",
    body: "Engagements are designed and delivered with strict confidentiality. We do not publish client identifying information without written authorisation.",
  },
  {
    number: "02",
    title: "African Context",
    body: "Programmes are grounded in the African operating environment, doctrine, and the specific challenges facing institutions on the continent.",
  },
  {
    number: "03",
    title: "Institutional Rigour",
    body: "Curricula draw on contemporary international doctrine and applied practice, delivered to the standard expected by state-grade institutions.",
  },
  {
    number: "04",
    title: "Faculty Calibre",
    body: "Delivery is led by senior practitioners and subject-matter authorities drawn from defence, intelligence, security, and technology backgrounds.",
  },
];

export default function ApproachBand() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "#FFFFFF", borderTop: "1px solid rgba(10,26,47,0.07)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span
            className="text-[10px] tracking-[0.28em] uppercase"
            style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
          >
            04 — How We Operate
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(10,26,47,0.07)" }} />
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l"
          style={{ borderColor: "rgba(10,26,47,0.07)" }}
        >
          {principles.map((p) => (
            <div
              key={p.number}
              className="p-8 lg:p-10 border-b border-r"
              style={{ borderColor: "rgba(10,26,47,0.07)" }}
            >
              <span
                className="text-[10px] tracking-[0.24em] uppercase block mb-6"
                style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
              >
                {p.number}
              </span>
              <h3
                className="text-[18px] font-semibold mb-4 leading-snug"
                style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}
              >
                {p.title}
              </h3>
              <p className="text-[13.5px] leading-[1.75]" style={{ color: "#5A5550" }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
