import React from 'react';
import PropTypes from 'prop-types';

/**
 * This fucntion renders the user roles for the admin
 *
 * @export
 * @param {function, object} { handleDelete, role }
 * @returns HTML
 */
export default function ManageRoleRow({ handleDelete, role }) {
  return (
    <tr key={role.id}>
      <td>{role.id}</td>
      <td>{role.title}</td>
      <td><button
      id="delete-role"
      className="waves-effect waves-light btn delete-role"
      onClick={() => { handleDelete(role.id); }}
      >Delete Role</button></td>
    </tr>
  );
}

ManageRoleRow.propTypes = {
  role: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
