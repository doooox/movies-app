import React, { useEffect, useState } from 'react'
import MoviesService from '../services/MoviesService';
import { Link } from 'react-router-dom';

const AppMovies = () => {
    const [movies, setMovies] = useState([]);

    const getAllMovies = async () => {
        const movies = await MoviesService.getAll();
        setMovies(movies);
    }

    useEffect(() => {
        getAllMovies();
    }, [])

    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.id}>
                    {movie.title}
                    <div>
                        <Link to={`/movies/${movie.id}`}>
                           <button> View Post</button>
                        </Link>
                    </div>
                </div>))}

        </div>
    )
}

export default AppMovies