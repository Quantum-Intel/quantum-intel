"use client";
import { useState } from "react";
import { Play } from "lucide-react";

interface VideoCardProps {
  src: string;
  poster: string;
  title: string;
  programme: string;
  duration: string;
  year: string;
}

export default function VideoCard({ src, poster, title, programme, duration, year }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div>
      <div style={{ position: "relative", overflow: "hidden", background: "#14171C" }}>
        {playing ? (
          <iframe
            src={src}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", aspectRatio: "16/9", display: "block", border: "none" }}
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            aria-label={`Play ${title}`}
            style={{
              display: "block",
              width: "100%",
              padding: 0,
              border: "none",
              cursor: "pointer",
              background: "none",
              position: "relative",
            }}
          >
            {poster && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={poster}
                alt=""
                style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" }}
              />
            )}
            <span
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(10,26,47,0.28)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: "#B8945A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.45)",
                  flexShrink: 0,
                }}
              >
                <Play size={19} color="#0A1A2F" fill="#0A1A2F" style={{ marginLeft: 3 }} />
              </span>
              <span
                style={{
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  background: "rgba(10,26,47,0.82)",
                  color: "#F2EFE9",
                  fontSize: 11,
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.04em",
                  padding: "3px 8px",
                }}
              >
                {duration}
              </span>
            </span>
          </button>
        )}
      </div>

      <div style={{ paddingTop: 12 }}>
        <p
          style={{
            fontSize: 9,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#B8945A",
            fontFamily: "var(--font-display)",
            marginBottom: 5,
          }}
        >
          {programme}
        </p>
        <p
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "#0A1A2F",
            fontFamily: "var(--font-display)",
            lineHeight: 1.35,
            marginBottom: 4,
          }}
        >
          {title}
        </p>
        <p style={{ fontSize: 11, color: "#6B6660", fontFamily: "var(--font-sans)" }}>
          {year}
        </p>
      </div>
    </div>
  );
}
