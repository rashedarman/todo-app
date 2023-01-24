import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleCompleted={this.props.handleCompleted}
            deleteTodo={this.props.deleteTodo}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
