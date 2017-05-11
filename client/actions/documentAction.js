import axios from 'axios';
import { LOAD_DOCUMENT_SUCCESS } from './actionTypes';

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

export function loadDocumentSuccess(documents) {
  return { type: LOAD_DOCUMENT_SUCCESS, PublicDocuments: documents };
}

export function loadDocument() {
  return function (dispatch) {
    return axios.get('/documents', document)
      .then((documents) => {
        const document = documents.data.document;
        dispatch(loadDocumentSuccess(document));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
