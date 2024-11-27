import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./appStoreSlices/userDataSlice";
import moviesReducer from "./appStoreSlices/moviesDataSlice"
import gptReducer from "./appStoreSlices/gptSlice";

const appStore = configureStore({
        reducer: {
            user : userReducer,
            movies : moviesReducer,
            gpt : gptReducer,
        }
    
})

export default appStore;