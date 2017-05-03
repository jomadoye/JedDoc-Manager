import jwt from 'jsonwebtoken';
import models from '../models';

const secret = process.env.SECRET;

export default {
  verifyToken(req, res, next) {
    const token = req.headers['x-access-token'] || req.headers.authorization;
    if (token) {
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          return res.status(403)
            .send({
              success: false,
              message: 'Incorrect token.',
            });
        }
        req.decoded = decoded;
        return next();
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
