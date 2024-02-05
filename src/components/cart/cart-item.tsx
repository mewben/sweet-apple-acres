import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CartItem as CartItemType } from "~/lib/types";
import { Button } from "../ui/button";

type Props = {
  item: CartItemType;
};

export const CartItem = ({ item }: Props) => {
  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
        <Image
          src={item.image ?? "/placeholder-img.jpg"}
          alt={item.name}
          width={512}
          height={512}
          quality={100}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="ml-4 flex flex-col flex-1 justify-between">
        <div className="flex justify-between text-base font-medium">
          <h3>
            <Link href={`/product/${item.id}`}>{item.name}</Link>
          </h3>
          <p>${item.price * item.quantity}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center rounded-lg border">
            <Button variant="ghost" size="icon">
              -
            </Button>
            <span className="font-medium px-2">{item.quantity}</span>
            <Button variant="ghost" size="icon">
              +
            </Button>
          </div>
          <div>
            <Button variant="link" size="sm" className="pr-0 opacity-80">
              Remove
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};
