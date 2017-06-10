import handleError from '../../server/helpers/utility/handleError';

const Role = require('../models')
  .Roles;

module.exports = {

  /**
   * This method creates a role
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} role
   */
  create(req, res) {
    return Role
      .create({
        title: req.body.title,
      })
      .then(role => res.status(201)
        .send({
          message: 'Role created successfully',
          role,
        }))
      .catch(error => res.status(400)
        .send({
          message: 'Error creating role',
          error: handleError(error),
        }));
  },

  /**
   * This method gets a specific role
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} role
   */
  list(req, res) {
    return Role
      .all()
      .then(roles => res.status(200)
        .send({
          message: 'This are the roles',
          roles,
        }))
      .catch(error => res.status(400)
        .send({
          message: 'Error listing role',
          error: handleError(error),
        }));
  },

  /**
   * This method gets all roles
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} role
   */
  retrieve(req, res) {
    return Role
      .findById(req.params.roleId)
      .then((role) => {
        if (!role) {
          res.status(404)
            .send({
              message: 'This role does not exist',
            });
        } else {
          res.status(200)
            .send({
              message: 'This is the role',
              role,
            });
        }
      })
      .catch((error) => {
        res.status(400)
          .send({
            message: 'Error retrieving Role',
            error: handleError(error),
          });
      });
  },

 /**
  * This method deletes a role
  *
  * @param {object} req
  * @param {object} res
  * @returns {string} message
  */
  destroy(req, res) {
    return Role
      .findById(req.params.roleId)
      .then((role) => {
        if (!role) {
          return res.status(404)
            .send({
              message: 'Role not found',
              role,
            });
        }
        return role
          .destroy()
          .then(() => res.status(200)
            .send({
              message: 'Role deleted succesfully',
              role,
            }))
          .catch(error => res.status(400)
            .send({
              message: 'Role not deleted',
              error: handleError(error),
            }));
      })
      .catch(error => res.status(400)
        .send({
          message: 'Error deleting role',
          error: handleError(error),
        }));
  },

};
