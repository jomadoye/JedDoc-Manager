import models from '../models';
import DocumentControllerHelper
from '../helpers/controllers/documentControllerHelper';

const Document = models.Documents;
const User = models.Users;
const createQuery = DocumentControllerHelper.createQueryForList;
const isDocumentList = DocumentControllerHelper.isDocumentList;
const isGetUserDocuments = DocumentControllerHelper.isGetUserDocuments;
const isRetrieveDocuments = DocumentControllerHelper.isRetrieveDocuments;
const isDestroyDocuments = DocumentControllerHelper.isDestroyDocuments;
const isUpdateDocuments = DocumentControllerHelper.isUpdateDocuments;

export default {
  create(req, res) {
    return Document
      .create({
        title: req.body.title,
        body: req.body.body,
        access: req.body.access,
        userId: req.params.userId || req.decoded.data.id,
        ownerRoleId: req.decoded.data.roleId,
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
        const response = isUpdateDocuments(document, res, req);
        return response;
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
        const response = isDestroyDocuments(document, res);
        return response;
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
        const response = isRetrieveDocuments(document, res, req);
        return response;
      })
      .catch(error => res.status(400)
        .json({
          success: false,
          message: 'Error retrieving document',
          error,
        }));
  },

  list(req, res) {
    const query = createQuery(req);
    return Document
      .findAll({
        where: query.where,
        offset: query.offset,
        limit: query.limit,
        include: [{
          model: models.Users,
          attributes: ['fullname'] }],
      })
      .then((document) => {
        const response = isDocumentList(document, res);
        return response;
      })
      .catch(error => res.status(400)
        .send(error));
  },

  getUserDocuments(req, res) {
    User.findById(req.params.userId)
      .then((user) => {
        const response = isGetUserDocuments(user, res, req);
        return response;
      })
      .catch(error => res.status(400)
        .json({
          success: false,
          message: 'Error retrieving document',
          error,
        }));
  },
};
