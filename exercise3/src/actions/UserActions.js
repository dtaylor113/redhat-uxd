import {
  USER_FETCH_LIST,
  USER_FETCH_LIST_SUCCESS,
  USER_FETCH_LIST_FAILURE,
  USER_FETCH,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILURE
} from '../constants/ActionTypes';

export const userFetchList = () => (dispatch) => {
  dispatch({ type: USER_FETCH_LIST });
  return fetch('https://jsonplaceholder.typicode.com/users') // eslint-disable-line
    .then(res => res.json().then((data) => {
      if (res.ok) return dispatch({ type: USER_FETCH_LIST_SUCCESS, data });
      return dispatch({ type: USER_FETCH_LIST_FAILURE, error: data });
    }))
    .catch(err => dispatch({ type: USER_FETCH_LIST_FAILURE, error: err }));
};

export const userFetch = id => (dispatch) => {
  dispatch({ type: USER_FETCH });
  return fetch('https://jsonplaceholder.typicode.com/users/' + id) // eslint-disable-line
    .then(res => res.json().then((data) => {
      if (res.ok) return dispatch({ type: USER_FETCH_SUCCESS, data });
      return dispatch({ type: USER_FETCH_FAILURE, error: data });
    }))
    .catch(err => dispatch({ type: USER_FETCH_FAILURE, error: err }));
};
