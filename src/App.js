import React, { Component } from "react";
import Todos from "./todos";
import AddTodos from "./addtodos";

export default class App extends Component {
  state = {
    todos: [
      {
        name: "Batman",
        id: 0
      },
      {
        name: "Captain America",
        id: 1
      },
      {
        name: "Ironman",
        id: 2
      }
    ]
  };
  addTodos = newTodo => {
    newTodo.id = this.state.todos[this.state.todos.length - 1].id + 1;
    let todos = [...this.state.todos, newTodo];
    this.setState({
      todos: todos
    });
  };
  deleteTodos = id => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos
    });
  };
  render() {
    return (
      <div>
        <h1>List of Supes</h1>
        <AddTodos addTodos={this.addTodos}></AddTodos>
        <Todos deleteTodos={this.deleteTodos} todos={this.state.todos}></Todos>
      </div>
    );
  }
}
