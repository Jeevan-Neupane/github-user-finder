import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userAuthSlice from "./slice/userAuthSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import githubApi from "./apis/githubUserApi";
import userSlice from "./slice/userSlice";
import errorSlice from "./slice/errorSlice";


const store = configureStore({

    reducer: {
        auth: userAuthSlice,
        [githubApi.reducerPath]: githubApi.reducer,
        users: userSlice,
        errors: errorSlice

    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(githubApi.middleware);
    }
})

setupListeners(store.dispatch);


export default store;
export * from "./slice/userAuthSlice";
export * from "./slice/userSlice"
export * from "./slice/errorSlice";