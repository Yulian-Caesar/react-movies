import { MOVIES_FETCH_DATA_SUCCESS } from "./types"


export const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case MOVIES_FETCH_DATA_SUCCESS:
            return action.movies
        default: return state
    }
}