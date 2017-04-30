const Role = require('../models')
  .Role;

module.exports = {
  create(req, res) {
    return Role
      .create({
        title: req.body.title,
      })
      .then(role => res.status(201)
        .send(role))
      .catch(error => res.status(400)
        .send(error));
  },
  list(req, res) {
    return Role
      .all()
      .then(roles => res.status(201)
        .send(roles))
      .catch(error => res.status(400)
        .send(error));
  },
  retrieve(req, res) {
    return Role
      .findById(req.params.roleId)
      .then((role) => {
        if (!role) {
          res.status(404)
            .send({
              message: 'Role not found',
            });
        } else {
          res.status(200)
            .send(role);
        }
      })
      .catch((error) => {
        res.status(400)
          .send(error);
      });
  },
  update(req, res) {
    return Role
      .findById(req.params.roleId)
      .then((role) => {
        if (!role) {
          res.status(404)
            .send({
              message: 'Role not found',
            });
        } else {
          return role
            .update({
              title: req.body.title || role.title,
            })
            .then(() => {
              res.status(200)
                .send(role);
            })
            .catch((error) => {
              res.send(error);
            });
        }
      })
      .catch((error) => {
        res.send(error);
      });
  },
  destroy(req, res) {
    return Role
      .findById(req.params.roleId)
      .then((role) => {
        if (!role) {
          return res.status(400)
            .send({
              message: 'role Not Found',
            });
        }
        return role
            .destroy()
            .then(() => res.status(200)
              .send({
                message: 'Role deleted successfully.',
              }))
            .catch(error => res.status(400)
              .send(error));
      })
      .catch(error => res.status(400)
        .send(error));
  },

};
