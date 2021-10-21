import React, { useState, useContext } from "react";

const MovieDetailsToggleContext = React.createContext();

export const useMovieDetailsToggle = () => {
    return useContext(MovieDetailsToggleContext)
}

export const MovieDetailsProvider = ({ children }) => {
    const [ movieDetails, setMovieDetails ] = useState(false);

    const toggle = () => {
        setMovieDetails(!movieDetails)
    }

    const [activeItem, setActiveItem] = useState({
        title: "",
        description: "",
        id: "",
        genre: "",
        year: "",
        runtime: "",
        rating: ""
    })

    const handleClick = (card) => {
        toggle()
        setActiveItem(card)
    }

    const value = {
        handleClick, toggle, activeItem, movieDetails
    }

    return (
        <MovieDetailsToggleContext.Provider value={ value }>
            {children}
        </MovieDetailsToggleContext.Provider>
    )
}