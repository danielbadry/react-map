import type { MutableRefObject } from "react";
import type { Marker as LeafletMarker } from "leaflet";
import type { MapLocation } from "../map/map.type";

export type MapCanvasProps = {
  locations: MapLocation[];
  center: [number, number];
  hoveredLocationId: string | null;
  selectedLocationId: string | null;
  onLocationHover: (locationId: string | null) => void;
  onLocationSelect: (locationId: string) => void;
};

export type MapCenterProps = {
  center: [number, number];
};

export type MarkerPopupControllerProps = {
  selectedLocationId: string | null;
  markerRefs: MutableRefObject<Record<string, LeafletMarker | null>>;
};
