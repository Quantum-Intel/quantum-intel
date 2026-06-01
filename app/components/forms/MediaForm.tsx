"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const inputClass =
  "w-full px-4 py-3.5 text-[14px] border bg-transparent outline-none transition-colors";
const inputStyle = {
  borderColor: "rgba(242,239,233,0.12)",
  color: "#F2EFE9",
  fontFamily: "var(--font-display)",
};
const labelClass = "block text-[10.5px] tracking-[0.1em] uppercase mb-2";
const labelStyle = { color: "rgba(242,239,233,0.45)", fontFamily: "var(--font-display)" };

export default function MediaForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-6 py-12">
        <CheckCircle size={40} style={{ color: "#B8945A" }} />
        <h3
          className="text-[28px] font-semibold"
          style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
        >
          Media enquiry received.
        </h3>
        <p
          className="text-[15px] leading-[1.8] max-w-[420px]"
          style={{ color: "#C9C6BF", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
        >
          Your media enquiry has been received. Responses are provided to credentialled journalists and are subject to editorial discretion. We will review your enquiry and respond as appropriate.
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
          <label className={labelClass} style={labelStyle} htmlFor="publication">
            Publication / Outlet <span style={{ color: "#B8945A" }}>*</span>
          </label>
          <input
            id="publication"
            name="publication"
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
            Role <span style={{ color: "#B8945A" }}>*</span>
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
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass} style={labelStyle} htmlFor="email">
            Email <span style={{ color: "#B8945A" }}>*</span>
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

      {/* Row 4 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass} style={labelStyle} htmlFor="topic">
            Topic of Enquiry <span style={{ color: "#B8945A" }}>*</span>
          </label>
          <input
            id="topic"
            name="topic"
            type="text"
            required
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div>
          <label className={labelClass} style={labelStyle} htmlFor="deadline">
            Deadline
          </label>
          <input
            id="deadline"
            name="deadline"
            type="text"
            placeholder="e.g. 15 June 2026"
            className={inputClass}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Summary */}
      <div>
        <label className={labelClass} style={labelStyle} htmlFor="summary">
          Summary <span style={{ color: "#B8945A" }}>*</span>
        </label>
        <textarea
          id="summary"
          name="summary"
          rows={5}
          required
          placeholder="Briefly describe your enquiry and the nature of your coverage."
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
          By submitting this form I confirm that the information provided is accurate. Quantum Intel processes enquiry data in accordance with the Nigeria Data Protection Act and the{" "}
          <Link href="/legal/privacy" className="underline underline-offset-2" style={{ color: "#B8945A" }}>
            Privacy Policy
          </Link>
          . <span style={{ color: "#B8945A" }}>*</span>
        </label>
      </div>

      <input type="text" name="_trap" className="hidden" tabIndex={-1} aria-hidden="true" />

      <div>
        <button
          type="submit"
          className="qi-btn-gold inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.14em] uppercase font-semibold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Submit Media Enquiry
          <ArrowRight size={12} />
        </button>
      </div>
    </form>
  );
}
