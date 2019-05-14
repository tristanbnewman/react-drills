import React, { Component } from "react";
import "./App.css";
import Todo from './components/Todo';

class App extends Component {
  constructor(){
    super()
    this.state={
      userInput: '',
      taskList: ['Save the world','Buy egos','Defeat the Demogorgon']
    }
  }

  addItem = () =>{
    let result = this.state.taskList

    result.push(this.state.userInput)
    this.setState({taskList: result})
    this.setState({userInput: ''})
    document.getElementById('input').value =''
  }

  render() {

    const todoList = this.state.taskList.map((task,index)=>{
        return <div key={index} >{task}</div>
      })

    return (
      <div className="App">
        <h1>My to-do list</h1>
        <input id='input' onChange={(e)=> this.setState({userInput: e.target.value})}></input>
        <button onClick={this.addItem}>Add task</button>
        {todoList}
      </div>
    );
  }
}

export default App;
