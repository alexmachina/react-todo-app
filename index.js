const express = require('express'),
      app = express(),
      router = require('./api/routes.js'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}));
app.use('/', router);

  app.use(express.static('app'));

mongoose.connect('mongodb://localhost/tasks');

app.listen(3000, err => err ? console.log(err) : console.log("Listening on port 3000"));
