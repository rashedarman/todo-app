import React from 'react';
import Header from './Header';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: 2,
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: 3,
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

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <TodoInput />
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
