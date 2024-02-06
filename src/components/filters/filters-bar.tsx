"use client";

import { useRouter } from "next/navigation";
import { FetchProductsParams } from "~/lib/types";
import { SortFilter } from "./sort-filter";
import { SortByFilter } from "./sort-by-filter";
import { ShowAvailableFilter } from "./show-available-filter";
import { RatingFilter } from "./rating-filter";
import { PriceFilter } from "./price-filter";

type Props = {
  searchParams: FetchProductsParams;
};

export const FiltersBar = ({ searchParams }: Props) => {
  const router = useRouter();

  const onChangeFilter = (data: Record<string, string>) => {
    const params = new URLSearchParams({
      ...searchParams,
      ...data,
    });

    router.push(`/?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 my-8 items-center">
      <h4 className="font-medium">Filters: </h4>
      <RatingFilter
        minValue={searchParams.minRating || ""}
        maxValue={searchParams.maxRating || ""}
        onChange={(data: Record<string, string>) => {
          onChangeFilter(data);
        }}
      />
      <PriceFilter
        minValue={searchParams.minPrice || ""}
        maxValue={searchParams.maxPrice || ""}
        onChange={(data: Record<string, string>) => {
          onChangeFilter(data);
        }}
      />
      <SortByFilter
        value={searchParams.orderBy || "name"}
        onChange={(v: string) => onChangeFilter({ orderBy: v })}
      />
      <SortFilter
        value={searchParams.sort || "DESC"}
        onChange={(v: string) => onChangeFilter({ sort: v })}
      />
      <ShowAvailableFilter
        value={searchParams.isAvailable || ""}
        onChange={(v: string) => onChangeFilter({ isAvailable: v })}
      />
    </div>
  );
};
