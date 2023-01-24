import React from 'react';

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <button
          style={{
            display: 'inline-block',
            width: 'auto',
            fontSize: '0.8rem',
            margin: '10px',
            padding: '6px 8px',
          }}
          onClick={() => this.props.deleteTodo(this.props.todo.id)}
        >
          Delete
        </button>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.handleCompleted(this.props.todo.id)}
        />
        {this.props.todo.title}
      </li>
    );
  }
}

export default TodoItem;
