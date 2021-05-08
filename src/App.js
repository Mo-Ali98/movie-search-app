import React from 'react';
import GitHubIcon from "@material-ui/icons/GitHub";
import './App.css';

// Import components
import SearchMovies from './searchMovie'
function App() {
  return (
    <div>
      <div className= "github-link"> 
        <a href="https://github.com/Mo-Ali98/movie-search-app">
        <GitHubIcon style={{ fontSize: 22 }}></GitHubIcon>
        </a>
</div>

      <div className = "container">
      <h1 className = "title">Movie Search!</h1>
        <SearchMovies/>
      </div>

  </div>
  );
}

export default App;
