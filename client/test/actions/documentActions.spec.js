import {
  expect,
} from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
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

const document = {
  body: 'jed is a boy',
  title: 'jedidiahh',
};
describe('Document actions', () => {
  after(() => {
    nock.cleanAll();
  });
  it('should loads documents on the welcome page',
    () => {
      nock('/api')
        .delete('/users/3')
        .reply(200);
      const expectedActions = [{
        type: LOAD_WELCOME_PAGE_DOCUMENT_SUCCESS,
      }];
      const store = mockStore({
        documents: [],
      });
      store.dispatch(documentAction.loadWelcomePageDocumentSuccess());
      expect(store.getActions()[0].type)
        .to.eql(expectedActions[0].type);
    });
  it('should load dashboard documents',
    () => {
      nock('/api')
        .delete('/users/3')
        .reply(200);
      const expectedActions = [{
        type: LOAD_AUTHORIZE_TO_VIEW_DOCUMENT_SUCCESS,
      }];
      const store = mockStore({
        documents: [],
      });
      store.dispatch(documentAction.loadAuthorizedToViewDocumentSuccess());
      expect(store.getActions()[0].type)
        .to.eql(expectedActions[0].type);
    });
  it('should loads all users documents',
    () => {
      nock('/api')
        .delete('/users/3')
        .reply(200);
      const expectedActions = [{
        type: LOAD_USER_DOCUMENT_SUCCESS,
      }];
      const store = mockStore({
        documents: [],
      });
      store.dispatch(documentAction.loadUserDocumentSuccess());
      expect(store.getActions()[0].type)
        .to.eql(expectedActions[0].type);
    });
  it('should search for documents by title on the dashbard',
    () => {
      nock('/api')
        .delete('/users/3')
        .reply(200);
      const expectedActions = [{
        type: SEARCH_DOCUMENTS_BY_TITLE_ON_DASHBOARD_SUCCESS,
      }];
      const store = mockStore({
        documents: [],
      });
      store.dispatch(documentAction.searchDocumentsByTitleOnDashboardSuccess());
      expect(store.getActions()[0].type)
        .to.eql(expectedActions[0].type);
    });
  it('should loads documents on the welcome page',
    () => {
      nock('/api')
        .delete('/users/3')
        .reply(200);
      const expectedActions = [{
        type: DELETE_USER_DOCUMENT_SUCCESS,
      }];
      const store = mockStore({
        documents: [],
      });
      store.dispatch(documentAction.deleteUserDocumentSuccess());
      expect(store.getActions()[0].type)
        .to.eql(expectedActions[0].type);
    });

  it('should delete a document by admin',
    () => {
      nock('/api')
        .delete('/users/3')
        .reply(200);
      const expectedActions = [{
        type: DELETE_DOCUMENT_BY_ADMIN_SUCCESS,
      }];
      const store = mockStore({
        documents: [],
      });
      store.dispatch(documentAction.deleteDocumentByAdminSuccess());
      expect(store.getActions()[0].type)
        .to.eql(expectedActions[0].type);
    });

  it('should load documents on the welcome page',
    () => {
      nock('/api')
        .delete('/users/3')
        .reply(200);
      const expectedActions = [{
        type: LOAD_AUTHORIZE_TO_VIEW_DOCUMENT_SUCCESS,
      }];
      const store = mockStore({
        documents: [],
      });
      store.dispatch(documentAction.loadAuthorizedToViewDocumentSuccess());
      expect(store.getActions()[0].type)
        .to.eql(expectedActions[0].type);
    });
  it('should create a document by user',
    () => {
      nock('/api')
        .delete('/users/3')
        .reply(200);
      const expectedActions = [{
        type: CREATE_DOCUMENT_BY_USER_SUCCESS,
      }];
      const store = mockStore({
        documents: [],
      });
      store.dispatch(documentAction.documentCreatedByUserSuccess());
      expect(store.getActions()[0].type)
        .to.eql(expectedActions[0].type);
    });
  it('should update a users document',
    () => {
      nock('/api')
        .delete('/users/3')
        .reply(200);
      const expectedActions = [{
        type: UPDATE_USER_DOCUMENT_SUCCESS,
      }];
      const store = mockStore({
        documents: [],
      });
      store.dispatch(documentAction.updateUserDocumentSuccess());
      expect(store.getActions()[0].type)
        .to.eql(expectedActions[0].type);
    });
});
