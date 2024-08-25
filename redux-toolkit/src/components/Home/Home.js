import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
import MovieListing from '../MovieListing/MovieListing'
import './Home.scss'
const Home = () => {
  const dispatch=useDispatch();
  const movieText="Harry";
  const showText="Friends";
  useEffect(()=>{
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  },[dispatch])
  return (
    <div>
      <div className='banner_img'>
        hello
        <MovieListing/>
      </div>
    </div>

  )
}

export default Home
