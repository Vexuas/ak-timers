import React, { Component } from "react";
import "./header.css";

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverTime: null,
      serverDay: null
    };
  }
  //Server Time code
  componentDidMount() {
    setInterval(() => {
      const d = new Date();
      const utc = d.getTime() + d.getTimezoneOffset() * 60000;
      const offset = -5;
      const gameTime = utc + 3600000 * offset;
      const serverTime = new Date(gameTime);
      this.setState({
        serverTime: serverTime.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        }),
        serverDay: weekday[serverTime.getDay()]
      });
    });
  }
  //Navigation bar and Server Time container
  render() {
    return (
      <div className="header">
        <div className="navigation">
          <a href={this.props.link}>
            <span id="mainTitle" style={this.props.color}>
              ak-timers
            </span>
          </a>
          <span className="server" id="serverTime" title="Server Time">
            {this.state.serverDay} | {this.state.serverTime}
          </span>
          <span id="timerName" style={this.props.timerColor}>
            {this.props.timerName}
          </span>
        </div>
      </div>
    );
  }
}
export default Header;
