import type { MapLocation } from "./map.type";

export const getMapCenter = (locations: MapLocation[]): [number, number] => {
  if (locations.length === 0) {
    return [48.2082, 16.3738]; //default map center
  }

  const [firstLocation] = locations;

  return [firstLocation.coordinates.lat, firstLocation.coordinates.lng];
};
