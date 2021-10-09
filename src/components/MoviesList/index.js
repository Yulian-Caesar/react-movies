import React, { useState } from "react";
import MovieCard from "../MovieCard/index";
import { MoviesListContainer } from "./style";

let initialState = [
    {
        title: "Pulp Fiction",
        description: "Description",
        id: "999",
        genre: "Action & Adventure",
        year: "2004",
        runtime: "2h 34min",
        rating: "7.8"
    },
    {
        title: "Bohemian Rhapsody",
        description: "Description",
        id: "312123",
        genre: "Drama, Biography, Music",
        year: "2003",
        runtime: "2h 34min",
        rating: "7.8"
    },
    {
        title: "Kill Bill: Vol 2",
        description: "Description",
        id: "432",
        genre: "Oscar winning Movie",
        year: "1994",
        runtime: "2h 34min",
        rating: "7.8"
    },
    {
        title: "Avengers: War of Infinity",
        description: "Description",
        id: "5665",
        genre: "Action & Adventure",
        year: "2004",
        runtime: "2h 34min",
        rating: "7.8"
    },
    {
        title: "Inception",
        description: "Description",
        id: "88",
        genre: "Action & Adventure",
        year: "2003",
        runtime: "2h 34min",
        rating: "7.8"
    },
    {
        title: "Reservoir dogs",
        description: "Description",
        id: "34",
        genre: "Oscar winning Movie",
        year: "1994",
        runtime: "2h 34min",
        rating: "7.8"
    }
]

function MoviesList() {
    const [movies, setMovies] = useState(initialState);
    return (
        <MoviesListContainer>
            {movies.map((movie) => (
                <MovieCard
                    title={movie.title}
                    genre={movie.genre}
                    year={movie.year}
                    description={movie.description}
                    runtime={movie.runtime}
                    rating={movie.rating}
                    key={movie.id}
                />
            ))}
        </MoviesListContainer>
    )
}

export default MoviesList;