import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users: []
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

        getUsers: (state, action) => {
            state.users = action.payload;
        }
    }
})

export default userSlice.reducer;

export const { searchedUser, getUsers } = userSlice.actions;