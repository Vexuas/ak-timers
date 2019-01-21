import React, { Component } from "react";
import "./App.css";
import Header from "./Header/header.js";
import Timers from "./Timers/timers.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Timers />
      </div>
    );
  }
}

export default App;
