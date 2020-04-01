import React, { Component } from "react";
import UserCardList from "./components/UserCardList";
class App extends Component {
  state = {
    userNameInput: "",
    userSaved: []
  };

  handleChange = event => {
    this.setState({
      userNameInput: event.target.value
    });
  };
  handleSubmit = async event => {
    event.preventDefault();

    const { userNameInput } = this.state;
    const pull = await fetch(`https://api.github.com/users/${userNameInput}`);
    const data = await pull.json();
    console.log(data);

    if (data.message !== "Not Found") {
      this.setState({
        userSaved: [...this.state.userNameInput, data],
        userName: ""
      });
    } else {
      this.setState({
        userName: "",
        data: ""
      });
    }
  };
  render() {
    const { userNameInput, userSaved } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>User Forms</label>
          <input
            type="text"
            value={userNameInput}
            placeholder="Which User"
            onChange={this.handleChange}
          />

          <button type="submit">Submit</button>
        </form>
        <div>
          <UserCardList users={userSaved} />
        </div>
      </div>
    );
  }
}

export default App;
