# App.js

## Summary
`App.js` serves as the main entry point of the application. It integrates various components and utilizes the `react-big-calendar` library to render a customizable calendar interface where events can be filtered, added, and interacted with based on age, category, and location. The state management is heavily dependent on React's `useState` and `useEffect` hooks for handling dynamic data and user interactions.

## Features
- **Event Filtering**: Users can filter events by age, category, and location. This is managed through sets that track selected filters.
- **Dynamic Event Loading**: Events are fetched asynchronously from an API endpoint and stored in the state.
- **Interactive Calendar**: The calendar allows users to click on events to view more details or modify them.
- **Custom Components**: Utilizes custom components like `ColorCheckbox`, `CustomEvent`, `EventModal`, and `SearchResultsModal` to enhance UI/UX.
- **Search Functionality**: Includes a search bar to find events by title.
- **Styling**: Leverages CSS modules and a modular design to maintain a clean and organized style.

# utils/CalendarAPI.js

## Summary
`CalendarAPI.js` is responsible for integrating Google Calendar API to add events directly from the application to a user's Google Calendar. It handles authentication and token management, as well as the API calls needed to add events.

## Features
- **OAuth2 Authentication**: Manages access tokens for interacting with Google's API.
- **Event Addition**: Adds events to the user's Google Calendar with detailed attributes like start time, end time, and description.

# ColorCheckbox.js

## Summary
`ColorCheckbox.js` is a reusable React component that renders a custom-styled checkbox. This component is particularly used in the filtering UI where each checkbox corresponds to a unique identifier which determines its color and label dynamically.

## Features
- **Dynamic Styling**: Colors are assigned based on the `id` prop, which matches against a predefined color scheme.

# CustomEvent.js

## Summary
`CustomEvent.js` provides a custom rendering for events within the calendar. It includes additional interactive elements such as a hover effect that could potentially reveal more information about the event (currently commented out).

## Features
- **Interactive UI**: Enhances user interaction with events through custom styling and optional interactive elements.

# Event.js

## Summary
`Event.js` is designed to fetch and display a list of events from an API. It's structured to handle asynchronous data fetching and state management within a functional React component.

## Features
- **Data Fetching**: Asynchronously fetches event data on component mount.
- **Event Rendering**: Maps over fetched event data to render individual event details.

# EventModal.js

## Summary
`EventModal.js` is a component that displays a modal with detailed information about an event. It also provides options to interact with the event, such as adding it to Google Calendar, sharing, and printing.

## Features
- **Interactive Options**: Allows users to RSVP, share, print, and get notifications for the event.
- **Rich Text Display**: Utilizes `html-react-parser` to safely render HTML content from the event description.

# EventSidebar.js

## Summary
Though commented out in the `CustomEvent.js`, `EventSidebar.js` would provide a sidebar with detailed information and interaction options similar to those found in `EventModal`.

## Features
- **Detailed Event Information**: Displays date, time, and description.
- **User Interaction**: Provides buttons for RSVP and notifications.

# SearchResultsModal.js

## Summary
`SearchResultsModal.js` handles the display of search results in a modal format. It provides a simple UI for listing events that match the search criteria and a button to close the modal.

## Features
- **Search Integration**: Displays search results dynamically based on user queries.
- **Simple UI**: Focuses on functionality with a minimalistic design approach.
