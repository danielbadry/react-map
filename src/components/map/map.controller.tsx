import { useMap } from "./hooks/use-map.hook";
import { getMapCenter } from "./map.helper";
import MapView from "./map.view";

const MapController = () => {
  const { locations, isLoading, error } = useMap();

  return (
    <MapView
      locations={locations}
      isLoading={isLoading}
      error={error}
      center={getMapCenter(locations)}
    />
  );
};
export default MapController;
