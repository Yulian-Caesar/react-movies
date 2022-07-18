import { MOVIES_FETCH_DATA_SUCCESS } from './types';
import { URL } from 'constants';

export const moviesFetchDataSuccess = (movies) => {
    return {
        type: MOVIES_FETCH_DATA_SUCCESS,
        movies: movies
    }
}

export const moviesFetchData = (additionalUrl='') => {
    return (dispatch) => {
        fetch(`${URL}${additionalUrl}`)
            .then(response => response.json())
            .then(movies => dispatch(moviesFetchDataSuccess(movies.data)))
    }
}

export const moviesListChange = async (methodType, data = {}, func, id='',) => {
    const res = await fetch(`${URL}${id}`, {
      method: methodType,
      headers: {
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : null
    });
    if(res.ok) {
        func()
    }
}