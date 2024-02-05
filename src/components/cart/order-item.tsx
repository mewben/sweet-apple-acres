import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CartItem as CartItemType } from "~/lib/types";
import { Button } from "../ui/button";
import { SheetClose } from "../ui/sheet";

const product1 = {
  id: "6dbf5cb7-828a-4375-8796-40d2cdfa532d",
  name: "Barrel of Apple Cider",
  description:
    "Apple cider season is here! Don't wait in line with no guarantee that we won't run out, get your online orders in today!",
  image: "https://sweet-apple-acres.netlify.app/images/barrel-of-cider.jpg",
  price: 27.98,
  rating: 4.8,
  releated: [],
  isAvailable: true,
  quantity: 2,
};

type Props = {
  item?: CartItemType;
};

export const OrderItem = ({ item = product1 }: Props) => {
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
          <p>${item.price * item.quantity}</p>
        </div>
        <p className="text-muted-foreground">Qty: {item.quantity}</p>
      </div>
    </li>
  );
};
