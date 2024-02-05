import ProductSingle from "~/components/product-single";
import { fetchProduct } from "~/lib/products-api";

type Props = {
  params: {
    id: string;
  };
};
export default async function ProductPage({ params }: Props) {
  const product = await fetchProduct(params.id);

  if (!product) {
    return (
      <div>
        <h2>TODO: Product not found.</h2>
      </div>
    );
  }

  return <ProductSingle product={product} />;
}
