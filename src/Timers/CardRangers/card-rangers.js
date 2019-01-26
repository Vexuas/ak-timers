import React, { Component } from "react";
import Header from "../../Header/header.js";
import { link } from "../home.json";

class CardRangers extends Component {
  render() {
    return (
      <div id="cardRangers">
        <Header
          timerName="Card Rangers"
          timerColor={{ color: "#66b2ff" }}
          link={link}
        />
      </div>
    );
  }
}

export default CardRangers;
