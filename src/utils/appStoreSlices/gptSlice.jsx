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
        },
        removeGPTSearchedMovies : (state) => {
            state.gptSearchedMoviesData = null;
            state.gptSearchedMovies = null
        }
    }
});

export const { toggleGPTPage, addGPTSearchMovies, removeGPTSearchedMovies } = gptSlice.actions;

export default gptSlice.reducer;