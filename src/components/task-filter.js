import React, { Component } from 'react';

export default class TasksFilter extends Component {
  state = {
    filter: [
      { key: 'All', select: false },
      { key: 'Active', select: false },
      { key: 'Completed', select: false },
    ],
  };

  onSelected = (key) => {
    this.props.onFilter(key);
    this.setState(({ filter }) => {
      const idx = filter.findIndex((el) => el.key === key);
      const newFilterItem = { ...filter[idx], select: true };
      const oldFilter = filter.map((el) => {
        return { ...el, select: false };
      });
      const newFilter = [...oldFilter.slice(0, idx), newFilterItem, ...oldFilter.slice(idx + 1)];
      return {
        filter: newFilter,
      };
    });
  };

  render() {
    const filterButton = this.state.filter.map(({ key, select }) => {
      let classNames = '';
      if (select) {
        classNames += 'selected';
      }
      return (
        <li key={key}>
          <button className={classNames} onClick={() => this.onSelected(key)}>
            {key}
          </button>
        </li>
      );
    });
    return <ul className="filters">{filterButton}</ul>;
  }
}
