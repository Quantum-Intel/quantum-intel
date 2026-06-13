import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A1A2F",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 80,
          fontWeight: 700,
          color: "#B8945A",
          fontFamily: "system-ui, sans-serif",
          letterSpacing: "-2px",
        }}
      >
        QI
      </div>
    ),
    { ...size }
  );
}
