import MapCanvas from "../map-canvas";
import MapFilters from "../map-filters";
import MapListItem from "../map-list-item";
import { mapStyles } from "./map.style";
import type { MapViewProps } from "./map.type";

const MapView = ({
  locations,
  isLoading,
  error,
  center,
  filters,
  categories,
  filteredCount,
  hoveredLocationId,
  selectedLocationId,
  onCategoryChange,
  onLocationQueryChange,
  onLocationHover,
  onLocationSelect,
}: MapViewProps) => {
  return (
    <section style={mapStyles.section}>
      <div style={mapStyles.frame}>
        {isLoading ? (
          <div style={mapStyles.state}>Loading locations from fake JSON...</div>
        ) : null}

        {error ? <div style={mapStyles.state}>{error}</div> : null}

        {!isLoading && !error ? (
          <>
            <MapCanvas
              locations={locations}
              center={center}
              hoveredLocationId={hoveredLocationId}
              selectedLocationId={selectedLocationId}
              onLocationHover={onLocationHover}
              onLocationSelect={onLocationSelect}
            />

            <MapFilters
              filters={filters}
              categories={categories}
              onCategoryChange={onCategoryChange}
              onLocationQueryChange={onLocationQueryChange}
            />

            <div style={mapStyles.summary}>
              <p style={mapStyles.summaryTitle}>
                {filteredCount} location{filteredCount === 1 ? "" : "s"} found.
              </p>
            </div>

            <div style={mapStyles.grid}>
              {locations.map((location) => (
                <MapListItem
                  key={location.id}
                  location={location}
                  isHovered={location.id === hoveredLocationId}
                  isSelected={location.id === selectedLocationId}
                  onLocationHover={onLocationHover}
                  onLocationSelect={onLocationSelect}
                />
              ))}
            </div>

            {filteredCount === 0 ? (
              <div style={mapStyles.state}>
                No locations match the selected category and location filter.
              </div>
            ) : null}
          </>
        ) : null}
      </div>
    </section>
  );
};
export default MapView;
