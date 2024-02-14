"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useRouter } from "next/navigation";
import { FetchProductsParams } from "~/lib/types";
import { searchFilterQueryBuilder } from "~/lib/search-filter-query-builder";
import { DEFAULT_LIMIT_PER_PAGE } from "~/lib/constants";

type Props = {
  searchParams: FetchProductsParams;
  totalCount: number;
};

export const PaginationBar = ({ searchParams, totalCount }: Props) => {
  const router = useRouter();

  const offset = searchParams.offset ?? "0";
  const limit = searchParams.limit ?? DEFAULT_LIMIT_PER_PAGE;
  const page = +offset / +limit + 1;
  const totalPages = Math.ceil(totalCount / +limit);

  const canPrev = page > 1;
  const canNext = page < totalPages;

  const onChange = (data: Record<string, string>) => {
    const merged = {
      ...searchParams,
      ...data,
    };

    const params = searchFilterQueryBuilder(merged);
    router.push(`/?${params}`, { scroll: false });
  };

  const onPrev = () => {
    onChange({
      offset: String((page - 2) * +limit),
    });
  };

  const onNext = () => {
    onChange({
      offset: String(page * +limit),
    });
  };

  return (
    <div className="flex gap-2 my-8 items-center justify-center">
      <div className="flex items-center space-x-2">
        <p className="text-sm font-medium">Rows per page</p>
        <Select
          value={searchParams.limit || DEFAULT_LIMIT_PER_PAGE}
          onValueChange={(value) => onChange({ limit: value })}
        >
          <SelectTrigger className="h-8 w-[70px]">
            <SelectValue placeholder={`2`} />
          </SelectTrigger>
          <SelectContent side="top">
            {[2, 10, 20, 30, 40, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex w-[100px] items-center justify-center text-sm font-medium">
        Page {page} of {totalPages}
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={onPrev}
          disabled={!canPrev}
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={onNext}
          disabled={!canNext}
        >
          <span className="sr-only">Go to next page</span>
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
