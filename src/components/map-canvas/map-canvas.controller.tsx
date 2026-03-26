import { memo } from "react";
import MapCanvasView from "./map-canvas.view";
import type { MapCanvasProps } from "./map-canvas.type";

const MapCanvasController = (props: MapCanvasProps) => {
  return <MapCanvasView {...props} />;
};

export default memo(MapCanvasController);
