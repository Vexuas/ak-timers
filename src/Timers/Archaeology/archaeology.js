import React, { Component } from "react";
import Header from "../../Header/header.js";
import { link } from "../home.json";

class Archaeology extends Component {
  render() {
    return (
      <div id="archaeology">
        <Header
          timerName="Archaeology"
          timerColor={{ color: "#66b2ff" }}
          link={link}
        />
      </div>
    );
  }
}

export default Archaeology;
