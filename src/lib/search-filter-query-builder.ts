import { omitBy, isEmpty } from "lodash";

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
