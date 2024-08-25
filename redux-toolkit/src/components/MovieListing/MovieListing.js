import React from 'react'
import { useSelector } from 'react-redux'
import { getAllmovies, getAllshows } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import Slider from 'react-slick'
import { settings } from '../../common/settings'
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";
import './MovieListing.scss'
const MovieListing = () => {
  const movies = useSelector(getAllmovies);
  const shows = useSelector(getAllshows);

  return (
    <div className='movie_wrapper'>
      <div className='movie_list'>
        <h2>Movies</h2>
        <div className='movie_container'>
          <Slider {...settings}>
            {
              movies.Response === "True" ? (
                movies.Search.map((movie, index) => {
                  return <MovieCard key={index} data={movie} />
                })
              ) : (
                <div className='movies_error'>
                  <h3>{movies.Error}</h3>
                </div>
              )
            }
          </Slider>
        </div>
      </div>
      <div className='movie_list'>
        <h2>Shows</h2>
        <div className='movie_container'>
          <Slider {...settings}>
          {
            shows.Response === "True" ? (
              shows.Search.map((movie, index) => {
                return <MovieCard key={index} data={movie} />
              })
            ) : (
              <div className='movies_error'>
                <h3>{shows.Error}</h3>
              </div>
            )
          }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default MovieListing
