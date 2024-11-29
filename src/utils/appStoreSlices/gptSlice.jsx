import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState : {
        showGPTPage : false,
        gptMovies : null,
    },
    reducers : {
        toggleGPTPage : (state, action) => {
            state.showGPTPage = !state.showGPTPage
        },
        addGPTSearchMovies : (state, action) => {
            state.gptMovies = action.payload;
        }
    }
});

export const { toggleGPTPage, addGPTSearchMovies } = gptSlice.actions;

export default gptSlice.reducer;