import React, { useEffect } from 'react';
import MovieCard from '../MovieCard/index';
import { MoviesListContainer } from './style';
import { moviesFetchData } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { useMovieDetails } from '../MovieDetails/MovieDetailsContext';

const MoviesList = () => {
    const dispatch = useDispatch();
    const movieDetails = useMovieDetails();
    const stateMovies = useSelector(state => state.movies)
    
    useEffect(() => {
        dispatch(moviesFetchData())
    }, [])

    if(!stateMovies.length) {
        return <p>Don't have a film</p>
    }
    
    return (
        <MoviesListContainer>
            {stateMovies && stateMovies.map((movie) => (
                <MovieCard
                    onClick={() => movieDetails.setVisiblePopup(movie)}
                    title={movie.title}
                    release_date={movie.release_date}
                    poster_path={movie.poster_path}
                    genres={movie.genres}
                    key={movie.id}
                    cardData={movie}
                />
            ))}
        </MoviesListContainer>
    )
}

export default MoviesList;