import React, { Component } from "react";
import Header from "../../Header/header.js";
import { link } from "../home.json";

class GuildEidolons extends Component {
  render() {
    return (
      <div id="guildEidolons">
        <Header
          timerName="Guild Eidolons"
          timerColor={{ color: "#66b2ff" }}
          link={link}
        />
      </div>
    );
  }
}

export default GuildEidolons;
