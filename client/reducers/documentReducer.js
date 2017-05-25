import findIndex from 'lodash/findIndex';
import initialState from './initialState';
import {
  LOAD_WELCOME_PAGE_DOCUMENT_SUCCESS,
  LOAD_AUTHORIZE_TO_VIEW_DOCUMENT_SUCCESS,
  LOAD_USER_DOCUMENT_SUCCESS,
  DELETE_USER_DOCUMENT_SUCCESS,
  UPDATE_USER_DOCUMENT_SUCCESS,
  LOAD_ALL_DOCUMENTS_SUCCESS,
  DELETE_DOCUMENT_BY_ADMIN_SUCCESS,
  UPDATE_USER_DOCUMENT_BY_ADMIN_SUCCESS,
  SEARCH_DOCUMENTS_BY_TITLE_SUCCESS,
  CREATE_DOCUMENT_BY_USER_SUCCESS,
  SEARCH_DOCUMENTS_BY_TITLE_ON_DASHBOARD_SUCCESS,
} from '../actions/actionTypes';

export default

// eslint-disable-next-line require-jsdoc
function documentReducer(state = initialState.documents, action) {
  switch (action.type) {
    case LOAD_WELCOME_PAGE_DOCUMENT_SUCCESS:
      {
        return Object.assign({}, state, {
          PublicDocuments: action.PublicDocuments,
        });
      }

    case CREATE_DOCUMENT_BY_USER_SUCCESS:
      {
        return state;
      }

    case LOAD_AUTHORIZE_TO_VIEW_DOCUMENT_SUCCESS:
      {
        return Object.assign({}, state, {
          AuthorizeToViewDocuments: action.AuthorizeToViewDocuments,
        });
      }

    case SEARCH_DOCUMENTS_BY_TITLE_ON_DASHBOARD_SUCCESS:
      {
        return Object.assign({}, state, {
          AuthorizeToViewDocuments: action.searchDocuments,
        });
      }

    case LOAD_USER_DOCUMENT_SUCCESS:
      {
        return Object.assign({}, state, {
          MyDocuments: action.MyDocuments,
        });
      }
    case SEARCH_DOCUMENTS_BY_TITLE_SUCCESS:
      {
        return Object.assign({}, state, {
          MyDocuments: action.searchDocuments,
        });
      }

    case LOAD_ALL_DOCUMENTS_SUCCESS:
      {
        return Object.assign({}, state, {
          allDocuments: action.allDocuments,
        });
      }

    case DELETE_USER_DOCUMENT_SUCCESS: {
      const index = findIndex(state.MyDocuments, { id: action.documentId });
      const stateCopy = Object.assign({}, state);
      stateCopy.MyDocuments.splice(index, 1);
      return stateCopy;
    }

    case DELETE_DOCUMENT_BY_ADMIN_SUCCESS: {
      const index = findIndex(state.allDocuments, { id: action.documentId });
      const stateCopy = Object.assign({}, state);
      stateCopy.allDocuments.splice(index, 1);
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

    case UPDATE_USER_DOCUMENT_BY_ADMIN_SUCCESS: {
      const documemts = state.allDocuments.filter(document =>
        document.id !== action.document.id);
      return { allDocuments: [
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
