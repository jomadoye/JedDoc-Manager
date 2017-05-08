import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { SET_CURRENT_USER } from '../actions/actionTypes';

export function login(userData) {
  return dispatch => {
    return axios.post('/users/login', userData).then((res) => {
      const token = res.data.token;
      window.localStorage.setItem('jwtToken_JedDoc', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  }
}

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  }
}

export function logout(user) {
  return dispatch => {
    window.localStorage.removeItem('jwtToken_JedDoc');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}