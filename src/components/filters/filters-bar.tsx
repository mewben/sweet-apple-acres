"use client";

import { useRouter } from "next/navigation";
import { FetchProductsParams } from "~/lib/types";
import { SortFilter } from "./sort-filter";
import { SortByFilter } from "./sort-by-filter";
import { ShowAvailableFilter } from "./show-available-filter";
import { RatingFilter } from "./rating-filter";
import { PriceFilter } from "./price-filter";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { searchFilterQueryBuilder } from "~/lib/search-filter-query-builder";
import { INITIAL_FILTERS } from "~/lib/constants";

type Props = {
  searchParams: FetchProductsParams;
};

export const FiltersBar = ({ searchParams }: Props) => {
  const router = useRouter();

  const onChangeFilter = (data: Record<string, string>) => {
    const merged = {
      ...searchParams,
      ...data,
    };

    const params = searchFilterQueryBuilder(merged);

    router.push(`/?${params}`, { scroll: false });
  };

  const isDirty =
    Object.values(searchParams).filter((value) => !!value).length > 0;

  return (
    <div className="flex flex-col md:flex-row gap-2 my-8 items-center">
      <h4 className="font-medium">Filters: </h4>
      <PriceFilter
        minValue={searchParams.minPrice}
        maxValue={searchParams.maxPrice}
        onChange={(data: Record<string, string>) => {
          onChangeFilter(data);
        }}
      />
      <RatingFilter
        minValue={searchParams.minRating}
        maxValue={searchParams.maxRating}
        onChange={(data: Record<string, string>) => {
          onChangeFilter(data);
        }}
      />
      <SortByFilter
        value={searchParams.orderBy}
        onChange={(v: string) => onChangeFilter({ orderBy: v })}
      />
      <SortFilter
        value={searchParams.sort}
        onChange={(v: string) => onChangeFilter({ sort: v })}
      />
      <ShowAvailableFilter
        value={searchParams.isAvailable}
        onChange={(v: string) => onChangeFilter({ isAvailable: v })}
      />
      {isDirty && (
        <Button
          variant="outline"
          onClick={() => onChangeFilter(INITIAL_FILTERS)}
          className="h-8 text-xs"
        >
          <Cross2Icon className="h-3 w-3" />
          &nbsp; Clear Filters
        </Button>
      )}
    </div>
  );
};
