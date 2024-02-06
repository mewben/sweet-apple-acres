import { Metadata } from "next";
import Link from "next/link";
import ProductSingle from "~/components/product-single";
import { Button } from "~/components/ui/button";
import { fetchProduct } from "~/lib/products-api";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await fetchProduct(params.id);

  return {
    title: product?.name,
    description: product?.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const product = await fetchProduct(params.id);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center my-24">
        <h1 className="text-2xl tracking-tight">Product not found.</h1>
        <Button variant="link" asChild>
          <Link href="/">Browse products &rarr;</Link>
        </Button>
      </div>
    );
  }

  return <ProductSingle product={product} />;
}
