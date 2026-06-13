import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 675 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A1A2F",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "#B8945A",
            letterSpacing: "-2px",
            marginBottom: 20,
          }}
        >
          QI
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 600,
            color: "#FFFFFF",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Defence, Intelligence & Security Capability Partner in Africa
        </div>
      </div>
    ),
    { ...size }
  );
}
