import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
import user from '../../images/user.png'
import './Header.scss'
const Header = () => {
  const [term,setTerm]=useState(" ");
 const dispatch=useDispatch();
  const sumitHandler=(e)=>{
         e.preventDefault();
         if (term === "") {
          return alert("please enter search term")
         }
         dispatch(fetchAsyncMovies(term));
         dispatch(fetchAsyncShows(term));
         setTerm("");
  }
  return (
    <div className='header'>
      <Link to="/">
        <div className='logo'>Movie App</div>
      </Link>
      <div className='search_bar'>
        <form onSubmit={sumitHandler}>
          <input type="text" value={term} onChange={(e)=>setTerm(e.target.value)} placeholder='Search MoviesOrShows'/>
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className='user_image'>
      <img src={user} alt="user" />
      </div>
    </div>
  )
}

export default Header


