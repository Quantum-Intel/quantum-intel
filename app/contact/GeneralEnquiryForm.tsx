"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { sendGeneralEnquiryEmail } from "@/app/actions/send-email";

const inputClass =
  "w-full px-4 py-3.5 text-[14px] border outline-none focus:border-[rgba(184,148,90,0.6)]";
const inputStyle = {
  background: "#FFFFFF",
  borderColor: "rgba(10,26,47,0.15)",
  color: "#0A1A2F",
  fontFamily: "var(--font-display)",
};
const labelClass = "block text-[10.5px] tracking-[0.1em] uppercase mb-2";
const labelStyle = { color: "#6B6660", fontFamily: "var(--font-display)" };

export default function GeneralEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const result = await sendGeneralEnquiryEmail(new FormData(e.currentTarget));
    if (result.ok) {
      setSubmitted(true);
    } else {
      setError("Something went wrong. Please try again or email us directly.");
    }
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-6 py-12">
        <CheckCircle size={40} style={{ color: "#B8945A" }} />
        <h3 className="text-[28px] font-semibold" style={{ color: "#0A1A2F", fontFamily: "var(--font-display)" }}>
          Enquiry received.
        </h3>
        <p className="text-[15px] leading-[1.8] max-w-[420px]" style={{ color: "#5A5550", fontFamily: "var(--font-editorial)", fontStyle: "italic" }}>
          Your enquiry has been received and will be handled through our confidential channels. A member of the team will be in contact as appropriate.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-semibold qi-text-hover-gold" style={{ fontFamily: "var(--font-display)" }}>
          Return to Homepage <ArrowRight size={11} />
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass} style={labelStyle}>
            Full Name <span style={{ color: "#B8945A" }}>*</span>
          </label>
          <input id="name" name="name" type="text" required className={inputClass} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="organisation" className={labelClass} style={labelStyle}>
            Organisation <span style={{ color: "#B8945A" }}>*</span>
          </label>
          <input id="organisation" name="organisation" type="text" required className={inputClass} style={inputStyle} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="role" className={labelClass} style={labelStyle}>
            Role / Title <span style={{ color: "#B8945A" }}>*</span>
          </label>
          <input id="role" name="role" type="text" required className={inputClass} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="country" className={labelClass} style={labelStyle}>
            Country <span style={{ color: "#B8945A" }}>*</span>
          </label>
          <input id="country" name="country" type="text" required className={inputClass} style={inputStyle} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className={labelClass} style={labelStyle}>
            Work Email <span style={{ color: "#B8945A" }}>*</span>
          </label>
          <input id="email" name="email" type="email" required className={inputClass} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass} style={labelStyle}>Phone</label>
          <input id="phone" name="phone" type="tel" className={inputClass} style={inputStyle} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass} style={labelStyle}>
          Enquiry Summary <span style={{ color: "#B8945A" }}>*</span>
        </label>
        <textarea id="message" name="message" rows={5} required className={`${inputClass} resize-none`} style={inputStyle} />
      </div>

      <div className="flex items-start gap-3">
        <input id="consent" name="consent" type="checkbox" required className="mt-1 shrink-0" style={{ accentColor: "#B8945A" }} />
        <label htmlFor="consent" className="text-[12px] leading-[1.7]" style={labelStyle}>
          By submitting this form I confirm that the information provided is accurate and that I am authorised to contact Quantum Intel on behalf of the organisation named. Quantum Intel processes enquiry data in accordance with the Nigeria Data Protection Act and the{" "}
          <Link href="/legal/privacy" className="underline underline-offset-2" style={{ color: "#B8945A" }}>Privacy Policy</Link>
          . <span style={{ color: "#B8945A" }}>*</span>
        </label>
      </div>

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
          {loading ? "Sending…" : "Send Enquiry"}
          {!loading && <ArrowRight size={12} />}
        </button>
      </div>
    </form>
  );
}
