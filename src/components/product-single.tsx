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
    <div>
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          src={product.image ?? "/placeholder-img.jpg"}
          alt={product.name}
          width={512}
          height={512}
          quality={100}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h1 className="mt-4 text-sm text-gray-700">{product.name}</h1>
      <p>{product.description}</p>
      <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
      {!product.isAvailable && (
        <Badge
          variant={"destructive"}
          aria-label="sold out"
          className="absolute top-0 right-0 m-2"
        >
          Sold out
        </Badge>
      )}
      <Rating
        value={Math.round(product.rating)}
        tooltip={`${product.rating}/5.0`}
      />
      <AddToCart />
    </div>
  );
}
