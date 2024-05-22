import React, { useState, useEffect, useMemo } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "@fontsource/inter";
import ColorCheckbox from "./components/ColorCheckbox";
import CustomEvent from "./components/CustomEvent";
import SearchResultsModal from "./components/SearchResultsModal";
import EventPage from "./components/EventPage";

// Import the JSON files directly
import eventCategories from "./event_json_files/event-categories.json";
import eventLocations from "./event_json_files/event-locations.json";

const localizer = momentLocalizer(moment);

const eventPropGetter = (event) => {
  const backgroundColor = '#' + event.hexColor;
  return {
    className: 'event-dot',
    style: {
      backgroundColor: backgroundColor,
      display: 'inline-block !important',
    },
  };
};

function App() {
  const [events, setEvents] = useState(null);
  const [categories, setCategories] = useState({});
  const [locations, setLocations] = useState({});
  const [selectedAges, setSelectedAges] = useState(new Set());
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const [selectedLocations, setSelectedLocations] = useState(new Set());
  const [showAllEvents, setShowAllEvents] = useState(true);
  const [allEventsOpen, setAllEventsOpen] = useState(false);
  const [ageOpen, setAgeOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();

  const handleEventClick = (event) => {
    console.log("Event clicked:", event.id);
    navigate(`/event/${event.id}`, { state: { event } });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const eventResponse = await fetch("https://apl-innovation-lab.github.io/aplapi/events.json");
        if (!eventResponse.ok) {
          throw new Error(`HTTP error! status: ${eventResponse.status}`);
        }
        const eventJson = await eventResponse.json();
        setEvents(eventJson);
        console.log("Events fetched successfully:", eventJson);

        // Use the imported JSON data directly for categories
        const categoryMap = eventCategories.reduce((acc, category) => {
          acc[category.id] = category.name;
          return acc;
        }, {});
        setCategories(categoryMap);
        console.log("Categories loaded successfully:", categoryMap);

        // Use the imported JSON data directly for locations
        const locationMap = eventLocations.reduce((acc, location) => {
          acc[location.id] = location.name;
          return acc;
        }, {});
        setLocations(locationMap);
        console.log("Locations loaded successfully:", locationMap);

      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchData();
  }, []);

  const uniqueAges = useMemo(() => {
    if (events === null) {
      return []; // or whatever default value you prefer
    }
    const ages = new Set(
      events.map((event) => event.field_event_recommended_ages)
    );
    return Array.from(ages);
  }, [events]);

  const uniqueCategories = useMemo(() => {
    if (events === null) {
      return []; // or whatever default value you prefer
    }
    const categories = new Set(events.map((event) => event.event_category));
    return Array.from(categories);
  }, [events]);

  const uniqueLocations = useMemo(() => {
    if (events === null) {
      return []; // or whatever default value you prefer
    }
    const locations = new Set(events.map((event) => event.field_event_loc));
    return Array.from(locations);
  }, [events]);

  const handleAllEventsChange = () => {
    setShowAllEvents(!showAllEvents);
    setSelectedAges(new Set());
    setSelectedCategories(new Set());
    setSelectedLocations(new Set());
  };

  const handleAgeChange = (age) => {
    const newAges = new Set(selectedAges);
    if (newAges.has(age)) {
      newAges.delete(age);
    } else {
      newAges.add(age);
    }
    setSelectedAges(newAges);
    setShowAllEvents(newAges.size === 0 && selectedCategories.size === 0 && selectedLocations.size === 0);
  };

  const handleCategoryChange = (category) => {
    const newCategories = new Set(selectedCategories);
    if (newCategories.has(category)) {
      newCategories.delete(category);
    } else {
      newCategories.add(category);
    }
    setSelectedCategories(newCategories);
    setShowAllEvents(newCategories.size === 0 && selectedAges.size === 0 && selectedLocations.size === 0);
  };

  const handleLocationChange = (location) => {
    const newLocations = new Set(selectedLocations);
    if (newLocations.has(location)) {
      newLocations.delete(location);
    } else {
      newLocations.add(location);
    }
    setSelectedLocations(newLocations);
    setShowAllEvents(newLocations.size === 0 && selectedAges.size === 0 && selectedCategories.size === 0);
  };

  const filteredEvents = useMemo(() => {
    if (events === null) {
      return []; // or whatever default value you prefer
    }
    if (showAllEvents) return events;

    return events.filter((event) => {
      const ageMatch =
        selectedAges.size === 0 ||
        selectedAges.has(event.field_event_recommended_ages);
      const categoryMatch =
        selectedCategories.size === 0 ||
        selectedCategories.has(event.event_category);
      const locationMatch =
        selectedLocations.size === 0 ||
        selectedLocations.has(event.field_event_loc);
      return ageMatch && categoryMatch && locationMatch;
    });
  }, [
    events,
    showAllEvents,
    selectedAges,
    selectedCategories,
    selectedLocations,
  ]);

  const convertedEvents = filteredEvents.map((event) => {
    const startTimeStamp = new Date(event.field_slr_time_start);
    const endTimeStamp = new Date(event.field_slr_time_end);

    return {
      id: event.nid,
      title: event.title,
      start: startTimeStamp,
      end: endTimeStamp,
      desc: event.body,
      location: locations[event.field_event_loc] || event.field_event_loc, // Use location name
      allDay: false,
    };
  });

  useEffect(() => {
    if (searchQuery.length > 0 && events) {
      const filteredEvents = convertedEvents.filter((event) => {
        return event.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
      setSearchResults(filteredEvents);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, events]);

  function formatAgeCategory(age) {
    return age.replace(/(\D+)(\d+)$/, '$1 ($2)');
  }  

  const eventStyleGetter = (event) => {
    let style = {
      className: 'event-dot',
      style: {
        backgroundColor: "#E8E8E8",
        borderRadius: "5px",
        opacity: 1,
        color: "black",
        border: "1px solid #E8E8E8",
        cursor: "pointer",
        margin: "0 0 5px 0",
        position: "relative",
        display: 'inline-block !important',
      },
    };

    if (localizer.view === 'day') {
      style.style.height = '35px';
    } else {
      style.style.height = '25px';
    }

    return style;
  };

  if (events === null) {
    return <div>Loading...</div>;
  }
  return (
    <Routes>
      <Route path="/" element={
        <div className="App">
          <div className="main-container">
            <div className="filters-sidebar">
              <div>
                <b>FILTERS</b>
              </div>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="filter-dropdown">
                <button onClick={() => setAllEventsOpen(!allEventsOpen)}>
                  All Events
                </button>
                {allEventsOpen && (
                  <div>
                    <ColorCheckbox
                      id={`all-events`}
                      checked={showAllEvents}
                      onChange={handleAllEventsChange}
                    />
                  </div>
                )}
              </div>
              <div className="filter-dropdown">
                <button onClick={() => setAgeOpen(!ageOpen)}>Filter by Age</button>
                {ageOpen &&
                  uniqueAges.map((age) => (
                    <div key={age}>
                      <ColorCheckbox
                        id={`age-${age}`}
                        label={formatAgeCategory(age.toString().charAt(0).toUpperCase() + age.toString().slice(1))}
                        checked={selectedAges.has(age)}
                        onChange={() => handleAgeChange(age)}
                      />
                    </div>
                  ))}
              </div>
              <div className="filter-dropdown">
                <button onClick={() => setCategoryOpen(!categoryOpen)}>
                  Filter by Category
                </button>
                {categoryOpen &&
                  uniqueCategories.map((category) => (
                    <div key={category}>
                      <ColorCheckbox
                        id={`category-${category}`}
                        label={categories[category] || `category-${category}`}
                        checked={selectedCategories.has(category)}
                        onChange={() => handleCategoryChange(category)}
                      />
                    </div>
                  ))}
              </div>
              <div className="filter-dropdown">
                <button onClick={() => setLocationOpen(!locationOpen)}>
                  Filter by Location
                </button>
                {locationOpen &&
                  uniqueLocations.map((location) => (
                    <div key={location}>
                      <ColorCheckbox
                        id={`location-${location}`}
                        label={locations[location] || `location-${location}`}
                        checked={selectedLocations.has(location)}
                        onChange={() => handleLocationChange(location)}
                      />
                    </div>
                  ))}
              </div>
            </div>
            { convertedEvents.length !== 0 &&
            <div className="calendar-container">
              <Calendar
                localizer={localizer}
                events={convertedEvents}
                startAccessor="start"
                endAccessor="end"
                showMultiDayTimes
                step={60}
                eventPropGetter={eventStyleGetter}
                components={{
                  event: (props) => (
                    <CustomEvent
                      {...props}
                      onClick={handleEventClick}
                      style={{ zIndex: 0 }}
                    />
                  ),
                }}
                toolbar={(toolbar) => (
                  <div>
                    <span style={{ fontSize: "1.5em", fontWeight: "Semi-Bold" }}>
                      {toolbar.label}
                    </span>
                  </div>
                )}
                style={{ zIndex: 0 }}
              />
              <SearchResultsModal
                results={searchResults}
                show={searchResults.length > 0}
                onClose={() => setSearchResults([])}
              />
            </div>
            }
          </div>
        </div>
      } />
      <Route path="/event/:id" element={<EventPage />} />
    </Routes>
  );
}

export default App;
