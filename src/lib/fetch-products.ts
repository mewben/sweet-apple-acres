import { Product } from "./types";

const EXTERNAL_API_BASE_URL = "https://sweet-apple-acres.netlify.app";

export async function fetchProducts(): Promise<Product[]> {
  try {
    const result = await fetch(
      `${EXTERNAL_API_BASE_URL}/.netlify/functions/api/products`
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