export type MapLegendItem = {
  label: string;
};

export type MapCategoryFilter = "all" | string;

export type MapFilters = {
  category: MapCategoryFilter;
  locationQuery: string;
};

export type MapLocation = {
  id: string;
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
  hoveredLocationId: string | null;
  selectedLocationId: string | null;
  onCategoryChange: (category: string) => void;
  onLocationQueryChange: (value: string) => void;
  onLocationHover: (locationId: string | null) => void;
  onLocationSelect: (locationId: string) => void;
};
