import type { AppViewProps } from "./App.type";
import { appStyles } from "./App.style";

export function AppView({ children }: AppViewProps) {
  return <div style={appStyles.shell}>{children}</div>;
}
