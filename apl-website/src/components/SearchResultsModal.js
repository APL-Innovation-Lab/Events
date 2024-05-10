import React from 'react';

const SearchResultsModal = ({ results, show, onClose }) => {
  if (!show) return null;
  return (
    <div className="search-results-modal">
      <div className="search-results-content">
        <button onClick={onClose}>Close</button>
        {results.map((event) => (
          <div key={event.id} className="search-result-item">
            {event.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsModal;