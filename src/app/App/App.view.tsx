import { Map } from "../../components/map";
import type { AppViewProps } from "./App.type";
import { appStyles } from "./App.style";

export function AppView({}: AppViewProps) {
  return (
    <div style={appStyles.shell}>
      <Map />
    </div>
  );
}
