import Link from "next/link";
import React from "react";
import { CartItem as CartItemType } from "~/lib/types";
import { Button } from "../ui/button";
import { SheetClose } from "../ui/sheet";
import { Price } from "./price";
import { ProductImage } from "./product-image";

type Props = {
  item: CartItemType;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
  onRemove: (id: string) => void;
};

export const CartItem = ({
  item,
  onIncrement,
  onDecrement,
  onRemove,
}: Props) => {
  return (
    <li className="flex py-6">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
        <ProductImage src={item.image} alt={item.name} />
      </div>
      <div className="ml-4 flex flex-col flex-1 justify-between">
        <div className="flex justify-between text-base font-medium">
          <h3>
            <SheetClose asChild>
              <Link href={`/product/${item.id}`}>{item.name}</Link>
            </SheetClose>
          </h3>
          <p>
            <Price amount={item.price * item.quantity} currencyCode="USD" />
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-1 rounded-md border">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onDecrement(item.id)}
            >
              -
            </Button>
            <span className="font-medium px-2">{item.quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onIncrement(item.id)}
            >
              +
            </Button>
          </div>
          <div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onRemove(item.id)}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
              >
                <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};
