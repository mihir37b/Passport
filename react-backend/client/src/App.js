import "./App.css";
import React from "react";
import axios from "axios";
import Google from "./Google";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = { users: [] };
  }
  componentDidMount() {
    axios.get("/users").then((res) => this.setState({ users: res.data }));
  }
  render() {
    return (
      <div className="App">
        <Google />
        <h1>Users</h1>
        {this.state.users.map((user) => (
          <div key={user.id}>
            {user.id}:{user.username}
          </div>
        ))}
      </div>
    );
  }
}
