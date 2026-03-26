import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  ZoomControl,
} from "react-leaflet";
import { useEffect, useRef } from "react";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import MapFilters from "../map-filters";
import MapListItem from "../map-list-item";
import { mapStyles } from "./map.style";
import type {
  MapCenterProps,
  MapViewProps,
  MarkerPopupControllerProps,
} from "./map.type";

const defaultIcon = new L.Icon({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const activeIcon = new L.DivIcon({
  className: "custom-map-marker",
  html: `
    <div style="position:relative;width:28px;height:40px;filter:drop-shadow(0 8px 16px rgba(13,99,200,0.28));">
      <svg width="28" height="40" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M14 39C14 39 26 25.4 26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14C2 25.4 14 39 14 39Z" fill="#0D63C8" stroke="#FFFFFF" stroke-width="3"/>
        <circle cx="14" cy="14" r="4.5" fill="#FFFFFF"/>
      </svg>
    </div>
  `,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
  popupAnchor: [0, -36],
});

const MapCenter = ({ center }: MapCenterProps) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, map.getZoom(), {
      animate: true,
    });
  }, [center, map]);

  return null;
};

const MarkerPopupController = ({
  selectedLocationId,
  markerRefs,
}: MarkerPopupControllerProps) => {
  useEffect(() => {
    if (!selectedLocationId) {
      return;
    }

    const marker = markerRefs.current[selectedLocationId];

    if (marker) {
      marker.openPopup();
    }
  }, [selectedLocationId, markerRefs]);

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
  hoveredLocationId,
  selectedLocationId,
  onCategoryChange,
  onLocationQueryChange,
  onLocationHover,
  onLocationSelect,
}: MapViewProps) => {
  const markerRefs = useRef<Record<string, L.Marker | null>>({});

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
              <MarkerPopupController
                selectedLocationId={selectedLocationId}
                markerRefs={markerRefs}
              />
              <ZoomControl position="bottomright" />
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {locations.map((location) => (
                <Marker
                  key={location.id}
                  ref={(marker) => {
                    markerRefs.current[location.id] = marker;
                  }}
                  icon={
                    location.id === selectedLocationId ||
                    location.id === hoveredLocationId
                      ? activeIcon
                      : defaultIcon
                  }
                  position={[
                    location.coordinates.lat,
                    location.coordinates.lng,
                  ]}
                  eventHandlers={{
                    click: () => onLocationSelect(location.id),
                    mouseover: () => onLocationHover(location.id),
                    mouseout: () => onLocationHover(null),
                  }}
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
