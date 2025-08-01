import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UrlShortener from './UrlShortener';
import RedirectPage from './RedirectPage';
import { log } from './logging';

function App() {
  const [urls, setUrls] = useState(() => {
    const saved = localStorage.getItem('shortenedUrls');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('shortenedUrls', JSON.stringify(urls));
  }, [urls]);

  log('frontend', 'info', 'component', 'App component loaded');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UrlShortener urls={urls} setUrls={setUrls} />} />
        <Route path="/redirect/:shortCode" element={<RedirectPage urls={urls} />} />
      </Routes>
    </Router>
  );
}

export default App;