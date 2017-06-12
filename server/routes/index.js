import controller from '../controllers';
import midddlewares from '../midddlewares';

const UsersController = controller.Users;
const DocumentsController = controller.Documents;
const SearchController = controller.Search;
const RolesController = controller.Roles;
const authenticate = midddlewares.authenticate;
const authorization = midddlewares.authorization;

const verifyToken = authenticate.verifyToken;
const isAdmin = authorization.isAdmin;
const isOwner = authorization.isOwner;

const Route = (app) => {
  app
    .route('/users/login')
    .post(UsersController.login);

  app
    .route('/users')
    .post(UsersController.create);

  app
    .route('/api/users/logout')
    .get(UsersController.logout);

  // apply the routes to our application with the prefix /api
  app.use('/api', verifyToken);

  // User routes
  app
    .route('/api/users')
    .get(isAdmin, UsersController.list);

  app
    .route('/api/users/:userId')
    .get(UsersController.retrieve)
    .put(isOwner, UsersController.update)
    .delete(isOwner, UsersController.destroy);

  // User-Document routes
  app
    .route('/api/users/:userId/documents')
    .post(isOwner, DocumentsController.create)
    .get(DocumentsController.getUserDocuments);

  // Documents routes
  app
    .route('/api/documents/:documentId')
    .get(DocumentsController.retrieve)
    .put(isOwner, DocumentsController.update)
    .delete(isOwner, DocumentsController.destroy);

  app
    .route('/api/documents')
    .get(DocumentsController.list)
    .post(DocumentsController.create);

  app
    .route('/documents')
    .get(DocumentsController.list);

  // Roles routes
  app
    .route('/api/roles')
    .get(isAdmin, RolesController.list)
    .post(isAdmin, RolesController.create);

  app
    .route('/api/roles/:roleId')
    .get(isAdmin, RolesController.retrieve)
    .delete(isAdmin, RolesController.destroy);

  app
    .route('/api/search/users')
    .get(isAdmin, SearchController.searchUsers);

  app
    .route('/api/search/documents')
    .get(SearchController.searchDocuments);

  app
    .route('/users/validate/:query')
    .get(UsersController.isUserExist);
};

export default Route;
