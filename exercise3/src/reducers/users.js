import {
  USER_FETCH_LIST,
  USER_FETCH_LIST_SUCCESS,
  USER_FETCH_LIST_FAILURE
} from '../constants/ActionTypes';

export default function users(state = { loaded: false }, action) {
  switch (action.type) {
    case USER_FETCH_LIST:
      return state;
    case USER_FETCH_LIST_SUCCESS:
      return { ...state, users: action.data, loaded: true };
    case USER_FETCH_LIST_FAILURE:
      return { ...state, users: action.err, loaded: false };
    default:
      return state;
  }
}
