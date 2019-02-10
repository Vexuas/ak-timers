import React, { Component } from "react";
import Header from "../../Header/header.js";
import { link } from "../home.json";
import Countdown from "../countdown.js";
import List from "../list.js";
import CardTable from "./cardtable.js";

let i = 0;

class CardRangers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: "00:00:00",
      timerMin: 0,
      timerHour: 0,
      timerDay: 0,
      id: 0,
      timerBg: "88:88:88"
    };
    this.cardinfo = this.cardinfo.bind(this);
  }

  cardinfo() {
    fetch("http://localhost:3004/cardAPI")
      .then(response => response.json())
      .then(response => {
        let cards = response.cardrangers;
        this.setState({
          timerHour: cards[i].timerHour,
          timerDay: cards[i].timerDay,
          timerMin: cards[i].timerMin
        });
      });
  }
  componentDidMount() {
    this.cardinfo();
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
        this.cardinfo();
      }
    }, 20);
  }
  render() {
    return (
      <div id="cardRangers">
        <Header
          timerName="Card Rangers"
          timerColor={{ color: "#66b2ff" }}
          link={link}
        />
        <Countdown
          timerBg={this.state.timerBg}
          countdown={this.state.countdown}
        />
        <List />
        <CardTable />
      </div>
    );
  }
}

export default CardRangers;
