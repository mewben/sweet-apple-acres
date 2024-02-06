import { omitBy, isEmpty } from "lodash";

export const initialFilters = {
  search: "",
  minPrice: "",
  maxPrice: "",
  minRating: "",
  maxRating: "",
  orderBy: "",
  sort: "",
  isAvailable: "",
};

/**
 * This returns a querystring
 * with empty values removed
 */
export const searchFilterQueryBuilder = (data: Record<string, string>) => {
  const params = new URLSearchParams({
    ...omitBy(data, isEmpty),
  });

  return params.toString();
};
