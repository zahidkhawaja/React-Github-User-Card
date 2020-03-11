import React, { Component } from 'react';
import axios from "axios";

class Followers extends Component {
  constructor() {
    super();
    this.state = {
      followerData: []
    }
  }

  componentDidUpdate() {
    axios.get(`https://api.github.com/users/${this.props.username}/followers`)
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
            <img className = "avatar" src = {follower.avatar_url} alt = "avatar"/>
            <h3><a href = {`https://github.com/${follower.login}`}>{follower.login}</a></h3>
        <img className = "graph" src = {`http://ghchart.rshah.org/${follower.login}`} alt = "chart"/>
            </div>
        ))}
      </div>
    )
  }
}

export default Followers;
