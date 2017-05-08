import models from '../models';
import UserControllerHelper from '../helpers/controllers/userControllerHelper';
import commonValidations from '../shared/validations/signup/signupValidation';

require('dotenv')
  .config();

const User = models.Users;
const Document = models.Documents;
const signJwtToken = UserControllerHelper.signJwtToken;
const isUpdateUser = UserControllerHelper.isUpdateUser;
const isDestroyUser = UserControllerHelper.isDestroyUser;
const isLoginUser = UserControllerHelper.isLoginUser;
const validateInput = UserControllerHelper.validateInput;
// const validateInput = UserControllerHelper.validateInput;

export default {
  create(req, res) {
    validateInput(req.body, commonValidations)
      .then(({
        errors,
        isValid,
      }) => {
        if (isValid === true) {
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
        }
        return res.status(400)
          .send(errors);
      });
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

  isUserExist(req, res) {
    return User.find({
      attributes: ['username', 'email'],
      where: {
        $or: [{ email: req.params.query }, { username: req.params.query }],
      },
    }).then((user) => {
      res.json({ user });
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
    const loginQuery = req.body.query;
    return User.find({
      attributes: ['username', 'password', 'email', 'id'],
      where: {
        $or: [{ email: loginQuery }, { username: loginQuery }],
      },
    }).then((user) => {
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
