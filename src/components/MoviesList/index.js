import React, { useEffect } from 'react';
import MovieCard from '../MovieCard/index';
import { MoviesListContainer } from './style';
import { moviesFetchData } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { useMovieDetails } from '../MovieDetails/MovieDetailsContext';
import { useMoviesList } from '../MoviesList/MoviesListContext';
import { useLocation } from 'react-router-dom';
import { GENRES_NAVIGATION_LIST } from 'constants'


const MoviesList = () => {
    const dispatch = useDispatch();
    const movieDetails = useMovieDetails();
    const stateMovies = useSelector(state => state.movies);

    // const yulik = useMoviesList();
	// console.log(stateMovies)
    // console.log(movieDetails)
    
    useEffect(() => {
        dispatch(moviesFetchData())
    }, [])

    const location = useLocation();
	useEffect(() => {

        // console.log(location)
        const queryParam = location.pathname.replace('/search/','');
        // console.log(queryParam);
        // console.log(typeof queryParam);
        if (location.pathname === '/search') {
           return dispatch(moviesFetchData())
        //    http://localhost:4000/movies?search=181808
        //    http://localhost:4000/movies/?searchBy=genres&filter=comedy
        }
        if (GENRES_NAVIGATION_LIST.find(el => el === queryParam)) {
            return dispatch(moviesFetchData(`?searchBy=genres&filter=${queryParam}`));
        }
        if (queryParam === 'release_date' || queryParam === 'vote_average') {
            return dispatch(moviesFetchData(`?sortBy=${queryParam}&sortOrder=asc`));
        }

	  }, [location]);

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
                    id={movie.id}
                />
            ))}
        </MoviesListContainer>
    )
}

export default MoviesList;