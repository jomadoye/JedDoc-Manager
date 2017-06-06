import {
  expect,
} from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as documentAction from '../../actions/documentAction';
import {
  LOAD_WELCOME_PAGE_DOCUMENT_SUCCESS,
  LOAD_AUTHORIZE_TO_VIEW_DOCUMENT_SUCCESS,
  LOAD_USER_DOCUMENT_SUCCESS,
  SEARCH_DOCUMENTS_BY_TITLE_ON_DASHBOARD_SUCCESS,
  DELETE_USER_DOCUMENT_SUCCESS,
  DELETE_DOCUMENT_BY_ADMIN_SUCCESS,
  UPDATE_USER_DOCUMENT_SUCCESS,
  CREATE_DOCUMENT_BY_USER_SUCCESS,
} from '../../actions/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Document actions', () => {
  const document = {
    title: 'jed',
    body: 'jed is a boy',
  };
  it('should loads documents on the welcome page',
    () => {
      const expectedActions = [{
        type: LOAD_WELCOME_PAGE_DOCUMENT_SUCCESS,
        PublicDocuments: {
          title: 'jed',
          body: 'jed is a boy',
        },
      }];
      const store = mockStore({
        documents: [],
      });
      store.dispatch(documentAction.loadWelcomePageDocumentSuccess(document));
      expect(store.getActions()[0])
        .to.eql(expectedActions[0]);
    });
  it('should load dashboard documents',
    () => {
      const expectedActions = [{
        type: LOAD_AUTHORIZE_TO_VIEW_DOCUMENT_SUCCESS,
        AuthorizeToViewDocuments: {
          title: 'jed',
          body: 'jed is a boy',
        },
        metadata: undefined,
        count: undefined,
      }];
      const store = mockStore({
        documents: [],
      });
      store.dispatch(documentAction
        .loadAuthorizedToViewDocumentSuccess(document));
      expect(store.getActions()[0])
        .to.eql(expectedActions[0]);
    });
  it('should loads all users documents',
    () => {
      const expectedActions = [{
        type: LOAD_USER_DOCUMENT_SUCCESS,
        MyDocuments: {
          title: 'jed',
          body: 'jed is a boy',
        },
        count: undefined,
      }];
      const store = mockStore({
        documents: [],
      });
      store.dispatch(documentAction.loadUserDocumentSuccess(document));
      expect(store.getActions()[0])
        .to.eql(expectedActions[0]);
    });
  it('should search for documents by title on the dashbard',
    () => {
      const expectedActions = [{
        type: SEARCH_DOCUMENTS_BY_TITLE_ON_DASHBOARD_SUCCESS,
        documents: {
          title: 'jed',
          body: 'jed is a boy',
        },
      }];
      const store = mockStore({
        documents: [],
      });
      store.dispatch(documentAction
        .searchDocumentsByTitleOnDashboardSuccess(document));
      expect(store.getActions()[0])
        .to.eql(expectedActions[0]);
    });
  it('should loads documents on the welcome page',
    () => {
      const expectedActions = [{
        type: DELETE_USER_DOCUMENT_SUCCESS,
        documentId: 1,
      }];
      const store = mockStore({
        documents: [],
      });
      store.dispatch(documentAction.deleteUserDocumentSuccess(1));
      expect(store.getActions()[0])
        .to.eql(expectedActions[0]);
    });

  it('should delete a document by admin',
    () => {
      const expectedActions = [{
        type: DELETE_DOCUMENT_BY_ADMIN_SUCCESS,
        documentId: 1,
      }];
      const store = mockStore({
        documents: [],
      });
      store.dispatch(documentAction.deleteDocumentByAdminSuccess(1));
      expect(store.getActions()[0].type)
        .to.eql(expectedActions[0].type);
    });

  it('should load documents on the welcome page',
    () => {
      const expectedActions = [{
        type: LOAD_AUTHORIZE_TO_VIEW_DOCUMENT_SUCCESS,
        AuthorizeToViewDocuments: {
          body: 'jed is a boy',
          title: 'jed',
        },
        count: undefined,
        metadata: undefined,
      }];
      const store = mockStore({
        documents: [],
      });
      store.dispatch(documentAction
        .loadAuthorizedToViewDocumentSuccess(document));
      expect(store.getActions()[0])
        .to.eql(expectedActions[0]);
    });
  it('should create a document by user',
    () => {
      const expectedActions = [{
        type: CREATE_DOCUMENT_BY_USER_SUCCESS,
      }];
      const store = mockStore({
        documents: [],
      });
      store.dispatch(documentAction.documentCreatedByUserSuccess(document));
      expect(store.getActions()[0])
        .to.eql(expectedActions[0]);
    });
  it('should update a users document',
    () => {
      const expectedActions = [{
        type: UPDATE_USER_DOCUMENT_SUCCESS,
        document: {
          body: 'jed is a boy',
          title: 'jed',
        },
        documentId: undefined,
      }];
      const store = mockStore({
        documents: [],
      });
      store.dispatch(documentAction.updateUserDocumentSuccess(document));
      expect(store.getActions()[0])
        .to.eql(expectedActions[0]);
    });
});
