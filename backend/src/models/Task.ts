import { Schema, model, Document, Model } from 'mongoose';

interface ITask {
  title: string;
  description?: string;
  completed: boolean;
}

interface ITaskDocument extends ITask, Document {}

interface ITaskModel extends Model<ITaskDocument> {}

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  completed: { type: Boolean, default: false },
});

const Task = model<ITaskDocument, ITaskModel>('Task', taskSchema);

export default Task;
