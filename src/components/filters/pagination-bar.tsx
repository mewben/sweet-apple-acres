"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
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
};

export const PaginationBar = ({ searchParams }: Props) => {
  const router = useRouter();

  const onChange = (data: Record<string, string>) => {
    const merged = {
      ...searchParams,
      ...data,
    };

    const params = searchFilterQueryBuilder(merged);

    router.push(`/?${params}`, { scroll: false });
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
        {/* Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()} */}
        TODO: Page 1 of 10
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          // onClick={() => table.setPageIndex(0)}
          // disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Go to first page</span>
          <DoubleArrowLeftIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          // onClick={() => table.previousPage()}
          // disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          // onClick={() => table.nextPage()}
          // disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Go to next page</span>
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          // onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          // disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Go to last page</span>
          <DoubleArrowRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
