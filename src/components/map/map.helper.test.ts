import { describe, expect, it } from "vitest";
import { filterLocations } from "./map.helper";
import type { MapLocation } from "./map.type";

const locations: MapLocation[] = [
  {
    id: "vienna-innovation-hub",
    title: "Vienna Innovation Hub",
    description: "Urban mobility workspace.",
    address: "Mariahilfer Strasse 54",
    country: "Austria",
    coordinates: { lat: 48.1984, lng: 16.3446 },
    category: "A",
  },
  {
    id: "berlin-creative-campus",
    title: "Berlin Creative Campus",
    description: "Prototype campus.",
    address: "Oranienburger Strasse 27",
    country: "Germany",
    coordinates: { lat: 52.5251, lng: 13.3889 },
    category: "B",
  },
  {
    id: "graz-mapping-atelier",
    title: "Graz Mapping Atelier",
    description: "Map interface studio.",
    address: "Herrengasse 16",
    country: "Austria",
    coordinates: { lat: 47.0707, lng: 15.4395 },
    category: "B",
  },
];

describe("filterLocations", () => {
  it("filters by category and location query together", () => {
    const result = filterLocations(locations, {
      category: "B",
      locationQuery: "austria",
    });

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("graz-mapping-atelier");
  });
});
