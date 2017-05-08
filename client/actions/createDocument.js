import axios from 'axios';

export function createDocument(document) {
  return dispatch => {
    return axios.post('/api/documents', document)
      .then((res) => {
        return res.data.message;
      })
      .catch((error) => {
        let res;
        try {
          let errorMessage = error.response.data.error.errors[0].message;
          if (errorMessage) {
            if (errorMessage === 'Validation notEmpty failed') {
              res = 'Please ensure document has a Title and Body';
            } else if (errorMessage === 'title must be unique') {
              res = 'Title must be unique';
            } else {
              res = 'An error occured while creating this document, Please Try again'
            }
          }
        } catch (err) {
          res = 'An error occured while creating this document, Please Try again'
        }
        return res;
      });

  };
}
