import React, { Component } from "react";
import Header from "../Header/header.js";
import Timers from "./timers.js";

class Home extends Component {
  render() {
    return (
      <div>
        <Header timerName="Home" color={{ color: "#66b2ff" }} />
        <Timers />
      </div>
    );
  }
}

export default Home;
