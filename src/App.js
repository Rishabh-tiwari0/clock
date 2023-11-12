import "./App.css";

import React, { Component } from "react";
import TimeClock from "./components/timeClock";

class App extends Component {
  // constructor() {}
  render() {
    return (
      <div>
        <h1>
          <TimeClock />
        </h1>
      </div>
    );
  }
}

export default App;
