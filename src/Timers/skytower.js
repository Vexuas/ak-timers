import React, { Component } from "react";
import Header from "../Header/header.js";

class Skytower extends Component {
  render() {
    return (
      <div id="skyTower">
        <Header
          timerName="Raids"
          color={{ color: "white" }}
          timerColor={{ color: "#66b2ff" }}
        />
      </div>
    );
  }
}

export default Skytower;
