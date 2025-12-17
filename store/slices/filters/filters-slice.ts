import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Category, Orientation } from "@/types";

interface FiltersState {
    search: string;
    selectedCategories: Category[];
    selectedOrientations: Orientation[];
}

const initialState: FiltersState = {
    search: "",
    selectedCategories: [],
    selectedOrientations: [],
};

export const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },

        toggleCategory: (state, action: PayloadAction<Category>) => {
            const index = state.selectedCategories.indexOf(action.payload);
            if (index > -1) {
                state.selectedCategories.splice(index, 1);
            } else {
                state.selectedCategories.push(action.payload);
            }
        },

        toggleOrientation: (state, action: PayloadAction<Orientation>) => {
            const index = state.selectedOrientations.indexOf(action.payload);
            if (index > -1) {
                state.selectedOrientations.splice(index, 1);
            } else {
                state.selectedOrientations.push(action.payload);
            }
        },

        clearFilters: (state) => {
            state.selectedCategories = [];
            state.selectedOrientations = [];
        },
    },
    selectors: {
        getSearch: (state) => state.search,
        getSelectedCategories: (state) => state.selectedCategories,
        getSelectedOrientations: (state) => state.selectedOrientations,
    },
});

export const filtersActions = filtersSlice.actions;
export const filtersSelectors = filtersSlice.selectors;
export default filtersSlice.reducer;
