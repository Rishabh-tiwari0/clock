import React, { Component } from "react";
import "./timeClock.css";

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
      <div className="rootcontainer">
        <div className="clockContainer">
          <h1 className="title">Time</h1>
          <p className="time">{this.state.date.toLocaleTimeString()}</p>
          <p className="date">{this.state.date.toLocaleDateString()}</p>
        </div>
      </div>
    );
  }
}
