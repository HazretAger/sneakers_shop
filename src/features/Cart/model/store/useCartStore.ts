import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { CartSchema, IItem } from '../types/cartSchema';

export const useCartStore = create<CartSchema>()(
    devtools((set, get) => ({
        items: [],
        totalSum: 0,
        updateTotalSum: ({ type, price }) => set((state) => {
            if (type === 'increase') {
                return { totalSum: state.totalSum + price }
            } else return { totalSum: state.totalSum - price }
        }),
    }))
);
