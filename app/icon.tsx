import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 64,
  height: 64
};
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: "28px",
          fontWeight: 900,
          border: "4px solid #c4ff59"
        }}
      >
        VR
      </div>
    ),
    size
  );
}
