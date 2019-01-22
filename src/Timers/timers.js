import React, { Component } from "react";
import "./timers.css";
import Timer from "./timer.js";
import FishKing from "./fishking.json";
import Arch from "./archaeology.json";

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
        <Timer
          link={Arch.link}
          timerTitle={Arch.title}
          banner={Arch.banner}
          desc={Arch.desc}
        />
      </div>
    );
  }
}

export default Timers;
