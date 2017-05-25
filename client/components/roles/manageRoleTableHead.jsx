import React from 'react';

/**
 * This fucntion renders the user table head roles for the admin
 *
 * @export
 * @param {function, object} { handleDelete, role }
 * @returns HTML
 */
export default function ManageRoleTableHead() {
  return (
    <thead>
      <tr>
        <th>Role ID</th>
        <th>Role Title</th>
        <th>Delete Role</th>
      </tr>
    </thead>
  );
}
