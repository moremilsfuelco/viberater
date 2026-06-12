import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vibe Rater - We Rate The Apps People Built With Vibes";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050806",
          color: "#f5f7ee",
          padding: "64px",
          fontFamily: "Arial, Helvetica, sans-serif",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "32px",
            border: "1px solid rgba(196,255,89,0.28)",
            borderRadius: "28px"
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-120px",
            top: "-150px",
            width: "420px",
            height: "420px",
            borderRadius: "999px",
            background: "rgba(196,255,89,0.18)"
          }}
        />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
            <div
              style={{
                width: "84px",
                height: "84px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "16px",
                background: "#f5f7ee",
                color: "#050806",
                fontSize: "34px",
                fontWeight: 900,
                letterSpacing: "-1px"
              }}
            >
              VR
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "42px", fontWeight: 900, letterSpacing: "-1px" }}>Vibe Rater</div>
              <div style={{ marginTop: "6px", color: "rgba(245,247,238,0.58)", fontSize: "20px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>
                AI Startup Reviews
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              border: "1px solid rgba(196,255,89,0.42)",
              borderRadius: "999px",
              color: "#c4ff59",
              padding: "14px 22px",
              fontSize: "20px",
              fontWeight: 800
            }}
          >
            Founder-led
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: "960px" }}>
          <div style={{ color: "#c4ff59", fontSize: "24px", fontWeight: 900, letterSpacing: "4px", textTransform: "uppercase" }}>
            Founder-led AI startup reviews
          </div>
          <div style={{ marginTop: "24px", fontSize: "78px", lineHeight: 0.95, fontWeight: 950, letterSpacing: "-3px" }}>
            We Rate The Apps People Built With Vibes
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "rgba(245,247,238,0.64)", fontSize: "22px", fontWeight: 700 }}>
          <div>joinviberater.com</div>
          <div style={{ color: "#c4ff59" }}>Honest reviews. Real founders. Useful feedback.</div>
        </div>
      </div>
    ),
    size
  );
}
