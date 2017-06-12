import expect from 'expect';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as roleActions from '../../../actions/roleActions';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Role Actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  describe('GetRoles', () => {
    it('retrieves roles and dispatches LOAD_USER_ROLE_SUCCESS', () => {
      moxios.stubRequest('/roles', {
        status: 200,
        response: [{ name: 'editor' }],
      });

      const expectedActions = [
        { type: 'LOAD_ROLES_SUCCESS', roles: [{ name: 'editor' }] },
      ];
      const store = mockStore();

      store.dispatch(roleActions.loadUserRoles())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });

  describe('Create role', () => {
    it('creates a new role and dispatches createUserRole', () => {
      moxios.stubRequest('/api/roles', {
        status: 200,
        response: { title: 'jed' },
      });

      const expectedActions = [
        { type: 'CREATE_USER_ROLE_SUCCESS', role: { title: 'jed' } },
      ];
      const store = mockStore();

      store.dispatch(roleActions.createUserRole('jed'))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('delete a role dispatching UPDATE_ROLE_SUCCESS', () => {
      moxios.stubRequest('api/roles/3', {
        status: 200,
        response: { id: 3, name: 'editor' },
      });

      const expectedActions = [
        { type: 'DELETE_USER_ROLE_SUCCESS', role: { } },
      ];

      const store = mockStore({});
      store.dispatch(roleActions.deleteUserRoles(3))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
});
