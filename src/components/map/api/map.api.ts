import type { MapLocation } from "../types/map.type";

export const fetchMapLocations = async (): Promise<MapLocation[]> => {
  const response = await fetch("/data/locations.json");

  if (!response.ok) {
    throw new Error("Unable to load map locations.");
  }

  return (await response.json()) as MapLocation[];
};
