import React, { useState, useContext } from "react";

const MovieDetailsContext = React.createContext();
const MovieDetailsToggleContext = React.createContext();

export const useMovieDetails = () => {
    return useContext(MovieDetailsContext)
}

export const useMovieDetailsToggle = () => {
    return useContext(MovieDetailsToggleContext)
}

export const MovieDetailsProvider = ({ children }) => {
    const [ movieDetails, setMovieDetails ] = useState(false)

    const toggle = () => setMovieDetails(prev => !prev)

    return (
        <MovieDetailsContext.Provider value={movieDetails}>
            <MovieDetailsToggleContext.Provider value={toggle}>
                {children}
            </MovieDetailsToggleContext.Provider>
        </MovieDetailsContext.Provider>
    )
}