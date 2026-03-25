import { useEffect, useState } from "react";
import { fetchMapLocations } from "../api/map.api";
import type { MapState } from "../map.type";

const initialState: MapState = {
  locations: [],
  isLoading: true,
  error: null,
};

export const useMap = () => {
  const [state, setState] = useState<MapState>(initialState);

  useEffect(() => {
    async function loadLocations() {
      try {
        const locations = await fetchMapLocations();

        setState({
          locations,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        setState({
          locations: [],
          isLoading: false,
          error:
            error instanceof Error
              ? error.message
              : "Unexpected error while loading the map.",
        });
      }
    }

    void loadLocations();
  }, []);

  return state;
};
