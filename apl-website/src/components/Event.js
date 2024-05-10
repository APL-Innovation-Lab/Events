import React, { useState, useEffect } from "react";

export default function Event() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dev-apl-cms.pantheonsite.io/api/events");
        const json = await response.json();
        setEvents(json);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="eachevent">
      {events.map((event) => {
        return (
          <div className="box" key={event.nid}>
            {/* Render event data here */}
          </div>
        );
      })}
    </div>
  );
}
