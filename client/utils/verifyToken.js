import React from 'react';
import { connect } from 'react-redux';
import { addFlashMessage } from '../actions/flashMessages';

export default function (ComposedComponent) {
  class VerifyToken extends React.Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.addFlashMessage({
          type: 'error',
          text: 'You need to login to access this page',
        });
        this.context.router.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.push('/');
      }
    }
    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  VerifyToken.propTypes = {
    isAuthenticated: React.PropTypes.bool.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired,
  };

  VerifyToken.contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.login.isAuthenticated,
    };
  }

  return connect(mapStateToProps, { addFlashMessage })(VerifyToken);
}
