import React from 'react';
import Header from './Components/Layout/Header'
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo'
import './App.css';
import 'uuid';
import uuid from 'uuid';

class App extends React.Component {
  state = {
    todos: []
  }
  //Toggle Complete
  markComplete = (id) => {
    this.setState( { todos: this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })} )
  }
  //Delete Todo
  delTodo = (id) => {
    this.setState( { todos: [...this.state.todos.filter((todo) => todo.id !== id)]})
  }
  //Add New Todo
  addTodo = (title, dueDate) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      dueDate: dueDate,
      completed: false
    }
    this.setState( { todos: [...this.state.todos, newTodo]})
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;