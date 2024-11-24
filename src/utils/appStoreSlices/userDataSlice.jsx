import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
    name : "user", 
    initialState : {user : null , isSignedIn : false},
    reducers : {
        addUserData : (state, action) => {
            state.user = action.payload; // this will directly mutates the value of initialState to action.payload
        },
        removeUserData : (state, action) => {
            state.user = null;
        },
        userSignedIn : (state, action) => {
            state.isSignedIn = action.payload;
        }
    }
});

export const { addUserData, removeUserData, userSignedIn } = userDataSlice.actions;

export default userDataSlice.reducer;