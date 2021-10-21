import React, { useState } from "react";
import MovieCard from "../MovieCard/index";
import { MoviesListContainer } from "./style";


function MoviesList(props) {    

    return (
        <MoviesListContainer>
            {(props.listInfo).map((movie) => (
                <MovieCard
                    title={movie.title}
                    genre={movie.genre}
                    year={movie.year}
                    description={movie.description}
                    runtime={movie.runtime}
                    rating={movie.rating}
                    key={movie.id}
                    id={movie.id}
                    handleClick={props.handleClick}
                    card={movie}
                />
            ))}
        </MoviesListContainer>
    )
}

export default MoviesList;