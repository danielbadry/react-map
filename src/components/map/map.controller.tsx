import { useCallback, useEffect, useState } from "react";
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
  const [hoveredLocationId, setHoveredLocationId] = useState<string | null>(null);
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);
  const filteredLocations = filterLocations(locations, filters);
  const categories = getCategories(locations);

  useEffect(() => {
    if (filteredLocations.length === 0) {
      setSelectedLocationId(null);
      setHoveredLocationId(null);
      return;
    }

    const hasSelectedLocation = filteredLocations.some(
      (location) => location.id === selectedLocationId,
    );

    if (!hasSelectedLocation) {
      setSelectedLocationId(filteredLocations[0].id);
    }

    const hasHoveredLocation = filteredLocations.some(
      (location) => location.id === hoveredLocationId,
    );

    if (!hasHoveredLocation) {
      setHoveredLocationId(null);
    }
  }, [filteredLocations, hoveredLocationId, selectedLocationId]);

  const handleCategoryChange = useCallback((category: string) => {
    setFilters((currentFilters) => ({
      ...currentFilters,
      category,
    }));
  }, []);

  const handleLocationQueryChange = useCallback((value: string) => {
    setFilters((currentFilters) => ({
      ...currentFilters,
      locationQuery: value,
    }));
  }, []);

  const handleLocationHover = useCallback((locationId: string | null) => {
    setHoveredLocationId(locationId);
  }, []);

  const handleLocationSelect = useCallback((locationId: string) => {
    setSelectedLocationId(locationId);
  }, []);

  const selectedLocation =
    filteredLocations.find((location) => location.id === selectedLocationId) ??
    filteredLocations[0] ??
    null;

  return (
    <MapView
      locations={filteredLocations}
      isLoading={isLoading}
      error={error}
      center={getMapCenter(selectedLocation ? [selectedLocation] : [])}
      filters={filters}
      categories={categories}
      filteredCount={filteredLocations.length}
      hoveredLocationId={hoveredLocationId}
      selectedLocationId={selectedLocationId}
      onCategoryChange={handleCategoryChange}
      onLocationQueryChange={handleLocationQueryChange}
      onLocationHover={handleLocationHover}
      onLocationSelect={handleLocationSelect}
    />
  );
};
export default MapController;
