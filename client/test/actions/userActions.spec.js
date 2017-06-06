import {
  expect,
} from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as userAction from '../../actions/userAction';
import {
  DELETE_SINGLE_USER_SUCCESS,
  LOAD_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_BY_ADMIN_SUCCESS,
  DELETE_USER_PROFILE_SUCCESS,
  SEARCH_USER_BY_USERNAME_SUCCESS,
  LOAD_ALL_USERS_SUCCESS,
  UPDATE_SINGLE_USER_BY_ADMIN_SUCCESS,
} from '../../actions/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('User Actions', () => {
  const user = {
    fullname: 'omadoye jedidiah',
    username: 'omadoye jedidiah',
    email: 'omadoye jedidiah',
    roleId: '3',
  };
  it('should deletes a user by admin',
    () => {
      const expectedActions = [{
        type: DELETE_SINGLE_USER_SUCCESS,
        userId: 1,
      }];
      const store = mockStore({
        login: {
          allUsers: {},
        },
      });
      store.dispatch(userAction.deleteSingleUserAccountSuccess(1));
      expect(store.getActions()[0])
        .to.eql(expectedActions[0]);
    });

  it('should loads a user profile',
    () => {
      const expectedActions = [{
        type: LOAD_USER_PROFILE_SUCCESS,
        userDetails: {
          email: 'omadoye jedidiah',
          fullname: 'omadoye jedidiah',
          roleId: '3',
          username: 'omadoye jedidiah',
        },
      }];
      const store = mockStore({
        login: {
          allUsers: {},
        },
      });
      store.dispatch(userAction.loadUserProfileSuccess(user));
      expect(store.getActions()[0])
        .to.eql(expectedActions[0]);
    });
  it('should updates a user profile',
    () => {
      const expectedActions = [{
        type: UPDATE_USER_PROFILE_SUCCESS,
        updatedUser: {
          fullanme: 'jed',
        },
      }];
      const store = mockStore({
        login: {
          allUsers: {},
        },
      });
      store.dispatch(userAction.updateUserProfileSuccess({
        fullanme: 'jed',
      }));
      expect(store.getActions()[0])
        .to.eql(expectedActions[0]);
    });
  it('should updates a user profile by admin',
    () => {
      const expectedActions = [{
        type: UPDATE_USER_PROFILE_BY_ADMIN_SUCCESS,
      }];
      const store = mockStore({
        login: {
          allUsers: {},
        },
      });
      store.dispatch(userAction.updateUserProfileByAdminSuccess());
      expect(store.getActions()[0].type)
        .to.eql(expectedActions[0].type);
    });
  it('should deletes a user',
    () => {
      const expectedActions = [{
        type: DELETE_USER_PROFILE_SUCCESS,
      }];
      const store = mockStore({
        login: {
          allUsers: {},
        },
      });
      store.dispatch(userAction.deleteUserAccountSuccess(1));
      expect(store.getActions()[0])
        .to.eql(expectedActions[0]);
    });
  it('should searches a user by username',
    () => {
      nock('/api')
        .delete('/users/3')
        .reply(200);

      const expectedActions = [{
        type: SEARCH_USER_BY_USERNAME_SUCCESS,
        users: {
          username: 'jed',
        },
      }];
      const store = mockStore({
        login: {
          allUsers: {},
        },
      });
      store.dispatch(userAction
        .searchUserByUsernameSuccess({
          username: 'jed',
        }));
      expect(store.getActions()[0])
        .to.eql(expectedActions[0]);
    });
  it('should load all users',
    () => {
      const expectedActions = [{
        type: LOAD_ALL_USERS_SUCCESS,
        users: [
          {
            fullname: 'omas jed',
            username: 'jed',
          },
          {
            fullname: 'omas jed',
            username: 'jed1',
          },
        ],
        count: undefined,
        metadata: undefined,
      }];
      const store = mockStore({
        login: {
          allUsers: {},
        },
      });
      store.dispatch(userAction
        .loadAllUsersSuccess([{
          username: 'jed',
          fullname: 'omas jed',
        }, {
          username: 'jed1',
          fullname: 'omas jed',
        }]));
      expect(store.getActions()[0])
        .to.eql(expectedActions[0]);
    });
  it('should updates a user role by admin',
    () => {
      const expectedActions = [{
        type: UPDATE_SINGLE_USER_BY_ADMIN_SUCCESS,
      }];
      const store = mockStore({
        login: {
          allUsers: {},
        },
      });
      store.dispatch(userAction.updateSingleUserAccountByAdminSuccess());
      expect(store.getActions()[0].type)
        .to.eql(expectedActions[0].type);
    });
});
