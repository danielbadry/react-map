import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { AppView } from "./App.view";

vi.mock("../../components/map", () => ({
  Map: () => <div data-testid="app-map" />,
}));

describe("AppView", () => {
  it("renders the map entry point inside the app shell", () => {
    render(<AppView />);

    expect(screen.getByTestId("app-map")).toBeInTheDocument();
  });
});
