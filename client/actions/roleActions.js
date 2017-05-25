import axios from 'axios';
import {
  CREATE_USER_ROLE_SUCCESS,
  LOAD_USER_ROLE_SUCCESS,
  DELETE_USER_ROLE_SUCCESS,
} from '../actions/actionTypes';
import {
  addFlashMessage,
} from '../actions/flashMessages';

/**
 * This function ensure the role was created succesfully
 *
 * @export
 * @returns dispatch
 */
export function createUserRoleSuccess() {
  return {
    type: CREATE_USER_ROLE_SUCCESS,
  };
}

/**
 * This function creates a role
 *
 * @export
 * @param {string} roleTitle
 * @returns {object}
 */
export function createUserRole(roleTitle) {
  return dispatch => axios.post('/api/roles/', roleTitle)
    .then((res) => {
      const message = {};
      message.text = res.data.message;
      dispatch(addFlashMessage(message));
      dispatch(createUserRoleSuccess());
      return res.data.message;
    })
    .catch((error) => {
      let res;
      try {
        const errorMessage = error.response.data.error.errors[0].message;
        if (errorMessage) {
          if (errorMessage === 'Validation notEmpty failed') {
            res = 'Please ensure document has a Title and Body';
          } else if (errorMessage === 'title must be unique') {
            res = 'This role already exists';
          } else {
            res = 'An error occured while creating this document';
          }
        }
      } catch (err) {
        res = 'An error occured while creating this document';
      }
      const message = {};
      message.text = res;
      dispatch(addFlashMessage(message));
      return res;
    });
}

/**
 * This function ensures the documents were loaded succesfully
 *
 * @export
 * @param {array} roles
 * @returns action
 */
export function loadUserRolesSuccess(roles) {
  return {
    type: LOAD_USER_ROLE_SUCCESS,
    roles,
  };
}

/**
 * This function loads the user roles
 *
 * @export
 * @param {any} dispatch
 * @returns {object}
 */
export function loadUserRoles() {
  return dispatch => axios.get('/api/roles/')
    .then((res) => {
      dispatch(loadUserRolesSuccess(res.data.roles));
    })
    .catch((error) => {
      throw error;
    });
}

/**
 * The function ensure roles are deleted succefully
 *
 * @export
 * @param {number} roleId
 * @returns dispatch
 */
export function deleteUserRolesSuccess(roleId) {
  return {
    type: DELETE_USER_ROLE_SUCCESS,
    roleId,
  };
}

/**
 * This function deletes  role
 *
 * @export
 * @param {number} roleId
 * @returns dispatch
 */
export function DeleteUserRoles(roleId) {
  return dispatch => axios.delete(`/api/roles/${roleId}`)
    .then((res) => {
      const message = {};
      message.text = res.data.message;
      dispatch(addFlashMessage(message));
      dispatch(deleteUserRolesSuccess(roleId));
    })
    .catch((error) => {
      throw error;
    });
}
