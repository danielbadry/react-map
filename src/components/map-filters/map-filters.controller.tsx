import { memo } from "react";
import MapFiltersView from "./map-filters.view";
import type { MapFiltersViewProps } from "./map-filters.type";

const MapFiltersController = (props: MapFiltersViewProps) => {
  return <MapFiltersView {...props} />;
};

export default memo(MapFiltersController);
