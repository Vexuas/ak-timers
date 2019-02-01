import React, { Component } from "react";
import "./rangers.css";

class Rangers extends Component {
  render() {
    return (
      <div className={this.props.ranger}>
        <div className="rangerName">{this.props.name} Ranger</div>
        <div className="rangerTime">
          <div className="rangerTime1">1:00 AM</div>
          <div className="rangerTime2">12:00 PM</div>
          <div className="rangerTime3">5:00 PM</div>
          <div className="rangerTime4">9:00 PM</div>
        </div>
        <div className="rangerDay">{this.props.day}</div>
      </div>
    );
  }
}

export default Rangers;
