import { ImageResponse } from "next/og";

export const alt = "Orisyn Limited — Engineering, construction, supply, and investment";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#222222",
        color: "white",
        display: "flex",
        height: "100%",
        justifyContent: "space-between",
        padding: "76px 84px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 820 }}>
        <div style={{ color: "#ff642e", fontSize: 28, fontWeight: 700, letterSpacing: 5 }}>
          ORISYN LIMITED
        </div>
        <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, marginTop: 28 }}>
          Engineering confidence into every project.
        </div>
        <div style={{ color: "#c8c8c8", fontSize: 28, marginTop: 30 }}>
          Engineering · Construction · Supply · Investment
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18, transform: "rotate(-30deg)" }}>
        <div style={{ background: "#ff642e", height: 64, width: 250 }} />
        <div style={{ background: "#1488e8", height: 64, width: 250 }} />
        <div style={{ background: "#111111", border: "2px solid #555", height: 64, width: 250 }} />
      </div>
    </div>,
    size,
  );
}
