import React from 'react';
import { render } from 'react-dom';
import jwtDecode from 'jwt-decode';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import './styles/styles.scss';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/loginActions';
import configureStore from './store/configureStore';

const store = configureStore();

if (localStorage.jwtToken_JedDoc) {
  setAuthorizationToken(localStorage.jwtToken_JedDoc);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken_JedDoc)));
}

 /**
   * This method renders the component
   *
   * @returns {Object} jsx component
   */
render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app'),
);
