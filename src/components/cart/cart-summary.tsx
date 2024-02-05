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

export const CartSummary = () => {
  const { items, isOpen, toggleCart, increment, decrement, remove } = useCart();
  console.log("items", items);

  const subTotal = useMemo(() => {
    return Object.values(items).reduce(
      (accumulator, product) => product.quantity * product.price + accumulator,
      0
    );
  }, [items]);

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="max-w-full w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>My Cart</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col justify-between overflow-hidden">
          <ScrollArea>
            {Object.values(items).map((item) => (
              <CartItem
                item={item}
                key={item.id}
                onIncrement={increment}
                onDecrement={decrement}
                onRemove={remove}
              />
            ))}
          </ScrollArea>
          <div className="py-8 flex flex-col sm:flex-col border-t">
            <div className="flex justify-between text-lg font-medium">
              <p>Subtotal</p>
              <p>${subTotal}</p>
            </div>
            <p className="mb-8 text-sm text-muted-foreground">
              Shipping and taxes calculated at checkout.
            </p>
            <Button className="w-full" size="lg">
              Checkout
            </Button>
            <SheetClose asChild>
              <Button variant="link">or Continue Shopping &rarr;</Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
