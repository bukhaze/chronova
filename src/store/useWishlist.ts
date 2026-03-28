"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistState {
  ids: string[];
  toggle: (id: string) => void;
  has: (id: string) => boolean;
  clear: () => void;
}

export const useWishlist = create<WishlistState>()(
  persist(
    (set, get) => ({
      ids: [],
      toggle: (id: string) => {
        set((state: WishlistState) => {
          if (state.ids.includes(id)) {
            return { ids: state.ids.filter((i: string) => i !== id) };
          }
          return { ids: [...state.ids, id] };
        });
      },
      has: (id: string) => get().ids.includes(id),
      clear: () => set({ ids: [] }),
    }),
    { name: 'chronova-wishlist' }
  )
);
