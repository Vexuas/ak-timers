import React, { Component } from "react";
import Header from "../../Header/header.js";
import { link } from "../home.json";
import Countdown from "../countdown.js";
import List from "../list.js";

class WorldBoss extends Component {
  render() {
    return (
      <div id="worldBoss">
        <Header
          timerName="World Boss"
          timerColor={{ color: "#66b2ff" }}
          link={link}
        />
        <Countdown timerDay={1} timerHour={17} timerBg="888:88:88" />
        <List />
      </div>
    );
  }
}

export default WorldBoss;
