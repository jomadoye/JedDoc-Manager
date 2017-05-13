import axios from 'axios';
import { LOAD_WELCOME_PAGE_DOCUMENT_SUCCESS, LOAD_AUTHORIZE_TO_VIEW_DOCUMENT_SUCCESS, LOAD_USER_DOCUMENT_SUCCESS, DELETE_USER_DOCUMENT_SUCCESS } from './actionTypes';
import { addFlashMessage } from '../actions/flashMessages';

export function createDocument(document) {
  return dispatch => axios.post('/api/documents', document)
      .then(res => res.data.message)
      .catch((error) => {
        let res;
        try {
          const errorMessage = error.response.data.error.errors[0].message;
          if (errorMessage) {
            if (errorMessage === 'Validation notEmpty failed') {
              res = 'Please ensure document has a Title and Body';
            } else if (errorMessage === 'title must be unique') {
              res = 'Title must be unique';
            } else {
              res = 'An error occured while creating this document';
            }
          }
        } catch (err) {
          res = 'An error occured while creating this document';
        }
        return res;
      });
}

export function loadWelcomePageDocumentSuccess(documents) {
  return { type: LOAD_WELCOME_PAGE_DOCUMENT_SUCCESS, PublicDocuments: documents };
}

export function loadAuthorizedToViewDocumentSuccess(documents) {
  return { type: LOAD_AUTHORIZE_TO_VIEW_DOCUMENT_SUCCESS, AuthorizeToViewDocuments: documents };
}

export function loadUserDocumentSuccess(documents) {
  return { type: LOAD_USER_DOCUMENT_SUCCESS, MyDocuments: documents };
}

export function deleteUserDocumentSuccess(message) {
  return { type: DELETE_USER_DOCUMENT_SUCCESS, message };
}

export function loadWelcomePageDocument() {
  return function (dispatch) {
    return axios.get('/documents', document)
      .then((documents) => {
        const document = documents.data.document;
        dispatch(loadWelcomePageDocumentSuccess(document));
      })
      .catch((error) => {
      });
  };
}

export function loadAuthorizedToViewDocument() {
  return function (dispatch) {
    return axios.get('/api/documents')
      .then((documents) => {
        const document = documents.data.document;
        dispatch(loadAuthorizedToViewDocumentSuccess(document));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function loadUserDocuments(userId) {
  return function (dispatch) {
    return axios.get(`/api/users/${userId}/documents`)
      .then((documents) => {
        const document = documents.data.documents;
        dispatch(loadUserDocumentSuccess(document));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function deleteDocument(documentId) {
  return function (dispatch) {
    return axios.delete(`/api/documents/${documentId}`)
      .then((res) => {
        const response = res.data.message;
        const message = {};
        message.text = response;
        dispatch(addFlashMessage(message));
        dispatch(deleteUserDocumentSuccess(message));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
