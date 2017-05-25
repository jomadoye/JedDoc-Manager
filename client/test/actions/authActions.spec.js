import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as userActions from '../../actions/loginActions';
import {
  SET_CURRENT_USER,
} from '../../actions/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const user = {
  email: 'jed@gmail.com',
  firstName: 'jedidiah',
  lastName: 'Omadoye',
  password: 'password',
};
describe('Authentication actions', () => {
  after(() => {
    nock.cleanAll();
  });
  describe('login', () => {
    const response = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };
    after(() => {
      nock.cleanAll();
    });
    it('should login a user', () => {
      nock('/api')
        .post('/users/login', user)
        .reply(201, response);

      const expectedActions = [
        { type: SET_CURRENT_USER },
      ];
      const store = mockStore({
        user: {},
      });
      store.dispatch(userActions.setCurrentUser(user));
      expect(store.getActions()[0].type)
        .to.eql(expectedActions[0].type);
    });
  });
  describe('signup', () => {
    const response = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    };
    after(() => {
      nock.cleanAll();
    });
    it('should signup a user', () => {
      nock('/api')
        .post('/users', user)
        .reply(201, response);

      const expectedActions = [
        { type: SET_CURRENT_USER },
      ];
      const store = mockStore({
        user: {},
      });
      store.dispatch(userActions.setCurrentUser(user));
      expect(store.getActions()[0].type)
        .to.eql(expectedActions[0].type);
    });
  });
});
