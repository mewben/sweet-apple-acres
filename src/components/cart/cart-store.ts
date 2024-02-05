import { create } from "zustand";
import { CartItem, Product } from "~/lib/types";

type State = {
  items: Record<string, CartItem>;
  isOpen: boolean;
  updatedAt: Date; // used in useMemo to trigger recomputation
};

type Actions = {
  add: (product: Product) => void;
  toggleCart: (isOpen: boolean) => void;
  increment: (productId: string) => void;
  decrement: (productId: string) => void;
  remove: (productId: string) => void;
};

export const useCart = create<State & Actions>((set) => ({
  items: {},
  isOpen: false,
  updatedAt: new Date(),
  add: (product: Product) =>
    set((state) => {
      // check if product is already in the cart
      const foundProduct = state.items[product.id];
      if (!foundProduct) {
        return {
          ...state,
          updatedAt: new Date(),
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
          updatedAt: new Date(),
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
  increment: (productId: string) =>
    set((state) => {
      const foundProduct = state.items[productId];
      if (!foundProduct) return state;
      return {
        ...state,
        updatedAt: new Date(),
        items: {
          ...state.items,
          [productId]: {
            ...state.items[productId],
            quantity: state.items[productId].quantity + 1,
          },
        },
      };
    }),
  decrement: (productId: string) =>
    set((state) => {
      const foundProduct = state.items[productId];
      if (!foundProduct) return state;

      if (foundProduct.quantity === 1) {
        // remove product
        const updatedItems = state.items;
        delete updatedItems[productId];
        return {
          ...state,
          updatedAt: new Date(),
          items: updatedItems,
        };
      }

      return {
        ...state,
        updatedAt: new Date(),
        items: {
          ...state.items,
          [productId]: {
            ...state.items[productId],
            quantity: state.items[productId].quantity - 1,
          },
        },
      };
    }),
  remove: (productId: string) =>
    set((state) => {
      const foundProduct = state.items[productId];
      if (!foundProduct) return state;

      const updatedItems = state.items;
      delete updatedItems[productId];
      return {
        ...state,
        updatedAt: new Date(),
        items: updatedItems,
      };
    }),
}));
