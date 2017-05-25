// import {
//   expect,
// } from 'chai';
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import nock from 'nock';
// import * as documentAction from '../../actions/documentAction';
// import {
//   CREATE_DOCUMENT_BY_USER_SUCCESS,
// } from '../../actions/actionTypes';

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

// const document = {
//   body: 'jed@gmail.com',
//   title: 'jedidiah',
//   access: 'public',
// };
// describe('Document actions', () => {
//   after(() => {
//     nock.cleanAll();
//   });
//   describe('create document', () => {
//     const response = {
//       title: document.title,
//       body: document.body,
//       access: document.access,
//     };
//     after(() => {
//       nock.cleanAll();
//     });
//     it('should create a document', () => {
//       nock('/api')
//         .post('/documents', document)
//         .reply(201, response);

//       const expectedActions = [{
//         type: CREATE_DOCUMENT_BY_USER_SUCCESS,
//       },
//       ];
//       const store = mockStore({
//         document: {},
//       });
//       store.dispatch(documentAction.createDocument(document));
//         console.log(store.getActions())
//       expect(store.getActions()[0].type)
//         // .to.eql(expectedActions[0].type);
//     });
//   });
// });
