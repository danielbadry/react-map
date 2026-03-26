import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import MapCanvasView from "./map-canvas.view";

vi.mock("react-leaflet", () => ({
  MapContainer: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="map-container">{children}</div>
  ),
  Marker: ({
    children,
    eventHandlers,
  }: {
    children: React.ReactNode;
    eventHandlers?: { click?: () => void; mouseover?: () => void };
  }) => (
    <button
      type="button"
      data-testid="marker"
      onClick={eventHandlers?.click}
      onMouseOver={eventHandlers?.mouseover}
    >
      {children}
    </button>
  ),
  Popup: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  TileLayer: () => <div data-testid="tile-layer" />,
  ZoomControl: () => <div data-testid="zoom-control" />,
  useMap: () => ({
    setView: vi.fn(),
    getZoom: vi.fn(() => 4),
  }),
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

describe("MapCanvasView", () => {
  it("renders map internals and location popup content", () => {
    render(
      <MapCanvasView
        locations={locations}
        center={[48.1984, 16.3446]}
        hoveredLocationId={null}
        selectedLocationId={locations[0].id}
        onLocationHover={vi.fn()}
        onLocationSelect={vi.fn()}
      />,
    );

    expect(screen.getByTestId("map-container")).toBeInTheDocument();
    expect(screen.getByTestId("tile-layer")).toBeInTheDocument();
    expect(screen.getByTestId("zoom-control")).toBeInTheDocument();
    expect(screen.getByText("Vienna Innovation Hub")).toBeInTheDocument();
    expect(screen.getByText("Urban mobility workspace.")).toBeInTheDocument();
  });
});
