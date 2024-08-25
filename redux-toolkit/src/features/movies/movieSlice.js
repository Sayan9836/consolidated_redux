import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieApi from '../../common/apis/MovieApi'
import {API_KEY} from '../../common/apis/MovieApiKey'

// const movieText="Harry"
// const seriesText="Friends"
export const fetchAsyncMovies = createAsyncThunk(`movies/fetchAsyncMovies`, async (term) => {
    const responce = await MovieApi.get(`?apiKey=${API_KEY}&s=${term}&type=movie`);
    return responce.data
})

export const fetchAsyncShows = createAsyncThunk(`movies/fetchAsyncShows`, async (term) => {
    const responce = await MovieApi.get(`?apiKey=${API_KEY}&s=${term}&type=series`);
    return responce.data
})

export const fetchAsyncMoviesOrShowDetails = createAsyncThunk(`movies/fetchAsyncMoviesOrShowDetails`, async (id) => {
    const responce = await MovieApi.get(`/?apiKey=${API_KEY}&i=${id}&plot=full`);
    return responce.data
})


const initialState = {
    movies: {},
    shows:{},
    selectMovieOrShow:{},
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
        removeSelectedMovieOrShow: (state)=>{
            state.selectMovieOrShow = {};
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("fetched succesfully");
            return { ...state,movies:payload}     
        },
        [fetchAsyncMovies.rejected]:()=>{
           console.log("rejected");
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log("fetched succesfully");
            return { ...state,shows:payload}
        },
        [fetchAsyncMoviesOrShowDetails.fulfilled]:(state,{payload})=>{
            console.log("fetched succesfully");
            return { ...state,selectMovieOrShow:payload}
        },                                     
    }
});

export const { addMovies,removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllmovies = (state) => state.movies.movies;
export const getAllshows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;