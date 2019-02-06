import React, { Component } from "react";
import Header from "../../Header/header.js";
import { link } from "../home.json";
import Countdown from "../countdown.js";
import RaidTable from "./raidtable.js";
import List from "../list.js";
import raidTimes from "./raidtimes.js";

let i = 0;

class Skytower extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerMin: 0,
      timerHour: raidTimes[0].timerHour,
      timerDay: raidTimes[0].timerDay,
      id: raidTimes[0].id,
      timerBg: "88:88:88"
    };
    this.countdowntime = this.countdowntime.bind(this);
  }
  countdowntime() {
    i++;
    if (i > 23) {
      i = 0;
    }
    this.setState({
      timerHour: raidTimes[i].timerHour,
      timerDay: raidTimes[i].timerDay,
      id: raidTimes[i].id
    });
    console.log(i);
  }

  render() {
    return (
      <div id="skyTower">
        <Header
          timerName="Raids"
          timerColor={{ color: "#66b2ff" }}
          link={link}
        />
        <Countdown
          timerMin={this.state.timerMin}
          timerHour={this.state.timerHour}
          timerDay={this.state.timerDay}
          timerBg={this.state.timerBg}
          countdowntime={this.countdowntime}
        />
        <List />
        <RaidTable />
      </div>
    );
  }
}

export default Skytower;
