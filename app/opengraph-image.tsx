import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ali Shah CV Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  const siteUrl = "https://alishahcv.vercel.app";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 50% 10%, #2a0e61 0%, #120724 45%, #030014 100%)",
          color: "white",
          position: "relative",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            padding: "40px 60px",
            border: "1px solid rgba(112,66,248,0.45)",
            borderRadius: 24,
            background: "rgba(3, 0, 20, 0.35)",
          }}
        >
          <img
            src={`${siteUrl}/logo.png?v=20260421`}
            width={420}
            height={120}
            alt="Ali Shah logo"
            style={{ objectFit: "contain" }}
          />
          <div style={{ fontSize: 44, fontWeight: 700, lineHeight: 1.2 }}>
            Ali Shah | CV Portfolio
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
