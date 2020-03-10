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
      <div className = "main">

      <div className = "App-body">
      <h1>Zahid Khawaja</h1>
      <div className = "user">
      <div className = "usercard">
        <img src = {this.state.userData.avatar_url}/>
        <h3>{this.state.userData.name}</h3>
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
