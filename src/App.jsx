import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import NewsList from './components/NewsList';

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  
  const API_KEY = 'e22a10c39a3c4dd4beb6a21e32aaa9b0';  // Replace with your API key from NewsAPI
  const URL = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;

  // Fetch news when the component loads or when the search query changes
  useEffect(() => {
    setLoading(true);
    axios
      .get(URL)
      .then((response) => {
        setNews(response.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
        setLoading(false);
      });
  }, [query]);

  return (
    <div className="App">
      <Navbar />
      <SearchBar setQuery={setQuery} />
      <NewsList news={news} loading={loading} />
    </div>
  );
}

export default App;
