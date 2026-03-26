import { memo } from "react";
import MapListItemView from "./map-list-item.view";
import type { MapListItemViewProps } from "./map-list-item.type";

const MapListItemController = (props: MapListItemViewProps) => {
  return <MapListItemView {...props} />;
};

export default memo(MapListItemController);
