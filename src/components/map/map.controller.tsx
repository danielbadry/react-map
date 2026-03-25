import { useState } from "react";
import { useMap } from "./hooks/use-map.hook";
import { filterLocations, getCategories, getMapCenter } from "./map.helper";
import type { MapFilters } from "./map.type";
import MapView from "./map.view";

const MapController = () => {
  const { locations, isLoading, error } = useMap();
  const [filters, setFilters] = useState<MapFilters>({
    category: "all",
    locationQuery: "",
  });
  const filteredLocations = filterLocations(locations, filters);
  const categories = getCategories(locations);

  const handleCategoryChange = (category: string) => {
    setFilters((currentFilters) => ({
      ...currentFilters,
      category,
    }));
  };

  const handleLocationQueryChange = (value: string) => {
    setFilters((currentFilters) => ({
      ...currentFilters,
      locationQuery: value,
    }));
  };

  return (
    <MapView
      locations={filteredLocations}
      isLoading={isLoading}
      error={error}
      center={getMapCenter(filteredLocations)}
      filters={filters}
      categories={categories}
      filteredCount={filteredLocations.length}
      onCategoryChange={handleCategoryChange}
      onLocationQueryChange={handleLocationQueryChange}
    />
  );
};
export default MapController;
