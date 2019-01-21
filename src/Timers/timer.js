import React, { Component } from "react";
import "./timer.css";

class Timer extends Component {
  render() {
    return (
      <article>
        <a href={this.props.link}>
          <h1>{this.props.timerTitle}</h1>
          <img src={this.props.banner} alt={this.props.desc} />
        </a>
      </article>
    );
  }
}

export default Timer;
