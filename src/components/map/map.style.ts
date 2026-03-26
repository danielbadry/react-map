import type { CSSProperties } from "react";

export const mapStyles: Record<
  | "section"
  | "frame"
  | "canvas"
  | "state"
  | "filters"
  | "field"
  | "label"
  | "input"
  | "select"
  | "summary"
  | "summaryTitle"
  | "legend"
  | "legendItem"
  | "dot"
  | "grid"
  | "card"
  | "badge"
  | "meta"
  | "button",
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
  filters: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))",
    gap: "16px",
    padding: "20px",
    borderTop: "1px solid rgba(16, 32, 48, 0.08)",
    background: "#fff",
  },
  field: {
    display: "grid",
    gap: "8px",
    minWidth: 0,
  },
  label: {
    fontSize: "0.88rem",
    fontWeight: 600,
    color: "#425466",
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    minWidth: 0,
    minHeight: "44px",
    padding: "0 14px",
    borderRadius: "12px",
    border: "1px solid rgba(16, 32, 48, 0.12)",
    fontSize: "0.95rem",
    color: "#142230",
    background: "#f8fbfe",
    outline: "none",
  },
  select: {
    width: "100%",
    boxSizing: "border-box",
    minWidth: 0,
    minHeight: "44px",
    padding: "0 14px",
    borderRadius: "12px",
    border: "1px solid rgba(16, 32, 48, 0.12)",
    fontSize: "0.95rem",
    color: "#142230",
    background: "#f8fbfe",
    outline: "none",
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
    display: "flex",
    flexDirection: "column",
    padding: "18px",
    paddingBottom: "24px",
    borderRadius: "18px",
    border: "1px solid rgba(16, 32, 48, 0.08)",
    background: "#fff",
    minHeight: "100%",
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
  button: {
    marginTop: "auto",
    marginBottom: "6px",
    alignSelf: "flex-start",
    minHeight: "40px",
    minWidth: "96px",
    justifyContent: "center",
    display: "inline-flex",
    alignItems: "center",
    padding: "0 14px",
    borderRadius: "10px",
    fontWeight: 600,
    cursor: "pointer",
    background: "#ffffff",
  },
};

export const getButtonStyle = (isSelected: boolean): CSSProperties => {
  return {
    ...mapStyles.button,
    border: isSelected
      ? "1px solid #0d63c8"
      : "1px solid rgba(16, 32, 48, 0.12)",
    background: isSelected ? "#0d63c8" : "#ffffff",
    color: isSelected ? "#ffffff" : "#142230",
  };
};
