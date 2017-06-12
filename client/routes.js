import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.jsx';
import SignupPage from './components/access/SignupPage.jsx';
import LoginPage from './components/access/LoginPage.jsx';
import Dashboard from './components/documents/Dashboard.jsx';
import NotFound from './components/includes/NotFound.jsx';
import VerifyToken from './utils/verifyToken';
import CreateDocumentPage from
    './components/documents/CreateDocumentPage.jsx';
import WelcomePage from './components/documents/WelcomePage.jsx';
import MyDocumentsPage from
    './components/documents/MyDocumentsPage.jsx';
import MyProfilePage from './components/users/MyProfilePage.jsx';
import CreateRolePage from './components/roles/CreateRolePage.jsx';
import ManageRolesPage from './components/roles/ManageRolesPage.jsx';
import ManageUsersPage from './components/users/ManageUsersPage.jsx';
import ManageDocumentPage from
    './components/documents/ManageDocumentsPage.jsx';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={WelcomePage} />
        <Route path="signup" component={SignupPage}/>
        <Route path="login" component={LoginPage}/>
        <Route path="dashboard" component={VerifyToken(Dashboard)}/>
        <Route path="myprofile"
            component={VerifyToken(MyProfilePage)}/>
        <Route path="managedocs"
            component={VerifyToken(ManageDocumentPage)}/>
        <Route path="createrole"
            component={VerifyToken(CreateRolePage)}/>
        <Route path="manageroles"
            component={VerifyToken(ManageRolesPage)}/>
        <Route path="manageusers"
            component={VerifyToken(ManageUsersPage)}/>
        <Route path="createdoc"
            component={VerifyToken(CreateDocumentPage)}/>
        <Route path="mydocs"
            component={VerifyToken(MyDocumentsPage)}/>
        <Route path="*" component={NotFound} status={404}/>
    </Route>
);
