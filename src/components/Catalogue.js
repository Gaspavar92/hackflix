import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Catalogue = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios({
            url: `https://api.themoviedb.org/3/discover/movie`,
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                language: 'en-US',
                sort_by: 'popularity.desc',
                include_adult: 'false',
                include_video: 'false',
                region: 'us',
                page: 1,
                primary_release_year: 1999
            }
        }).then(response => {
            const apiResults = response.data.results;
            setMovies(apiResults);
        })
    }, [])


    return (
        <>
            <h1>Hackflix</h1>
            <ul className="catalogue">
                {movies.map((movie) => {
                    return (
                        <li key={movie.id} data-movie-id={movie.id}>
                            <Link to={`movie/${movie.id}`} >
                                <h2>{movie.title}</h2>
                                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${movie.title}`}/>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )

};

export default Catalogue;