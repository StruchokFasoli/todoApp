import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';

export default class Task extends Component {
  state = {
    createDate: new Date(),
    lessDate: '0 second',
    edit: '',
  };

  date = () => {
    this.setState(({ createDate }) => {
      const date = formatDistanceToNow(createDate);

      return {
        lessDate: date,
      };
    });
  };

  onChange = (e) => {
    this.setState({
      edit: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.editItem(this.state.edit, this.props.id);
    this.props.onEdit(this.props.id);
    this.setState({
      edit: '',
    });
  };

  render() {
    const { label, id, onDeleted, completed, onCheck, onEdit } = this.props;

    let checked = false;

    if (completed) {
      checked = true;
    }

    setInterval(this.date, 30000);

    return (
      <div>
        <div className="view">
          <input className="toggle" type="checkbox" checked={checked} onChange={() => onCheck(id)} />
          <label>
            <span className="description">{label}</span>
            <span className="created">created {this.state.lessDate} ago</span>
          </label>
          <button className="icon icon-edit" onClick={() => onEdit(id)}></button>
          <button className="icon icon-destroy" onClick={() => onDeleted(id)}></button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input type="text" className="edit" value={this.state.edit} onChange={this.onChange} />
        </form>
      </div>
    );
  }
}
