import React, { Component } from "react";
import "./timers.css";
import Timer from "./timer.js";
import FishKing from "./FishKings/fishking.json";
import Arch from "./Archaeology/archaeology.json";
import Wb from "./WorldBosses/worldboss.json";
import Gh from "./GuildEidolons/gheidolons.json";
import St from "./Raids/skytower.json";
import cards from "./CardRangers/cardrangers.json";

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
        <Timer
          link={Wb.link}
          timerTitle={Wb.title}
          banner={Wb.banner}
          desc={Wb.desc}
        />
        <Timer
          link={Gh.link}
          timerTitle={Gh.title}
          banner={Gh.banner}
          desc={Gh.desc}
        />
        <Timer
          link={St.link}
          timerTitle={St.title}
          banner={St.banner}
          desc={St.desc}
        />
        <Timer
          link={cards.link}
          timerTitle={cards.title}
          banner={cards.banner}
          desc={cards.desc}
        />
      </div>
    );
  }
}

export default Timers;
