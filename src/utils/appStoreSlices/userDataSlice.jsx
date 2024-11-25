import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUserData: (state, action) => {
      return action.payload; // this will directly mutates the value of initialState to action.payload
    },
    removeUserData: (state, action) => {
      return null;
    },
  },
});

export const { addUserData, removeUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
