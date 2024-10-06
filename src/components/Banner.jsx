import React, { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../requests';
import '../banner.css'

export default function Banner() {
    const [movie, setMovie] = useState([]);  

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals); 
            const randomMovie = request.data.results[
                Math.floor(Math.random() * request.data.results.length) 
            ];
            setMovie(randomMovie);  

            return request;
        }
        fetchData();
    }, []); 

    console.log(movie);

  return (
    <header className="banner"
    style ={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
    }}>
        <div className="banner__contents">
            <h1 className="banner__title">{movie?.name}</h1>
            <div className="banner__buttons">
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <p className="banner__description">{movie?.overview}</p>

        </div>
        <div className="banner__fadeBottom"></div>
    </header>
  )
}
