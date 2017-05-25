import expect from 'expect';
import reducers from '../../reducers/';

describe('Role Reducers', () => {
  it('should handle CREATE_USER_ROLE_SUCCESS actions', () => {
    const state = reducers({
      flashMessages: [{
        id: 1,
        text: 'Role created successfully',
      }],
      login: {
        isAuthenticated: true,
        user: {
          id: 3,
          username: 'jed',
          fullname: 'jed',
          roleId: 1,
          email: 'jed@email.com',
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
      type: 'CREATE_USER_ROLE_SUCCESS',
    });
    expect(state)
      .toEqual({
        flashMessages: [{
          id: 1,
          text: 'Role created successfully',
        }],
        login: {
          isAuthenticated: true,
          user: {
            id: 3,
            username: 'jed',
            fullname: 'jed',
            roleId: 1,
            email: 'jed@email.com',
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

  it('should handle DELETE_USER_ROLE_SUCCESS actions', () => {
    const state = reducers({
      flashMessages: [{
        id: 1,
        text: 'Role deleted succesfully',
      }],
      login: {
        isAuthenticated: true,
        user: {
          id: 3,
          username: 'jed',
          fullname: 'jed',
          roleId: 1,
          email: 'jed@email.com',
        },
      },
      documents: {
        PublicDocuments: [],
        MyDocuments: [],
        AuthToViewDocuments: [],
        allDocuments: [],
      },
      user: [],
      role: {
        allRoles: [{
          id: 1,
          title: 'Administrator',
          createdAt: '2017-05-19T18:54:41.579Z',
          updatedAt: '2017-05-19T18:54:41.579Z',
        }, {
          id: 2,
          title: 'Tester',
          createdAt: '2017-05-19T18:54:41.579Z',
          updatedAt: '2017-05-19T18:54:41.579Z',
        }, {
          id: 3,
          title: 'Basic',
          createdAt: '2017-05-19T18:54:41.579Z',
          updatedAt: '2017-05-19T18:54:41.579Z',
        }, {
          id: 4,
          title: ' JED',
          createdAt: '2017-05-20T14:16:23.029Z',
          updatedAt: '2017-05-20T14:16:23.029Z',
        }],
      },
    }, {
      type: 'DELETE_USER_ROLE_SUCCESS',
      roleId: 1,
    });
    expect(state)
      .toEqual({
        flashMessages: [{
          id: 1,
          text: 'Role deleted succesfully',
        }],
        login: {
          isAuthenticated: true,
          user: {
            id: 3,
            username: 'jed',
            fullname: 'jed',
            roleId: 1,
            email: 'jed@email.com',
          },
        },
        documents: {
          PublicDocuments: [],
          MyDocuments: [],
          AuthToViewDocuments: [],
          allDocuments: [],
        },
        user: [],
        role: {
          allRoles: [{
            id: 2,
            title: 'Tester',
            createdAt: '2017-05-19T18:54:41.579Z',
            updatedAt: '2017-05-19T18:54:41.579Z',
          }, {
            id: 3,
            title: 'Basic',
            createdAt: '2017-05-19T18:54:41.579Z',
            updatedAt: '2017-05-19T18:54:41.579Z',
          }, {
            id: 4,
            title: ' JED',
            createdAt: '2017-05-20T14:16:23.029Z',
            updatedAt: '2017-05-20T14:16:23.029Z',
          }],
        },
      });
  });
});
