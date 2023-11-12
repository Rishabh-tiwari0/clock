import React, { Component } from "react";

export default class TimeClock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    setInterval(this.tick, 1000);
  }
  tick = () => {
    this.setState({ date: new Date() });
  };
  render() {
    return (
      <div>
        <h1>Time</h1>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}
