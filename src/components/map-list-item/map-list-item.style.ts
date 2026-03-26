import type { CSSProperties } from "react";
 
export const mapListItemStyles: Record<
  "card" | "cardActive" | "badge" | "meta" | "button",
  CSSProperties
> = {
  card: {
    display: "flex",
    flexDirection: "column",
    marginTop: "2px",
    marginBottom: "2px",
    padding: "18px",
    paddingBottom: "24px",
    borderRadius: "18px",
    border: "1px solid rgba(16, 32, 48, 0.08)",
    background: "#fff",
    minHeight: "100%",
    transition: "border-color 160ms ease, box-shadow 160ms ease",
  },
  cardActive: {
    border: "1px solid rgba(13, 99, 200, 0.3)",
    boxShadow: "0 10px 24px rgba(13, 99, 200, 0.12)",
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

export const getMapListItemCardStyle = (isActive: boolean): CSSProperties => {
  return isActive
    ? { ...mapListItemStyles.card, ...mapListItemStyles.cardActive }
    : mapListItemStyles.card;
};

export const getMapListItemButtonStyle = (
  isSelected: boolean,
): CSSProperties => {
  return {
    ...mapListItemStyles.button,
    border: isSelected
      ? "1px solid #0d63c8"
      : "1px solid rgba(16, 32, 48, 0.12)",
    background: isSelected ? "#0d63c8" : "#ffffff",
    color: isSelected ? "#ffffff" : "#142230",
  };
};
