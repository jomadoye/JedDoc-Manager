import expect from 'expect';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as documentAction from '../../../actions/documentAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Document Actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  describe('loadAllDocuments', () => {
    it('retrieves documents and dispatches LOAD_DOCUMENTS_SUCCESS', () => {
      moxios.stubRequest('/documents?limit=9&offset=0', {
        status: 200,
        response: {
          rows: [{ title: 'jed', body: 'jed document' }],
          metaData: {},
        },
      });
      const expectedActions = [
        { type: 'LOAD_ALL_DOCUMENTS_SUCCESS', allDocuments: [{ title: 'good', body: 'jed document' }], metaData: {}, offset: 0 },
      ];
      const store = mockStore();
      store.dispatch(documentAction.loadAllDocuments())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });

  describe('searchDocumentsByTitle', () => {
    it('searches for documents and dispatches searchDocumentsByTitleSuccess', () => {
      moxios.stubRequest('/search/documents?q=dms&limit=9&offset=0', {
        status: 200,
        response: {
          rows: [{ title: 'good' }],
          metaData: {},
        },
      });
      const expectedActions = [
        { type: 'SEARCH_DOCUMENTS_BY_TITLE_SUCCESS', searchResult: [{ title: 'good' }], metaData: {}, offset: 0 },
      ];
      const store = mockStore();
      store.dispatch(documentAction.searchDocumentsByTitle('dms'))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });

  describe('createDocument', () => {
    it('saves a new document and dispatches documentCreatedByUserSuccess', () => {
      moxios.stubRequest('/documents', {
        status: 200,
        response: { title: 'good' },
      });

      const expectedActions = [
        { type: 'CREATE_DOCUMENT_SUCCESS', document: { title: 'good' } },
      ];
      const store = mockStore({ loggedIn: false, user: {} });
      store.dispatch(documentAction.createDocument({}))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('updates a document dispatching updateUserDocumentSuccess', () => {
      moxios.stubRequest('/documents/1', {
        status: 200,
        response: { title: 'good' },
      });
      const expectedActions = [
        { type: 'UPDATE_USER_DOCUMENT_SUCCESS', document: { title: 'good' }, documentId: 1 },
      ];
      const store = mockStore({});
      store.dispatch(documentAction.updateUserDocumentSuccess({ title: 'good' }, 1));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('deleteDocument', () => {
    it('deletes a document and dispatches deleteUserDocumentSuccess', () => {
      moxios.stubRequest('/documents/3', {
        status: 200,
      });
      const expectedActions = [
        { type: 'DELETE_USER_DOCUMENT_SUCCESS' },
      ];
      const store = mockStore();
      store.dispatch(documentAction.deleteDocument(3))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
});
