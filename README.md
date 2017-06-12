[![Known Vulnerabilities](https://snyk.io/test/github/andela-jomadoye/jeddoc-manager/badge.svg)](https://snyk.io/test/github/andela-jomadoye/jeddoc-manager)    [![Dependencies](https://david-dm.org/andela-jomadoye/JedDoc-Manager.svg)](https://api.travis-ci.org/andela-jomadoye/JedDoc-Manager)
[![Dependencies](https://api.travis-ci.org/andela-jomadoye/JedDoc-Manager.svg?branch=feedback)](https://api.travis-ci.org/andela-jomadoye/JedDoc-Manager)  [![Coverage Status](https://coveralls.io/repos/github/andela-jomadoye/JedDoc-Manager/badge.svg?branch=feedback)](https://coveralls.io/github/andela-jomadoye/JedDoc-Manager?branch=feedback) 
[![Code Climate](https://codeclimate.com/github/andela-jomadoye/JedDoc-Manager/badges/gpa.svg)](https://codeclimate.com/github/andela-jomadoye/JedDoc-Manager) [![Test Coverage](https://codeclimate.com/github/andela-jomadoye/JedDoc-Manager/badges/issue_count.svg)](https://codeclimate.com/github/andela-jomadoye/JedDoc-Manager) [![CircleCI](https://circleci.com/gh/andela-jomadoye/JedDoc-Manager.svg?style=svg)](https://circleci.com/gh/andela-jomadoye/JedDoc-Manager)


About the Application
-------------
This is a Document Management System, with user and documents roles and privileges. Each document has access levels, the document defines which users can access it. 
Also, each document specifies the date it was published, when it was last updated, and the author who published it.

### **API Features**

The following features make up the Document Management System API:

##### Authentication
- It uses JSON Web Token (JWT) for authentication.  
- It generates a token upon successul login.   
- It verifies the token to ensures a user is authenticated to access protected endpoints.

##### Users
- It allows users to be created.  
- It allows users to login and obtain a token  
- It allows authenticated users to retrieve and edit their information only.   
- All users can be retrieved, modified and deleted by the admin user.

##### Roles
- It ensures that users have roles.   
- It ensures user roles could be `admin`, `tester` or `regular`, or as created by the admin .   
- It ensures roles can be created, retrieved and deleted by an admin user. 
- A non-admin user cannot create, retrieve, modify, or delete roles.  

##### Documents
- It allows new documents to be created by authenticated users.  
- It ensures all documents have access roles defined as `public`, `role` or `private`.  
- It allows admin users to create, retrieve, modify, and delete all documents.
- It allows `private` access documents to be retrieved by its owners.    
- It ensures users can delete, edit and update documents that they own.   
- It allows users to retrieve all documents they own.
- It allows users to set a access for any document they create.   


##### Search
- It allows users to search `public` and `role` documents that belong to other users (as well as documents that belong to the user).
- It allows admin to retrieve all documents that matches search term, be it `public`, `role` or `private`.


Local Development
--------------
Document Mnagement System requires [Node.js](https://nodejs.org/) v6+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/andela-jomadoye/JedDoc-Manager.git
$ cd JedDoc-Manager
$ npm install
$ Rename `.env Sample` to `.env` and add the required DATABASE URL, also add the DATABASE_TEST_URL for testing.
$ Create Postgresql database and run migrations npm run db:migrate.
$ Start the express server `npm start`.
$ Run the test with `npm test`.
```

#### Limitations:
The limitations to the Document Management System API are as follows:

* Users can only create plain textual documents and retrieve same when needed. 
* Users cannot share documents with people, but can make document `public` to make it available to other users.
* Users login and obtain a token which is verified on every request, but users cannot logout (nullify the token), however tokens become invalid when it expires (after 1 day).

#### Api Documentation
View full API documentation [here](https://andela-jomadoye.github.io/slate/#introduction)

#### _**Contributing**_
1. Fork this repository to your GitHub account
2. Clone the forked repository and cd into it
3. Create a .env file in the root of the project using the sample .env.sample in the root directory

5. Install all dependencies by running this command below in your terminal/shell
    ````
    npm install
    ````
6. Run the command below in your terminal/shell (initializes and seeds the database tables)
    ```` 
    npm db:migrate
    npm db:seed
    ````
7. To run the development server enter the command below in your terminal/shell
    ````
    npm run start
    ````
8. Run the tests via `npm test` to get familliar with the features of the code base
8. Create your feature branch
9. Commit your changes
10. Push to the remote branch
11. Open a Pull Request
