import initialState from './initialState';

/**
 * User reducer
 *
 * @export
 * @param {Object} [state=initialState.access] initial state
 * @param {Object} action action
 * @returns {Object} reduced or initial state
 */
export default function userReducer(state = initialState.users, action) {
  switch (action.type) {

    default:
      {
        return state;
      }
  }
}
