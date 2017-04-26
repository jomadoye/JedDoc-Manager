import models from '../../models';

const Document = models.Document;

class DocumentControllerHelper {

  static createQueryForList(req) {
    const limit = req.query.limit || null;
    const offset = req.query.offset || 0;
    const userId = req.decoded.data.Id;
    const roleId = req.decoded.data.roleId;
    const query = {};
    if (limit || offset) {
      query.limit = {
        limit,
      };
      query.offset = {
        offset,
      };
    }
    if (roleId === 1) {
      query.where = {};
    } else {
      query.where = {
        $or: [{
          access: 'public',
        }, {
          userId,
        }],
      };
    }
    return query;
  }

  static isDocumentList(document, res) {
    let response = {};
    if (!document) {
      response = res.status(404)
        .send({
          message: 'Documents Not Found',
        });
    } else {
      response = res.status(201)
        .json({
          success: true,
          message: 'Document is shown below',
          document,
        });
    }
    return response;
  }

  static isGetUserDocuments(user, res, req) {
    let response = {};
    if (!user) {
      response = res.status(404)
        .json({
          success: false,
          message: 'User not found',
        });
    } else {
      return Document
        .findAll({
          where: {
            userId: req.params.userId,
          },
        })
        .then((document) => {
          if (!document) {
            response = res.status(404)
              .json({
                success: false,
                message: 'User has no document.',
              });
          } else {
            response = res.status(201)
              .json({
                success: true,
                message: 'This is the user document(s).',
                document,
              });
          }
          return response;
        })
        .catch(error => res.status(400)
          .json({
            success: false,
            message: 'Error retrieving document',
            error,
          }));
    }
  }

  static isRetrieveDocuments(document, res) {
    let response = {};
    if (!document) {
      response = res.status(404)
        .json({
          success: false,
          message: 'Document Not Found',
        });
    } else {
      response = res.status(201)
        .send({
          success: true,
          message: 'This is your document.',
          document,
        });
    }
    return response;
  }

  static isDestroyDocuments(document, res) {
    let response = {};
    if (!document) {
      response = res.status(404)
        .json({
          success: false,
          message: 'Document Not Found',
        });
    } else {
      response = document
        .destroy()
        .then(() => res.status(200)
          .json({
            success: true,
            message: 'Document deleted successfully.',
          }));
    }
    return response;
  }

  static isUpdateDocuments(document, res, req) {
    let response = {};
    if (!document) {
      response = res.status(404)
        .json({
          success: false,
          message: 'Document Not Found',
        });
    } else {
      response = document
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
          }));
    }
    return response;
  }
}

export default DocumentControllerHelper;
