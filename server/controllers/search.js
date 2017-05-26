import models from '../models';

const User = models.Users;
const Document = models.Documents;

export default {
  searchUsers(req, res) {
    const query = req.query.q.trim()
      .split(' ')
      .map(searchWord => `%${searchWord}%`);
    const limit = req.query.limit || null;
    const offset = req.query.offset || 0;
    return User
      .findAll({
        where: {
          username: {
            $ilike: {
              $any: query,
            },
          },
        },
        limit,
        offset,
        include: [{
          model: Document,
          as: 'documents',
        }],
      })
      .then((user) => {
        if (!user) {
          res.status(404)
            .json({
              
              message: 'User not found.',
            });
        } else {
          res.status(200)
            .json({
              
              message: 'This is your user.',
              user,
            });
        }
      })
      .catch(error => res.status(400)
        .send(error));
  },

  searchDocuments(req, res) {
    const query = req.query.q.trim()
      .split(' ')
      .map(searchWord => `%${searchWord}%`);
    const limit = req.query.limit || null;
    const offset = req.query.offset || 0;
    return Document
      .findAll({
        where: {
          title: {
            $ilike: {
              $any: query,
            },
          },
        },
        limit,
        offset,
        include: [{
          model: models.Users,
          attributes: ['fullname'] }],
      })
      .then((document) => {
        if (!document) {
          return res.status(404)
            .json({
              
              message: 'Document Not Found',
            });
        }
        return res.status(200)
          .json({
            
            message: 'This is your document.',
            document,
          });
      })
      .catch(error => res.status(400)
        .json({
          
          message: 'Document Not Found',
          error,
        }));
  },
};
