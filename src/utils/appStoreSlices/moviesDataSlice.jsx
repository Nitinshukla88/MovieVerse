import { createSlice } from "@reduxjs/toolkit";

const moviesDataSlice = createSlice({
    name : "movie",
    initialState : {
        movielist : null,
        trailerVideo : null,
    },
    reducers : {
        addMovieData : (state, action) => {
            state.movielist = action.payload;
        },
        addMovieVideo : (state, action) => {
            state.trailerVideo = action.payload;
        }
    },
})

export const { addMovieData, addMovieVideo } = moviesDataSlice.actions;

export default moviesDataSlice.reducer;