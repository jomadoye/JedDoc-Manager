{
  "name": "jeddoc-manager",
  "version": "1.0.0",
  "description": "Jed document manager",
  "main": "app.js",
  "scripts": {
    "start:dev": "nodemon --watch server --exec babel-node ./bin/www",
    "start": "nodemon ./server/app",
    "build": "babel server -d dist/server",
    "db:test:seed": "NODE_ENV=test babel-node ./server/test/utility/seeders/seedDatabase",
    "mocha:test": "NODE_ENV=test nyc --reporter=html --reporter=text mocha \"./**/server/test/**/*Spec.js\" --compilers js:babel-register --timeout 10000",
    "test": "NODE_ENV=test npm run db:test:seed && npm run mocha:test",
    "coverage": "nyc npm test && nyc report --reporter=text-lcov | coveralls"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/andela-jomadoye/JedDoc-Manager.git"
  },
  "keywords": [
    "document",
    "manager"
  ],
  "author": "Omadoye Jedidiah",
  "license": "MIT",
  "dependencies": {
    "bcrypt": "^1.0.2",
    "body-parser": "^1.17.1",
    "dotenv": "^4.0.0",
    "express": "^4.15.2",
    "jsonwebtoken": "^7.3.0",
    "mongoose": "^4.9.4",
    "morgan": "^1.8.1",
    "pg": "^6.1.5",
    "pg-hstore": "^2.3.2",
    "react": "^15.5.4",
    "react-dom": "^15.5.4",
    "react-router": "^4.1.1",
    "react-router-dom": "^4.1.1",
    "sequelize": "^3.30.4"
  },
  "devDependencies": {
    "babel-cli": "^6.24.1",
    "babel-eslint": "^7.2.2",
    "babel-loader": "^7.0.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-register": "^6.24.1",
    "chai": "^3.5.0",
    "chai-http": "^3.0.0",
    "coveralls": "^2.13.0",
    "eslint": "^3.19.0",
    "eslint-config-airbnb": "^14.1.0",
    "eslint-plugin-import": "^2.2.0",
    "eslint-plugin-jsx-a11y": "^4.0.0",
    "eslint-plugin-react": "^6.10.3",
    "expect": "^1.20.2",
    "faker": "^4.1.0",
    "mocha": "^3.2.0",
    "mocha-lcov-reporter": "^1.3.0",
    "nyc": "^10.2.0",
    "react-hot-loader": "^1.3.1",
    "supertest": "^3.0.0",
    "webpack": "^2.4.1",
    "webpack-dev-middleware": "^1.10.2",
    "webpack-hot-middleware": "^2.18.0"
  },
  "bugs": {
    "url": "https://github.com/andela-jomadoye/JedDoc-Manager/issues"
  },
  "homepage": "https://github.com/andela-jomadoye/JedDoc-Manager#readme"
}
