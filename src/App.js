import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

export default class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play mario kart" }
    ]
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos
    });
  };

  addTodo = todo => {
    todo.id = Math.random();
    this.setState({
      todos: [...this.state.todos, todo]
    });
  };

  updateTodo(id, title) {
    let todos = [...this.state.todos];
    let index = todos.findIndex(obj => obj.id === id);
    todos[index].content = title;
    this.setState({ todos });
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          updateTodo={this.updateTodo}
        />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}
