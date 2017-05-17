import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as UserActions from '../../actions/userAction';
import ManageUsersRow from '../users/manageUsersRow.jsx';

class viewUsersPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadAllUsers();
  }

  render() {
    const { allUsers } = this.props;
    return (
      <div className="container">
        <h1> welcome to view users page for Admin</h1>
        <table className="striped">
        <thead>
          <tr>
              <th>S/N</th>
              <th>FullName</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Role Id</th>
              <th>Edit User</th>
              <th>Delete User</th>
          </tr>
        </thead>
        <tbody>
          {allUsers && allUsers.map((user, index) => <ManageUsersRow key={user.id} user={user} index={index}/>)}
        </tbody>
      </table>
      </div>
    );
  }
}

viewUsersPage.propTypes = {
  loadAllUsers: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    loadAllUsers: () => dispatch(UserActions.loadAllUsers()),
  };
}

function mapStateToProps(state) {
  return {
    allUsers: state.login.allUsers,
  };
}
export default
  connect(mapStateToProps, mapDispatchToProps)(viewUsersPage);
