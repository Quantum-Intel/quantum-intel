import type { Metadata } from "next";
import Link from "next/link";
import MediaForm from "@/app/components/forms/MediaForm";

export const metadata: Metadata = {
  title: "Media Enquiries",
  description:
    "Press and media enquiries for Quantum Intel. Responses provided to credentialled journalists only.",
};

const guidelines = [
  {
    title: "Credentialled journalists only",
    body: "Quantum Intel responds to media enquiries from credentialled journalists at recognised publications and broadcast outlets. We do not respond to requests from unverified sources.",
  },
  {
    title: "Subject to editorial discretion",
    body: "All media responses are subject to internal review and editorial discretion. We do not comment on live operations, named clients, or sensitive programme content.",
  },
  {
    title: "No client disclosure",
    body: "Quantum Intel does not confirm or deny the identity of any client, programme participant, or institutional partner under any circumstances — including in response to media enquiries.",
  },
];

export default function MediaPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20"
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
        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <Link
              href="/contact"
              className="text-[10px] tracking-[0.24em] uppercase qi-text-hover-stone"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Contact
            </Link>
            <div className="w-4 h-px" style={{ background: "rgba(242,239,233,0.2)" }} />
            <span
              className="text-[10.5px] tracking-[0.3em] uppercase"
              style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
            >
              Media Enquiries
            </span>
          </div>

          <div className="max-w-[700px]">
            <h1
              className="text-[44px] md:text-[54px] font-semibold leading-[1.05] tracking-tight mb-8"
              style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
            >
              Media enquiries.
            </h1>
            <p
              className="text-[17px] leading-[1.8]"
              style={{
                color: "#C9C6BF",
                fontFamily: "var(--font-editorial)",
                fontStyle: "italic",
              }}
            >
              Press and media enquiries should be submitted using the form below. Responses are provided to credentialled journalists only and are subject to editorial discretion.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Media Guidelines ─────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "#14171C", borderTop: "1px solid rgba(242,239,233,0.05)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <span
              className="text-[10px] tracking-[0.28em] uppercase"
              style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
            >
              Media Policy
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(242,239,233,0.06)" }} />
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 border-t border-l"
            style={{ borderColor: "rgba(242,239,233,0.06)" }}
          >
            {guidelines.map((item, i) => (
              <div
                key={i}
                className="p-8 border-b border-r"
                style={{ borderColor: "rgba(242,239,233,0.06)" }}
              >
                <h3
                  className="text-[15px] font-semibold mb-4 leading-snug"
                  style={{ color: "#F2EFE9", fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[13.5px] leading-[1.8]"
                  style={{ color: "#C9C6BF" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Form Section ─────────────────────────────────── */}
      <section
        className="py-20 md:py-28"
        style={{ background: "#0A1A2F", borderTop: "1px solid rgba(242,239,233,0.05)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-20">
            {/* Left — context */}
            <div className="lg:pt-2">
              <div
                className="p-6 border mb-8"
                style={{
                  borderColor: "rgba(242,239,233,0.08)",
                  background: "rgba(242,239,233,0.02)",
                }}
              >
                <p
                  className="text-[10px] tracking-[0.2em] uppercase mb-4"
                  style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                >
                  Important
                </p>
                <p
                  className="text-[12.5px] leading-[1.75]"
                  style={{ color: "rgba(242,239,233,0.5)", fontFamily: "var(--font-display)" }}
                >
                  Quantum Intel does not confirm or deny the identity of any client, programme participant, or institutional partner. This applies to all media enquiries without exception.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase mb-1"
                    style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                  >
                    Media contact
                  </p>
                  <a
                    href="mailto:media@quantumintel.africa"
                    className="text-[13px] qi-text-hover-gold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    media@quantumintel.africa
                  </a>
                </div>
                <div className="h-px" style={{ background: "rgba(242,239,233,0.06)" }} />
                <div>
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase mb-1"
                    style={{ color: "#B8945A", fontFamily: "var(--font-display)" }}
                  >
                    Response policy
                  </p>
                  <p
                    className="text-[12px] leading-[1.6]"
                    style={{ color: "rgba(242,239,233,0.35)", fontFamily: "var(--font-display)" }}
                  >
                    Responses provided to credentialled press only, subject to editorial discretion. Not all enquiries will receive a response.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <MediaForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
