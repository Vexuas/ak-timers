import React, { Component } from "react";
import "./eidolons.css";

class Eidolon extends Component {
  render() {
    return (
      <div className={this.props.eidolons}>
        <div className="eido1">
          <div className="eidoName1">{this.props.name1}</div>
          <div className="eidoTime">
            <div className="eidoTime1">1:00 AM</div>
            <div className="eidoTime2">3:00 PM</div>
            <div className="eidoTime3">8:00 PM</div>
          </div>
        </div>
        <div className="eido2">
          <div className="eidoName2">{this.props.name2}</div>
          <div className="eidoTime">
            <div className="eidoTime1">12:00 PM</div>
            <div className="eidoTime2">5:00 PM</div>
            <div className="eidoTime3">10:00 PM</div>
          </div>
        </div>
        <div className="eidoDay">{this.props.day}</div>
      </div>
    );
  }
}

export default Eidolon;
