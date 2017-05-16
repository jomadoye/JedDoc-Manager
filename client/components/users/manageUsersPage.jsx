import React from 'react';
import { connect } from 'react-redux';

class manageUsersPage extends React.Component {
  render() {
    return (
      <h1> welcome to manage users page for Admin</h1>
    );
  }
}

function mapDispatchToProps(dispatch) {

}

function mapStateToProps(state) {
  return {
    roles: state.roles,
  };
}
export default
  connect(mapStateToProps, mapDispatchToProps)(manageUsersPage);
