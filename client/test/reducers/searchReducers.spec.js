import expect from 'expect';
import reducers from '../../reducers/';
import reducerHelpers from '../helpers/reducerHelpers';

let expectedState1 = reducerHelpers.SEARCH_USER_BY_USERNAME;
let expectedState2 = reducerHelpers.SEARCH_DOCUMENTS_BY_TITLE_SUCCESS;

describe('Reducers', () => {
  it('should handle SEARCH_USER_BY_USERNAME actions', () => {
    const state = reducers({
      flashMessages: [],
      login: {
        isAuthenticated: true,
        user: {
          id: 4,
          username: 'q',
          fullname: 'q',
          roleId: 1,
          email: 'qq1be@email.com',
        },
        allUsers: {
          count: 6,
          page: 1,
          pageCount: 1,
          pageSize: 6,
          totalCount: 6,
          users: [{
            id: 1,
            fullname: 'Samara Stracke PhD',
            username: 'Max_Borer',
            email: 'Reyna.Torphy@hotmail.com',
            roleId: 3,
            password: '$2a$08$KPhQp3dHfCaDEoAZ6KmXiukUOwMDsvm9poOJNCI1tpk5sZoYEs4my',
            createdAt: '2017-06-05T11:53:33.313Z',
            updatedAt: '2017-06-05T11:53:33.321Z',
          }, {
            id: 2,
            fullname: 'jonathan doe',
            username: 'john doe',
            email: 'Tania92@yahoo.com',
            roleId: 3,
            password: '$2a$08$76j1vujLbWLdS8K3zCgiGes/OP.lxzMyWDRL7dw6.fej5SBlvuVxi',
            createdAt: '2017-06-05T11:53:33.313Z',
            updatedAt: '2017-06-05T11:53:33.321Z',
          }, {
            id: 3,
            fullname: 'dede',
            username: 'dede',
            email: 'Frederique44@yahoo.com',
            roleId: 1,
            password: '$2a$08$xiJEybtOvPA163fka4Ma6.A/5M4TvKskpqy2HMmydl6JS6vx/arAu',
            createdAt: '2017-06-05T11:53:33.313Z',
            updatedAt: '2017-06-05T11:53:33.321Z',
          }, {
            id: 4,
            fullname: 'q',
            username: 'q',
            email: 'qq1be@email.com',
            roleId: 1,
            password: '$2a$08$EyNLxwbvwENfI.yf/zswLOpY2ysC6XKEqEqgYQABNhLMtU9MtHrDq',
            createdAt: '2017-06-05T11:55:11.608Z',
            updatedAt: '2017-06-05T11:55:11.608Z',
          }, {
            id: 20,
            fullname: 'Curt Walter',
            username: 'Kade_Rempel68',
            email: 'Gabriel.Goldner83@hotmail.com',
            roleId: 2,
            password: '$2a$08$vGRhr8ZKerc1jPTW2KHo0uoVFX.rJRP0ZhFFbQIXAa6c0YznWIdY.',
            createdAt: '2017-06-05T11:53:33.313Z',
            updatedAt: '2017-06-06T12:44:06.350Z',
          }, {
            id: 5,
            fullname: 'ww',
            username: 'ww',
            email: 'w@ww.com',
            roleId: 3,
            password: '$2a$08$t2SDWYC2yPqrBcFCU5nz5Od059ZL5Q8cs49DMh2zP1ftiqm7S5s0q',
            createdAt: '2017-06-06T12:52:36.092Z',
            updatedAt: '2017-06-06T12:52:36.092Z',
          }],
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
      type: 'SEARCH_USER_BY_USERNAME_SUCCESS',
      users: {
        count: 1,
        metaData: {
          page: 1,
          pageCount: 1,
          pageSize: 1,
          totalCount: 1,
        },
        users: [{
          id: 3,
          fullname: 'dede',
          username: 'dede',
          email: 'Frederique44@yahoo.com',
          roleId: 1,
          password: '$2a$08$xiJEybtOvPA163fka4Ma6.A/5M4TvKskpqy2HMmydl6JS6vx/arAu',
          createdAt: '2017-06-05T11:53:33.313Z',
          updatedAt: '2017-06-05T11:53:33.321Z',
          documents: [],
        }],
      },
    });

    // Assertion
    expect(state)
      .toEqual(expectedState1);
  });

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

    // Assertion
    expect(state)
      .toEqual(expectedState2);
  });
});
