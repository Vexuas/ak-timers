import React, { Component } from "react";
import Header from "../../Header/header.js";
import { link } from "../home.json";
import Countdown from "../countdown.js";
import List from "../list.js";

class FishKing extends Component {
  render() {
    return (
      <div id="fishKing">
        <Header
          timerName="Fish Kings"
          timerColor={{ color: "#66b2ff" }}
          link={link}
        />
        <Countdown timerDay={5} timerHour={17} timerBg="888:88:88" />
        <List />
      </div>
    );
  }
}

export default FishKing;
