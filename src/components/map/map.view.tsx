import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import { mapStyles } from "./map.style";
import type { MapViewProps } from "./map.type";

const MapView = ({ locations, isLoading, error, center }: MapViewProps) => {
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
          </>
        ) : null}
      </div>
    </section>
  );
};
export default MapView;
