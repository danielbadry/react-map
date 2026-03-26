import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import MapFiltersView from "./map-filters.view";

describe("MapFiltersView", () => {
  it("renders filters and calls handlers when inputs change", async () => {
    const user = userEvent.setup();
    const onCategoryChange = vi.fn();
    const onLocationQueryChange = vi.fn();

    render(
      <MapFiltersView
        filters={{ category: "all", locationQuery: "" }}
        categories={["A", "B"]}
        onCategoryChange={onCategoryChange}
        onLocationQueryChange={onLocationQueryChange}
      />,
    );

    await user.selectOptions(screen.getByRole("combobox"), "B");
    await user.type(
      screen.getByPlaceholderText("Search by title, address, or country"),
      "Vienna",
    );

    expect(onCategoryChange).toHaveBeenCalledWith("B");
    expect(onLocationQueryChange).toHaveBeenCalled();
    expect(onLocationQueryChange).toHaveBeenLastCalledWith("a");
  });
});
