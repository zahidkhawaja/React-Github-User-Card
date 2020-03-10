import React, { Component } from 'react';
import axios from "axios";

class Followers extends Component {
  constructor() {
    super();
    this.state = {
      followerData: []
    }
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/zahidkhawaja/followers")
      .then(response => this.setState({
        followerData: response.data
      }))
      .catch(error => console.log(error));

  }

  render() {
    return (
      <div className = "followercards">
        {this.state.followerData.map(follower => (
            <div className = "followers"> 
            <img src = {follower.avatar_url}/>
        <p>Username: {follower.login} </p>
            </div>
        ))}
      </div>
    )
  }
}

export default Followers;
