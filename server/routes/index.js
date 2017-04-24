import controller from '../controllers';
import auth from '../midddlewares';

const usersController = controller.users;
const documentsController = controller.documents;
const searchController = controller.search;
const authenticate = auth.authenticate;


const verifyToken = authenticate.verifyToken;
const isAdmin = authenticate.isAdmin;
const isAdminOrOwner = authenticate.isAdminOrOwner;

const Route = (app) => {
  app
    .route('/users/login')
    .post(usersController.login);

  app
    .route('/users')
    .post(usersController.create);

  app
    .route('/api/users/logout')
    .get(usersController.logout);

  // apply the routes to our application with the prefix /api
  app.use('/api', verifyToken);

  // User routes
  app
    .route('/api/users')
    .get(isAdmin, usersController.list);

  app
    .route('/api/users/:userId')
    .get(usersController.retrieve)
    .put(isAdminOrOwner, usersController.update)
    .delete(isAdminOrOwner, usersController.destroy);

  // User-Document routes
  app
    .route('/api/users/:userId/documents')
    .post(isAdminOrOwner, documentsController.create)
    .get(isAdminOrOwner, documentsController.getUserDocuments);

  app
    .route('/api/users/:userId/documents/:documentId')
    .put(isAdminOrOwner, documentsController.update)
    .delete(isAdminOrOwner, documentsController.destroy);

  // Documents routes
  app
    .route('/api/documents/:documentId')
    .get(isAdminOrOwner, documentsController.retrieve)
    .put(isAdminOrOwner, documentsController.update)
    .delete(isAdminOrOwner, documentsController.destroy);

  app
    .route('/api/documents')
    .get(isAdmin, documentsController.list)
    .post(documentsController.create);

  // Search routes
  app
    .route('/api/search/users/:username')
    .get(isAdmin, searchController.searchUsers);

  app
    .route('/api/search/documents/:documentTitle')
    .get(searchController.searchDocuments);
};

export default Route;
