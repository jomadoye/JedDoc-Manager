import expect from 'expect';
import reducers from '../../reducers/';
import reducerHelpers from '../helpers/reducerHelpers';

let expectedState1 = reducerHelpers.SET_CURRENT_USER;
let expectedState2 = reducerHelpers.LOAD_USER_PROFILE_SUCCESS;
let expectedState3 = reducerHelpers.UPDATE_USER_PROFILE_SUCCESS;

describe('User Reducers', () => {
  it('should handle SET_CURRENT_USER actions', () => {
    const state = reducers({
      flashMessages: [],
      login: {
        isAuthenticated: false,
        user: {},
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
      type: 'SET_CURRENT_USER',
      user: {
        data: {
          id: 7,
          username: 'jerry',
          fullname: 'jerry',
          roleId: 3,
          email: 'jerry@ff.com',
        },
        iat: 1495288909,
        exp: 1495375309,
      },
    });

    // Assertion
    expect(state)
      .toEqual(expectedState1);
  });

  it('should handle LOAD_USER_PROFILE_SUCCESS actions', () => {
    const state = reducers({
      flashMessages: [],
      login: {
        isAuthenticated: true,
        user: {
          id: 7,
          username: 'jerry',
          fullname: 'jerry',
          roleId: 3,
          email: 'jerry@ff.com',
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
      type: 'LOAD_USER_PROFILE_SUCCESS',
      userDetails: {
        id: 7,
        fullname: 'jerry',
        username: 'jerry',
        email: 'jerry@ff.com',
        roleId: 3,
        password: '$2a$08$b.rXG69qFkdd3jGnLVrfUewpAC0zYx4vZifhMTKkwEJxG4n7lVAGO',
        createdAt: '2017-05-20T14:01:40.065Z',
        updatedAt: '2017-05-20T14:01:40.065Z',
        documents: [],
      },
    });

    // Assertion
    expect(state)
      .toEqual(expectedState2);
  });

  it('should handle UPDATE_USER_PROFILE_SUCCESS actions', () => {
    const state = reducers({
      flashMessages: [{
        id: 1,
        text: 'User updated successfully.',
      }],
      login: {
        isAuthenticated: true,
        user: {
          id: 7,
          fullname: 'jerry',
          username: 'jerry',
          email: 'jerry@ff.com',
          roleId: 3,
          password: '$2a$08$b.rXG69qFkdd3jGnLVrfUewpAC0zYx4vZifhMTKkwEJxG4n7lVAGO',
          createdAt: '2017-05-20T14:01:40.065Z',
          updatedAt: '2017-05-20T14:01:40.065Z',
          documents: [],
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
      type: 'UPDATE_USER_PROFILE_SUCCESS',
      updatedUser: {

        message: 'User updated successfully.',
        user: {
          id: 7,
          fullname: 'jerry',
          username: 'jerry',
          email: 'jerry@ff.com',
          roleId: 3,
          password: '$2a$08$mXt6ErO1NQVw4j/lkBsIseLxX7haeonkmgh9svP5XJQXC5oo02Z1a',
          createdAt: '2017-05-20T14:01:40.065Z',
          updatedAt: '2017-05-20T14:01:40.065Z',
          documents: [],
        },
      },
    });

    // Assertion
    expect(state)
      .toEqual(expectedState3);
  });
});
