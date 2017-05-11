import { combineReducers } from 'redux';
import flashMessages from '../reducers/flashMessagesReducer';
import login from './loginReducer';
import documents from './documentReducer';

const rootReducer = combineReducers({
  flashMessages,
  login,
  documents,
});

export default rootReducer;
