export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartStore {
  items: CartItem[];
  totalItems: number;
  totalAmount: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

import { create } from "zustand";
import { createJSONStorage } from "zustand/middleware";
import { persist } from "zustand/middleware";

const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      totalItems: 0,
      totalAmount: 0,

      addToCart: (product: Product) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id
          );

          if (existingItem) {
            const updatedItems = state.items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );

            return {
              items: updatedItems,
              totalItems: state.totalItems + 1,
              totalAmount: state.totalAmount + product.price,
            };
          }

          return {
            items: [...state.items, { ...product, quantity: 1 }],
            totalItems: state.totalItems + 1,
            totalAmount: state.totalAmount + product.price,
          };
        });
      },

      removeFromCart: (productId: number) => {
        set((state) => {
          const item = state.items.find((item) => item.id === productId);
          if (!item) return state;

          return {
            items: state.items.filter((item) => item.id !== productId),
            totalItems: state.totalItems - item.quantity,
            totalAmount: state.totalAmount - item.price * item.quantity,
          };
        });
      },

      updateQuantity: (productId: number, newQuantity: number) => {
        set((state) => {
          const item = state.items.find((item) => item.id === productId);
          if (!item) return state;

          const quantityDiff = newQuantity - item.quantity;
          const updatedItems = state.items
            .map((item) =>
              item.id === productId ? { ...item, quantity: newQuantity } : item
            )
            .filter((item) => item.quantity > 0);

          return {
            items: updatedItems,
            totalItems: state.totalItems + quantityDiff,
            totalAmount: state.totalAmount + item.price * quantityDiff,
          };
        });
      },

      clearCart: () =>
        set({
          items: [],
          totalItems: 0,
          totalAmount: 0,
        }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCartStore;
