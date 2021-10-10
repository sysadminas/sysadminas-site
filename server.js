const http = require('http');
const express = require('express');
const router = express.Router();

const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static("app"));

// default URL for website
app.use('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/app/index.html'));
  //__dirname : It will resolve to your project folder.
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);

console.debug('Server listening on port ' + port);