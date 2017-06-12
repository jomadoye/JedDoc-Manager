import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignupForm from './SignupForm.jsx';
import * as SignupActions from '../../actions/signupActions';
import * as FlashMessage from '../../actions/flashMessages';

/**
 * The signup page
 *
 * @class SignupPage
 * @extends {React.Component}
 */
class SignupPage extends React.Component {

  /**
   * This method renders the component
   *
   * @returns {Object} jsx component
   *
   * @memberof SignupPage
   */
  render() {
    const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
    return (
      <div>
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
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired,
};

/**
 * This function maps the dispatch to the props
 *
 * @param {function} dispatch
 * @returns dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    userSignupRequest: userData =>
      dispatch(SignupActions.userSignupRequest(userData)),
    isUserExists: query =>
      dispatch(SignupActions.isUserExists(query)),
    addFlashMessage: message =>
      dispatch(FlashMessage.addFlashMessage(message)),
  };
}
export default connect(null, mapDispatchToProps)(SignupPage);
