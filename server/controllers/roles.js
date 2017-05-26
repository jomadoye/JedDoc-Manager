const Role = require('../models')
  .Roles;

module.exports = {
  create(req, res) {
    return Role
      .create({
        title: req.body.title,
      })
      .then(role => res.status(201)
        .json({
          
          message: 'Role created successfully',
          role,
        }))
      .catch(error => res.status(400)
        .json({
          
          message: 'Error creating role',
          error,
        }));
  },
  list(req, res) {
    return Role
      .all()
      .then(roles => res.status(200)
        .json({
          
          message: 'This are the roles',
          roles,
        }))
      .catch(error => res.status(400)
        .json({
          
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
              
              message: 'This role does not exist',
            });
        } else {
          res.status(200)
            .json({
              
              message: 'This is the role',
              role,
            });
        }
      })
      .catch((error) => {
        res.status(400)
          .json({
            
            message: 'Error retrieving Role',
            error,
          });
      });
  },
 
  destroy(req, res) {
    return Role
      .findById(req.params.roleId)
      .then((role) => {
        if (!role) {
          return res.status(404)
            .json({
              
              message: 'Role not found',
              role,
            });
        }
        return role
          .destroy()
          .then(() => res.status(200)
            .json({
              
              message: 'Role deleted succesfully',
              role,
            }))
          .catch(error => res.status(400)
            .json({
              
              message: 'Role not deleted',
              error,
            }));
      })
      .catch(error => res.status(400)
        .json({
          
          message: 'Error deleting role',
          error,
        }));
  },

};
