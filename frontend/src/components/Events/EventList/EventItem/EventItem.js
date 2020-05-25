import React from "react";

import "./EventItem.css";

const eventItem = (props) => (
  <li key={props.eventId} className="events__list-item">
    <div>
      <h2>{props.title}</h2>
      {/* <em>{props.description}</em>
      <br /> */}
      <h3>
        ${props.price} - {new Date(props.date).toLocaleDateString("en-IN")}
      </h3>
    </div>
    <div>
      {props.userId !== props.creatorId ? (
        <button
          className="btn"
          onClick={props.onDetail.bind(this, props.eventId)}
        >
          View Details
        </button>
      ) : (
        <p>You're the owner of this event.</p>
      )}
    </div>
  </li>
);

export default eventItem;
