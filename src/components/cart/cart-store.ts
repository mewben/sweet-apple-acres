import { create } from "zustand";
import { CartItem, Product } from "~/lib/types";

type State = {
  items: Record<string, CartItem>;
  isOpen: boolean;
};

type Actions = {
  add: (product: Product) => void;
  toggleCart: (isOpen: boolean) => void;
};

export const useCart = create<State & Actions>((set) => ({
  items: {},
  isOpen: false,
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
              quantity: 1,
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
              quantity: state.items[product.id].quantity + 1,
            },
          },
        };
      }
    }),
  toggleCart: (isOpen: boolean) => set(() => ({ isOpen })),
}));
