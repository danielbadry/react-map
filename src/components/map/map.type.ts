export type MapLegendItem = {
  label: string;
};

export type MapCenterProps = {
  center: [number, number];
};

export type MapCategoryFilter = "all" | string;

export type MapFilters = {
  category: MapCategoryFilter;
  locationQuery: string;
};

export type MapLocation = {
  title: string;
  description: string;
  address: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  category: string;
};

export type MapState = {
  locations: MapLocation[];
  isLoading: boolean;
  error: string | null;
};

export type MapViewProps = MapState & {
  center: [number, number];
  filters: MapFilters;
  categories: string[];
  filteredCount: number;
  onCategoryChange: (category: string) => void;
  onLocationQueryChange: (value: string) => void;
};
