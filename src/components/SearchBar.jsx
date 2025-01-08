import React, { useState } from 'react';

const SearchBar = ({ setQuery }) => {
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(input);
  };

  return (
    <div style={styles.searchBox}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search news..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.searchInput}
        />
        <button type="submit" style={styles.searchButton}>Search</button>
      </form>
    </div>
  );
};

const styles = {
  searchBox: {
    textAlign: 'center',
    margin: '20px 0',

  },
  searchInput: {
    padding: '10px',
    width: '300px',
    fontSize: '16px',
    borderRadius: '5px',
  },
  searchButton: {
    padding: '10px 15px',
    marginLeft: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
  },
};

export default SearchBar;
