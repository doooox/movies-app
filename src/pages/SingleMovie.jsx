import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MoviesService from '../services/MoviesService';

const SingleMovie = () => {
    const [movie, setMovie] = useState('');
    const { id } = useParams();

    const getSingleMovie = async () => {
        const movie = await MoviesService.get(id);
        setMovie(movie);
        console.log(movie);
    }

    useEffect(() => {
        getSingleMovie()
    }, [])

    return (
        <div>
            <h1>{movie.title}</h1>
        </div>
    )
}

export default SingleMovie