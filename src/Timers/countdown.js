import React, { Component } from "react";
import "./countdown.css";

class Countdown extends Component {
  render() {
    return (
      <div className="timerTemplate">
        <div className="timerContainer">
          <div className="timerCountdown">{this.props.countdown}</div>
          <div className="timerBg">{this.props.timerBg}</div>
        </div>
      </div>
    );
  }
}

export default Countdown;
