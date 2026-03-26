import type { CSSProperties } from "react";

export const mapStyles: Record<
  | "section"
  | "frame"
  | "canvas"
  | "state"
  | "summary"
  | "summaryTitle"
  | "legend"
  | "legendItem"
  | "dot"
  | "grid",
  CSSProperties
> = {
  section: {
    width: "min(1120px, calc(100% - 32px))",
    margin: "0 auto",
    paddingTop: "8px",
    paddingBottom: "48px",
  },
  frame: {
    borderRadius: "24px",
    overflow: "hidden",
    border: "1px solid rgba(16, 32, 48, 0.08)",
    background: "rgba(255, 255, 255, 0.88)",
    boxShadow: "0 24px 72px rgba(16, 32, 48, 0.12)",
  },
  canvas: {
    width: "100%",
    height: "480px",
  },
  state: {
    padding: "32px",
    fontSize: "1rem",
    color: "#425466",
  },
  summary: {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
    flexWrap: "wrap",
    padding: "20px",
    borderTop: "1px solid rgba(16, 32, 48, 0.08)",
    background: "#fff",
  },
  summaryTitle: {
    margin: 0,
    fontSize: "1rem",
    color: "#142230",
  },
  legend: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  legendItem: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    color: "#425466",
    fontSize: "0.9rem",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "999px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    columnGap: "15px",
    rowGap: "50px",
    padding: "25px",
    background: "#f8fbfe",
  },
};
