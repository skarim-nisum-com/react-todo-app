import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateTodo from './create-todo';
import TodosList from './todos-list';

const todos =
  {
    task: 'do h.w',
    isCompleted: false
  };

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      todos: todos
    };
  }
  
  render() {
    return (
      <div>
        <h1>React ToDos App</h1>
        <CreateTodo createTask={this.createTask.bind(this)} />
        <TodosList todos={this.state.todos} />
      </div>
    );
  }

  CreateTask() {
    this.state.todos.push({
      task, //task: task
      isCompleted: false
    });
    this.setState({ todos: this.state.todos }); //this will re-render the page
  }
}

export default App;
