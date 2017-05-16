import axios from 'axios';
import {
  LOAD_WELCOME_PAGE_DOCUMENT_SUCCESS,
  LOAD_AUTHORIZE_TO_VIEW_DOCUMENT_SUCCESS,
  LOAD_USER_DOCUMENT_SUCCESS,
  DELETE_USER_DOCUMENT_SUCCESS,
  UPDATE_USER_DOCUMENT_SUCCESS,
  LOAD_ALL_DOCUMENTS_SUCCESS,
  DELETE_DOCUMENT_BY_ADMIN_SUCCESS,
  UPDATE_USER_DOCUMENT_BY_ADMIN_SUCCESS,
} from './actionTypes';
import {
  addFlashMessage,
} from '../actions/flashMessages';

/**
 * This function creates a document
 *
 * @export
 * @param {object} document An array of documents
 * @returns dispatch
 */
export function createDocument(document) {
  return () => axios.post('/api/documents', document)
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

/**
 * This function ensures the documents were sucessfully created
 *
 * @export
 * @param {object} documents An array of documents
 * @returns {object}
 */
export function loadWelcomePageDocumentSuccess(documents) {
  return {
    type: LOAD_WELCOME_PAGE_DOCUMENT_SUCCESS,
    PublicDocuments: documents,
  };
}

/**
 * This function ensures the documents were sucessfully loaded
 *
 * @export
 * @param {object} documents An array of documents
 * @returns {object}
 */
export function loadAuthorizedToViewDocumentSuccess(documents) {
  return {
    type: LOAD_AUTHORIZE_TO_VIEW_DOCUMENT_SUCCESS,
    AuthorizeToViewDocuments: documents,
  };
}

/**
 * This function ensures the documents were sucessfully loaded
 *
 * @export
 * @param {object} documents An array of documents
 * @returns {object}
 */
export function loadUserDocumentSuccess(documents) {
  return {
    type: LOAD_USER_DOCUMENT_SUCCESS,
    MyDocuments: documents,
  };
}

/**
 * This function ensures the documents were sucessfully deleted
 *
 * @export
 * @param {string} message A response message
 * @returns {object}
 */
export function deleteUserDocumentSuccess(documentId) {
  return {
    type: DELETE_USER_DOCUMENT_SUCCESS,
    documentId,
  };
}

/**
 * This function ensures an admin deletes a user successfully
 *
 * @export
 * @param {number} documentId
 * @returns dispatch
 */
export function deleteDocumentByAdminSuccess(documentId) {
  return {
    type: DELETE_DOCUMENT_BY_ADMIN_SUCCESS,
    documentId,
  };
}

/**
 * This function updates a document
 *
 * @export
 * @param {string} message
 * @returns
 */
export function updateUserDocumentSuccess(document, documentId) {
  return {
    type: UPDATE_USER_DOCUMENT_BY_ADMIN_SUCCESS,
    document,
    documentId,
  };
}

/**
 * This function ensures an admin updates a document sucessfully
 *
 * @export
 * @param {string} message
 * @returns
 */
export function updateDocumentByAdminSuccess(document, documentId) {
  return {
    type: UPDATE_USER_DOCUMENT_SUCCESS,
    document,
    documentId,
  };
}

/**
 * This function ensures the documents were sucessfully loaded
 *
 * @export
 * @returns dispatch
 */
export function loadWelcomePageDocument() {
  return dispatch => axios.get('/documents', document)
      .then((documents) => {
        const document = documents.data.document;
        dispatch(loadWelcomePageDocumentSuccess(document));
      })
      .catch((error) => {
        console.log(error);
      });
}

/**
 * This function ensures the documents were sucessfully loaded
 *
 * @export
 * @returns dispatch
 */
export function loadAuthorizedToViewDocument() {
  return dispatch => axios.get('/api/documents')
      .then((documents) => {
        const document = documents.data.document;
        dispatch(loadAuthorizedToViewDocumentSuccess(document));
      })
      .catch((error) => {
        console.log(error);
      });
}

/**
 * This function ensures the documents were sucessfully loaded
 *
 * @export
 * @param {object} userId An array of documents
 * @returns dispatch
 */
export function loadUserDocuments(userId) {
  return dispatch => axios.get(`/api/users/${userId}/documents`)
      .then((documents) => {
        const document = documents.data.documents;
        dispatch(loadUserDocumentSuccess(document));
      })
      .catch((error) => {
        console.log(error);
      });
}

/**
 * This function ensures the documents were sucessfully loaded
 *
 * @export
 * @param {number} documentId The ID of the document to delete
 * @returns dispatch
 */
export function deleteDocument(documentId) {
  return dispatch => axios.delete(`/api/documents/${documentId}`)
      .then((res) => {
        const response = res.data.message;
        const message = {};
        message.text = response;
        dispatch(addFlashMessage(message));
        dispatch(deleteUserDocumentSuccess(documentId));
        dispatch(deleteDocumentByAdminSuccess(documentId));
      })
      .catch((error) => {
        console.log(error.response);
      });
}

/**
 * This function updates a document
 *
 * @export
 * @param {object} document
 * @param {number} documentId
 * @returns dispatch
 */
export function updateDocument(document, documentId) {
  return dispatch => axios.put(`/api/documents/${documentId}`, document)
      .then((res) => {
        const response = res.data.message;
        const message = {};
        message.text = response;
        dispatch(addFlashMessage(message));
        dispatch(updateUserDocumentSuccess(res.data.document, documentId));
        dispatch(updateDocumentByAdminSuccess(res.data.document, documentId));
      })
      .catch((error) => {
        console.log(error);
      });
}

/**
 * This function ensures document are loaded sucessfully
 *
 * @export
 * @param {string} documents
 * @returns {object}
 */
export function loadAllDocumentsSuccess(documents) {
  return {
    type: LOAD_ALL_DOCUMENTS_SUCCESS,
    allDocuments: documents,
  };
}

/**
 * Thie function loads all documents for admin
 *
 * @export
 * @returns dispatch
 */
export function loadAllDocuments() {
  return dispatch => axios.get('/api/documents/')
      .then((res) => {
        dispatch(loadAllDocumentsSuccess(res.data.document));
      })
      .catch((error) => {
        console.log(error);
      });
}
