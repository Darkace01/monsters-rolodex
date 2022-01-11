import React, { Component } from "react";
import "./App.css";

//Components
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }
  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search Monsters"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
