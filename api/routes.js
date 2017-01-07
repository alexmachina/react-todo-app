let express = require('express'),
    router = express.Router(),
    taskController = require('./controllers/taskController');

router.get('/tasks', taskController.getAllTasks);
router.post('/task', taskController.addTask);
router.put('/task/:id', taskController.updateTask);
router.delete('/task/:id', taskController.deleteTask);

module.exports = router;
