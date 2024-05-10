import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./EventSidebar.css";
import parse from "html-react-parser";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";

var monthNames = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEPT",
  "OCT",
  "NOV",
  "DEC",
];
var daysOfWeek = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];

const EventSidebar = ({ event }) => {
  const parsed = parse(event.desc);
  return (
    <div className="hover-sidebar">
        <div className="date" style={{ textAlign: "center" }}>
          <div style={{ fontSize: "1.2em", fontWeight: "300" }}>
            {monthNames[event?.start.getMonth()]}
          </div>
          <div style={{ fontSize: "2.0em", fontWeight: "800" }}>
            {event?.start.getDate()}
          </div>
          <div style={{ fontSize: "1.2em", fontWeight: "300" }}>
            {daysOfWeek[event?.start.getDay()]}
          </div>
          <div style={{ fontSize: "0.8em", fontWeight: "300" }}>
            {event?.start.getFullYear()}
          </div>
        </div>
        <div className="modal-title-container">
          <div className="modal-title">{event?.title}</div>
          <div style={{ fontSize: "0.8em", fontWeight: "300" }}>
            {" "}
            {event?.start.getHours()}:00 - {event?.end.getHours()}:00
          </div>
        </div>
        <div className="button1">
          <Button
            style={{ backgroundColor: "#D9D9D9", color: "#000000" }}
            variant="contained"
            startIcon={<DriveFileRenameOutlineIcon />}
          >
            RSVP
          </Button>
        </div>
        <div className="button2">
          <Button
            style={{ backgroundColor: "#D9D9D9", color: "#000000" }}
            variant="contained"
            startIcon={<NotificationAddIcon />}
          >
            Get Notified
          </Button>
        </div>
        <div className="description-container">
          <h4>Description: </h4>
          {parsed}
        </div>
    </div>
  );
};

export default EventSidebar;
