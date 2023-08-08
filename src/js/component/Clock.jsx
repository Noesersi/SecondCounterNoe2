import React from "react";

function Clock({ days, hours, minutes, seconds }) {
  return (
    <div className="bigCounter">
      <div className="calendar">
        <i className="fa-regular fa-clock"></i>
      </div>
      <div className="four">{days}d</div>
      <div className="three">{hours}h</div>
      <div className="two">{minutes}m</div>
      <div className="one">{seconds}s</div>
    </div>
  );
}

export default Clock;
