import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import SignupPage from './components/signup/SignupPage.jsx';
import LoginPage from './components/login/LoginPage.jsx';
import Greetings from './components/General/Greetings.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import NotFound from './components/General/NotFound.jsx';
import VerifyToken from './utils/verifyToken';
import CreateDocumentPage from
    './components/documents/createDocumentsPage/CreateDocumentPage.jsx';
import WelcomePage from './components/welcome/WelcomePage.jsx';
import MyDocumentsPage from
    './components/documents/myDocumentsPage/myDocumentsPage.jsx';
import myProfilePage from './components/users/myProfilePage.jsx';
import createRolePage from './components/roles/createRolePage.jsx';
import manageRolesPage from './components/roles/manageRolesPage.jsx';
import manageUsersPage from './components/users/manageUsersPage.jsx';
import manageDocumentPage from
    './components/documents/manageDocumentsPage/manageDocumentsPage.jsx';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={WelcomePage} />
        <Route path="signup" component={SignupPage}/>
        <Route path="login" component={LoginPage}/>
        <Route path="logout" component={Greetings}/>
        <Route path="dashboard" component={VerifyToken(Dashboard)}/>
        <Route path="my-profile"
            component={VerifyToken(myProfilePage)}/>
        <Route path="manage-documents"
            component={VerifyToken(manageDocumentPage)}/>
        <Route path="create-role"
            component={VerifyToken(createRolePage)}/>
        <Route path="manage-roles"
            component={VerifyToken(manageRolesPage)}/>
        <Route path="manage-users"
            component={VerifyToken(manageUsersPage)}/>
        <Route path="create-document"
            component={VerifyToken(CreateDocumentPage)}/>
        <Route path="my-documents"
            component={VerifyToken(MyDocumentsPage)}/>
        <Route path="*" component={NotFound} status={404}/>
    </Route>
);
