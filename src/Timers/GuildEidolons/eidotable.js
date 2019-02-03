import React, { Component } from "react";
import "./eidotable.css";
import Eidolon from "./eidolons.js";

class EidoTable extends Component {
  render() {
    return (
      <div className="eidoTable">
        <div className="eidoTitle">
          <div id="eidoName">Eidolon</div>
          <div id="eidoHour">Time</div>
          <div id="eidoDay">Day</div>
        </div>
        <div className="eidoBody">
          <div className="kotonoha">
            <div className="eido3">
              <div className="eidoName1">Kotonoha</div>
              <div className="eidoTime">
                <div className="eidoTime1">12:00 PM</div>
                <div className="eidoTime2">5:00 PM</div>
                <div className="eidoTime3">10:00 PM</div>
              </div>
            </div>
            <div className="eidoDay">Monday</div>
          </div>
          <Eidolon
            eidolons="quelael"
            name1="Quelkulan"
            name2="Aelius"
            day="Tuesday"
          />
          <div className="bel">
            <div className="eido3">
              <div className="eidoName1">Bel-Chandra</div>
              <div className="eidoTime">
                <div className="eidoTime1">12:00 PM</div>
                <div className="eidoTime2">5:00 PM</div>
                <div className="eidoTime3">10:00 PM</div>
              </div>
            </div>
            <div className="eidoDay">Wednesday</div>
          </div>
          <Eidolon
            eidolons="yarngig"
            name1="Yarnaros"
            name2="Gigas"
            day="Thursday"
          />
          <Eidolon
            eidolons="bahasig"
            name1="Bahadur"
            name2="Sigrun"
            day="Friday"
          />
          <Eidolon
            eidolons="tigeuzu"
            name1="Tigerius Caesar"
            name2="Uzuriel"
            day="Saturday"
          />
          <Eidolon
            eidolons="vayueli"
            name1="Vayu"
            name2="Eligos"
            day="Sunday"
          />
        </div>
      </div>
    );
  }
}

export default EidoTable;
