"use client";

import { useMemo } from "react";
import { Button } from "../ui/button";
import { useCart } from "./cart-store";

export const CartIcon = () => {
  const { items, updatedAt, toggleCart } = useCart();

  const totalCount = useMemo(() => {
    return Object.values(items).reduce(
      (accumulator, product) => product.quantity + accumulator,
      0
    );
  }, [updatedAt]);

  return (
    <div className="relative">
      <Button variant="ghost" size="icon" onClick={() => toggleCart(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M19 20c0 1.11-.89 2-2 2a2 2 0 01-2-2c0-1.11.89-2 2-2a2 2 0 012 2M7 18c-1.11 0-2 .89-2 2a2 2 0 002 2c1.11 0 2-.89 2-2s-.89-2-2-2m.2-3.37l-.03.12c0 .14.11.25.25.25H19v2H7a2 2 0 01-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1V2h3.27l.94 2H20c.55 0 1 .45 1 1 0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63M8.5 11H10V9H7.56l.94 2M11 9v2h3V9h-3m3-1V6h-3v2h3m3.11 1H15v2h1l1.11-2m1.67-3H15v2h2.67l1.11-2M6.14 6l.94 2H10V6H6.14z" />
        </svg>
        {totalCount > 0 && (
          <span
            className="absolute top-0 right-0 bg-red-600 text-white text-nowrap text-xs font-bold rounded-full bg-opacity-80 z-10 tracking-tighter -mt-2 -mr-2 flex items-center justify-center min-h-6 min-w-6"
            aria-label="cart-items"
          >
            {totalCount}
          </span>
        )}
      </Button>
    </div>
  );
};
