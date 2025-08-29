import { createSlice } from "@reduxjs/toolkit";

const appConfig = createSlice({
    name : "langConfig",
    initialState : {
        isGuestMode : false
    }, 
    reducers : {
        toggleGuestMode : (state) => {
            state.isGuestMode = !state.isGuestMode;
        }
    }
});

export const { toggleGuestMode } = appConfig.actions;

export default appConfig.reducer;