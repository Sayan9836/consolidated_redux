import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchAsyncMoviesOrShowDetails, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../features/movies/movieSlice';
import './MovieDetail.scss'
const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMoviesOrShowDetails(imdbID))
    return ()=>{
      dispatch(removeSelectedMovieOrShow())
    }
  }, [dispatch, imdbID])
  return (
    <div className="movie_section">

      {Object.keys(data).length === 0 ?
        (
        <div>...loading</div>
        ):(
          <>
          <div className='section_left'>
          <div className='movie_title'>{data.Title}</div>
          <div className='movie_rating'>
            <span>
              IMDB Rating   <i className='fa fa-star'></i> : {data.imdbRating}
            </span>
            <span>
              IMDB Voters  <i className='fa fa-thumbs-up'></i> : {data.imdbVotes}
            </span>
            <span>
              Runtime  <i className='fa fa-file'></i> : {data.Runtime}
            </span>
            <span>
              Year  <i className='fa fa-calendar'></i> : {data.Year}
            </span>
          </div>
          <div className='movie_plot'>{data.Plot}</div>
          <div className="movie_info">
            <div>
              <span>Director</span>
              <span>{data.Director}</span>
            </div>
            <div>
              <span>stars</span>
              <span>{data.Actors}</span>
            </div>
            <div>
              <span>Generes</span>
              <span>{data.Genre}</span>
            </div>
            <div>
              <span>Languages</span>
              <span>{data.Language}</span>
            </div>
            <div>
              <span>Awards</span>
              <span>{data.Awards}</span>
            </div>
          </div>
        </div>
        <div className='section_right'>
          <img src={data.Poster} alt={data.Title} />
        </div>
        </>
        )
     }
    </div>
  )
}

export default MovieDetail                                                                                                                                                                                                                                                                                                                                                                     
