import React from 'react';

/**
 * This function renders the user table head roles for the admin
 *
 * @export
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
