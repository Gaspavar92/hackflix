import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetails = () => {

    const {movie_id} = useParams();
    const [movieDeets, setMovieDeets] = useState({});

    useEffect(() => {
        axios({
            url:`https://api.themoviedb.org/3/movie/${movie_id}`,
            params: {
                api_key: process.env.REACT_APP_API_KEY
            }
        }).then(res => {setMovieDeets(res.data)})
    }, [])

    const {title, tagline, overview, backdrop_path} = movieDeets;

    return (
        <div className="poster">
            <div className="description">
                <h2>{title}</h2>
                <h3>{tagline}</h3>
                <p>{overview}</p>
            </div>
            <div className="poster-image">
                <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt={title}/>
            </div>
        </div>
    )
};

export default MovieDetails;