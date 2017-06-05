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
  afterEach(() => {
    nock.cleanAll();
  });

  it('should deletes a user by admin',
    () => {
      nock('/api')
        .delete('/users/3')
        .reply(200);

      const expectedActions = [{
        type: DELETE_SINGLE_USER_SUCCESS,
      }];
      const store = mockStore({
        login: {
          allUsers: {},
        },
      });
      store.dispatch(userAction.deleteSingleUserAccountSuccess());
      expect(store.getActions()[0].type)
        .to.eql(expectedActions[0].type);
    });

  it('should loads a user profile',
    () => {
      nock('/api')
        .delete('/users/3')
        .reply(200);

      const expectedActions = [{
        type: LOAD_USER_PROFILE_SUCCESS,
      }];
      const store = mockStore({
        login: {
          allUsers: {},
        },
      });
      store.dispatch(userAction.loadUserProfileSuccess());
      expect(store.getActions()[0].type)
        .to.eql(expectedActions[0].type);
    });
  it('should updates a user profile',
    () => {
      nock('/api')
        .delete('/users/3')
        .reply(200);

      const expectedActions = [{
        type: UPDATE_USER_PROFILE_SUCCESS,
      }];
      const store = mockStore({
        login: {
          allUsers: {},
        },
      });
      store.dispatch(userAction.updateUserProfileSuccess());
      expect(store.getActions()[0].type)
        .to.eql(expectedActions[0].type);
    });
  it('should updates a user profile by admin',
    () => {
      nock('/api')
        .delete('/users/3')
        .reply(200);

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
      nock('/api')
        .delete('/users/3')
        .reply(200);

      const expectedActions = [{
        type: DELETE_USER_PROFILE_SUCCESS,
      }];
      const store = mockStore({
        login: {
          allUsers: {},
        },
      });
      store.dispatch(userAction.deleteUserAccountSuccess());
      expect(store.getActions()[0].type)
        .to.eql(expectedActions[0].type);
    });
  it('should searches a user by username',
    () => {
      nock('/api')
        .delete('/users/3')
        .reply(200);

      const expectedActions = [{
        type: SEARCH_USER_BY_USERNAME_SUCCESS,
      }];
      const store = mockStore({
        login: {
          allUsers: {},
        },
      });
      store.dispatch(userAction.searchUserByUsernameSuccess());
      expect(store.getActions()[0].type)
        .to.eql(expectedActions[0].type);
    });
  it('should load all users',
    () => {
      nock('/api')
        .delete('/users/3')
        .reply(200);

      const expectedActions = [{
        type: LOAD_ALL_USERS_SUCCESS,
      }];
      const store = mockStore({
        login: {
          allUsers: {},
        },
      });
      store.dispatch(userAction.loadAllUsersSuccess());
      expect(store.getActions()[0].type)
        .to.eql(expectedActions[0].type);
    });
  it('should updates a user role by admin',
    () => {
      nock('/api')
        .delete('/users/3')
        .reply(200);

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
