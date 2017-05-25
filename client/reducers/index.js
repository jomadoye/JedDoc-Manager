import { combineReducers } from 'redux';
import flashMessages from '../reducers/flashMessagesReducer';
import login from './loginReducer';
import documents from './documentReducer';
import user from './userReducer';
import role from './roleReducer';

const rootReducer = combineReducers({
  flashMessages,
  login,
  documents,
  user,
  role,
});

export default rootReducer;
