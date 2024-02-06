"use client";

import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { searchFilterQueryBuilder } from "~/lib/search-filter-query-builder";

export const SearchBar = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get("search") || "";
  const [search, setSearch] = useState(q);
  const [modified, setModified] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const delayBounceFn = setTimeout(() => {
      if (!modified) return;

      const data = Object.fromEntries(searchParams);
      data.search = search;

      // omit offset to return to page 1
      delete data.offset;

      const params = searchFilterQueryBuilder(data);
      router.push(`/?${params}`, { scroll: false });
    }, 300);

    return () => clearTimeout(delayBounceFn);
  }, [search, modified]);

  // reflect search changes from external event
  // like clearing filters
  useEffect(() => {
    setSearch(q);
  }, [q]);

  return (
    <div className="relative w-full">
      <Input
        onChange={(e) => {
          setModified(true);
          setSearch(e.target.value);
        }}
        placeholder="Search Products..."
        className="pr-8 w-full"
        value={search}
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center text-muted-foreground">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};
