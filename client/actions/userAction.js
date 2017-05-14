import axios from 'axios';
import { LOAD_USER_PROFILE_SUCCESS, UPDATE_USER_PROFILE_SUCCESS } from '../actions/actionTypes';
import { addFlashMessage } from '../actions/flashMessages';

export function loadUserProfileSuccess(user) {
  return { type: LOAD_USER_PROFILE_SUCCESS, userDetails: user };
}

export function updateUserProfileSuccess(user) {
  return { type: UPDATE_USER_PROFILE_SUCCESS, updatedUser: user };
}


export function loadUserProfile(userId) {
  return function (dispatch) {
    return axios.get(`/api/users/${userId}`)
      .then((user) => {
        const userDetails = user.data;
        dispatch(loadUserProfileSuccess(userDetails));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function updateUserProfile(user, userId) {
  return function (dispatch) {
    return axios.put(`/api/users/${userId}`, user)
      .then((user) => {
        const updatedUser = user.data;
        const response = updatedUser.message;
        const message = {};
        message.text = response;
        dispatch(addFlashMessage(message));
        dispatch(updateUserProfileSuccess(updatedUser));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
