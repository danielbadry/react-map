import type { MapFilters, MapLocation } from "./map.type";

export const getMapCenter = (locations: MapLocation[]): [number, number] => {
  if (locations.length === 0) {
    return [48.2082, 16.3738]; //default map center
  }

  const [firstLocation] = locations;

  return [firstLocation.coordinates.lat, firstLocation.coordinates.lng];
};

export const getCategories = (locations: MapLocation[]): string[] => {
  return Array.from(new Set(locations.map((location) => location.category)));
};

export const filterLocations = (
  locations: MapLocation[],
  filters: MapFilters,
): MapLocation[] => {
  const query = filters.locationQuery.trim().toLowerCase();

  return locations.filter((location) => {
    const matchesCategory =
      filters.category === "all" || location.category === filters.category;

    const matchesLocation =
      query.length === 0 ||
      [location.title, location.address, location.country]
        .join(" ")
        .toLowerCase()
        .includes(query);

    return matchesCategory && matchesLocation;
  });
};

export const getLocationId = (
  location: Omit<MapLocation, "id">,
): string => {
  return `${location.title}-${location.address}-${location.country}`
    .toLowerCase()
    .replace(/\s+/g, "-");
};
