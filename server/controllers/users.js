import models from '../models';
import UserControllerHelper from '../helpers/controllers/userControllerHelper';

require('dotenv')
  .config();

const User = models.User;
const Document = models.Document;
const signJwtToken = UserControllerHelper.signJwtToken;
const isUpdateUser = UserControllerHelper.isUpdateUser;
const isDestroyUser = UserControllerHelper.isDestroyUser;
const isLoginUser = UserControllerHelper.isLoginUser;

export default {
  create(req, res) {
    return User
      .create(req.body)
      .then((user) => {
        const token = signJwtToken(user);
        res.status(201)
          .json({
            success: true,
            message: 'User successfully created',
            token,
            user,
          });
      })
      .catch(error => res.status(400)
        .send(error));
  },

  list(req, res) {
    const limit = req.query.limit || null;
    const offset = req.query.offset || 0;
    return User
      .findAll({
        limit,
        offset,
      })
      .then(users => res.status(200)
        .send(users))
      .catch(error => res.status(400)
        .send(error));
  },

  retrieve(req, res) {
    return User
      .findById(req.params.userId, {
        include: [{
          model: Document,
          as: 'documents',
        }],
      })
      .then((user) => {
        if (!user) {
          res.status(404)
            .send({
              message: 'User not found',
            });
        } else {
          res.status(200)
            .send(user);
        }
      })
      .catch(error => res.status(400)
        .send(error));
  },

  update(req, res) {
    return User
      .findById(req.params.userId, {
        include: [{
          model: Document,
          as: 'documents',
        }],
      })
      .then((user) => {
        const response = isUpdateUser(user, res, req);
        return response;
      })
      .catch(error => res.status(400)
        .json({
          error,
          success: false,
          message: 'Error updating user.',
        }));
  },

  destroy(req, res) {
    return User
      .findById(req.params.userId)
      .then((user) => {
        const response = isDestroyUser(user, res);
        return response;
      })
      .catch(error => res.status(400)
        .json({
          error,
          success: false,
          message: 'Error encountered when deleting user',
        }));
  },

  login(req, res) {
    return User
      .find({
        where: {
          username: req.body.username,
        },
      })
      .then((user) => {
        const response = isLoginUser(user, res, req);
        return response;
      })
      .catch(error => res.status(400)
        .json({
          success: false,
          message: 'Error logging',
          error,
        }));
  },

  logout(req, res) {
    res.setHeader['x-access-token'] = ' ';
    res.status(200)
      .json({
        success: true,
        message: 'User logged out',
      });
  },
};
