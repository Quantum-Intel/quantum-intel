import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
        background: "#0A1A2F",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-inter-tight), system-ui, sans-serif",
          fontSize: "0.6875rem",
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#B8945A",
          marginBottom: "1.5rem",
        }}
      >
        404 — Page Not Found
      </p>

      <h1
        style={{
          fontFamily: "var(--font-source-serif), Georgia, serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 300,
          fontStyle: "italic",
          color: "#F2EFE9",
          lineHeight: 1.2,
          maxWidth: "32rem",
          marginBottom: "1.5rem",
        }}
      >
        This page does not exist
      </h1>

      <p
        style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          fontSize: "1rem",
          color: "rgba(242, 239, 233, 0.55)",
          maxWidth: "28rem",
          lineHeight: 1.6,
          marginBottom: "2.5rem",
        }}
      >
        The resource you requested could not be located. It may have been moved
        or removed.
      </p>

      <Link
        href="/"
        className="qi-btn-gold-outline"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.625rem 1.5rem",
          borderRadius: "2px",
          fontFamily: "var(--font-inter-tight), system-ui, sans-serif",
          fontSize: "0.8125rem",
          fontWeight: 500,
          letterSpacing: "0.05em",
          textDecoration: "none",
        }}
      >
        Return to Home
      </Link>
    </div>
  );
}
