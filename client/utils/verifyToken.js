import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFlashMessage } from '../actions/flashMessages';

/**
 * This function verifies the token being used on the  frontend
 *
 * @export
 * @param {ReactComponent} ComposedComponent
 * @returns {ReactComponent}
 */
export default function (ComposedComponent) {
  /**
   * This method verifies the token
   *
   * @class VerifyToken
   * @extends {React.Component}
   */
  class VerifyToken extends React.Component {

    /**
     * This method runs when the component mounts
     *
     * @memberof VerifyToken
     */
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.addFlashMessage({
          type: 'error',
          text: 'You need to login to access this page',
        });
        this.context.router.push('/login');
      }
    }

    /**
     * This method runs when the component updates its props
     *
     * @param {any} nextProps
     *
     * @memberof VerifyToken
     */
    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.push('/');
      }
    }

    /**
     * This method renders the component
     *
     * @returns {object} jsx component
     *
     * @memberof VerifyToken
     */
    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  VerifyToken.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
  };

  VerifyToken.contextTypes = {
    router: PropTypes.object.isRequired,
  };

  /**
   * mapStateToProps
   *
   * @param {object} state
   * @returns {object} state
   */
  function mapStateToProps(state) {
    return {
      isAuthenticated: state.login.isAuthenticated,
    };
  }

  return connect(mapStateToProps, { addFlashMessage })(VerifyToken);
}
