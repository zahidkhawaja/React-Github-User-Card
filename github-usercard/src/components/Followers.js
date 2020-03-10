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
      <div>
          <h2>Followers</h2>
        {this.state.followerData.map(follower => (
            <p>{follower.login}</p>
        ))}
      </div>
    )
  }
}

export default Followers;
