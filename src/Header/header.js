import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverTime: null
    };
  }
  //Server Time code
  componentDidMount() {
    setInterval(() => {
      const d = new Date();
      const utc = d.getTime() + d.getTimezoneOffset() * 600000;
      const offset = -5;
      const gameTime = utc + 3600000 * offset;
      const serverTime = new Date(gameTime);
      this.setState({
        serverTime: serverTime.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        })
      });
    });
  }
  //Navigation bar and Server Time container
  render() {
    return (
      <div className="header">
        <div className="navigation">
          <span id="mainTitle">ak-timers</span>
          <span id="serverTime">{this.state.serverTime}</span>
          <span id="serverTitle">Server Time </span>
        </div>
        <div className="server-container" />
      </div>
    );
  }
}
export default Header;
