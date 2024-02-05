import { create } from "zustand";
import { Product } from "~/lib/types";

type State = {
  items: Record<string, Product & { count: number }>;
};

type Actions = {
  add: (product: Product) => void;
};

export const useCart = create<State & Actions>((set) => ({
  items: {},
  add: (product: Product) =>
    set((state) => {
      // check if product is already in the cart
      const foundProduct = state.items[product.id];
      if (!foundProduct) {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...product,
              count: 1,
            },
          },
        };
      } else {
        // increment item by 1
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...state.items[product.id],
              count: state.items[product.id].count + 1,
            },
          },
        };
      }
    }),
}));
