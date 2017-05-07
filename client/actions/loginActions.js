import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { SET_CURRENT_USER } from '../actions/actionTypes';

export function login(data) {
  return dispatch => {
    return axios.post('/users/login', data).then((res) => {
      const token = res.data.token;
      window.localStorage.setItem('jwtToken_JedDoc', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwt.decode(token).data));
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