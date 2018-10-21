// server.js
// where your node app starts
// require('dotenv').config();
var compression = require('compression');
var express = require('express');
var app = express();

// compress our client side content before sending it over the wire
app.use(compression());
// http://expressjs.com/en/starter/static-files.html
app.use('/',express.static('public'));
var listener = app.listen(process.env.PORT||12345, function () {
  console.info(`Node Version: ${process.version}`);
  console.log('Node Server listening on port ' + listener.address().port);
});
