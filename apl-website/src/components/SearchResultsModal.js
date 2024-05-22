import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchResultsModal = ({ results, show, onClose }) => {
  const navigate = useNavigate();

  const handleResultClick = (event) => {
    console.log("Event clicked in search:", event.id);
    navigate(`/event/${event.id}`, { state: { event } });
  };

  if (!show) return null;

  return (
    <div className="search-results-modal">
      <div className="search-results-content">
        <button onClick={onClose}>Close</button>
        <div className="search-results-grid">
          {results.map((event) => (
            <div
              key={event.id}
              className="search-result-item"
              onClick={() => handleResultClick(event)}
            >
              <div>{event.title}</div>
              <div>{new Date(event.start).toLocaleDateString()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsModal;
