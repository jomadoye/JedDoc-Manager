import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import Greetings from './components/General/Greetings';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/General/NotFound';
import VerifyToken from './utils/verifyToken';
import CreateDocumentPage from './components/documents/createDocumentsPage/CreateDocumentPage';
import WelcomePage from './components/welcome/WelcomePage';
import MyDocumentsPage from './components/documents/myDocumentsPage/myDocumentsPage';
import myProfilePage from './components/users/myProfilePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={WelcomePage} />
        <Route path="signup" component={SignupPage}/>
        <Route path="login" component={LoginPage}/>
        <Route path="logout" component={Greetings}/>
        <Route path="dashboard" component={VerifyToken(Dashboard)}/>
        <Route path="my-profile"
            component={VerifyToken(myProfilePage)}/>
        <Route path="create-document"
            component={VerifyToken(CreateDocumentPage)}/>
        <Route path="my-documents"
            component={VerifyToken(MyDocumentsPage)}/>
        <Route path="*" component={NotFound} status={404}/>
    </Route>
);
