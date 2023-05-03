import React from 'react';

import TasksFilter from './task-filter';

const Footer = ({ todoCount, clearCompleted, onFilter }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{todoCount} items left</span>
      <TasksFilter onFilter={onFilter} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
