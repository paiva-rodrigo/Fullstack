const express = require('express');
const taskController = require('./controllers/tasksController');
const taskMiddleware = require('./midlewares/tasksModlewares');

const router = express.Router();
router.get('/tasks', taskController.getAll);
router.post('/tasks',taskController.createTask);
router.delete('/tasks/:id',taskController.deleteTask);
router.put('/tasks/:id',
taskMiddleware.validateFieldBody,
taskMiddleware.validateFieldStatus,
taskController.updatedTask);

module.exports = router;