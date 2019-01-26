import React, { Component } from "react";
import Header from "../../Header/header.js";
import { link } from "../home.json";
import Countdown from "./raidcountdown.js";
import RaidTable from "./raidtable.js";

class Skytower extends Component {
  render() {
    return (
      <div id="skyTower">
        <Header
          timerName="Raids"
          timerColor={{ color: "#66b2ff" }}
          link={link}
        />
        <Countdown />
        <RaidTable />
      </div>
    );
  }
}

export default Skytower;
