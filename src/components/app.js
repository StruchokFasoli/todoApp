import React, { Component } from 'react';

import AppHeader from './app-header';
import TaskList from './task-list';
import Footer from './footer';

export default class App extends Component {
  count = 100;

  state = {
    todoData: [],
    select: '',
  };

  createItem(text) {
    return { label: text, completed: false, id: this.count++, edit: false };
  }

  addItem = (text) => {
    this.setState(({ todoData }) => {
      const newItem = this.createItem(text);
      const newData = [...todoData, newItem];
      return {
        todoData: newData,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newData = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newData,
      };
    });
  };

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const completedData = todoData.filter((el) => !el.completed);
      return {
        todoData: completedData,
      };
    });
  };

  onCheck = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...todoData[idx], completed: !oldItem.completed };
      const newData = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
      return {
        todoData: newData,
      };
    });
  };

  onFilter = (key) => {
    this.setState({
      select: key,
    });
  };

  onEdit = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...todoData[idx], edit: !oldItem.edit };
      const newData = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
      return {
        todoData: newData,
      };
    });
  };

  editItem = (label, id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newItem = { ...todoData[idx], label: label };
      const newData = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
      return {
        todoData: newData,
      };
    });
  };

  render() {
    const { todoData, select } = this.state;
    const todoCount = todoData.filter((el) => !el.completed).length;
    return (
      <section className="todoapp">
        <AppHeader addItem={this.addItem} />
        <section className="main">
          <TaskList
            todos={todoData}
            select={select}
            onDeleted={this.deleteItem}
            onCheck={this.onCheck}
            onEdit={this.onEdit}
            editItem={this.editItem}
          />
          <Footer todoCount={todoCount} clearCompleted={this.clearCompleted} onFilter={this.onFilter} />
        </section>
      </section>
    );
  }
}
