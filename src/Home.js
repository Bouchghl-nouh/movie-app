import logo from './logo.svg';
import './App.css';
// import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
export function Home() {
  const appUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=fe738b5f&s=pawn";
  const [searchItem, setSearchItem] = useState();
  const [movies,setMovies] = useState([{}])
 useEffect(() => {
    searchMovies(searchItem)
 }, [])
  console.log(movies);
  function searchMovies(title) {
    fetch(appUrl)
    .then(response => response.json())
    .then(data => setMovies(data.Search))
  }
  return (
    <>
    <h1>Movie App</h1>
    <div className = "search">
        <input
        value={searchItem}
        onChange={(e)=>setSearchItem(e.target.value)}
        placeholder="search for movies"
        />
        <img width={20}
          height={20}
          src={logo}
          alt='search'
          onClick= {()=>searchMovies(searchItem)}
        />
      </div>
      <div className="container">
          {movies.map((movie) => (
            <div className="movie" key={movie.imdbID}>
            <div>
              <p>{movie.Year}</p>
            </div>

            <div>
                <Link to={`/detail/${movie.Title}`}> <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} /></Link>
            </div>

            <div>
              <span>{movie.Type}</span>
              <h3>{movie.Title}</h3>
            </div>
          </div>
          ))}
        </div>
      </>
  );
}
