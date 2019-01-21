import React, { Component } from "react";
import "./timers.css";
import Timer from "./timer.js";
import FishKing from "./fishking.json";

class Timers extends Component {
  render() {
    return (
      <div className="container-timer">
        <Timer
          link={FishKing.link}
          timerTitle={FishKing.title}
          banner={FishKing.banner}
          desc={FishKing.desc}
        />
        <Timer timerTitle="Archaeology" />
      </div>
    );
  }
}

export default Timers;
