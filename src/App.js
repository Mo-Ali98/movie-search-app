import React from 'react';
import logo from './logo.svg';
import './App.css';

// Import components
import SearchMovies from './searchMovie'
function App() {
  return (
    <div className="container">
    <h1 className = "title">React Movie Search!</h1>
    <SearchMovies/>
  </div>
  );
}

export default App;
