import Image from "next/image";
import React from "react";
import { CartItem as CartItemType } from "~/lib/types";
import { Price } from "./price";

type Props = {
  item: CartItemType;
};

export const OrderItem = ({ item }: Props) => {
  return (
    <li className="flex py-6 border-b">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
        <Image
          src={item.image ?? "/placeholder-img.jpg"}
          alt={item.name}
          width={512}
          height={512}
          quality={100}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="ml-4 flex flex-col flex-1">
        <div className="flex justify-between text-base font-medium">
          <h3>{item.name}</h3>
          <p>
            <Price amount={item.price * item.quantity} currencyCode="USD" />
          </p>
        </div>
        <p className="text-muted-foreground">Qty: {item.quantity}</p>
      </div>
    </li>
  );
};
