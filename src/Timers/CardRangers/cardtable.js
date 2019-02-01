import React, { Component } from "react";
import "./cardtable.css";
import Rangers from "./rangers.js";

class CardTable extends Component {
  render() {
    return (
      <div className="cardTable">
        <div className="cardTitle">
          <div id="cardName">Ranger</div>
          <div id="cardHour">Time</div>
          <div id="cardDay">Day</div>
        </div>
        <div className="cardBody">
          <Rangers ranger="redRanger" name="Red" day="Monday" />
          <Rangers ranger="blackRanger" name="Black" day="Tuesday" />
          <Rangers ranger="blueRanger" name="Blue" day="Wednesday" />
          <Rangers ranger="yellowRanger" name="Yellow" day="Thursday" />
          <Rangers ranger="pinkRanger" name="Pink" day="Friday" />
          <div className="allRanger">
            <div className="rangerName">All Rangers</div>
            <div className="rangerTime">
              <div className="rangerTime3" id="alltime1">
                5:00 PM
              </div>
              <div className="rangerTime4" id="alltime2">
                9:00 PM
              </div>
            </div>
            <div className="rangerDay">Saturday + Sunday</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardTable;
