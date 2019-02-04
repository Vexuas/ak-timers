import React, { Component } from "react";
import "./wb.css";

class WorldBoss extends Component {
  render() {
    return (
      <div className={this.props.worldboss}>
        <div className="wb1">
          <div className="wbName1">{this.props.name1}</div>
          <div className="wbTime">
            <div className="wbTime1">12:00 AM</div>
            <div className="wbTime2">4:00 AM</div>
            <div className="wbTime3">8:00 AM</div>
            <div className="wbTime4">12:00 PM</div>
            <div className="wbTime5">4:00 PM</div>
            <div className="wbTime6">8:00 PM</div>
          </div>
        </div>
        <div className="wb2">
          <div className="wbName2">{this.props.name2}</div>
          <div className="wbTime">
            <div className="wbTime1">2:00 AM</div>
            <div className="wbTime2">6:00 AM</div>
            <div className="wbTime3">10:00 AM</div>
            <div className="wbTime4">2:00 PM</div>
            <div className="wbTime5">6:00 PM</div>
            <div className="wbTime6">10:00 PM</div>
          </div>
        </div>
        <div className="wbDay">{this.props.day}</div>
      </div>
    );
  }
}

export default WorldBoss;
