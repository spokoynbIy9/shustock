import { createSlice } from "@reduxjs/toolkit";

import { Author } from "@/types/author";

interface AuthorsState {
    authors: Author[];
}

const initialState: AuthorsState = {
    authors: [],
};

export const authorsSlice = createSlice({
    name: "authors",
    initialState,
    reducers: {},
    selectors: {
        getAuthors: (state) => state.authors,
        getAuthorById: (state) => (id: string) =>
            state.authors.find((author) => author.id === id),
    },
});

export default authorsSlice.reducer;
export const authorsSelectors = authorsSlice.selectors;
