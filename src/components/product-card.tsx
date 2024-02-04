import Image from "next/image";
import Link from "next/link";
import { Product } from "~/lib/types";
import { Rating } from "./ui/rating";
import { Badge } from "./ui/badge";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group relative"
      role="listitem"
    >
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
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
      {!product.isAvailable && (
        <Badge
          variant={"destructive"}
          aria-label="out of stock"
          className="absolute top-0 right-0 m-2"
        >
          Out of stock
        </Badge>
      )}
      <Rating
        value={Math.round(product.rating)}
        tooltip={`${product.rating}/5.0`}
      />
    </Link>
  );
}
