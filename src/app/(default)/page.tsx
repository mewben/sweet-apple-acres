import { Filters } from "~/components/filters";
import ProductsList from "~/components/products-list";
import { fetchProducts } from "~/lib/products-api";

type Props = {
  searchParams: Record<string, string | undefined>;
};

export default async function HomePage({ searchParams }: Props) {
  const products = await fetchProducts(searchParams);

  return (
    <>
      <Filters searchParams={searchParams} />
      <ProductsList products={products} />
    </>
  );
}
