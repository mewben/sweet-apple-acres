import Link from "next/link";
import { fetchProducts } from "~/lib/fetch-products";

export default async function HomePage() {
  const products = await fetchProducts();

  return (
    <div role="list">
      {products.map((product) => {
        return (
          <div key={product.id} role="list-item">
            <Link href={`/product/${product.id}`}>{product.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
