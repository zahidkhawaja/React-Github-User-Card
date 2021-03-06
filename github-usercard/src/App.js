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
        userData: response.data,
        fieldText: ""
      }))
      .catch(error => console.log(error));

  }

  handleChanges = e => {
    this.setState({
      fieldText: e.target.value
    });
  }

  getUser = e => {
    e.preventDefault();

    axios.get(`https://api.github.com/users/${this.state.fieldText}`)
      .then(response => this.setState({
        userData: response.data,
        fieldText: ""
      }))
      .catch(error => console.log(error));

  }

  render() {
    return (
      <div className="App">
        <input type = "search" value = {this.state.fieldText} onChange = {this.handleChanges} placeholder = "Enter GitHub username" />
      <button onClick = {this.getUser}> Search </button>
      <div className = "main">
      <div className = "App-body">
      <h1>{this.state.userData.name}</h1>
      <div className = "user">
      <div className = "usercard">
        <img className = "avatar" src = {this.state.userData.avatar_url} alt = "avatar"/>
        <h3><a href = {`https://github.com/${this.state.userData.login}`}>{this.state.userData.name}</a></h3>
        <p>Username: {this.state.userData.login} </p>
        <p>Location: {this.state.userData.location}</p>
        <p>Followers: {this.state.userData.followers} </p>
        <img className = "graph" src = {`http://ghchart.rshah.org/${this.state.userData.login}`} alt = "chart"/>
      </div>
      </div>
      <h2>Followers</h2>
        <Followers username = {this.state.userData.login} />

      </div>
      </div>
    </div>
    )
  }
}

export default App;
