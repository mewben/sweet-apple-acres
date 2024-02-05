"use client";

import { Product } from "~/lib/types";
import { Button } from "../ui/button";
import { useCart } from "./cart-store";

type Props = {
  product: Product;
  disabled?: boolean;
};

export const AddToCart = ({ product, disabled }: Props) => {
  const { add, toggleCart } = useCart();

  const onClick = () => {
    add(product);
    toggleCart(true);
  };

  return (
    <div className="pt-8">
      <Button
        onClick={onClick}
        aria-label="Add to cart"
        size="lg"
        className="w-full"
        disabled={disabled}
      >
        Add to cart
      </Button>
    </div>
  );
};
