import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null
}

const userAuthSlice = createSlice({
    name: "authUser",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    }
})


export const { login, logout } = userAuthSlice.actions;
export default userAuthSlice.reducer;
export * from "../apis/githubUserApi";