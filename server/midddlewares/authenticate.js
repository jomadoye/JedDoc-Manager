import jwt from 'jsonwebtoken';
import models from '../models';

const secret = process.env.SECRET;
const User = models.Users;

export default {
  verifyToken(req, res, next) {
    let token;
    if (req.headers.authorization) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.headers['x-access-token']) {
      token = req.headers['x-access-token'];
    }
    if (token) {
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          return res.status(403)
            .send({
              success: false,
              message: 'Incorrect token.',
            });
        }
        User.findById(decoded.data.id)
          .then((user) => {
            if (!user) {
              return res.status(403)
                .send({
                  success: false,
                  message: 'This user does not exist',
                });
            }
            req.decoded = decoded;
            return next();
          })
          .catch(error => res.status(400)
            .send({
              success: false,
              message: 'Error finding current users',
              error,
            }));
      });
    } else {
      return res.status(403)
        .send({
          success: false,
          message: 'No token provided.',
        });
    }
  },

  isAdmin(req, res, next) {
    models.Roles.findById(req.decoded.data.roleId)
      .then((role) => {
        if (role.title === 'Administrator') {
          return next();
        }
        return res.status(403)
          .send({
            success: false,
            message: 'Admin access is required',
          });
      })
      .catch(error => res.status(400)
        .send(error));
  },

  isAdminOrOwner(req, res, next) {
    const loggedInUserId = req.decoded.data.id;
    const loggedInUserRoleId = req.decoded.data.roleId;
    const documentId = req.params.documentId;
    const userId = req.params.userId;
    let documentUserId;
    if (loggedInUserRoleId === 1) {
      return next();
    } else if (documentId) {
      return models.Documents.findById(documentId)
        .then((document) => {
          documentUserId = document.userId;
          if (loggedInUserId === documentUserId) {
            return next();
          }
          return res.status(403)
            .json({
              success: false,
              message: 'unauthorized to perform this request',
            });
        })
        .catch(error => res.send(error));
    } else if (loggedInUserId === parseInt(userId, 10)) {
      return next();
    }
    return res.status(403)
      .json({
        success: false,
        message: 'unauthorized to perform this request',
      });
  },
};
