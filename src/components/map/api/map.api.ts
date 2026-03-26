import { getLocationId } from "../map.helper";
import type { MapLocation } from "../map.type";

export const fetchMapLocations = async (): Promise<MapLocation[]> => {
  const response = await fetch("/data/locations.json");

  if (!response.ok) {
    throw new Error("Unable to load map locations.");
  }

  const locations = (await response.json()) as Omit<MapLocation, "id">[];

  return locations.map((location) => ({
    ...location,
    id: getLocationId(location),
  }));
};
