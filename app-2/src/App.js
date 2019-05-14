import React, { Component } from "react";
import "./App.css";

class App extends Component {

  constructor(){
    super()
    this.state={
      strings: ['Tristan', 'John', 'Tom', 'Chris']
    }
  }

  render() {

    const strings = {
      this.state.strings.map((string)=>{
        <h2>string</h2>
      })
    }

    return (
      <div className="App">
        {strings}
      </div>
    );
  }
}

export default App;
