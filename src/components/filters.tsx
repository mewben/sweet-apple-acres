"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { FetchProductsParams } from "~/lib/types";

type Props = {
  searchParams: FetchProductsParams;
};

export const Filters = ({ searchParams }: Props) => {
  const router = useRouter();

  const onChangeLimit = (v: string) => {
    const params = new URLSearchParams({
      ...searchParams,
      limit: v,
    });

    router.push(`/?${params.toString()}`, { scroll: false });
  };

  return (
    <div>
      Filters: Limit:
      <Button onClick={() => onChangeLimit("2")}>
        2 {searchParams.limit === "2" ? "Active" : ""}
      </Button>
      <Button onClick={() => onChangeLimit("5")}>
        5 {searchParams.limit === "5" ? "Active" : ""}
      </Button>
    </div>
  );
};
