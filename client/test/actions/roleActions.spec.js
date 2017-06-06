import {
  expect,
} from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as roleActions from '../../actions/roleActions';
import {
  CREATE_USER_ROLE_SUCCESS,
  LOAD_USER_ROLE_SUCCESS,
  DELETE_USER_ROLE_SUCCESS,
} from '../../actions/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('User Actions', () => {
  const role = {
    title: 'new title',
  };
  it('should create a role by admin',
    () => {
      const expectedActions = [{
        type: CREATE_USER_ROLE_SUCCESS,
      }];
      const store = mockStore({
        login: {
        },
      });
      store.dispatch(roleActions.createUserRoleSuccess(role));
      expect(store.getActions()[0])
        .to.eql(expectedActions[0]);
    });
  it('should load all users roles by admin',
    () => {
      const expectedActions = [{
        type: LOAD_USER_ROLE_SUCCESS,
        roles: [
          {
            title: 'role1',
          },
          {
            title: 'role2',
          },
        ] }];
      const store = mockStore({
      });
      store.dispatch(roleActions.loadUserRolesSuccess([{ title: 'role1' }, { title: 'role2' }]));
      expect(store.getActions()[0])
        .to.eql(expectedActions[0]);
    });
  it('should delete user roles by admin',
    () => {
      const expectedActions = [{
        type: DELETE_USER_ROLE_SUCCESS,
        roleId: 1,
      }];
      const store = mockStore({
        login: {
        },
      });
      store.dispatch(roleActions.deleteUserRolesSuccess(1));
      expect(store.getActions()[0])
        .to.eql(expectedActions[0]);
    });
});
