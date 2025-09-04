import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  return (
    <div>
      <h2>⭐ Meus Favoritos</h2>
      <MovieList
        movies={favorites}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </div>
  );
}

export default Favorites;
