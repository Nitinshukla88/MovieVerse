import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./appStoreSlices/userDataSlice";

const appStore = configureStore({
        reducer: {
            user : userReducer,
        }
    
})

export default appStore;