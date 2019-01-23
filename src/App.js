import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Skytower from "./Timers/skytower.js";
import Home from "./Timers/home.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/raids" component={Skytower} />
        </div>
      </Router>
    );
  }
}

export default App;
