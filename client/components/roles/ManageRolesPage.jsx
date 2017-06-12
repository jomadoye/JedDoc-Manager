import React from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import * as RoleActions from '../../actions/roleActions';
import ManageRoleRow from './ManageRoleRow.jsx';
import { deleteFlashMessage } from '../../actions/flashMessages';
import ManageRoleTableHead from './ManageRoleTableHead.jsx';

/**
 * The manage role page
 *
 * @class ManageRolesPage
 * @extends {React.Component}
 */
class ManageRolesPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  /**
   * This method runs when the component mounts
   *
   * @memberof ManageRolesPage
   */
  componentWillMount() {
    this.props.loadUserRoles();
  }

  /**
   * This method deletes a role
   *
   * @param {number} roleId
   *
   * @memberof ManageRolesPage
   */
  handleDelete(roleId) {
    event.preventDefault();
    swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this role!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Yes, delete it!',
      closeOnConfirm: false,
    },
    () => {
      this.props.deleteUserRoles(roleId);
      this.props.deleteFlashMessage(1);
      swal('Deleted!', 'This document has been deleted.', 'success');
    });
  }

  /**
   * This method renders the component
   *
   * @returns manageRolesPage
   *
   * @memberof ManageRolesPage
   */
  render() {
    const { roles } = this.props;
    return (
      <div className="container">
        <h1> welcome to manage role page for Admin</h1>
        <table className="striped">
          <ManageRoleTableHead />
        <tbody>
        {roles && roles.map(role => <ManageRoleRow
          handleDelete={this.handleDelete}
          key={role.id}
          role={role}/>,
        )}
        </tbody>
      </table>
      </div>
    );
  }
}

ManageRolesPage.propTypes = {
  loadUserRoles: PropTypes.func.isRequired,
  roles: PropTypes.array,
  roleId: PropTypes.number,
  deleteUserRoles: PropTypes.func.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
};

/**
 * The function maps dispatch to props
 *
 * @param {function} dispatch
 * @returns dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    loadUserRoles: () => dispatch(RoleActions.loadUserRoles()),
    deleteUserRoles: roleId => dispatch(RoleActions.deleteUserRoles(roleId)),
    deleteFlashMessage: a => dispatch(deleteFlashMessage(a)),
  };
}

/**
 * This function maps state to props
 *
 * @param {object} state
 * @returns {object}
 */
function mapStateToProps(state) {
  return {
    roles: state.role.allRoles,
  };
}

export default
  connect(mapStateToProps, mapDispatchToProps)(ManageRolesPage);
