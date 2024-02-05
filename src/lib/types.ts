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
