import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as RoleActions from '../../actions/roleActions';
import { deleteFlashMessage } from '../../actions/flashMessages';

class ManageRoleRow extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(event) {
    event.preventDefault();
    this.props.DeleteUserRoles(this.props.role.id);
    this.props.deleteFlashMessage(1);
  }
  render() {
    const { role } = this.props;
    return (
      <tr key={role.id}>
        <td>{role.id}</td>
        <td>{role.title}</td>
        <td><button
        className="waves-effect waves-light btn"
        onClick={this.handleDelete}
        >Delete Role</button></td>
      </tr>
    );
  }
}

ManageRoleRow.propTypes = {
  role: PropTypes.object.isRequired,
  DeleteUserRoles: PropTypes.func.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
};

/**
 * This function maps the state to props
 *
 * @param {function} dispatch
 * @returns function
 */
function mapDispatchToProps(dispatch) {
  return {
    DeleteUserRoles: roleId => dispatch(RoleActions.DeleteUserRoles(roleId)),
    deleteFlashMessage: () => dispatch(deleteFlashMessage()),
  };
}

export default connect(null, mapDispatchToProps)(ManageRoleRow);
