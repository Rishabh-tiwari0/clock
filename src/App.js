import "./App.css";

import React, { Component } from "react";
import TimeClock from "./components/timeClock";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showClock: true };
  }
  render() {
    return (
      <div className="appWrapper">
        <button
          id="btn"
          onClick={() => {
            this.setState({ showClock: !this.state.showClock });
          }}
        >
          {this.state.showClock ? "Hide time" : "Show Time"}
        </button>
        <h1>{this.state.showClock && <TimeClock />}</h1>
      </div>
    );
  }
}

export default App;
