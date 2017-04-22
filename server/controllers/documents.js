import models from '../models';

const Document = models.Document;

export default {
  create(req, res) {
    return Document
      .create({
        title: req.body.title,
        body: req.body.body,
        access: req.body.access,
        userId: req.params.userId,
      })
      .then(document => res.status(201).send(document))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Document
      .find({
        where: {
          id: req.params.documentId,
          userId: req.params.userId,
        },
      })
      .then((document) => {
        if (!document) {
          return res.status(404).send({
            message: 'Document Not Found',
          });
        }
        return document
            .update({
              title: req.body.title || document.title,
              body: req.body.body || document.body,
              access: req.body.access || document.access,
            })
            .then(() => res.status(200).send(document))
            .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return Document
      .find({
        where: {
          id: req.params.documentId,
          userId: req.params.userId,
        },
      })
      .then((document) => {
        if (!document) {
          return res.status(404).send({
            message: 'Document Not Found',
          });
        }
        return document
            .destroy()
            .then(() => res.status(200).send({
              message: 'Document deleted successfully.',
            }))
            .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
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
          return res.status(404).send({
            message: 'Document Not Found',
          });
        }
        return res.status(201).send(document);
      })
      .catch(error => res.status(400).send(error));
  },

  updateDirect(req, res) {
    return Document
      .find({
        where: {
          id: req.params.documentId,
        },
      })
      .then((document) => {
        if (!document) {
          return res.status(404).send({
            message: 'Document Not Found',
          });
        }
        return document
            .update({
              title: req.body.title || document.title,
              body: req.body.body || document.body,
              access: req.body.access || document.access,
            })
            .then(() => res.status(200).send(document))
            .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  destroyDirect(req, res) {
    return Document
      .find({
        where: {
          id: req.params.documentId,
        },
      })
      .then((document) => {
        if (!document) {
          return res.status(404).send({
            message: 'Document Not Found',
          });
        }
        return document
            .destroy()
            .then(() => res.status(200).send({
              message: 'Document deleted successfully.',
            }))
            .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
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
          return res.status(404).send({
            message: 'Document Not Found',
          });
        }
        return res.status(201).send(document);
      })
      .catch(error => res.status(400).send(error));
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
          return res.status(404).send({
            message: 'Documents Not Found',
          });
        }
        return res.status(201).send(document);
      })
      .catch(error => res.status(400).send(error));
  },

  getUserDocuments(req, res) {
    return Document
      .findAll({
        where: {
          userId: req.params.userId,
        },
      })
      .then((document) => {
        if (!document) {
          return res.status(404).send({
            message: 'User documents Not Found',
          });
        }
        return res.status(201).send(document);
      })
      .catch(error => res.status(400).send(error));
  },

};
