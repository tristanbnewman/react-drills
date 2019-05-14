import React, { Component } from "react";
import "./App.css";

class Login extends Component {

  constructor(){
    super()
    this.state={
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div className="App">
        <input onChange={e=>this.setState({username: e.target.value})}></input>
        <input onChange={e=>this.setState({password: e.target.value})}></input>
        <button onClick={()=>{alert('Username: '+this.state.username +' '+'Password: '+this.state.password)}}>Login</button>
      </div>
    );
  }
}

export default Login;
