import models from '../models';

const User = models.Users;
const Document = models.Documents;

export default {
  searchUsers(req, res) {
    return User
      .find({
        where: {
          username: req.params.username,
        },
        include: [{
          model: Document,
          as: 'documents',
        }],
      })
      .then((user) => {
        if (!user) {
          res.status(404)
            .json({
              success: false,
              message: 'User not found.',
            });
        } else {
          res.status(201)
            .json({
              success: true,
              message: 'This is your user.',
              user,
            });
        }
      })
      .catch(error => res.status(400)
        .send(error));
  },

  searchDocuments(req, res) {
    return Document
      .find({
        where: {
          title: req.params.documentTitle,
        },
      })
      .then((document) => {
        if (!document) {
          return res.status(404)
            .json({
              success: false,
              message: 'Document Not Found',
            });
        }
        return res.status(201)
          .json({
            success: true,
            message: 'This is your document.',
            document,
          });
      })
      .catch(error => res.status(400)
        .json({
          success: false,
          message: 'Document Not Found',
          error,
        }));
  },
};
