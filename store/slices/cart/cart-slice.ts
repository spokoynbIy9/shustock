import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Good } from "@/types";

interface CartState {
    goods: Good[];
    totalCount: number;
    total: number;
}

const initialState: CartState = {
    goods: [],
    totalCount: 0,
    total: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addGood: (state, action: PayloadAction<Good>) => {
            state.goods.push(action.payload);
            state.totalCount += 1;
            state.total += action.payload.price;
        },
        deleteGood: (state, action: PayloadAction<string>) => {
            const goodToDelete = state.goods.find(
                (good) => good.id === action.payload,
            );

            if (goodToDelete) {
                state.total -= goodToDelete.price;
                state.totalCount -= 1;
            }

            state.goods = state.goods.filter(
                (good) => good.id !== action.payload,
            );
        },
        deleteAllGoods: (state) => {
            state.goods = [];
            state.total = 0;
            state.totalCount = 0;
        },
    },
    selectors: {
        getGoods: (state) => state.goods,
        getTotal: (state) => state.total,
        getTotalCount: (state) => state.totalCount,
    },
});

export default cartSlice.reducer;
export const cartSelectors = cartSlice.selectors;
export const cartActions = cartSlice.actions;
