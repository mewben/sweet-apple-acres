export type Product = {
  id: string;
  name: string;
  description: string;
  image: string | null;
  price: number;
  rating: number;
  isAvailable: boolean;
};

export type CartItem = Product & { quantity: number };

export type OrderItem = {
  productId: string;
  quantity: number;
};

export type PlaceOrderType = {
  name: string;
  deliveryAddress: string;
  items: OrderItem[];
};

export type FetchProductsParams = {
  search?: string;
  minRating?: string;
  maxRating?: string;
  minPrice?: string;
  maxPrice?: string;
  isAvailable?: string;
  limit?: string;
  offset?: string;
  orderBy?: string;
  sort?: string;
};
