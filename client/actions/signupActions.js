import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => axios.post('users', userData);
}

export function isUserExists(query) {
  return dispatch => axios.get(`users/validate/${query}`);
}
