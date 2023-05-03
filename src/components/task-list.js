import React from 'react';

import Task from './task';

const TaskList = ({ todos, onCheck, select, onDeleted, onEdit, editItem }) => {
  const elements = todos.map((el) => {
    const { id, completed, edit } = el;

    let classNames = '';

    if (completed) {
      classNames = 'completed';
    }

    if (select === 'Active' && completed) {
      classNames = ' hidden';
    }

    if (select === 'Completed' && !completed) {
      classNames = ' hidden';
    }

    if (edit) {
      classNames = ' editing';
    }

    return (
      <li key={id} className={classNames}>
        <Task {...el} onCheck={onCheck} select={select} onDeleted={onDeleted} onEdit={onEdit} editItem={editItem} />
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
