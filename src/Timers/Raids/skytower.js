import React, { Component } from "react";
import Header from "../../Header/header.js";
import { link } from "../home.json";
import Countdown from "../countdown.js";
import RaidTable from "./raidtable.js";
import List from "../list.js";

let i = 0;

class Skytower extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: "Loading",
      timerMin: 0,
      timerHour: 0,
      timerDay: 0,
      id: 0,
      timerBg: "Loading"
    };
    this.raidinfo = this.raidinfo.bind(this);
  }

  raidinfo() {
    fetch("http://localhost:3004/raidAPI")
      .then(response => response.json())
      .then(response => {
        let raids = response.raid;
        this.setState({
          timerHour: raids[i].timerHour,
          timerDay: raids[i].timerDay,
          timerMin: raids[i].timerMin
        });
      });
  }
  componentDidMount() {
    this.raidinfo();
    setInterval(() => {
      const current = new Date();
      const day = this.state.timerDay; // 0-6, Thursday
      //Server Time
      const utc = current.getTime() + current.getTimezoneOffset() * 60000;
      const offset = -5;
      const gameTime = utc + 3600000 * offset;
      const d = new Date(gameTime);
      const countertime = new Date(
        d.getFullYear(),
        d.getMonth(),
        d.getDate(),
        this.state.timerHour,
        this.state.timerMin,
        0
      ); //10 out of 24 hours = 10am
      //Countdown Time
      let currentDay = day - d.getDay();
      const countTime =
        countertime.getTime() + currentDay * 24 * 60 * 60 * 1000; //adding day to timer
      let diff = parseInt(countTime - gameTime);
      if (diff > 0) {
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        const hour = ("000" + hours).substr(-2);
        const minute = ("00" + minutes).substr(-2);
        const second = ("00" + seconds).substr(-2);
        const countdown = `${hour}:${minute}:${second}`;
        this.setState({
          countdown: countdown,
          timerBg: "88:88:88"
        });
      } else {
        this.setState({
          countdown: "Loading",
          timerBg: "Loading"
        });
        i++;
        this.raidinfo();
      }
    }, 20);
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
          timerBg={this.state.timerBg}
          countdown={this.state.countdown}
        />
        <List />
        <RaidTable />
      </div>
    );
  }
}

export default Skytower;
