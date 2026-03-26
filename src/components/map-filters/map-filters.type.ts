import type { MapFilters } from "../map/map.type";

export type MapFiltersViewProps = {
  filters: MapFilters;
  categories: string[];
  onCategoryChange: (category: string) => void;
  onLocationQueryChange: (value: string) => void;
};
