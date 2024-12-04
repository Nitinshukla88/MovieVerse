import { createSlice } from "@reduxjs/toolkit";

const moviesDataSlice = createSlice({
    name : "movie",
    initialState : {
        movielist : null,
        trailerVideo : null,
        movieTrailerVideos : {},
    },
    reducers : {
        addMovieData : (state, action) => {
            state.movielist = action.payload;
        },
        addMovieVideo : (state, action) => {
            state.trailerVideo = action.payload;
        },
        addMovieTrailers : (state, action) => {
            const { id, key } = action.payload;
            state.movieTrailerVideos[id] = key;
        }
    },
})

export const { addMovieData, addMovieVideo, addMovieTrailers } = moviesDataSlice.actions;

export default moviesDataSlice.reducer;