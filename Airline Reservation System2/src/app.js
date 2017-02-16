'use strict';

var express = require('express');

var app = express();
app.use('/', express.static('public'));

app.get('/flights', function(req, res)
{
  res.send('These are flights!');
});

app.listen(3000, function()
{
  console.log("The server is up and running on port 3000!");
});
