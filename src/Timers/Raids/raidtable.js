import React, { Component } from "react";
import "./raidtable.css";

class RaidTable extends Component {
  render() {
    return (
      <div className="timerTable">
        <div className="raidTitle">
          <div id="raidName">Raid</div>
          <div id="raidHour">Time</div>
          <div id="raidDay">Day</div>
        </div>
        <div className="raidbody">
          <div className="skyRealm">
            <div id="grouprealm1">Sky Realm Group 1-5</div>
            <div id="timerealm1">10:00 AM</div>
            <div id="grouprealm2">Sky Realm Group 6-10</div>
            <div id="timerealm2">03:00 PM</div>
            <div id="grouprealm3">Sky Realm Group 11-15</div>
            <div id="timerealm3">08:00 PM</div>
            <div id="dayrealm">Thursday</div>
          </div>
          <div className="skyElite">
            <div id="groupest1">Elite Sky Tower Group 1-30</div>
            <div id="timeest1">10:00 AM</div>
            <div id="groupest2">Elite Sky Tower Group 31-60</div>
            <div id="timeest2">03:00 PM</div>
            <div id="groupest3">Elite Sky Tower Group 61-90</div>
            <div id="timeest3">08:00 PM</div>
            <div id="dayest">Friday</div>
          </div>
          <div className="skyTower">
            <div id="groupst1">Sky Tower Group 1-30</div>
            <div id="timest1">10:00 AM</div>
            <div id="groupst2">Sky Tower Group 6-10</div>
            <div id="timest2">03:00 PM</div>
            <div id="groupst3">Sky Tower Group 11-15</div>
            <div id="timest3">08:00 PM</div>
            <div id="daytower1">Saturday</div>
            <div id="daytower2">+</div>
            <div id="daytower3">Sunday</div>
          </div>
        </div>
      </div>
    );
  }
}

export default RaidTable;
