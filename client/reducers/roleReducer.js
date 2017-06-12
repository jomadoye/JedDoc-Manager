import initialState from './initialState';
import {
  LOAD_USER_ROLE_SUCCESS,
  DELETE_USER_ROLE_SUCCESS,
} from '../actions/actionTypes';

export default

/**
* role reducer
*
* @export
* @param {Object} [state=initialState.documents] initial state
* @param {Number} action action
* @returns {Number} reduced or initial state
*/
function documentReducer(state = initialState.role, action) {
  switch (action.type) {
    case LOAD_USER_ROLE_SUCCESS:
      {
        return Object.assign({}, state, {
          allRoles: action.roles,
        });
      }
    case DELETE_USER_ROLE_SUCCESS:
      {
        const roles = state.allRoles.filter(role =>
         role.id !== action.roleId);
        return { allRoles: [
          ...roles,
        ] };
      }

    default:
      {
        return state;
      }
  }
}
