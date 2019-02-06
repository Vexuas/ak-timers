import React, { Component } from "react";
import Header from "../../Header/header.js";
import { link } from "../home.json";
import Countdown from "../countdown.js";
import List from "../list.js";
import CardTable from "./cardtable.js";
import cardTimes from "./cardtimes.js";

let i = 0;

class CardRangers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerMin: 0,
      timerHour: cardTimes[0].timerHour,
      timerDay: cardTimes[0].timerDay,
      id: cardTimes[0].id,
      timerBg: "88:88:88"
    };
    this.countdowntime = this.countdowntime.bind(this);
  }
  countdowntime() {
    i++;
    if (i > 47) {
      i = 0;
    }
    this.setState({
      timerHour: cardTimes[i].timerHour,
      timerDay: cardTimes[i].timerDay,
      id: cardTimes[i].id
    });
    console.log(i);
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
          timerMin={this.state.timerMin}
          timerHour={this.state.timerHour}
          timerDay={this.state.timerDay}
          timerBg={this.state.timerBg}
          countdowntime={this.countdowntime}
        />
        <List />
        <CardTable />
      </div>
    );
  }
}

export default CardRangers;
