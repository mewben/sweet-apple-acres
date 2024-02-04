import { Product } from "~/lib/types";
import ProductCard from "./product-card";

type Props = {
  products: Product[];
};
export default function ProductsList({ products }: Props) {
  return (
    <div
      role="list"
      className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
    >
      {products.map((product, i) => {
        return <ProductCard product={product} key={i} />;
      })}
    </div>
  );
}
