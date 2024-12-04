import { createSlice } from "@reduxjs/toolkit";

const appConfig = createSlice({
    name : "langConfig",
    initialState : {
        lang : "en",
        isGuestMode : false
    }, 
    reducers : {
        changeLanguage : (state, action) => {
            state.lang = action.payload;
        },
        toggleGuestMode : (state) => {
            state.isGuestMode = !state.isGuestMode;
        }
    }
});

export const { changeLanguage, toggleGuestMode } = appConfig.actions;

export default appConfig.reducer;