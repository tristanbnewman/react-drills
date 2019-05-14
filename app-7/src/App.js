import React, { Component } from "react";
import "./App.css";
import Todo from './components/Todo';
import NewTask from './components/NewTask';
import List from './components/List';

class App extends Component {
  constructor(){
    super()
    this.state={
      userInput: '',
      taskArray: ['Save the world','Buy egos','Defeat the Demogorgon']
    }
  }

  updateList = ()=>{
    let result = this.state.taskArray

    result.push(this.state.userInput)
    this.setState({taskList: result})
    this.setState({userInput: ''})
    document.getElementById('input').value =''
    console.log(result)
  }

  updateInput = e => {
    this.setState({userInput: e.target.value})
    console.log(e.target.value)
    console.log(this.state.userInput)
  }

  render() {

    return (
      <div className="App">
        <h1>My to-do list</h1>
        <NewTask updateList={this.updateList} updateInput={this.updateInput} />
        <List taskArray={this.state.taskArray}/>
      </div>
    );
  }
}

export default App;
