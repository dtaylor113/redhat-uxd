import {
  USER_FETCH_LIST,
  USER_FETCH_LIST_SUCCESS,
  USER_FETCH_LIST_FAILURE
} from '../constants/ActionTypes';

const userFetchList = () => (dispatch) => {
  dispatch({ type: USER_FETCH_LIST });
  return fetch('https://randomuser.me/api/?results=50') // eslint-disable-line
    .then(res => res.json().then((data) => {
      if (res.ok) return dispatch({ type: USER_FETCH_LIST_SUCCESS, data });
      return dispatch({ type: USER_FETCH_LIST_FAILURE, error: data });
    }))
    .catch(err => dispatch({ type: USER_FETCH_LIST_FAILURE, error: err }));
};

export default userFetchList;
