import axios from 'axios';
import {
  LOAD_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_SUCCESS,
  DELETE_USER_PROFILE_SUCCESS,
  LOAD_ALL_USERS_SUCCESS,
  DELETE_SINGLE_USER_SUCCESS,
  UPDATE_USER_PROFILE_BY_ADMIN_SUCCESS,
} from '../actions/actionTypes';
import {
  addFlashMessage,
  deleteFlashMessage,
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
 * This function ensure the admin updated a user sucessfully
 *
 * @export
 * @param {onject} user
 * @returns dispatch
 */
export function updateUserProfileByAdminSuccess(user, userId) {
  return {
    type: UPDATE_USER_PROFILE_BY_ADMIN_SUCCESS,
    updatedUser: user,
    userId,
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
        dispatch(updateUserProfileByAdminSuccess(updatedUser.user, userId));
        dispatch(deleteFlashMessage(1));
      })
      .catch((error) => {
        const response = error.response.data.message;
        const message = {};
        message.text = response;
        dispatch(addFlashMessage(message));
      });
}

/**
 * This function deletes a user
 *
 * @export
 * @param {number} userId
 * @returns dispatch
 */
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

/**
 * This function ensures users are loaded sucessfully
 *
 * @export
 * @param {object} users
 * @returns {object}
 */
export function loadAllUsersSuccess(users) {
  return {
    type: LOAD_ALL_USERS_SUCCESS,
    users,
  };
}

/**
 * The function loads all users
 *
 * @export
 * @returns dispatch
 */
export function loadAllUsers() {
  return dispatch => axios.get('/api/users')
      .then((res) => {
        dispatch(loadAllUsersSuccess(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
}

/**
 * This function ensure to delete a user sucessfully
 *
 * @export
 * @param {number} userId
 * @returns {object}
 */
export function deleteSingleUserAccountSuccess(userId) {
  return {
    type: DELETE_SINGLE_USER_SUCCESS,
    userId,
  };
}

/**
 * This function deletes a user
 *
 * @export
 * @param {number} userId
 * @returns dispatch
 */
export function deleteSingleUserAccount(userId) {
  return dispatch => axios.delete(`/api/users/${userId}`)
      .then((res) => {
        const message = {};
        message.text = res.data.message;
        dispatch(addFlashMessage(message));
        dispatch(deleteFlashMessage(1));
        dispatch(deleteSingleUserAccountSuccess(userId));
      })
      .catch((error) => {
        console.log(error);
      });
}
