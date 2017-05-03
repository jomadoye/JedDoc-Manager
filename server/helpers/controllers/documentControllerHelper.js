import models from '../../models';

const Document = models.Documents;

class DocumentControllerHelper {

  static createQueryForList(req) {
    const limit = req.query.limit || null;
    const offset = req.query.offset || 0;
    const userId = req.decoded.data.id;
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
        },
        {
          $and: [{
            ownerRoleId: roleId,
          }, {
            access: 'role',
          }],
        },
        ],
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
        .then((documents) => {
          if (!documents) {
            response = res.status(404)
              .json({
                success: false,
                message: 'User has no document.',
              });
          } else {
            if (req.decoded.data.id === 1) {
              response = res.status(201)
                .json({
                  success: true,
                  message: 'This is the user document(s).',
                  documents,
                });
            } else {
              const authToViewDocuments = [];
              documents.forEach((document) => {
                if (document.access === 'public') {
                  authToViewDocuments.push(document);
                }
              });
              response = res.status(201)
                .json({
                  success: true,
                  message: 'This is the user document(s).',
                  authToViewDocuments,
                });
            }
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

  static isRetrieveDocuments(document, res, req) {
    let response = {};
    if (!document) {
      response = res.status(404)
        .json({
          success: false,
          message: 'Document Not Found',
        });
    } else {
      const userId = req.decoded.data.id;
      const roleId = req.decoded.data.roleId;
      if (roleId !== 1) {
        if (document.userId !== userId && document.access === 'private') {
          response = res.status(403)
            .json({
              success: false,
              message: 'You dont have permission to view this document',
            });
        } else {
          response = res.status(201)
            .json({
              success: true,
              message: 'This is your document.',
              document,
            });
        }
      } else {
        response = res.status(201)
          .json({
            success: true,
            message: 'This is your document.',
            document,
          });
      }
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
          // ownerRoleId: document.ownerRoleId,
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
