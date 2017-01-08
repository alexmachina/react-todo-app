const mongoose = require('mongoose');
      Schema = mongoose.Schema;

let userSchema = new Schema({
  'firstName': String,
  'lastName': String,
  'username': String,
  'password': String,
  'active' : Boolean
});

module.exports = mongoose.model('User', userSchema);
