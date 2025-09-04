import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>⭐ Meus Favoritos</h1>
      {favorites.length > 0 ? (
        <MovieList movies={favorites} />
      ) : (
        <p>Nenhum filme favorito ainda.</p>
      )}
    </div>
  );
}

export default Favorites;
