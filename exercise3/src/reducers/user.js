import {
  USER_FETCH,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILURE
} from '../constants/ActionTypes';

export default function users(state = { loaded: false }, action) {
  switch (action.type) {
    case USER_FETCH:
      return state;
    case USER_FETCH_SUCCESS:
      return { ...state, userData: action.data, loaded: true };
    case USER_FETCH_FAILURE:
      return { ...state, userData: action.err, loaded: false };
    default:
      return state;
  }
}
