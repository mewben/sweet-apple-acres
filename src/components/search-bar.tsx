"use client";

import { useEffect, useState } from "react";
import { Input } from "./ui/input";

export const SearchBar = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const delayBounceFn = setTimeout(() => {
      console.log("TODO: search api here", search);
    }, 300);

    return () => clearTimeout(delayBounceFn);
  }, [search]);

  return (
    <div className="relative w-full">
      <Input
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Products..."
        className="pr-8 w-full"
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