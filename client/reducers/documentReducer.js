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
        const document = {
          count: action.count,
          page: action.metadata.page,
          pageCount: action.metadata.pageCount,
          pageSize: action.metadata.pageSize,
          totalCount: action.metadata.totalCount,
          documents: action.AuthorizeToViewDocuments,
        };
        return Object.assign({}, state, {
          AuthorizeToViewDocuments: document,
        });
      }

    case SEARCH_DOCUMENTS_BY_TITLE_ON_DASHBOARD_SUCCESS:
      {
        const document = {
          count: action.documents.count,
          page: action.documents.metaData.page,
          pageCount: action.documents.metaData.pageCount,
          pageSize: action.documents.metaData.pageSize,
          totalCount: action.documents.metaData.totalCount,
          documents: action.documents.document,
        };
        return Object.assign({}, state, {
          AuthorizeToViewDocuments: document,
        });
      }

    case LOAD_USER_DOCUMENT_SUCCESS:
      {
        const document = {
          count: action.count,
          documents: action.MyDocuments,
        };
        return Object.assign({}, state, {
          MyDocuments: document,
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
        const document = {
          count: action.count,
          page: action.metadata.page,
          pageCount: action.metadata.pageCount,
          pageSize: action.metadata.pageSize,
          totalCount: action.metadata.totalCount,
          documents: action.allDocuments,
        };
        return Object.assign({}, state, {
          allDocuments: document,
        });
      }

    case DELETE_USER_DOCUMENT_SUCCESS:
      {
        const index = findIndex(state.MyDocuments, { id: action.documentId });
        const stateCopy = Object.assign({}, state);
        stateCopy.MyDocuments.splice(index, 1);
        return stateCopy;
      }

    case DELETE_DOCUMENT_BY_ADMIN_SUCCESS:
      {
        const index = findIndex(state.allDocuments, { id: action.documentId });
        const stateCopy = Object.assign({}, state);
        stateCopy.allDocuments.splice(index, 1);
        return stateCopy;
      }

    case UPDATE_USER_DOCUMENT_SUCCESS:
      {
        const documemts = state.MyDocuments.filter(document =>
        document.id !== action.document.id);
        return { MyDocuments: [
          ...documemts,
          Object.assign({}, action.document),
        ] };
      }

    case UPDATE_USER_DOCUMENT_BY_ADMIN_SUCCESS:
      {
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
