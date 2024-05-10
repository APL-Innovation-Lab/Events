import React, { useState } from "react";
import moment from "moment";
import "./CustomEvent.css";
// import EventSidebar from "./EventSidebar.js";
import parse from "html-react-parser";

const CustomEvent = ({ event, onClick }) => {
  const [panelVisible, setPanelVisible] = useState(false);
  return (
    <div
      className="hoverable"
      onMouseEnter={() => setPanelVisible(true)}
      onMouseLeave={() => setPanelVisible(false)}
    >
      {/* {panelVisible && <EventSidebar event = {event}/>} */}
      <div onClick={() => onClick(event)}>
        <div className="container">
          <div className="colorbar"></div>
          <div className="colorlabel">
            <span style={{ fontWeight: "600", whiteSpace: "normal" }}>
              {event.title}
            </span>
            <br />
            {moment(event.start).format("LT")} -{" "}
            {moment(event.end).format("LT")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomEvent;
