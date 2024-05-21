import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { addEventToGoogleCalendar } from "../utils/CalendarAPI";
import parse from 'html-react-parser';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ShareIcon from '@mui/icons-material/Share';
import PrintIcon from '@mui/icons-material/Print';
import ClearIcon from '@mui/icons-material/Clear';

const EventPage = () => {
  const [accessToken, setAccessToken] = useState(null);
  const location = useLocation();
  const { event } = location.state;

  const handleAddToCalendar = () => {
    addEventToGoogleCalendar(event, accessToken, setAccessToken, () => {});
  };

  const parsed = parse(event.desc);

  var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"];
  var daysOfWeek = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];

  return (
    <div className="event-page">
      <div className="event-page-header">
        <div className="event-page-date-container">
          <div className="event-page-header-bar" />

          <div style={{ textAlign: "center" }}>
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
        </div>

        <div className="event-page-title-container">
          <div className="event-page-title">{event?.title}</div>
          <div style={{ fontSize: "0.8em", fontWeight: "300" }}>
            {" "}
            {event?.start.getHours()}:00 - {event?.end.getHours()}:00
          </div>
        </div>
      </div>

      <div className="event-page-button-container">
        <Button
          style={{ backgroundColor: "#D9D9D9", color: "#000000" }}
          variant="contained"
          onClick={handleAddToCalendar}
          startIcon={<CreateIcon />}
        >
          RSVP
        </Button>

        <Button
          style={{ backgroundColor: "#D9D9D9", color: "#000000" }}
          variant="contained"
          onClick={handleAddToCalendar}
          startIcon={<ShareIcon />}
        >
          Share
        </Button>
        <Button
          style={{ backgroundColor: "#D9D9D9", color: "#000000" }}
          variant="contained"
          onClick={handleAddToCalendar}
          startIcon={<PrintIcon />}
        >
          Print
        </Button>
        <Button
          style={{ backgroundColor: "#D9D9D9", color: "#000000" }}
          variant="contained"
          onClick={handleAddToCalendar}
          startIcon={<NotificationsActiveIcon />}
        >
          Get Notified
        </Button>
      </div>
      <h2>Description: </h2>
      {parsed}
    </div>
  );
};

export default EventPage;
