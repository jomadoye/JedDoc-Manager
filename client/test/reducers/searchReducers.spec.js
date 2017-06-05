import expect from 'expect';
import reducers from '../../reducers/';

describe('Reducers', () => {
  // it('should handle SEARCH_USER_BY_USERNAME actions', () => {
  //   const state = reducers({
  //     flashMessages: [],
  //     login: {
  //       isAuthenticated: true,
  //       user: {
  //         id: 3,
  //         username: 'q',
  //         fullname: 'q',
  //         roleId: 1,
  //         email: 'qq1be@email.com',
  //       },
  //       allUsers: [{
  //         id: 1,
  //         fullname: 'jonathan doe',
  //         username: 'john doe',
  //         email: 'Lauren52@hotmail.com',
  //         roleId: 3,
  //         password: `$2a$08$wR9H1v9aTlotDRbghNFvvO2Q4
  //           C7Kgp9ALlhUf/1XcOci41iFIBVLG`,
  //         createdAt: '2017-05-20T14:34:31.085Z',
  //         updatedAt: '2017-05-20T14:34:31.097Z',
  //       }, {
  //         id: 2,
  //         fullname: 'Bill Rosenbaum',
  //         username: 'Baron.Schamberger',
  //         email: 'Alexanne_OKon25@hotmail.com',
  //         roleId: 3,
  //         password: `$2a$08$37RnX6KymnY4WPE2nNcaIukhQ
  //           v3KGLYmqLuKOir08s6fysWb36FBS`,
  //         createdAt: '2017-05-20T14:34:31.085Z',
  //         updatedAt: '2017-05-20T14:34:31.097Z',
  //       }, {
  //         id: 3,
  //         fullname: 'q',
  //         username: 'q',
  //         email: 'qq1be@email.com',
  //         roleId: 1,
  //         password: `$2a$08$/wc8Z.1yhODSKT9JN7t2EeFQ9
  //           pjwnnsVzYBirGcuscL9Z0rsMqIXW`,
  //         createdAt: '2017-05-20T14:35:51.928Z',
  //         updatedAt: '2017-05-20T14:35:51.928Z',
  //       }, {
  //         id: 20,
  //         fullname: 'Brenna Konopelskia',
  //         username: 'Furman67',
  //         email: 'Litzy_Kutch24@hotmail.com',
  //         roleId: 1,
  //         password: `$2a$08$4OMV9XtU1RVl404dK2UfAOmdt
  //           6nRZby1.wqAbzetcljzNF18LN3t.`,
  //         createdAt: '2017-05-20T14:34:31.085Z',
  //         updatedAt: '2017-05-20T14:36:39.503Z',
  //       }],
  //     },
  //     documents: {
  //       PublicDocuments: [],
  //       MyDocuments: [],
  //       AuthToViewDocuments: [],
  //       allDocuments: [],
  //     },
  //     user: [],
  //     role: [],
  //   }, {
  //     type: 'SEARCH_USER_BY_USERNAME_SUCCESS',
  //     users: [],
  //   });
  //   expect(state)
  //     .toEqual({
  //       flashMessages: [],
  //       login: {
  //         isAuthenticated: true,
  //         user: {
  //           id: 3,
  //           username: 'q',
  //           fullname: 'q',
  //           roleId: 1,
  //           email: 'qq1be@email.com',
  //         },
  //         allUsers: [],
  //       },
  //       documents: {
  //         PublicDocuments: [],
  //         MyDocuments: [],
  //         AuthToViewDocuments: [],
  //         allDocuments: [],
  //       },
  //       user: [],
  //       role: [],
  //     });
  // });

  it('should handle SEARCH_DOCUMENTS_BY_TITLE_SUCCESS actions', () => {
    const state = reducers({
      flashMessages: [],
      login: {
        isAuthenticated: true,
        user: {
          id: 3,
          username: 'q',
          fullname: 'q',
          roleId: 1,
          email: 'qq1be@email.com',
        },
      },
      documents: {
        PublicDocuments: [],
        MyDocuments: [],
        AuthToViewDocuments: [],
        allDocuments: [],
      },
      user: [],
      role: [],
    }, {
      type: 'SEARCH_DOCUMENTS_BY_TITLE_SUCCESS',
      searchDocuments: [],
    });
    expect(state)
      .toEqual({
        flashMessages: [],
        login: {
          isAuthenticated: true,
          user: {
            id: 3,
            username: 'q',
            fullname: 'q',
            roleId: 1,
            email: 'qq1be@email.com',
          },
        },
        documents: {
          PublicDocuments: [],
          MyDocuments: [],
          AuthToViewDocuments: [],
          allDocuments: [],
        },
        user: [],
        role: [],
      });
  });
});
