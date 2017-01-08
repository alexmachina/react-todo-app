let userModel = require('../models/user');

class userController{

  addUser(req, res) {
    let user = new userModel(req.body);
    let save = user.save();

    save.then(() => res.send());
    save.catch(err => res.status(500).send(err));

  }
  getUser(req, res) {
    let _id = req.params.id;

    let getUser = userModel.findById(_id).exec();

    getUser.then(user => res.json(user));
    getUser.catch(err => res.status(500).send(err));

  }

  getUsers(req, res) {
    let getUsers = userModel.find({}).exec();

    getUsers.then(users => res.json(users));
    getUsers.catch(err => res.status(500).send(err));

  }
  updateUser(req, res) {
    userModel.findByIdAndUpdate(req.params.id, {$set: req.body}, (err) => {
      if(err)
        return res.status(500).send(err);
      res.send();
    });

  }
  deleteUser(req, res) {}

}

module.exports = new userController();
