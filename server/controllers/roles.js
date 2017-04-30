const Role = require('../models')
  .Role;

module.exports = {
  create(req, res) {
    return Role
      .create({
        title: req.body.title,
      })
      .then(role => res.status(201)
        .json({
          success: true,
          message: 'Role created successfully',
          role,
        }))
      .catch(error => res.status(400)
        .json({
          success: false,
          message: 'Error creating role',
          error,
        }));
  },
  list(req, res) {
    return Role
      .all()
      .then(roles => res.status(201)
        .json({
          success: true,
          message: 'This are the roles',
          roles,
        }))
      .catch(error => res.status(400)
        .json({
          success: false,
          message: 'Error listing role',
          error,
        }));
  },
  retrieve(req, res) {
    return Role
      .findById(req.params.roleId)
      .then((role) => {
        if (!role) {
          res.status(404)
            .json({
              success: false,
              message: 'This role does not exist',
            });
        } else {
          res.status(200)
            .json({
              success: true,
              message: 'This is the role',
              role,
            });
        }
      })
      .catch((error) => {
        res.status(400)
          .json({
            success: false,
            message: 'Error retrieving Role',
            error,
          });
      });
  },
  // update(req, res) {
  //   return Role
  //     .findById(req.params.roleId)
  //     .then((role) => {
  //       if (!role) {
  //         res.status(404)
  //           .json({
  //             success: false,
  //             message: 'Role not found',
  //           });
  //       } else {
  //         return role
  //           .update({
  //             title: req.body.title || role.title,
  //           })
  //           .then(() => {
  //             res.status(200)
  //               .json({
  //                 success: true,
  //                 message: 'Role Updated',
  //                 role,
  //               });
  //           })
  //           .catch((error) => {
  //             res.status(400)
  //               .json({
  //                 success: false,
  //                 message: 'Error updating role',
  //                 error,
  //               });
  //           });
  //       }
  //     })
  //     .catch((error) => {
  //       res.status(400)
  //         .json({
  //           success: false,
  //           message: 'Server Error',
  //           error,
  //         });
  //     });
  // },
  destroy(req, res) {
    return Role
      .findById(req.params.roleId)
      .then((role) => {
        if (!role) {
          return res.status(404)
            .json({
              success: false,
              message: 'Role not found',
              role,
            });
        }
        return role
          .destroy()
          .then(() => res.status(200)
            .json({
              success: true,
              message: 'Role deleted succesfully',
              role,
            }))
          .catch(error => res.status(400)
            .json({
              success: true,
              message: 'Role not deleted',
              error,
            }));
      })
      .catch(error => res.status(400)
        .json({
          success: false,
          message: 'Error deleting role',
          error,
        }));
  },

};
