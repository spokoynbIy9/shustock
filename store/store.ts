import { configureStore } from "@reduxjs/toolkit";

import { authorsReducer, cartReducer, filtersReducer } from "./slices";

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
        cart: cartReducer,
        authors: authorsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
