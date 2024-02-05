import Image from "next/image";
import { Product } from "~/lib/types";
import { Rating } from "./ui/rating";
import { Badge } from "./ui/badge";
import { AddToCart } from "./cart/add-to-cart";

type Props = {
  product: Product;
};

export default function ProductSingle({ product }: Props) {
  return (
    <div className="flex flex-col md:flex-row md:p-12 md:gap-8">
      <div className="basis-full lg:basis-7/12">
        <div className="aspect-square text-center h-full w-full max-w-[512px] overflow-hidden rounded-lg mx-auto">
          <Image
            src={product.image ?? "/placeholder-img.jpg"}
            alt={product.name}
            width={512}
            height={512}
            quality={100}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
      </div>
      <div className="basis-full lg:basis-5/12 space-y-4 mt-12 md:mt-0">
        <h1 className="text-2xl font-semibold tracking-tight">
          {product.name}
        </h1>
        <p className="text-4xl" aria-label="price">
          ${product.price}
        </p>
        <Rating
          value={Math.round(product.rating)}
          tooltip={`${product.rating}/5.0`}
        />
        {!product.isAvailable && (
          <Badge variant={"destructive"} aria-label="out of stock">
            Out of stock
          </Badge>
        )}
        <AddToCart product={product} disabled={!product.isAvailable} />
        <div className="pt-12">
          <h3 className="font-semibold mb-4">Description</h3>
          <div className="prose">{product.description}</div>
        </div>
      </div>
    </div>
  );
}
