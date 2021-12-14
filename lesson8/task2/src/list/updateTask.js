import renderTasks from './renderer';
import { getTasksList, updateTask } from './tasksGateway';

export default function onToggleTask(event) {
  const taskId = event.target.dataset.id;
  const { text, createDate } = getTasksList().then((tasks) => {
    tasks.find((task) => task.id === taskId);
  });
  const done = event.target.checked;

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(updatedTask, taskId)
    .then(() => getTasksList())
    .then(() => {
      renderTasks();
    });
}
