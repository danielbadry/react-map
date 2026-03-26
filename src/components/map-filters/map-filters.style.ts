import type { CSSProperties } from "react";

export const mapFiltersStyles: Record<
  "filters" | "field" | "label" | "input" | "select",
  CSSProperties
> = {
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
};
