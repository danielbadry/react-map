import { mapFiltersStyles } from "./map-filters.style";
import type { MapFiltersViewProps } from "./map-filters.type";

const MapFiltersView = ({
  filters,
  categories,
  onCategoryChange,
  onLocationQueryChange,
}: MapFiltersViewProps) => {
  return (
    <div style={mapFiltersStyles.filters}>
      <label style={mapFiltersStyles.field}>
        <span style={mapFiltersStyles.label}>Filter by category</span>
        <select
          value={filters.category}
          onChange={(event) => onCategoryChange(event.target.value)}
          style={mapFiltersStyles.select}
        >
          <option value="all">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              Category {category}
            </option>
          ))}
        </select>
      </label>

      <label style={mapFiltersStyles.field}>
        <span style={mapFiltersStyles.label}>Filter by location</span>
        <input
          type="text"
          value={filters.locationQuery}
          onChange={(event) => onLocationQueryChange(event.target.value)}
          placeholder="Search by title, address, or country"
          style={mapFiltersStyles.input}
        />
      </label>
    </div>
  );
};

export default MapFiltersView;
