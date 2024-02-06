import { FiltersBar } from "~/components/filters/filters-bar";
import { PaginationBar } from "~/components/filters/pagination-bar";
import ProductsList from "~/components/products-list";
import { fetchProducts } from "~/lib/products-api";

type Props = {
  searchParams: Record<string, string | undefined>;
};

export default async function HomePage({ searchParams }: Props) {
  const products = await fetchProducts(searchParams);

  return (
    <>
      <FiltersBar searchParams={searchParams} />
      <ProductsList products={products} />
      <PaginationBar searchParams={searchParams} />
    </>
  );
}
