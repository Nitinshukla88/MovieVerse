import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./appStoreSlices/userDataSlice";
import moviesReducer from "./appStoreSlices/moviesDataSlice"

const appStore = configureStore({
        reducer: {
            user : userReducer,
            movies : moviesReducer,
        }
    
})

export default appStore;