import { Map } from "../../components/map";
import { homePageStyles } from "./home-page.style";
import type { HomePageViewProps } from "./home-page.type";

export function HomePageView({}: HomePageViewProps) {
  return (
    <>
      <div style={homePageStyles.container}>
        <section style={homePageStyles.hero}>
          <p style={homePageStyles.eyebrow}>Component-based React Map</p>
          <h1 style={homePageStyles.title}>
            Fake JSON data rendered through an isolated map component.
          </h1>
          <p style={homePageStyles.copy}>
            The page stays thin while the map component owns its API, hook,
            types, and view logic. Shared UI remains separate for reuse.
          </p>
        </section>
      </div>
    </>
  );
}
