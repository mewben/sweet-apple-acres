import { expect, test, describe, afterEach } from "vitest";
import { render, screen, cleanup } from "~/lib/test-utils";
import ProductsList from "./products-list";

const fakeProducts = [
  {
    id: "6dbf5cb7-828a-4375-8796-40d2cdfa532d",
    name: "Barrel of Apple Cider",
    description:
      "Apple cider season is here! Don't wait in line with no guarantee that we won't run out, get your online orders in today!",
    image: "https://sweet-apple-acres.netlify.app/images/barrel-of-cider.jpg",
    price: 27.98,
    rating: 4.8,
    releated: [],
    isAvailable: true,
  },
  {
    id: "b85be051-5faf-452d-bb4b-1b44d9440a9e",
    name: "Honey Jar",
    description: "Made by bees - nice ones mostly.",
    image: "https://sweet-apple-acres.netlify.app/images/honey-jar.jpg",
    price: 3,
    rating: 3.3,
    releated: [],
    isAvailable: false,
  },
];

afterEach(() => {
  cleanup(); // cleanup the dom for each test
});

describe("Products List", () => {
  test("should list the products", () => {
    render(<ProductsList products={fakeProducts} />);
    expect(screen.getByRole("list")).toBeDefined();
    expect(screen.getAllByRole("listitem").length).to.equal(2);
  });

  test("should show blank when products are empty", () => {
    render(<ProductsList products={[]} />);
    expect(screen.getByRole("list")).toBeDefined();
    expect(screen.queryByRole("listitem")).toBeNull();
  });
});
