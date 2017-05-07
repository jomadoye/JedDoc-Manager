import axios from 'axios';

export function userSignupRequest (userData) {
  return dispatch => {
    return axios.post('users', userData);
  }
}

export function isUserExists (query) {
  return dispatch => {
    return axios.get(`users/validate/${query}`);
  }
}
