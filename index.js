const express = require('express');
const app = express();

app.use(express.static('app'));

app.listen(3000, err => err ? console.log(err) : console.log("Listening on port 3000"));
