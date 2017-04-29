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
    models.Role.findById(req.decoded.data.roleId)
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

  /**
  isOwner(req, res, next) {
    const itemId = req.params.userId;
    const userId = req.decoded.data.id;
    if (parseInt(itemId, 10) === userId) {
      return next();
    }
    return res.status(403)
      .json({
        success: false,
        message: 'unauthorized to perform this request',
      });
  },
` */

  isAdminOrOwner(req, res, next) {
    models.Role.findById(req.decoded.data.roleId)
      .then((role) => {
        if (role.title === 'Administrator') {
          next();
        } else {
          const itemId = req.params.userId;
          const userId = req.decoded.data.id;
          if (parseInt(itemId, 10) === userId) {
            return next();
          }
          return res.status(403)
            .json({
              success: false,
              message: 'unauthorized to perform this request',
            });
        }
      })
      .catch(error => res.status(400)
        .send(error));
  },
};
