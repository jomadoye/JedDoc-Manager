import axios from 'axios';
import {
  LOAD_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_SUCCESS,
  DELETE_USER_PROFILE_SUCCESS,
} from '../actions/actionTypes';
import {
  addFlashMessage,
} from '../actions/flashMessages';

/**
 * This function ensures a user profile was loaded successfully
 *
 * @export
 * @param {object} user the user
 * @returns {object}
 */
export function loadUserProfileSuccess(user) {
  return {
    type: LOAD_USER_PROFILE_SUCCESS,
    userDetails: user,
  };
}

/**
 * This function ensures a user profile was updated successfully
 *
 * @export
 * @param {object} user the user to update
 * @returns {object}
 */
export function updateUserProfileSuccess(user) {
  return {
    type: UPDATE_USER_PROFILE_SUCCESS,
    updatedUser: user,
  };
}

/**
 * This function deletes a user account
 *
 * @export
 * @returns {object}
 */
export function deleteUserAccountSuccess() {
  return {
    type: DELETE_USER_PROFILE_SUCCESS,
  };
}

/**
 * This function loads user profile
 *
 * @export
 * @param {object} userId the user ID
 * @returns dispatch
 */
export function loadUserProfile(userId) {
  return dispatch => axios.get(`/api/users/${userId}`)
      .then((user) => {
        const userDetails = user.data;
        dispatch(loadUserProfileSuccess(userDetails));
      })
      .catch((error) => {
        console.log(error);
      });
}

/**
 * This function updates the user profile
 *
 * @export
 * @param {object} user the user to update
 * @param {number} userId the user to update, Id
 * @returns dispatch
 */
export function updateUserProfile(user, userId) {
  return dispatch => axios.put(`/api/users/${userId}`, user)
      .then((updatedUserDetails) => {
        const updatedUser = updatedUserDetails.data;
        const response = updatedUser.message;
        const message = {};
        message.text = response;
        dispatch(addFlashMessage(message));
        dispatch(updateUserProfileSuccess(updatedUser));
      })
      .catch((error) => {
        const response = error.response.data.message;
        const message = {};
        message.text = response;
        dispatch(addFlashMessage(message));
      });
}

export function deleteUserAccount(userId) {
  return dispatch => axios.delete(`/api/users/${userId}`)
      .then((res) => {
        console.log(res);
        dispatch(deleteUserAccountSuccess());
      })
      .catch((error) => {
        console.log(error);
      });
}
