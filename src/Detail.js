import { useParams } from "react-router-dom"
import {useState,useEffect} from 'react'
import './App.css'
export function Detail() {
    const [movie,setMovie]=useState([])
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
      getMovie(id)  
    },[])
      function getMovie(id) {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=fe738b5f&t=${id}`)
    .then(response => response.json())
    .then(data=>setMovie(data))
  }
    console.log(movie);
    return (
        <div className="container">
            <div className="movie" key={movie.imdbID}>
            <div>
              <p>{movie.Year}</p>
            </div>

            <div>
               <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} />
            </div>

            <div>
              <span>{movie.Type}</span>
              <h3>{movie.Title}</h3>
            </div>
            </div>
            </div>
                
        
    )
}