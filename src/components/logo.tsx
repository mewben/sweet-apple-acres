import Link from "next/link";
import React from "react";
import { cn } from "~/lib/utils";

type Props = {
  className?: string;
  labelClassName?: string;
};

export const Logo = ({ className, labelClassName }: Props) => {
  return (
    <Link
      href="/"
      className={cn(
        "font-semibold text-xl tracking-tight flex items-baseline gap-2 hover:opacity-75",
        className
      )}
    >
      <span className="text-2xl">🍎</span>
      <span className={labelClassName}>Sweet Apple Acres</span>
    </Link>
  );
};
