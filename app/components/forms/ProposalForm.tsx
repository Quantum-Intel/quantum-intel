"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { sendProposalEmail } from "@/app/actions/send-email";

const capabilities = [
  { id: "strategic-communications", label: "Strategic Communications" },
  { id: "military-intelligence", label: "Military Intelligence" },
  { id: "cyber-security", label: "Cyber Security & Infrastructure Defence" },
  { id: "artificial-intelligence", label: "Artificial Intelligence" },
  { id: "emerging-technologies", label: "Emerging Technologies in Modern Warfare" },
];

const inputClass =
  "w-full px-4 py-3.5 text-[14px] border bg-transparent outline-none transition-colors";
const inputStyle = {
  borderColor: "rgba(242,239,233,0.12)",
  color: "#F2EFE9",
  fontFamily: "var(--font-display)",
};

const labelClass = "block text-[10.5px] tracking-[0.1em] uppercase mb-2";
const labelStyle = { color: "rgba(242,239,233,0.45)", fontFamily: "var(--font-display)" };

export default function ProposalForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [capabilities_selected, setCapabilities] = useState<string[]>([]);

  function toggleCapability(id: string) {
    setCapabilities((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const fd = new FormData(e.currentTarget);
    const result = await sendProposalEmail(fd);
    if (result.ok) {
      setSubmitted(true);
    } else {
      setError("Something went wrong. Please try again or email us directly.");
    }
    setLoading(false);
  }

  if (submitted) {
    return (
      <div
        className="flex flex-col items-start gap-6 py-12"
      >
        <CheckCircle size={40} style={{ color: "#B8945A" }} />
        <h3
          className="text-[28px] font-semibold"
          style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
        >
          Enquiry received.
        </h3>
        <p
          className="text-[15px] leading-[1.8] max-w-[420px]"
          style={{ color: "#C9C6BF", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
        >
          Your proposal request has been received and will be handled through our confidential channels. A member of the engagement team will be in contact within two business days.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-semibold qi-text-hover-gold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Return to Homepage
          <ArrowRight size={11} />
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass} style={labelStyle} htmlFor="name">
            Full Name <span style={{ color: "#B8945A" }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div>
          <label className={labelClass} style={labelStyle} htmlFor="organisation">
            Organisation <span style={{ color: "#B8945A" }}>*</span>
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            required
            className={inputClass}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass} style={labelStyle} htmlFor="role">
            Role / Title <span style={{ color: "#B8945A" }}>*</span>
          </label>
          <input
            id="role"
            name="role"
            type="text"
            required
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div>
          <label className={labelClass} style={labelStyle} htmlFor="institution_category">
            Institution Category <span style={{ color: "#B8945A" }}>*</span>
          </label>
          <select
            id="institution_category"
            name="institution_category"
            required
            className={inputClass}
            style={{ ...inputStyle, background: "#0A1A2F" }}
          >
            <option value="">Select category</option>
            <option>Government</option>
            <option>Security Agency</option>
            <option>Defence Institution</option>
            <option>Corporate</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass} style={labelStyle} htmlFor="country">
            Country <span style={{ color: "#B8945A" }}>*</span>
          </label>
          <input
            id="country"
            name="country"
            type="text"
            required
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div>
          <label className={labelClass} style={labelStyle} htmlFor="confidentiality">
            Confidentiality Level <span style={{ color: "#B8945A" }}>*</span>
          </label>
          <select
            id="confidentiality"
            name="confidentiality"
            required
            className={inputClass}
            style={{ ...inputStyle, background: "#0A1A2F" }}
          >
            <option value="">Select level</option>
            <option>Standard</option>
            <option>Enhanced</option>
          </select>
        </div>
      </div>

      {/* Capabilities multi-select */}
      <div>
        <p className={labelClass} style={labelStyle}>
          Capability Areas of Interest <span style={{ color: "#B8945A" }}>*</span>
        </p>
        <div
          className="border divide-y"
          style={{
            borderColor: "rgba(242,239,233,0.12)",
          }}
        >
          {capabilities.map((cap) => (
            <label
              key={cap.id}
              className="flex items-center gap-4 px-4 py-3.5 cursor-pointer"
              style={{ background: capabilities_selected.includes(cap.id) ? "rgba(184,148,90,0.06)" : "transparent" }}
            >
              <input
                type="checkbox"
                name="capabilities"
                value={cap.id}
                checked={capabilities_selected.includes(cap.id)}
                onChange={() => toggleCapability(cap.id)}
                className="shrink-0"
                style={{ accentColor: "#B8945A" }}
              />
              <span
                className="text-[13.5px]"
                style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
              >
                {cap.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Row 4 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass} style={labelStyle} htmlFor="cohort_size">
            Indicative Cohort Size
          </label>
          <select
            id="cohort_size"
            name="cohort_size"
            className={inputClass}
            style={{ ...inputStyle, background: "#0A1A2F" }}
          >
            <option value="">Select range</option>
            <option>1–10 participants</option>
            <option>10–25 participants</option>
            <option>25–50 participants</option>
            <option>50+ participants</option>
            <option>To be determined</option>
          </select>
        </div>
        <div>
          <label className={labelClass} style={labelStyle} htmlFor="timing">
            Preferred Timing
          </label>
          <input
            id="timing"
            name="timing"
            type="text"
            placeholder="e.g. Q3 2026"
            className={inputClass}
            style={{ ...inputStyle }}
          />
        </div>
      </div>

      {/* Row 5 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass} style={labelStyle} htmlFor="email">
            Work Email <span style={{ color: "#B8945A" }}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div>
          <label className={labelClass} style={labelStyle} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={inputClass}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Briefing summary */}
      <div>
        <label className={labelClass} style={labelStyle} htmlFor="summary">
          Briefing Summary <span style={{ color: "#B8945A" }}>*</span>
        </label>
        <textarea
          id="summary"
          name="summary"
          rows={5}
          required
          placeholder="Describe your institution's capability requirements and the context for this engagement."
          className={`${inputClass} resize-none`}
          style={inputStyle}
        />
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 shrink-0"
          style={{ accentColor: "#B8945A" }}
        />
        <label
          htmlFor="consent"
          className="text-[12px] leading-[1.7]"
          style={{ color: "rgba(242,239,233,0.45)", fontFamily: "var(--font-display)" }}
        >
          By submitting this form I confirm that the information provided is accurate and that I am authorised to contact Quantum Intel on behalf of the organisation named. Quantum Intel processes enquiry data in accordance with the Nigeria Data Protection Act and the{" "}
          <Link href="/legal/privacy" className="underline underline-offset-2" style={{ color: "#B8945A" }}>
            Privacy Policy
          </Link>
          . <span style={{ color: "#B8945A" }}>*</span>
        </label>
      </div>

      {/* Honeypot */}
      <input type="text" name="_trap" className="hidden" tabIndex={-1} aria-hidden="true" />

      {error && (
        <p className="text-[13px]" style={{ color: "#E05252" }}>{error}</p>
      )}
      <div>
        <button
          type="submit"
          disabled={loading}
          className="qi-btn-gold inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold disabled:opacity-60"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {loading ? "Sending…" : "Submit Proposal Request"}
          {!loading && <ArrowRight size={12} />}
        </button>
      </div>
    </form>
  );
}
