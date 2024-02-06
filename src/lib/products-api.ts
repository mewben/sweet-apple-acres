import { DEFAULT_LIMIT_PER_PAGE, EXTERNAL_API_BASE_URL } from "./constants";
import { FetchProductsParams, PlaceOrderType, Product } from "./types";

export async function fetchProducts(
  params?: FetchProductsParams
): Promise<Product[]> {
  try {
    const searchParams = new URLSearchParams({
      ...params,
      limit: params?.limit ?? DEFAULT_LIMIT_PER_PAGE,
    });

    const result = await fetch(
      `${EXTERNAL_API_BASE_URL}/.netlify/functions/api/products?${searchParams.toString()}`
    );
    return await result.json();
  } catch (error) {
    console.log("Error fetching products: ", error);
    return [];
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
