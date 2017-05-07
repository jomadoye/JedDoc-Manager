import React from 'react';
import jwt from 'jsonwebtoken';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/rootReducer'
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/loginActions';

const store = createStore(
    rootReducer,
    // initialState
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);
if (localStorage.jwtToken_JedDoc) {
  setAuthorizationToken(localStorage.jwtToken_JedDoc);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken_JedDoc)));
  // console.log(jwt.decode(localStorage.jwtToken_JedDoc));
}
render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);
