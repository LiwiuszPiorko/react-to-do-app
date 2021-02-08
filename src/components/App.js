import React, { Component } from 'react'
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';


class App extends Component {
  counter = 0;
  state = {
    tasks:[
    ]
  }
  deleteTask = (id) =>{
    console.log("Skasowany komponent o id" + id);
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task=>task.id===id);
    tasks.splice(index, 1)

    this.setState({
      tasks
    })
  }
  changeTaskStatus = (id) =>{
    console.log("Zmieniony komponent o id" + id);
    const tasks = [...this.state.tasks];
    tasks.forEach(task=>{
      if(task.id===id){
        task.active=false;
        task.finishDate = new Date().getTime();
      }
    })
    this.setState({
      tasks
    })
  }
  addTask = (text, date, important) =>{
    console.log("Działa!");
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null
    }
    this.counter ++

    this.setState(prevState =>({
      tasks: [...prevState.tasks, task]
    }))
    return true
  }
  
  render(){
    return (
      <div className="App">
          <h1>Lista zadań:</h1>
          <AddTask add={this.addTask} />
          <TaskList tasks = {this.state.tasks} delete = {this.deleteTask} change = {this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
