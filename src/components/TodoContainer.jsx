import { nanoid } from 'nanoid';
import React from 'react';
import Header from './Header';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: nanoid(),
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: nanoid(),
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: nanoid(),
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  };

  handleCompleted = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  addTodo = (title) => {
    const newTodo = {
      id: nanoid(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <TodoInput addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          handleCompleted={this.handleCompleted}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}
export default TodoContainer;
