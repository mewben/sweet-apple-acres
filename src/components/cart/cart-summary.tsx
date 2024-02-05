"use client";

import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { useCart } from "./cart-store";

export const CartSummary = () => {
  const { isOpen, toggleCart } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="max-w-full w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>My Cart</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col justify-between overflow-hidden">
          <ScrollArea>TODO: cart items here</ScrollArea>
          <div className="py-8 flex flex-col sm:flex-col border-t">
            <div className="flex justify-between text-lg font-medium">
              <p>Subtotal</p>
              <p>TODO: $259.00</p>
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
