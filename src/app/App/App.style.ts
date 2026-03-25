import type { CSSProperties } from "react";

export const appStyles: Record<"shell", CSSProperties> = {
  shell: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, rgba(53, 120, 229, 0.16), transparent 35%), linear-gradient(180deg, #f8fbff 0%, #ebf2f8 100%)",
    color: "#142230",
  },
};
