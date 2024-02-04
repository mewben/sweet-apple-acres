import { expect, test, describe, afterEach } from "vitest";
import { render, screen, cleanup } from "~/lib/test-utils";
import ProductSingle from "./product-single";

const product1 = {
  id: "6dbf5cb7-828a-4375-8796-40d2cdfa532d",
  name: "Barrel of Apple Cider",
  description:
    "Apple cider season is here! Don't wait in line with no guarantee that we won't run out, get your online orders in today!",
  image: "https://sweet-apple-acres.netlify.app/images/barrel-of-cider.jpg",
  price: 27.98,
  rating: 4.8,
  releated: [],
  isAvailable: true,
};

const product2 = {
  id: "b85be051-5faf-452d-bb4b-1b44d9440a9e",
  name: "Honey Jar",
  description: "Made by bees - nice ones mostly.",
  image: "https://sweet-apple-acres.netlify.app/images/honey-jar.jpg",
  price: 3,
  rating: 3.3,
  releated: [],
  isAvailable: false,
};

const product3 = {
  id: "4b524181-6bfa-476d-a736-99bf08bdb2b7",
  name: "Apple Butter",
  description: "Spread made by cooking down apples with sugar and spices.",
  image: null,
  price: 5,
  rating: 4,
  releated: [],
  isAvailable: true,
};

afterEach(() => {
  cleanup(); // cleanup the dom for each test
});

describe("Product Single Page", () => {
  test("should show all info on the product", () => {
    render(<ProductSingle product={product1} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toMatch(
      product1.name
    );
    expect(screen.getByText(product1.description)).toBeDefined();
    expect(screen.getByText(product1.price)).toBeDefined();
    const imgParts = product1.image.split("/");
    expect(screen.getByRole("img").getAttribute("src")).toMatch(
      imgParts[imgParts.length - 1]
    );
    expect(
      screen.getByLabelText(`Rating: ${product1.rating}/5.0`)
    ).toBeDefined();
    expect(screen.getByRole("button", { name: "Add to cart" })).toBeDefined();
  });
});
