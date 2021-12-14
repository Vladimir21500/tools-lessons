import renderTasks from './renderer';
import { deleteTask, getTasksList } from './tasksGateway';

export default function onDeleteTask(event) {
  const taskId = event.target.dataset.id;
  deleteTask(taskId).then(getTasksList).then(renderTasks);
}
