import lodash from 'lodash';
import {
  SET_CURRENT_USER,
} from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.isUser, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !lodash.isEmpty(action.user),
        user: action.user.data,
      };
    default:
      return state;
  }
};

