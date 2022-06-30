import React, { useState, useContext } from "react";

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
    )
}