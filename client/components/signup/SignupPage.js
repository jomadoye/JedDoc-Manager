import React from 'react';
import { connect } from 'react-redux';
import SignupForm from './SignupForm';
import { userSignupRequest, isUserExists } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';

class SignupPage extends React.Component {
  render() {
    const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
    return (
      <div>
        <div>
          <h1 className="center-align welcome-message">Join our community</h1>
        </div>
        <div className="row">
          <div className="col s8 offset-s2">
            <SignupForm userSignupRequest={userSignupRequest}
            addFlashMessage={addFlashMessage}
            isUserExists={isUserExists} />
          </div>
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired,
};

export default connect(
  // MapStateToProp
  null,
  // MapDispatchToProps
  { userSignupRequest, addFlashMessage, isUserExists },
)(SignupPage);
