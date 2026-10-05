import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "CU Digital Intelligence — Technology built around your business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#FAF9F6",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row: monogram + discipline line */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 12,
                backgroundColor: "#93452D",
                color: "#FAF9F6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 30,
                fontWeight: 700,
                letterSpacing: -1,
              }}
            >
              CU
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 26, fontWeight: 700, color: "#1A1A1A" }}>
                Digital Intelligence
              </span>
              <span style={{ fontSize: 15, letterSpacing: 3, color: "#C86B3F", textTransform: "uppercase" }}>
                AI • Data • Automation • Engineering
              </span>
            </div>
          </div>
          <div style={{ width: 56, height: 56, backgroundColor: "#D98B60", borderRadius: 4 }} />
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#1A1A1A",
              letterSpacing: -3,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Technology built around your business.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 48, height: 3, backgroundColor: "#D98B60" }} />
            <span style={{ fontSize: 24, color: "#6B7280" }}>
              AI • Data • Automation • Engineering — for businesses around the world
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ height: 2, flex: 1, backgroundColor: "#E5E7EB", marginRight: 32 }} />
          <span style={{ fontSize: 20, color: "#93452D", fontWeight: 600 }}>
            CU DIGITAL INTELLIGENCE
          </span>
        </div>
      </div>
    ),
    size
  );
}
