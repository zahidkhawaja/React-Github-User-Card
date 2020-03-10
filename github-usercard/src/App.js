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
        <h1>GitHub Data</h1>
      </header>

      <div className = "main">

      <div className = "App-body">

      <div className = "usercard">
        <p>Name: {this.state.userData.name}</p>
        <p>Username: {this.state.userData.login} </p>
        <p>Location: {this.state.userData.location}</p>
        <p>Followers: {this.state.userData.followers} </p>
      </div>

      <div className = "followers">
        <p>Follower 1 </p>
        <p>Followers 2 </p>
        <p>Followers 3</p>
        <p>Followers 4</p>
      </div>

      </div>
      </div>
    </div>
    )
  }
}

export default App;
