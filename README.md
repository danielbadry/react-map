# react-map

Small React + TypeScript map application built with Vite.  
It loads fake location data from JSON, shows the data on a map, and renders a synchronized list with filtering and selection behavior.

## Setup

There are two ways to run the project:

- with Docker
- with local development commands

### Run with Docker

Build and start the app:

```bash
docker compose up --build
```

Open:

```text
http://localhost:8080
```

Stop containers:

```bash
docker compose down
```


### Local development

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

### Production build

```bash
npm run build
```

### Run tests

```bash
npm test
```

## Technical Decisions

- Used `React + TypeScript + Vite` for a fast development workflow and simple build setup.
- Used `Leaflet + react-leaflet` because it is lightweight, easy to integrate, and works well for this assignment.
- Kept a component-based structure with clear separation between:
  - `map`
  - `map-list-item`
  - `map-filters`
- Split each UI unit into `controller`, `view`, `style`, and `type` files to keep logic, rendering, styles, and typing separate.
- Kept page/app structure thin and pushed most UI behavior into components.
- Used a fake JSON file in `public/data/locations.json` so the API flow stays simple and easy to replace later.
- Added selection and hover syncing between map markers and list items to match the requested interaction behavior.
- Explicitly imported Leaflet marker image assets so default markers work correctly in production and Docker builds.
- Added `Vitest` for unit testing.

## What I Would Improve With More Time

- Add routing so the app can scale beyond a single screen without overloading the root app component.
- Add configuration to switch map providers more easily, for example between Leaflet/OpenStreetMap, Google Maps, or Mapbox.
- Explore a more event-driven coordination layer between the map and the list, for example via listeners/pub-sub, so interactive parts could be decoupled further instead of relying only on shared React state.
- Use `AbortController` in the data-fetching hook to cancel in-flight requests when the component unmounts or a newer request replaces the old one.
- Extend tests for filtering, selection, and marker/list synchronization behavior.
- Add responsive polish and a small design system for shared spacing, typography, and interactive states.
