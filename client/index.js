import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import AppRoutes from './routes';


render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
  document.getElementById('app')
);
    // {/*<div>*/}
    //    {/*<Route path="/signup" component={Signup} />*/}
    //    {/*<IndexRoutes component={Greeting}/>*/}
    //  {/*</Route>*/}
    // {/*</div>   */}


