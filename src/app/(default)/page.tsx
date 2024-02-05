import ProductsList from "~/components/products-list";
import { fetchProducts } from "~/lib/fetch-products";

export default async function HomePage() {
  const products = await fetchProducts();

  return <ProductsList products={products} />;
}
