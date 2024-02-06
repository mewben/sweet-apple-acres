import { DEFAULT_LIMIT_PER_PAGE, EXTERNAL_API_BASE_URL } from "./constants";
import { FetchProductsParams, PlaceOrderType, Product } from "./types";
import { omit } from "lodash";

type FetchReturnType = {
  totalCount: number;
  products: Product[];
};

export async function fetchProducts(
  params?: FetchProductsParams
): Promise<FetchReturnType> {
  try {
    const allParams = {
      ...params,
      limit: params?.limit ?? DEFAULT_LIMIT_PER_PAGE,
      offset: params?.offset ?? "0",
    };

    const paramsWithoutPagination = omit(allParams, ["limit", "offset"]);
    const searchParamsWithoutPagination = new URLSearchParams(
      paramsWithoutPagination
    );
    const searchParams = new URLSearchParams(allParams);

    // get all products with filter without limit and offset
    // to get the total number of products

    const [allResult, result] = await Promise.all([
      fetch(
        `${EXTERNAL_API_BASE_URL}/.netlify/functions/api/products?${searchParamsWithoutPagination.toString()}`
      ),
      fetch(
        `${EXTERNAL_API_BASE_URL}/.netlify/functions/api/products?${searchParams.toString()}`
      ),
    ]).then((res) => Promise.all(res.map(async (r) => await r.json())));

    return {
      totalCount: allResult.length,
      products: result,
    };
  } catch (error) {
    console.log("Error fetching products: ", error);
    throw error;
  }
}

export async function fetchProduct(id: string): Promise<Product | null> {
  try {
    const result = await fetch(
      `${EXTERNAL_API_BASE_URL}/.netlify/functions/api/products/${id}`
    );
    return await result.json();
  } catch (error) {
    console.log("Error fetching product: ", error);
    return null;
  }
}

export async function placeOrder(data: PlaceOrderType) {
  try {
    const result = await fetch(
      `${EXTERNAL_API_BASE_URL}/.netlify/functions/api/orders`,
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    return await result.json();
  } catch (error) {
    console.log("Error placing order:", error);
    throw error;
  }
}
