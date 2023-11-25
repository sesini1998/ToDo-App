import React, { FC } from 'react';
import { Task } from '../utils/api';

interface TaskItemProps {
  task: Task;
}

const TaskItem: FC<TaskItemProps> = ({ task }) => {
  return (
    <li>
      {task.title} - {task.completed ? 'Completed' : 'Pending'}
    </li>
  );
};

export default TaskItem;
