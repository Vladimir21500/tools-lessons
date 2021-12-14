import initTodoListHandlers from './list/todoList';
import renderTasks from './list/renderer';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();

  initTodoListHandlers();
});

/*
1.Get data from server
2.Save data to front-end storage
*/
