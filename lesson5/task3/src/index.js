/* eslint-disable prettier/prettier */

import { initTodoListHandlers } from './list/todoList.js';
import { renderTasks } from './list/renderer.js';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();

  initTodoListHandlers();
});

/* 
1.Get data from server
2.Save data to front-end storage
*/
