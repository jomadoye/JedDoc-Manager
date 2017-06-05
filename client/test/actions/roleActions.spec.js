import {
  expect,
} from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as roleActions from '../../actions/roleActions';
import {
  CREATE_USER_ROLE_SUCCESS,
  LOAD_USER_ROLE_SUCCESS,
  DELETE_USER_ROLE_SUCCESS,
} from '../../actions/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('User Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create a role by admin',
    () => {
      nock('/api')
        .delete('/users/3')
        .reply(200);

      const expectedActions = [{
        type: CREATE_USER_ROLE_SUCCESS,
      }];
      const store = mockStore({
        login: {
          allUsers: {},
        },
      });
      store.dispatch(roleActions.createUserRoleSuccess());
      expect(store.getActions()[0].type)
        .to.eql(expectedActions[0].type);
    });
  it('should load all users roles by admin',
    () => {
      nock('/api')
        .delete('/users/3')
        .reply(200);

      const expectedActions = [{
        type: LOAD_USER_ROLE_SUCCESS,
      }];
      const store = mockStore({
        login: {
          allUsers: {},
        },
      });
      store.dispatch(roleActions.loadUserRolesSuccess());
      expect(store.getActions()[0].type)
        .to.eql(expectedActions[0].type);
    });
  it('should delete user roles by admin',
    () => {
      nock('/api')
        .delete('/users/3')
        .reply(200);

      const expectedActions = [{
        type: DELETE_USER_ROLE_SUCCESS,
      }];
      const store = mockStore({
        login: {
          allUsers: {},
        },
      });
      store.dispatch(roleActions.deleteUserRolesSuccess());
      expect(store.getActions()[0].type)
        .to.eql(expectedActions[0].type);
    });
});
