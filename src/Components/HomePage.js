// src/components/HomePage.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addWordToHistory, fetchWordDetails } from '../redux/actions';

function HomePage({ addWordToHistory, fetchWordDetails }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    if (searchTerm) {
      addWordToHistory(searchTerm);
      const wordDetails = await fetchWordDetails(searchTerm);
     
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a word"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default connect(null, { addWordToHistory, fetchWordDetails })(HomePage);
