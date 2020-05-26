import React from "react";

import "./BookingsControls.css";

const bookingsControls = (props) => (
  <div className="bookings-controls__controls">
    <button
      className={props.activeButton === "list" ? "active" : ""}
      onClick={props.changeOutputTypeHandler.bind(this, "list")}
    >
      List
    </button>
    <button
      className={props.activeButton === "chart" ? "active" : ""}
      onClick={props.changeOutputTypeHandler.bind(this, "chart")}
    >
      Chart
    </button>
  </div>
);

export default bookingsControls;
