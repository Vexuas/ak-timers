import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Skytower from "./Timers/Raids/skytower.js";
import Home from "./Timers/home.js";
import FishKing from "./Timers/FishKings/fish-kings.js";
import Archaeology from "./Timers/Archaeology/archaeology.js";
import WorldBoss from "./Timers/WorldBosses/world-boss.js";
import GuildEidolons from "./Timers/GuildEidolons/guild-eidolons.js";
import CardRangers from "./Timers/CardRangers/card-rangers.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/raids" component={Skytower} />
          <Route path="/fish-kings" component={FishKing} />
          <Route path="/archaeology" component={Archaeology} />
          <Route path="/world-boss" component={WorldBoss} />
          <Route path="/guild-eidolons" component={GuildEidolons} />
          <Route path="/card-rangers" component={CardRangers} />
        </div>
      </Router>
    );
  }
}

export default App;
