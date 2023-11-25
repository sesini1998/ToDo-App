// src/routes/task.ts
import express from 'express';
import { getAllTasks, createTask, updateTask, deleteTask, markAsCompleted } from '../controllers/task';

const router = express.Router();

router.get('/tasks', getAllTasks);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);
router.put('/tasks/:id/complete', markAsCompleted);

export default router;
