import React, { Component } from "react";
import Image from './components/Image';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image 
        image='https://via.placeholder.com/140x100'/>
      </div>
    );
  }
}

export default App;
