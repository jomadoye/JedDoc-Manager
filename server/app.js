import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import Route from './routes';

require('dotenv')
  .config();

const app = express();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(express.static('dist/client'));

Route(app);
// Setup a default route that sends back a welcome message in JSON format.
app.get('/*', (req, res) => {
  res.status(200)
    .sendFile(
      path.join(__dirname, '../client/index.html'));
});
module.exports = app;
