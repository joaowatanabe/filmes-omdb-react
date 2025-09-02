import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    if (!query) return;

    const API_KEY = process.env.REACT_APP_OMDB_KEY;
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    );
    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Buscar Filmes</h1>
      <SearchBar onSearch={searchMovies} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
