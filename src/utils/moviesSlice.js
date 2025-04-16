import {createSlice} from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addRandomMovie: (state, action) => {
            state.randomMovie = action.payload;
        }

    }
})

export const {addNowPlayingMovies, addRandomMovie} = moviesSlice.actions;
export default moviesSlice.reducer