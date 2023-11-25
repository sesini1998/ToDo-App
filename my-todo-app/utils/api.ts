// utils/api.ts
import axios from 'axios';

export interface Task {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API || 'http://localhost:3001'; // Default to a local URL if not provided

export const getTasks = async (): Promise<Task[]> => {
  const response = await axios.get(`${API_BASE_URL}/tasks`);
  return response.data;
};

export const createTask = async (task: { title: string }): Promise<Task> => {
  const response = await axios.post(`${API_BASE_URL}/tasks`, task);
  return response.data;
};
