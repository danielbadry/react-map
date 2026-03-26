import type { MapLocation } from "../map/map.type";

export type MapListItemViewProps = {
  location: MapLocation;
  isHovered: boolean;
  isSelected: boolean;
  onLocationHover: (locationId: string | null) => void;
  onLocationSelect: (locationId: string) => void;
};
