import type { CSSProperties } from "react";

export const homePageStyles: Record<
  "container" | "hero" | "eyebrow" | "title" | "copy",
  CSSProperties
> = {
  container: {
    width: "min(1120px, calc(100% - 32px))",
    margin: "0 auto",
    paddingTop: "32px",
  },
  hero: {
    display: "grid",
    gap: "12px",
    marginBottom: "24px",
  },
  eyebrow: {
    margin: 0,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontSize: "0.78rem",
    fontWeight: 700,
    color: "#0d63c8",
  },
  title: {
    margin: 0,
    fontSize: "clamp(2rem, 4vw, 3.75rem)",
    lineHeight: 1,
  },
  copy: {
    margin: 0,
    maxWidth: "62ch",
    fontSize: "1rem",
    lineHeight: 1.6,
    color: "#425466",
  },
};
