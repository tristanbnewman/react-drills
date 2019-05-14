import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state={
      userInput: ''
    }
  }

  changeHandler(val){
    this.setState({userInput: val})
  }

  render() {
    return (
      <div className="App">
        <input onChange={e=>this.changeHandler(e.target.value)}></input>
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
