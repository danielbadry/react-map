import {
  getMapListItemButtonStyle,
  getMapListItemCardStyle,
  mapListItemStyles,
} from "./map-list-item.style";
import type { MapListItemViewProps } from "./map-list-item.type";

const MapListItemView = ({
  location,
  isHovered,
  isSelected,
  onLocationHover,
  onLocationSelect,
}: MapListItemViewProps) => {
  return (
    <article
      style={getMapListItemCardStyle(isHovered)}
      onMouseEnter={() => onLocationHover(location.id)}
      onMouseLeave={() => onLocationHover(null)}
    >
      <span style={mapListItemStyles.badge}>Category {location.category}</span>
      <strong>{location.title}</strong>
      <p style={mapListItemStyles.meta}>{location.description}</p>
      <p style={mapListItemStyles.meta}>
        {location.address}, {location.country}
      </p>
      <button
        type="button"
        style={getMapListItemButtonStyle(isSelected)}
        onClick={() => onLocationSelect(location.id)}
      >
        {isSelected ? "Selected" : "Select"}
      </button>
    </article>
  );
};

export default MapListItemView;
