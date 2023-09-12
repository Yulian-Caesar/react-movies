import React, { useState, useContext } from 'react';
const MoviesListContext = React.createContext();

export const useMoviesList = () => {
    return useContext(MoviesListContext)
}

export const MoviesListProvider = ({ children }) => {
    const [ myGenre, setMyGenre ] = useState(null);

    function changeGenre(e) {
        const currentGenre = e.target.getAttribute('value');
		setMyGenre(currentGenre);
	}

    function urlGenre(currentGenre) {
        setMyGenre(currentGenre);
    }

    const value = {myGenre, setMyGenre, changeGenre, urlGenre}

    return (
        <MoviesListContext.Provider value={value} >
            {children}
        </MoviesListContext.Provider>
    )
}