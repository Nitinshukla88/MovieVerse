import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState : {
        showGPTPage : false,
        gptSearchedMoviesData : null,
        gptSearchedMovies : null,
    },
    reducers : {
        toggleGPTPage : (state, action) => {
            state.showGPTPage = !state.showGPTPage
        },
        addGPTSearchMovies : (state, action) => {
            const { GPTMovies, GPTMoviesData } = action.payload;
            state.gptSearchedMoviesData = GPTMoviesData;
            state.gptSearchedMovies = GPTMovies;
        }
    }
});

export const { toggleGPTPage, addGPTSearchMovies } = gptSlice.actions;

export default gptSlice.reducer;