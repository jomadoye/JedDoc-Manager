import findIndex from 'lodash/findIndex';
import initialState from './initialState';
import {
  LOAD_WELCOME_PAGE_DOCUMENT_SUCCESS,
  LOAD_AUTHORIZE_TO_VIEW_DOCUMENT_SUCCESS,
  LOAD_USER_DOCUMENT_SUCCESS,
  DELETE_USER_DOCUMENT_SUCCESS,
  UPDATE_USER_DOCUMENT_SUCCESS,
} from '../actions/actionTypes';

export default

function documentReducer(state = initialState.documents, action) {
  switch (action.type) {
    case LOAD_WELCOME_PAGE_DOCUMENT_SUCCESS:
      {
        return Object.assign({}, state, {
          PublicDocuments: action.PublicDocuments,
        });
      }

    case LOAD_AUTHORIZE_TO_VIEW_DOCUMENT_SUCCESS:
      {
        return Object.assign({}, state, {
          AuthorizeToViewDocuments: action.AuthorizeToViewDocuments,
        });
      }

    case LOAD_USER_DOCUMENT_SUCCESS:
      {
        return Object.assign({}, state, {
          MyDocuments: action.MyDocuments,
        });
      }

    case DELETE_USER_DOCUMENT_SUCCESS: {
      const index = findIndex(state.MyDocuments, { id: action.documentId });
      const stateCopy = Object.assign({}, state);
      stateCopy.MyDocuments.splice(index, 1);
      return stateCopy;
    }

    case UPDATE_USER_DOCUMENT_SUCCESS: {
      const documemts = state.MyDocuments.filter(document =>
        document.id !== action.document.id);
      return { MyDocuments: [
        ...documemts,
        Object.assign({}, action.document),
      ] };
    }

    default:
      {
        return state;
      }
  }
}
