import React, { Component } from "react";
import Header from "../Header/header.js";
import { link } from "./home.json";

class WorldBoss extends Component {
  render() {
    return (
      <div id="worldBoss">
        <Header
          timerName="World Boss"
          timerColor={{ color: "#66b2ff" }}
          link={link}
        />
      </div>
    );
  }
}

export default WorldBoss;
