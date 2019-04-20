const express = require('express')
const router = express.Router()
const tasksController = require('../controllers/tasksController')

router.get('/', tasksController.list_all_tasks)
router.post('/', tasksController.create_a_task)

router.get('/:taskId', tasksController.read_a_task)
router.put('/:taskId', tasksController.update_a_task)
router.delete('/:taskId', tasksController.delete_a_task)

module.exports = router
