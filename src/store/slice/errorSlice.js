import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    searchError: null
}

const errorSlice = createSlice({
    name: "errors",
    initialState,
    reducers: {
        setSearchError: (state, action) => {
            state.searchError = action.payload;
        },
        removeSearchError: (state, action) => {
            state.searchError = null;
        }
    }
})

export default errorSlice.reducer;

export const { setSearchError, removeSearchError } = errorSlice.actions;