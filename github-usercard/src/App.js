import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Followers from "./components/Followers";

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
      <h2>Zahid Khawaja</h2>
      <div className = "user">
      <div className = "usercard">
        <img src = {this.state.userData.avatar_url}/>
        <p>Name: {this.state.userData.name}</p>
        <p>Username: {this.state.userData.login} </p>
        <p>Location: {this.state.userData.location}</p>
        <p>Followers: {this.state.userData.followers} </p>
      </div>
      </div>
      <h2>Followers</h2>
        <Followers />

      </div>
      </div>
    </div>
    )
  }
}

export default App;
