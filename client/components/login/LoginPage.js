import React from 'react';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <h1 className="center-align welcome-message">Login Page</h1>
        <div className="row">
          <div className="col s8 offset-s2">
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
