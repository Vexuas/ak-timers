import React, { Component } from "react";
import "./countdown.css";

let currentDay;

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: null,
      minute: null,
      second: null
    };
  }
  componentDidMount() {
    setInterval(() => {
      const current = new Date();
      const day = this.props.timerDay; // 0-6, Thursday
      //Server Time
      const utc = current.getTime() + current.getTimezoneOffset() * 60000;
      const offset = -5;
      const gameTime = utc + 3600000 * offset;
      const d = new Date(gameTime);
      const countertime = new Date(
        d.getFullYear(),
        d.getMonth(),
        d.getDate(),
        this.props.timerHour,
        this.props.timerMin,
        0
      ); //10 out of 24 hours = 10am
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
        currentDay = day - d.getDay();
      }
      if (diff <= 0) {
        this.props.countdowntime();
      }
      //Countdown timer
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      const hour = ("000" + hours).substr(-2);
      const minute = ("00" + minutes).substr(-2);
      const second = ("00" + seconds).substr(-2);
      this.setState({
        hour: hour,
        minute: minute,
        second: second
      });
    });
  }
  render() {
    return (
      <div className="timerTemplate">
        <div className="timerContainer">
          <div className="timerCountdown">
            {this.state.hour}:{this.state.minute}:{this.state.second}
          </div>
          <div className="timerBg">{this.props.timerBg}</div>
        </div>
      </div>
    );
  }
}

export default Countdown;
