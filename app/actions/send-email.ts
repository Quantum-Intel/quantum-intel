"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = "corporate@email.quantumintel.co";

function row(label: string, value: string | undefined) {
  if (!value) return "";
  return `<tr><td style="padding:6px 12px 6px 0;color:#6B6660;font-size:13px;vertical-align:top;white-space:nowrap">${label}</td><td style="padding:6px 0;color:#0A1A2F;font-size:13px">${value}</td></tr>`;
}

function template(title: string, rows: string) {
  return `<!DOCTYPE html><html><body style="font-family:sans-serif;background:#F2EFE9;padding:32px">
<div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #e5e2dc;padding:32px">
<p style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#B8945A;margin:0 0 16px">Quantum Intel</p>
<h2 style="font-size:20px;font-weight:600;color:#0A1A2F;margin:0 0 24px">${title}</h2>
<table style="border-collapse:collapse;width:100%">${rows}</table>
</div></body></html>`;
}

export async function sendProposalEmail(formData: FormData) {
  if (formData.get("_trap")) return { ok: false };

  const capabilities = (formData.getAll("capabilities") as string[]).join(", ") || "—";
  const userEmail = formData.get("email") as string;

  const { error } = await resend.emails.send({
    from: FROM,
    to: userEmail,
    subject: `Proposal Request — ${formData.get("organisation")} (${formData.get("name")})`,
    html: template("New Proposal Request", [
      row("Name", formData.get("name") as string),
      row("Organisation", formData.get("organisation") as string),
      row("Role", formData.get("role") as string),
      row("Institution Type", formData.get("institution_category") as string),
      row("Country", formData.get("country") as string),
      row("Confidentiality", formData.get("confidentiality") as string),
      row("Capability Areas", capabilities),
      row("Cohort Size", formData.get("cohort_size") as string),
      row("Preferred Timing", formData.get("timing") as string),
      row("Email", formData.get("email") as string),
      row("Phone", formData.get("phone") as string),
      row("Briefing Summary", formData.get("summary") as string),
    ].join("")),
  });

  if (error) return { ok: false, error: error.message };
  return { ok: true };
}

export async function sendPartnerEmail(formData: FormData) {
  if (formData.get("_trap")) return { ok: false };

  const userEmail = formData.get("email") as string;

  const { error } = await resend.emails.send({
    from: FROM,
    to: userEmail,
    subject: `Partnership Enquiry — ${formData.get("organisation")} (${formData.get("name")})`,
    html: template("New Partnership Enquiry", [
      row("Name", formData.get("name") as string),
      row("Organisation", formData.get("organisation") as string),
      row("Partnership Type", formData.get("partnership_type") as string),
      row("Country", formData.get("country") as string),
      row("Email", formData.get("email") as string),
      row("Phone", formData.get("phone") as string),
      row("Summary", formData.get("summary") as string),
    ].join("")),
  });

  if (error) return { ok: false, error: error.message };
  return { ok: true };
}

export async function sendMediaEmail(formData: FormData) {
  if (formData.get("_trap")) return { ok: false };

  const userEmail = formData.get("email") as string;

  const { error } = await resend.emails.send({
    from: FROM,
    to: userEmail,
    subject: `Media Enquiry — ${formData.get("publication")} (${formData.get("name")})`,
    html: template("New Media Enquiry", [
      row("Name", formData.get("name") as string),
      row("Publication", formData.get("publication") as string),
      row("Role", formData.get("role") as string),
      row("Country", formData.get("country") as string),
      row("Email", formData.get("email") as string),
      row("Phone", formData.get("phone") as string),
      row("Topic", formData.get("topic") as string),
      row("Deadline", formData.get("deadline") as string),
      row("Summary", formData.get("summary") as string),
    ].join("")),
  });

  if (error) return { ok: false, error: error.message };
  return { ok: true };
}

export async function sendGeneralEnquiryEmail(formData: FormData) {
  if (formData.get("_trap")) return { ok: false };

  const userEmail = formData.get("email") as string;

  const { error } = await resend.emails.send({
    from: FROM,
    to: userEmail,
    subject: `General Enquiry — ${formData.get("organisation")} (${formData.get("name")})`,
    html: template("New General Enquiry", [
      row("Name", formData.get("name") as string),
      row("Organisation", formData.get("organisation") as string),
      row("Role", formData.get("role") as string),
      row("Country", formData.get("country") as string),
      row("Email", formData.get("email") as string),
      row("Phone", formData.get("phone") as string),
      row("Message", formData.get("message") as string),
    ].join("")),
  });

  if (error) return { ok: false, error: error.message };
  return { ok: true };
}
