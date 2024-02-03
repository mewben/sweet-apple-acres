import { fetchProduct } from "~/lib/fetch-products";

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

  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
}
