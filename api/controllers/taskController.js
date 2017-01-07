let taskModel = require('../models/task');

class taskController {
  addTask(req, res) {
    let task = new taskModel(req.body);
    task
      .save()
      .then(() => res.send())
      .catch(err => res.status(500).send(err));
  }

  getAllTasks(req, res) {
    taskModel
      .find({})
      .exec()
      .then(tasks => res.json(tasks))
      .catch(err => res.status(500).send(err));
  }

  updateTask(req, res) {
    taskModel.findByIdAndUpdate(req.params.id, {$set: req.body}, (err) => {
      if (err) return res.status(500).send(err);
      res.send();
    })
  }

  deleteTask(req, res) {
    taskModel.remove({'_id' : req.params.id}, (err) => {
      if(err) 
        return res.status(500).send(err);
      return res.send();
    })
  }
}

module.exports = new taskController();
