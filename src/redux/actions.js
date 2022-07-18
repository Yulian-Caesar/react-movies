import { MOVIES_FETCH_DATA_SUCCESS } from "./types";

export const moviesFetchDataSuccess = (movies) => {
    return {
        type: MOVIES_FETCH_DATA_SUCCESS,
        movies: movies
    }
}

export const moviesFetchData = (url = "") => {
    return (dispatch) => {
        fetch(`http://localhost:4000/movies${url}`)
            .then(response => response.json())
            .then(movies => dispatch(moviesFetchDataSuccess(movies.data)))
    }
}