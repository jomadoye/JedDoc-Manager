import models from '../models';

const Document = models.Document;
const User = models.User;

export default {
  create(req, res) {
    return Document
      .create({
        title: req.body.title,
        body: req.body.body,
        access: req.body.access,
        userId: req.params.userId,
      })
      .then(document => res.status(201)
        .json({
          success: true,
          message: 'Document created successfully.',
          document,
        }))
      .catch(error => res.status(400)
        .json({
          success: false,
          message: 'An error occured while creating this document.',
          error,
        }));
  },

  update(req, res) {
    return Document
      .find({
        where: {
          id: req.params.documentId,
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
        return document
          .update({
            title: req.body.title || document.title,
            body: req.body.body || document.body,
            access: req.body.access || document.access,
          })
          .then(() => res.status(200)
            .json({
              success: true,
              message: 'Document successfuly updated',
              document,
            }))
          .catch(error => res.status(400)
            .json({
              success: false,
              message: 'Error encountered while updating',
              error,
            }));
      })
      .catch(error => res.status(400)
        .json({
          success: false,
          message: 'Error encountered while updating',
          error,
        }));
  },

  destroy(req, res) {
    return Document
      .find({
        where: {
          id: req.params.documentId,
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
        return document
          .destroy()
          .then(() => res.status(200)
            .json({
              success: true,
              message: 'Document deleted successfully.',
            }))
          .catch(error => res.status(400)
            .json({
              success: false,
              message: 'Error encountered while deleting user',
              error,
            }));
      })
      .catch(error => res.status(400)
        .json({
          success: false,
          message: 'Error encountered while deleting user',
          error,
        }));
  },

  retrieve(req, res) {
    return Document
      .find({
        where: {
          id: req.params.documentId,
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
          .send({
            success: true,
            message: 'This is your document.',
            document,
          });
      })
      .catch(error => res.status(400)
        .json({
          success: false,
          message: 'Error retrieving document',
          error,
        }));
  },

  search(req, res) {
    return Document
      .find({
        where: {
          title: req.query.documenttitle,
        },
      })
      .then((document) => {
        if (!document) {
          return res.status(404)
            .send({
              message: 'Document Not Found',
            });
        }
        return res.status(201)
          .send(document);
      })
      .catch(error => res.status(400)
        .send(error));
  },

  list(req, res) {
    const limit = req.query.limit || null;
    const offset = req.query.offset || 0;
    return Document
      .findAll({
        limit,
        offset,
      })
      .then((document) => {
        if (!document) {
          return res.status(404)
            .send({
              message: 'Documents Not Found',
            });
        }
        return res.status(201)
          .json({
            success: true,
            message: 'Document is shown below',
            document,
          });
      })
      .catch(error => res.status(400)
        .send(error));
  },

  getUserDocuments(req, res) {
    User.findById(req.params.userId)
      .then((user) => {
        if (!user) {
          return res.status(404)
            .json({
              success: false,
              message: 'User not found',
            });
        }
        return Document
            .findAll({
              where: {
                userId: req.params.userId,
              },
            })
            .then((document) => {
              if (!document) {
                return res.status(404)
                  .json({
                    success: false,
                    message: 'User documents Not Found',
                  });
              }
              return res.status(201)
                .send(document);
            })
            .catch(error => res.status(400)
              .json({
                success: false,
                message: 'Error retrieving document',
                error,
              }));
      })
      .catch(error => res.status(400)
        .json({
          success: false,
          message: 'Error retrieving document',
          error,
        }));
  },
};
