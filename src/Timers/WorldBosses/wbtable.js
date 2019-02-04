import React, { Component } from "react";
import "./wbtable.css";
import WorldBoss from "./wb.js";

class wbTable extends Component {
  render() {
    return (
      <div className="wbTable">
        <div className="wbTitle">
          <div id="wbName">World Boss</div>
          <div id="wbHour">Time</div>
          <div id="wbDay">Day</div>
        </div>
        <div className="wbBody">
          <div className="elbiolo">
            <div className="wb3">
              <div className="wbName1">Elbiolo</div>
              <div className="wbTime">
                <div className="wbTime1">2:00 AM</div>
                <div className="wbTime2">6:00 AM</div>
                <div className="wbTime3">10:00 AM</div>
                <div className="wbTime4">2:00 PM</div>
                <div className="wbTime5">6:00 PM</div>
                <div className="wbTime6">10:00 PM</div>
              </div>
            </div>
            <div className="wbDay1">Wednesday</div>
          </div>
          <div className="mac">
            <div className="wb3">
              <div className="wbName1">Mac</div>
              <div className="wbTime">
                <div className="wbTime1">12:00 AM</div>
                <div className="wbTime2">4:00 AM</div>
                <div className="wbTime3">8:00 AM</div>
                <div className="wbTime4">12:00 PM</div>
                <div className="wbTime5">4:00 PM</div>
                <div className="wbTime6">8:00 PM</div>
              </div>
            </div>
            <div className="wbDay1">Thursday</div>
          </div>
          <WorldBoss
            worldboss="banmech"
            name1="Banksy"
            name2="Mechium"
            day="Friday"
          />
          <WorldBoss
            worldboss="daphkal"
            name1="Daphne"
            name2="Kalishia"
            day="Saturday"
          />
          <WorldBoss
            worldboss="mordabe"
            name1="Mordecai"
            name2="Abenthy"
            day="Sunday"
          />
        </div>
      </div>
    );
  }
}

export default wbTable;
