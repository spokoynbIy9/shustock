import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Good } from "@/types";

interface CartState {
    goods: Good[];
}

const initialState: CartState = {
    goods: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addGood: (state, action: PayloadAction<Good>) => {
            state.goods.push(action.payload);
        },
        deleteGood: (state, action: PayloadAction<string>) => {
            state.goods = state.goods.filter(
                (good) => good.id !== action.payload,
            );
        },
        deleteAllGoods: (state) => {
            state.goods = [];
        },
    },
    selectors: {
        getGoods: (state) => state.goods,
    },
});

export default cartSlice.reducer;
export const cartSelectors = cartSlice.selectors;
export const cartActions = cartSlice.actions;
