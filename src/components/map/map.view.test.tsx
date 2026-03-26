import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import MapView from "./map.view";

vi.mock("../map-canvas", () => ({
  default: () => <div data-testid="map-canvas" />,
}));

vi.mock("../map-filters", () => ({
  default: () => <div data-testid="map-filters" />,
}));

vi.mock("../map-list-item", () => ({
  default: ({ location }: { location: { title: string } }) => (
    <div data-testid="map-list-item">{location.title}</div>
  ),
}));

const locations = [
  {
    id: "vienna-innovation-hub",
    title: "Vienna Innovation Hub",
    description: "Urban mobility workspace.",
    address: "Mariahilfer Strasse 54",
    country: "Austria",
    coordinates: { lat: 48.1984, lng: 16.3446 },
    category: "A",
  },
];

describe("MapView", () => {
  it("renders composed map sections and summary", () => {
    render(
      <MapView
        locations={locations}
        isLoading={false}
        error={null}
        center={[48.1984, 16.3446]}
        filters={{ category: "all", locationQuery: "" }}
        categories={["A"]}
        filteredCount={1}
        hoveredLocationId={null}
        selectedLocationId={locations[0].id}
        onCategoryChange={vi.fn()}
        onLocationQueryChange={vi.fn()}
        onLocationHover={vi.fn()}
        onLocationSelect={vi.fn()}
      />,
    );

    expect(screen.getByTestId("map-canvas")).toBeInTheDocument();
    expect(screen.getByTestId("map-filters")).toBeInTheDocument();
    expect(screen.getByText("1 location found.")).toBeInTheDocument();
    expect(screen.getByTestId("map-list-item")).toHaveTextContent(
      "Vienna Innovation Hub",
    );
  });
});
