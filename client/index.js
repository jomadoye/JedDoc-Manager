import { React } from 'react';
import { render } from 'react-dom';
// import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from './routes';
import App from './components/App';
import Signup from './components/Signup';
import Greeting from './components/Greetings';

render(
  <BrowserRouter>
    {/*<div>*/}
      <Route exact path="/" component={App} />>
       {/*<Route path="/signup" component={Signup} />*/}
       {/*<IndexRoutes component={Greeting}/>*/}
     {/*</Route>*/}
    {/*</div>   */}
  </BrowserRouter>,
  document.getElementById('app')
);


