import jwt from 'jsonwebtoken';
import models from '../../models';

require('dotenv')
  .config();

const secret = process.env.SECRET;

class UserControllerHelper {

  static signJwtToken(user) {
    const token = jwt.sign({
      data: user,
    }, secret, {
      expiresIn: '24h',
    });
    return token;
  }

  static isUpdateUser(user, res, req) {
    let response = {};
    if (!user) {
      response = res.status(404)
        .json({
          success: false,
          message: 'User not found',
        });
      return response;
    }
    return user
      .update({
        roleId: req.body.roleId || user.roleId,
        username: req.body.username || user.username,
        email: req.body.email || user.email,
        password: req.body.password || user.password,
        fullname: req.body.fullname || user.fullname,
      })
      .then(() => {
        response = res.status(200)
          .json({
            success: true,
            message: 'User updated successfully.',
            user,
          });
        return response;
      })
      .catch(error => {
        response = res.status(400)
          .json({
            success: false,
            message: 'Error updating user.',
            error,
          });
        return error;
      });
  }

  static isDestroyUser(user, res) {
    let response = {};
    if (!user) {
      response = res.status(404)
        .json({
          success: false,
          message: 'User not found',
        });
      return response;
    }
    return user
      .destroy()
      .then(() => {
        response = res.status(200)
          .json({
            success: true,
            message: 'User deleted successfully.',
          });
        return response;
      })
      .catch(error => {
        response = res.status(400)
          .json({
            error,
            success: false,
            message: 'Error encountered when deleting user',
          });
        return response;
      });
  }

  static isLoginUser(user, res, req) {
    let response = {};
    if (!user) {
      response = res.status(400)
        .json({
          success: false,
          message: 'Authentication failed, user not found',
        });
      return response;
    } else if (user) {
      if (req.body.password === undefined) {
        response = res.status(400)
          .json({
            success: false,
            message: 'Authentication failed, no password.',
          });
        return response;
      }
      if (!user.checkPassword(req.body.password)) {
        response = res.status(400)
          .json({
            success: false,
            message: 'Authentication failed, wrong password.',
          });
        return response;
      }
      const token = UserControllerHelper.signJwtToken(user);
      response = res.status(200)
        .json({
          success: true,
          message: 'User logged in',
          token,
        });
      return response;
    }
  }
}

export default UserControllerHelper;
