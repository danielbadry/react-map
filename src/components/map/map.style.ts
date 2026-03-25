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
  | "grid"
  | "card"
  | "badge"
  | "meta",
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
    gap: "16px",
    padding: "20px",
    background: "#f8fbfe",
  },
  card: {
    padding: "18px",
    borderRadius: "18px",
    border: "1px solid rgba(16, 32, 48, 0.08)",
    background: "#fff",
  },
  badge: {
    display: "inline-flex",
    padding: "4px 10px",
    borderRadius: "999px",
    fontSize: "0.75rem",
    fontWeight: 700,
    marginBottom: "12px",
    color: "#0b3b74",
    background: "#dcecff",
  },
  meta: {
    margin: "8px 0 0",
    color: "#425466",
    fontSize: "0.95rem",
    lineHeight: 1.5,
  },
};
