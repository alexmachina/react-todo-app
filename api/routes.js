let express = require('express'),
    router = express.Router(),
    taskController = require('./controllers/taskController'),
    userController = require('./controllers/userController');

router.get('/tasks', taskController.getAllTasks);
router.post('/task', taskController.addTask);
router.put('/task/:id', taskController.updateTask);
router.delete('/task/:id', taskController.deleteTask);

router.get('/user', userController.getUsers);
router.get('/user/:id', userController.getUser);
router.post('/user', userController.addUser);
router.put('/user/:id', userController.updateUser);


module.exports = router;
