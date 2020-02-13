import React, { Component } from 'react';

import TodoList from './components//TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import "./components/TodoComponents/Todo.css"


const list = [
  {
    todo: 'Clean the house',
    id: 1,
    comppleted: false
  },
  {
    todo: 'Make a dinner',
    id: 12,
    comppleted: false
  },
  {
    todo: 'Pay bills',
    id: 123,
    comppleted: false
  },
  {
    todo: 'Buy groceries',
    id: 1234,
    comppleted: false
  }
]

class App extends Component {

   constructor() {
     super();
     this.state = {
       list
     };
   }

   addTask = (e, task) => {
     e.preventDefault();

     const newTask = {
       todo: task,
       id: Date.now(),
       completed: false
     };

     this.setState({
       list: [...this.state.list, newTask]
     });
    }

    toggleTask = taskId => {
      console.log(taskId);

      this.setState({
        list: this.state.list.map(task => {
          console.log(task);
          if (taskId === task.id) {
            return {
              ...task,
              completed: !task.completed
            };
          }

          return task;
        })
      });  
    };

    clearCompleted = e => {
      e.preventDefault();
      console.log(this.state.list);
      this.setState({
        list: this.state.list.filter(task => task.completed !== true)
      });
      console.log(this.state.list);
    };

    render() {
      console.log('rendering...');
      return (
        <div className="App">
          <div className='header'>
            <h1>TODOS</h1>
            <TodoForm addTask={this.addTask} />
          </div>
          <TodoList
            list={this.state.list}
            toggleTask={this.toggleTask}
            clearCompleted={this.clearCompleted}
          />
        </div>
      )
    }
}

export default App;
