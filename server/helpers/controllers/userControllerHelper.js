import jwt from 'jsonwebtoken';

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
}

export default UserControllerHelper;
