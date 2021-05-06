import './MoviesList.scss'
import MovieItem from './MovieItem'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
const MoviesList = (props) => {
    const [movies, setMovies] = useState([])
    console.log("I am rendering")
    useEffect(() => {
        console.log("I am rendered")
        axios.get('http://www.omdbapi.com/?s=Pierre&apikey=9d6eb1c3')
        .then((response) => {
            console.log(response.data.Search);
            setMovies(response.data.Search)

            // const { Search } = response.data 
            // console.log(Search)
        })
        .catch((error) => {
            console.log(error);
        });
      
    }, [])
    console.log("Still rendering")
    return(
        <div className="MoviesList">
            {movies.map(movie => {
                console.log(movie.Title)
                return(<MovieItem {...movie} />)
            })}
        
        </div>
    )
}

export default MoviesList;