import { FiltersBar } from "~/components/filters/filters-bar";
import { PaginationBar } from "~/components/filters/pagination-bar";
import ProductsList from "~/components/products-list";
import { fetchProducts } from "~/lib/products-api";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function HomePage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams
  const { products, totalCount } = await fetchProducts(searchParams);

  return (
    <>
      <FiltersBar searchParams={searchParams} />
      <ProductsList products={products} />
      <PaginationBar searchParams={searchParams} totalCount={totalCount} />
    </>
  );
}
