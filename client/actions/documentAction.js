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
  SEARCH_DOCUMENTS_BY_TITLE_SUCCESS,
  CREATE_DOCUMENT_BY_USER_SUCCESS,
  SEARCH_DOCUMENTS_BY_TITLE_ON_DASHBOARD_SUCCESS,
} from './actionTypes';
import {
  addFlashMessage,
} from '../actions/flashMessages';

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
 * @param {object} metadata This contains the pagination objec
 * @param {number} count the number of documents
 * @returns {object}
 */
export function loadAuthorizedToViewDocumentSuccess(documents,
  metadata, count) {
  return {
    type: LOAD_AUTHORIZE_TO_VIEW_DOCUMENT_SUCCESS,
    AuthorizeToViewDocuments: documents,
    metadata,
    count,
  };
}

/**
 * This function ensures the documents were sucessfully loaded
 *
 * @export
 * @param {object} documents An array of documents
 * @param {number} count The total number of documents
 * @returns {object}
 */
export function loadUserDocumentSuccess(documents, count) {
  return {
    type: LOAD_USER_DOCUMENT_SUCCESS,
    MyDocuments: documents,
    count,
  };
}

/**
 * This function ensures a document was searched sucessfully
 *
 * @export
 * @param {object} documents
 * @returns {object}
 */
export function searchDocumentsByTitleOnDashboardSuccess(documents) {
  return {
    type: SEARCH_DOCUMENTS_BY_TITLE_ON_DASHBOARD_SUCCESS,
    documents,
  };
}

/**
 * This function ensures the documents were sucessfully deleted
 *
 * @export
 * @param {number} documentId
 * @returns dispatch
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
 * This function ensures a document was created successfully
 *
 * @export
 * @returns dispatch
 */
export function documentCreatedByUserSuccess() {
  return {
    type: CREATE_DOCUMENT_BY_USER_SUCCESS,
  };
}

/**
 * This function updates a document
 *
 * @export
 * @param {object} document
 * @param {number} documentId
 * @returns dispatch
 */
export function updateUserDocumentSuccess(document, documentId) {
  return {
    type: UPDATE_USER_DOCUMENT_SUCCESS,
    document,
    documentId,
  };
}

/**
 * This function ensures an admin updates a document sucessfully
 *
 * @export
 * @param {object} document
 * @param {number} documentId
 * @returns dispatch
 */
export function updateDocumentByAdminSuccess(document, documentId) {
  return {
    type: UPDATE_USER_DOCUMENT_BY_ADMIN_SUCCESS,
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
      const document = documents.data.documents.rows;
      dispatch(loadWelcomePageDocumentSuccess(document));
    })
    .catch(() => {
      const message = {};
      message.text = 'Error loading document';
      dispatch(addFlashMessage(message));
    });
}

/**
 * This function ensures the documents were sucessfully loaded
 *
 * @export
 * @param {number} limit
 * @param {number} offset
 * @returns dispatch
 */
export function loadAuthorizedToViewDocument(limit, offset) {
  if (limit) {
    return dispatch =>
      axios.get(`/api/documents?limit=${limit}&offset=${offset}`)
      .then((documents) => {
        const document = documents.data.documents.rows;
        const metadata = documents.data.documents.metaData;
        const count = documents.data.documents.count;
        dispatch(loadAuthorizedToViewDocumentSuccess(document,
          metadata, count));
      })
      .catch(() => {
        const message = {};
        message.text = 'Error loading document';
        dispatch(addFlashMessage(message));
      });
  }
  return dispatch => axios.get('/api/documents')
    .then((documents) => {
      const document = documents.data.documents.rows;
      const metadata = documents.data.documents.metaData;
      const count = documents.data.documents.count;
      dispatch(loadAuthorizedToViewDocumentSuccess(document, metadata, count));
    })
    .catch(() => {
      const message = {};
      message.text = 'Error loading document';
      dispatch(addFlashMessage(message));
    });
}

/**
 * This function ensures the documents were sucessfully loaded
 *
 * @export
 * @param {number} userId
 * @param {number} limit
 * @param {number} offset
 * @returns dispatch
 */
export function loadUserDocuments(userId, limit, offset) {
  if (limit) {
    return dispatch =>
      axios.get(
        `/api/users/${userId}/documents?limit=${limit}&offset=${offset}`)
      .then((documents) => {
        const count = documents.data.count;
        const document = documents.data.documents;
        dispatch(loadUserDocumentSuccess(document, count));
      })
      .catch(() => {
        const message = {};
        message.text = 'Error loading document';
        dispatch(addFlashMessage(message));
      });
  }
  return dispatch => axios.get(`/api/users/${userId}/documents`)
    .then((documents) => {
      const count = documents.data.count;
      const document = documents.data.documents;
      dispatch(loadUserDocumentSuccess(document, count));
    })
    .catch(() => {
      const message = {};
      message.text = 'Error loading documents';
      dispatch(addFlashMessage(message));
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
    });
}

/**
 * This function ensures the documents were sucessfully loaded
 *
 * @export
 * @param {number} documentId The ID of the document to delete
 * @returns dispatch
 */
export function deleteDocumentByAdmin(documentId) {
  return dispatch => axios.delete(`/api/documents/${documentId}`)
    .then((res) => {
      const response = res.data.message;
      const message = {};
      message.text = response;
      dispatch(addFlashMessage(message));
      dispatch(deleteDocumentByAdminSuccess(documentId));
    });
}

/**
 * This function updates a document
 *
 * @export
 * @param {object} document
 * @param {number} documentId
 * @param {number} roleId
 * @returns dispatch
 */
export function updateDocument(document, documentId, roleId) {
  return dispatch => axios.put(`/api/documents/${documentId}`, document)
    .then((res) => {
      const response = res.data.message;
      const message = {};
      message.text = response;
      if (roleId === 1) {
        dispatch(addFlashMessage(message));
        dispatch(updateDocumentByAdminSuccess(res.data.document, documentId));
      } else {
        dispatch(addFlashMessage(message));
        dispatch(updateUserDocumentSuccess(res.data.document, documentId));
      }
    })
    .catch(() => {
      const message = {};
      message.text = 'Error updating document';
      dispatch(addFlashMessage(message));
    });
}

/**
 * This function ensures document are loaded sucessfully
 *
 * @export
 * @param {object} documents
 * @param {object} metadata
 * @param {object} count
 * @returns {object}
 */
export function loadAllDocumentsSuccess(documents, metadata, count) {
  return {
    type: LOAD_ALL_DOCUMENTS_SUCCESS,
    allDocuments: documents,
    metadata,
    count,
  };
}

/**
 * This function ensure the document is searched sucessfully
 *
 * @export
 * @param {object} documents
 * @returns action
 */
export function searchDocumentsByTitleSuccess(documents) {
  return {
    type: SEARCH_DOCUMENTS_BY_TITLE_SUCCESS,
    searchDocuments: documents,
  };
}

/**
 * This function loads all documents for admin
 *
 * @export
 * @param {string} limit
 * @param {string} offset
 * @returns dispatch
 */
export function loadAllDocuments(limit, offset) {
  if (limit) {
    return dispatch => axios.get(
        `/api/documents?limit=${limit}&offset=${offset}`)
      .then((documents) => {
        const document = documents.data.documents.rows;
        const metadata = documents.data.documents.metaData;
        const count = documents.data.documents.count;
        dispatch(loadAllDocumentsSuccess(document, metadata, count));
      })
      .catch(() => {
        const message = {};
        message.text = 'Error loading documents';
        dispatch(addFlashMessage(message));
      });
  }
  return dispatch => axios.get('/api/documents/')
    .then((documents) => {
      const document = documents.data.documents.rows;
      const metadata = documents.data.documents.metaData;
      const count = documents.data.documents.count;
      dispatch(loadAllDocumentsSuccess(document, metadata, count));
    })
    .catch(() => {
      const message = {};
      message.text = 'Error loading documents';
      dispatch(addFlashMessage(message));
    });
}

/**
 * This function searches a document by title
 *
 * @export
 * @param {string} query
 * @param {number} limit
 * @param {number} offset
 * @returns dispatch
 */
export function searchDocumentsByTitle(query, limit, offset) {
  return dispatch =>
    axios.get(`/api/search/documents?q=${query}
    &limit=${limit}&offset=${offset}`)
    .then((res) => {
      dispatch(searchDocumentsByTitleSuccess(res.data.document));
    })
    .catch(() => {
      const message = {};
      message.text = 'Error searching document';
      dispatch(addFlashMessage(message));
    });
}

/**
 * This function searches a document by title
 *
 * @export
 * @param {string} query
 * @param {string} limits
 * @param {string} offsets
 * @returns dispatch
 */
export function searchDocumentsByTitleOnDashboard(query, limits, offsets) {
  const limit = limits || 8;
  const offset = offsets || 0;
  return dispatch =>
    axios.get(`/api/search/documents?q=${query}
    &limit=${limit}&offset=${offset}`)
    .then((res) => {
      dispatch(searchDocumentsByTitleOnDashboardSuccess(res.data.documents));
    })
    .catch(() => {
      const message = {};
      message.text = 'Error searching document';
      dispatch(addFlashMessage(message));
    });
}

/**
 * This function creates a document
 *
 * @export
 * @param {object} document An array of documents
 * @returns dispatch
 */
export function createDocument(document) {
  return dispatch => axios.post('/api/documents', document)
    .then((res) => {
      dispatch(documentCreatedByUserSuccess());
      return res.data.message;
    })

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
