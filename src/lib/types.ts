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
