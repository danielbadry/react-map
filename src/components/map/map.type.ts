export type MapLegendItem = {
  label: string;
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
};
