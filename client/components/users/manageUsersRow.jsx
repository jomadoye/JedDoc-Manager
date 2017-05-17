import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as UserActions from '../../actions/userAction';
import { deleteFlashMessage } from '../../actions/flashMessages';

class ManageUsersRow extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(event) {
    event.preventDefault();
    this.props.deleteSingleUserAccount(this.props.user.id);
  }
  render() {
    const { user, index } = this.props;
    return (
      <tr key={user.id}>
        <td>{index + 1}</td>
        <td>{user.fullname}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.roleId}</td>
        <td><button
        className="waves-effect waves-light btn"
        onClick={this.handleDelete}
        >Delete User</button></td>
      </tr>
    );
  }
}

ManageUsersRow.propTypes = {
  user: PropTypes.object.isRequired,
  deleteSingleUserAccount: PropTypes.func.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

/**
 * This function maps the state to props
 *
 * @param {function} dispatch
 * @returns function
 */
function mapDispatchToProps(dispatch) {
  return {
    deleteSingleUserAccount: userId =>
      dispatch(UserActions.deleteSingleUserAccount(userId)),
    deleteFlashMessage: () => dispatch(deleteFlashMessage()),
  };
}

export default connect(null, mapDispatchToProps)(ManageUsersRow);
