import express from 'express';
import Task, { ITask } from '../models/Task';

export const getAllTasks = async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const tasks: ITask[] = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createTask = async (req: express.Request, res: express.Response): Promise<void> => {
  const { title, description } = req.body;
  try {
    const newTask: ITask = new Task({ title, description });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateTask = async (req: express.Request, res: express.Response): Promise<void> => {
  const taskId: string = req.params.id;
  const { title, description, completed } = req.body;

  try {
    const updatedTask: ITask | null = await Task.findByIdAndUpdate(
      taskId,
      { title, description, completed },
      { new: true } // Return the modified document
    );

    if (updatedTask) {
      res.status(200).json(updatedTask);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteTask = async (req: express.Request, res: express.Response): Promise<void> => {
  const taskId: string = req.params.id;

  try {
    const deletedTask: ITask | null = await Task.findByIdAndDelete(taskId);

    if (deletedTask) {
      res.status(200).json(deletedTask);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const markAsCompleted = async (req: express.Request, res: express.Response): Promise<void> => {
  const taskId: string = req.params.id;

  try {
    const updatedTask: ITask | null = await Task.findByIdAndUpdate(
      taskId,
      { completed: true },
      { new: true } // Return the modified document
    );

    if (updatedTask) {
      res.status(200).json(updatedTask);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
