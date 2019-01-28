import React, { Component } from "react";
import Header from "../../Header/header.js";
import { link } from "../home.json";
import Countdown from "../countdown.js";
import RaidTable from "./raidtable.js";
import List from "../list.js";

class Skytower extends Component {
  render() {
    return (
      <div id="skyTower">
        <Header
          timerName="Raids"
          timerColor={{ color: "#66b2ff" }}
          link={link}
        />
        <Countdown timerDay={4} timerHour={10} timerBg="888:88:88" />
        <List />
        <RaidTable />
      </div>
    );
  }
}

export default Skytower;
