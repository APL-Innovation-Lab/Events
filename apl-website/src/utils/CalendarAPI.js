import { gapi } from "gapi-script";

export const addEventToGoogleCalendar = (
  event,
  accessToken,
  setAccessToken,
  onClose
) => {

  // Authorization and Token Management
  if (!accessToken) {
    const client = window.google.accounts.oauth2.initTokenClient({
      client_id:
        process.env.REACT_APP_GOOGLE_CLIENT_ID,
      scope: "https://www.googleapis.com/auth/calendar",
      callback: (tokenResponse) => {
        setAccessToken(tokenResponse.access_token);
        loadGoogleCalendarApi();
      },
    });
    client.requestAccessToken();
    return;
  }

  // Add the event to the calendar
  addEvent(event, accessToken, onClose);
};

const loadGoogleCalendarApi = () => {
  gapi.load("client:auth2", () => {
    gapi.client
      .init({
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        clientId:
          process.env.REACT_APP_GOOGLE_CLIENT_ID,
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
        ],
        scope: "https://www.googleapis.com/auth/calendar",
      })
      .then(
        () => {
          // The API is initialized and the user is signed in.
        },
        (error) => {
          console.error("Error loading GAPI client for API", error);
        }
      );
  });
};

const addEvent = (event, accessToken, onClose) => {
  const eventToAdd = {
    summary: event.title,
    location: event.location,
    description: event.description,
    start: {
      dateTime: event.start,
      timeZone: "America/Los_Angeles",
    },
    end: {
      dateTime: event.end,
      timeZone: "America/Los_Angeles",
    },
  };

  function initiate() {
    gapi.client
      .request({
        path: `https://www.googleapis.com/calendar/v3/calendars/primary/events`,
        method: "POST",
        body: eventToAdd,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(
        (response) => {
            console.log("Successfully added event to calendar");
          return [true, response];
        },
        function (err) {
          console.log(err);
          return [false, err];
        }
      );
  }

  gapi.load("client", initiate);
};
