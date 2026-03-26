import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import MapListItemView from "./map-list-item.view";

const location = {
  id: "vienna-innovation-hub",
  title: "Vienna Innovation Hub",
  description: "Urban mobility workspace.",
  address: "Mariahilfer Strasse 54",
  country: "Austria",
  coordinates: { lat: 48.1984, lng: 16.3446 },
  category: "A",
};

describe("MapListItemView", () => {
  it("renders location data and reacts to hover and select", async () => {
    const user = userEvent.setup();
    const onLocationHover = vi.fn();
    const onLocationSelect = vi.fn();

    render(
      <MapListItemView
        location={location}
        isHovered={false}
        isSelected={false}
        onLocationHover={onLocationHover}
        onLocationSelect={onLocationSelect}
      />,
    );

    const article = screen.getByText("Vienna Innovation Hub").closest("article");

    await user.hover(article!);
    await user.click(screen.getByRole("button", { name: "Select" }));
    await user.unhover(article!);

    expect(onLocationHover).toHaveBeenCalledWith(location.id);
    expect(onLocationHover).toHaveBeenLastCalledWith(null);
    expect(onLocationSelect).toHaveBeenCalledWith(location.id);
  });
});
