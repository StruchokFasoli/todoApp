import React from 'react';

import NewTaskForm from './new-task-form';

const AppHeader = ({ addItem }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm addItem={addItem} />
    </header>
  );
};

export default AppHeader;
