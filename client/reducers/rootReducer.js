import { combineReducers } from 'redux';
import flashMessages from '../reducers/flashMessages';
import login from '../reducers/login';

export default combineReducers({
  flashMessages,
  login,
});
