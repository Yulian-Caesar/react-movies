import React, { useState, useContext } from "react";

<<<<<<< home-task-6
const MovieDetailsContext = React.createContext();

export const useMovieDetails = () => {
    return useContext(MovieDetailsContext)
}

export const MovieDetailsProvider = ({ children }) => {
    const [ isMovieDetailsOpen, setIsMovieDetailsOpen ] = useState(false)
    const [ currentEl, setCurrentEl ] = useState()

    const setVisiblePopup = (currMovie) => {
        setCurrentEl(currMovie)
        if (isMovieDetailsOpen === false) {
            setIsMovieDetailsOpen(true)
        }
        if (isMovieDetailsOpen === true && currMovie.id === currentEl.id) {
            setIsMovieDetailsOpen(false)
        }
    }

    const value = {isMovieDetailsOpen, setVisiblePopup, currentEl, setCurrentEl}

    return (
        <MovieDetailsContext.Provider value={value} >
            {children}
        </MovieDetailsContext.Provider>
=======
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
>>>>>>> master
    )
}