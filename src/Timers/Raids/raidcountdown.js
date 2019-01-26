import React, { Component } from "react";
import "./raidcountdown.css";

let currentDay;

class RaidCountdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skyrealmT: 10,
      skyrealmD: 4,
      hour: null,
      minute: null,
      second: null
    };
  }
  componentDidMount() {
    setInterval(() => {
      const d = new Date();
      const day = this.state.skyrealmD; // 0-6, Thursday
      const countertime = new Date(
        d.getFullYear(),
        d.getMonth(),
        d.getDate(),
        this.state.skyrealmT,
        0,
        0
      ); //10 out of 24 hours = 10am
      //Server Time
      const utc = d.getTime() + d.getTimezoneOffset() * 60000;
      const offset = -5;
      const gameTime = utc + 3600000 * offset;
      //Countdown Time
      const countTime =
        countertime.getTime() + currentDay * 24 * 60 * 60 * 1000; //adding day to timer
      let diff = parseInt(countTime - gameTime);
      if (diff > 0) {
        currentDay = day - d.getDay();
      } else {
        currentDay = day - d.getDay() - 1; //after countdown time
      }
      if (currentDay < 0) {
        currentDay += 7; //switch to next week
      }
      if (diff <= 0) {
        diff += 86400 * 1000 * 7;
      }

      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      const minute = ("00" + minutes).substr(-2);
      const second = ("00" + seconds).substr(-2);
      this.setState({
        hour: hours,
        minute: minute,
        second: second
      });
    });
  }

  render() {
    return (
      <div className="raidTemplate">
        <div className="timerContainer">
          <div className="timerCountdown">
            {this.state.hour}:{this.state.minute}:{this.state.second}
          </div>
          <div className="timerBg">888:88:88</div>
        </div>
        <div className="raids">Ongoing/Upcoming</div>
      </div>
    );
  }
}

export default RaidCountdown;
