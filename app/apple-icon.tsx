import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 180,
  height: 180
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050806",
          color: "#c4ff59",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: "78px",
          fontWeight: 900,
          borderRadius: "36px",
          border: "10px solid #c4ff59"
        }}
      >
        VR
      </div>
    ),
    size
  );
}
