import React from "react";
import MovieCard from "../MovieCard/index";
import { MoviesListContainer } from "./style";

let movies = [
    {
        title: "Pulp Fiction",
        description: "Description",
        id: "999",
        genre: "Action & Adventure",
        year: "2004"
    },
    {
        title: "Bohemian Rhapsody",
        description: "Description",
        id: "312123",
        genre: "Drama, Biography, Music",
        year: "2003"
    },
    {
        title: "Kill Bill: Vol 2",
        description: "Description",
        id: "432",
        genre: "Oscar winning Movie",
        year: "1994"
    },
    {
        title: "Avengers: War of Infinity",
        description: "Description",
        id: "5665",
        genre: "Action & Adventure",
        year: "2004"
    },
    {
        title: "Inception",
        description: "Description",
        id: "88",
        genre: "Action & Adventure",
        year: "2003"
    },
    {
        title: "Reservoir dogs",
        description: "Description",
        id: "34",
        genre: "Oscar winning Movie",
        year: "1994"
    }
]

function MoviesList() {
    return (
        <MoviesListContainer>
            {movies.map((movie) => (
                <MovieCard
                    title={movie.title}
                    genre={movie.genre}
                    year={movie.year}
                    description={movie.description}
                    key={movie.id}
                />
            ))}
        </MoviesListContainer>
    )
}

export default MoviesList;