const mongoose = require('mongoose');
      Schema = mongoose.Schema;

let taskSchema = new Schema({
  'desc': {type: String, required:true},
  'done' : Boolean
});

module.exports = mongoose.model('Task', taskSchema);
