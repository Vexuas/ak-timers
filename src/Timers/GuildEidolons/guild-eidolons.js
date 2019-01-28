import React, { Component } from "react";
import Header from "../../Header/header.js";
import { link } from "../home.json";
import Countdown from "../countdown.js";
import List from "../list.js";

class GuildEidolons extends Component {
  render() {
    return (
      <div id="guildEidolons">
        <Header
          timerName="Guild Eidolons"
          timerColor={{ color: "#66b2ff" }}
          link={link}
        />
        <Countdown timerDay={3} timerHour={17} timerBg="88:88:88" />
        <List />
      </div>
    );
  }
}

export default GuildEidolons;
