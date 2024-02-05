"use client";

import { useMemo } from "react";
import { useCart } from "./cart-store";
import { OrderItem } from "./order-item";
import { CartItem } from "~/lib/types";
import { Button } from "../ui/button";
import Link from "next/link";
import { Price } from "./price";

const SHIPPING_FEE = 0; // Hardcoded for now;
const TAX = 0; // 5%, Hardcoded for now;

type Props = {
  items: Record<string, CartItem>;
  subTotal: number;
  tax: number;
  total: number;
};

const OrderSummary = ({ items = {}, subTotal, tax, total }: Props) => {
  return (
    <>
      <ul>
        {Object.values(items).map((item) => (
          <OrderItem item={item} key={item.id} />
        ))}
      </ul>
      <dl className="gap-4 flex flex-col pt-4">
        <div className="flex justify-between">
          <dt>Subtotal</dt>
          <dt>
            <Price amount={subTotal} currencyCode="USD" />
          </dt>
        </div>
        <div className="flex justify-between">
          <dt>Shipping</dt>
          <dt>
            <Price amount={SHIPPING_FEE} currencyCode="USD" />
          </dt>
        </div>
        <div className="flex justify-between">
          <dt>Taxes ({TAX}%)</dt>
          <dt>
            <Price amount={tax} currencyCode="USD" />
          </dt>
        </div>
        <div className="flex justify-between border-t font-semibold text-lg pt-4 tracking-tight">
          <dt>Total</dt>
          <dt>
            <Price amount={total} currencyCode="USD" />
          </dt>
        </div>
      </dl>
    </>
  );
};

export const OrderSummaryWrapper = () => {
  const { items, updatedAt } = useCart();

  const { subTotal, tax, total } = useMemo(() => {
    const subTotal = Object.values(items).reduce(
      (accumulator, product) => product.quantity * product.price + accumulator,
      0
    );
    const tax = (subTotal * TAX) / 100;
    const total = subTotal + tax + SHIPPING_FEE;

    return { subTotal, tax, total };
  }, [updatedAt]);

  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold">Order Summary</h3>
      {Object.keys(items).length === 0 ? (
        <EmptyState />
      ) : (
        <OrderSummary
          items={items}
          subTotal={subTotal}
          tax={tax}
          total={total}
        />
      )}
    </div>
  );
};

const EmptyState = () => {
  return (
    <Button
      variant={"outline"}
      className="border-dashed border-2 py-12 my-6"
      asChild
    >
      <Link href="/" className="flex flex-col gap-2">
        <div>No items</div>
        <div className="text-muted-foreground">Browse products &rarr;</div>
      </Link>
    </Button>
  );
};
