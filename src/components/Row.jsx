import React, { useEffect, useState } from "react";
import axios from '../axios';
import "../row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";  

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row(props) {
    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState('');

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchURL);
            setMovies(request.data.results);
        }
        fetchData();
    }, [props.fetchURL]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerURL) {
            setTrailerURL('');  
        } else {
            movieTrailer(movie?.name || movie?.title || "")
                .then((url) => {
                    if (url) {
                        const urlParams = new URLSearchParams(new URL(url).search);
                        setTrailerURL(urlParams.get('v'));
                    } else {
                        console.error("No URL returned for trailer.");
                    }
                })
                .catch((error) => {
                    console.error("Error finding trailer: ", error);
                    alert("Trailer not found for this movie.");
                });
        }
    };

    return (
        <div className="row">
            <h1 className="row__title">{props.title}</h1>
            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${props.isLarge ? "row__posterLarge" : ""}`}
                        key={movie.id}
                        src={`${base_url}${props.isLarge ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name || movie.title || "Movie poster"}
                    />
                ))}
            </div>
            {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
        </div>
    );
}

export default Row;
