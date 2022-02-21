import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import profile from "../../assets/profile.png";
import movieApi from "../../common/apis/movieApi";
import {APiKey} from "../../common/apis/movieApiKey";

const initialState = {
    movies: {},
    series: {},
    selectedMovieOrSerieByImdbId: {},
}
export const fetchAllMovies = createAsyncThunk('movies/fetchAllMovies', async (movieText) => {
    // const movieText = "Harry";
    const response = await movieApi
        .get(`?apikey=${APiKey}&s=${movieText}&type=movie`)
        .catch((err) => {
            console.log("Err :", err);
        });
    return response.data;
});

export const fetchAllSeries = createAsyncThunk('movies/fetchAllSeries', async (movieText) => {
    // const movieText = "Look";
    const response = await movieApi
        .get(`?apikey=${APiKey}&s=${movieText}&type=series`)
        .catch((err) => {
            console.log("Err :", err);
        });
    return response.data;
});
export const fetchMovieOrSerieByImdbId = createAsyncThunk('movies/fetchMovieOrSerieByImdbId', async (id) => {
    const response = await movieApi
        .get(`?apikey=${APiKey}&i=${id}&plot=full`)
        .catch((err) => {
            console.log("Err :", err);
        });
    console.log(response);

    return response.data;
});
export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setAllMovies: (state, action) => {
            state.movies = action.payload;
        },
        setAllSeries: (state, action) => {
            state.series = action.payload;
        },
        removeSelectedMovieOrSerieByImdbId: (state, action) => {
            state.selectedMovieOrSerieByImdbId = {};
        }

    }, extraReducers: {
        [fetchAllMovies.pending]: () => {
            console.log('fetchAllMovies pending')
        },
        [fetchAllMovies.fulfilled]: (state, {payload}) => {
            console.log('fetchAllMovies fulfilled')
            return {...state, movies: payload};
        },
        [fetchAllMovies.rejected]: () => {
            console.log('fetchAllMovies rejected')
        },
        [fetchAllSeries.fulfilled]: (state, {payload}) => {
            console.log('fetchAllSeries fulfilled')
            return {...state, series: payload};
        },
        [fetchMovieOrSerieByImdbId.fulfilled]: (state, {payload}) => {
            console.log('fetchMovieOrSerieByImdbId fulfilled')
            return {...state, selectedMovieOrSerieByImdbId: payload};
        },
    }
})

// Action creators are generated for each case reducer function
export const {setAllMovies, setAllSeries, removeSelectedMovieOrSerieByImdbId} = moviesSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllSeries = (state) => state.movies.series
export const selectedMovieOrSerieByImdbId = (state) => state.movies.selectedMovieOrSerieByImdbId


export default moviesSlice.reducer
