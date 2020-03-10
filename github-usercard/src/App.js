import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: []
    }
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/zahidkhawaja")
      .then(response => this.setState({
        userData: response.data
      }))
      .catch(error => console.log(error));

  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>GitHub User Card</h1>
      </header>
      <div className = "App-body">
        <p>Username: {this.state.userData.login} </p>
        <p>Link: {this.state.userData.url}</p>
        <p>Followers: {this.state.userData.followers} </p>
      </div>
    </div>
    )
  }
}

export default App;
