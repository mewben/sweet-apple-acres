"use client";

import { useMemo } from "react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { CartItem } from "./cart-item";
import { useCart } from "./cart-store";
import Link from "next/link";
import { Price } from "./price";

export const CartSummary = () => {
  const {
    items,
    updatedAt,
    isOpen,
    toggleCart,
    increment,
    decrement,
    remove,
    reset,
  } = useCart();

  const subTotal = useMemo(() => {
    return Object.values(items).reduce(
      (accumulator, product) => product.quantity * product.price + accumulator,
      0
    );
  }, [updatedAt]);

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="max-w-full w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex gap-2">
            <p>My Cart</p>
            <Button variant="outline" size="icon" onClick={() => reset()}>
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
          </SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col justify-between overflow-hidden">
          <ScrollArea>
            <ul>
              {Object.values(items).map((item) => (
                <CartItem
                  item={item}
                  key={item.id}
                  onIncrement={increment}
                  onDecrement={decrement}
                  onRemove={remove}
                />
              ))}
            </ul>
          </ScrollArea>
          <div className="py-8 flex flex-col sm:flex-col border-t">
            <div className="flex justify-between text-lg font-medium">
              <p>Subtotal</p>
              <p>
                <Price amount={subTotal} currencyCode="USD" />
              </p>
            </div>
            <p className="mb-8 text-sm text-muted-foreground">
              Shipping and taxes calculated at checkout.
            </p>
            <SheetClose asChild>
              <Button className="w-full" size="lg" asChild>
                <Link href="/checkout">Checkout</Link>
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button variant="link">or Continue Shopping &rarr;</Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
