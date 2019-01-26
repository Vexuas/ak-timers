import React, { Component } from "react";
import Header from "../../Header/header.js";
import { link } from "../home.json";

class FishKing extends Component {
  render() {
    return (
      <div id="fishKing">
        <Header
          timerName="Fish Kings"
          timerColor={{ color: "#66b2ff" }}
          link={link}
        />
      </div>
    );
  }
}

export default FishKing;
