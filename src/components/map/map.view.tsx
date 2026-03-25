import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  ZoomControl,
} from "react-leaflet";
import { useEffect } from "react";
import { mapStyles } from "./map.style";
import type { MapCenterProps, MapViewProps } from "./map.type";

const MapCenter = ({ center }: MapCenterProps) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, map.getZoom(), {
      animate: true,
    });
  }, [center, map]);

  return null;
};

const MapView = ({
  locations,
  isLoading,
  error,
  center,
  filters,
  categories,
  filteredCount,
  onCategoryChange,
  onLocationQueryChange,
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
            <MapContainer
              center={center}
              zoom={4}
              scrollWheelZoom
              zoomControl={false}
              style={mapStyles.canvas}
            >
              <MapCenter center={center} />
              <ZoomControl position="bottomright" />
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {locations.map((location) => (
                <Marker
                  key={`${location.title}-${location.address}`}
                  position={[
                    location.coordinates.lat,
                    location.coordinates.lng,
                  ]}
                >
                  <Popup>
                    <strong>{location.title}</strong>
                    <p>{location.description}</p>
                    <p>
                      {location.address}, {location.country}
                    </p>
                    <p>Category: {location.category}</p>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>

            <div style={mapStyles.filters}>
              <label style={mapStyles.field}>
                <span style={mapStyles.label}>Filter by category</span>
                <select
                  value={filters.category}
                  onChange={(event) => onCategoryChange(event.target.value)}
                  style={mapStyles.select}
                >
                  <option value="all">All categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      Category {category}
                    </option>
                  ))}
                </select>
              </label>

              <label style={mapStyles.field}>
                <span style={mapStyles.label}>Filter by location</span>
                <input
                  type="text"
                  value={filters.locationQuery}
                  onChange={(event) =>
                    onLocationQueryChange(event.target.value)
                  }
                  placeholder="Search by title, address, or country"
                  style={mapStyles.input}
                />
              </label>
            </div>

            <div style={mapStyles.summary}>
              <p style={mapStyles.summaryTitle}>
                {filteredCount} location{filteredCount === 1 ? "" : "s"} found.
              </p>
            </div>

            <div style={mapStyles.grid}>
              {locations.map((location) => (
                <article
                  key={`${location.title}-${location.country}`}
                  style={mapStyles.card}
                >
                  <span style={mapStyles.badge}>
                    Category {location.category}
                  </span>
                  <strong>{location.title}</strong>
                  <p style={mapStyles.meta}>{location.description}</p>
                  <p style={mapStyles.meta}>
                    {location.address}, {location.country}
                  </p>
                </article>
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
