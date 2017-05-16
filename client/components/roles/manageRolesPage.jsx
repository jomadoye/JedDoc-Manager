import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as RoleActions from '../../actions/roleActions';
import ManageRoleRow from '../roles/manageRoleRow.jsx';

class manageRolesPage extends React.Component {
  constructor(props) {
    super(props);

    // this.handleDelete = this.handleDelete.bind(this);
  }
  componentWillMount() {
    this.props.loadUserRoles();
  }
  render() {
    const { roles } = this.props;
    return (
      <div className="container">
        <h1> welcome to manage role page for Admin</h1>
        <table className="striped">
        <thead>
          <tr>
            <th>Role ID</th>
            <th>Role Title</th>
            <th>Delete Role</th>
          </tr>
        </thead>
          <tbody>
        {roles && roles.map(role => <ManageRoleRow key={role.id} role={role}/>)}
        </tbody>
      </table>
      </div>
    );
  }
}

manageRolesPage.propTypes = {
  loadUserRoles: PropTypes.func.isRequired,
  roles: PropTypes.array,
};

/**
 * The function maps dispatch to props
 *
 * @param {any} dispatch
 * @returns dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    loadUserRoles: () => dispatch(RoleActions.loadUserRoles()),
    // deleteFlashMessage: a => dispatch(deleteFlashMessage(a)),
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
  connect(mapStateToProps, mapDispatchToProps)(manageRolesPage);
