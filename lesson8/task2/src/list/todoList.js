import onCreateTask from './createTask';
import onToggleTask from './updateTask';
import onDeleteTask from './deleteTask';

const handleListClick = (event) => {
  const isDeleteButton = event.target.classList.contains(
    'list-item__delete-btn',
  );

  if (isDeleteButton) {
    onDeleteTask(event);
  }

  const isCheckbox = event.target.classList.contains('list-item__checkbox');

  if (isCheckbox) {
    onToggleTask(event);
  }
};

export default function initTodoListHandlers() {
  const buttonElem = document.querySelector('.create-task-btn');
  buttonElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', handleListClick);
}
