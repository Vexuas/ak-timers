import React, { Component } from "react";
import Header from "../../Header/header.js";
import { link } from "../home.json";
import Countdown from "../countdown.js";
import List from "../list.js";
import CardTable from "./cardtable.js";

class CardRangers extends Component {
  render() {
    return (
      <div id="cardRangers">
        <Header
          timerName="Card Rangers"
          timerColor={{ color: "#66b2ff" }}
          link={link}
        />
        <Countdown timerDay={2} timerHour={17} timerBg="88:88:88" />
        <List />
        <CardTable />
      </div>
    );
  }
}

export default CardRangers;
