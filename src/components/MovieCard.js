import { useState, useEffect } from "react";

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = storedFavorites.some((fav) => fav.imdbID === movie.imdbID);
    setIsFavorite(exists);
  }, [movie]);

  const toggleFavorite = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      const updated = storedFavorites.filter((fav) => fav.imdbID !== movie.imdbID);
      localStorage.setItem("favorites", JSON.stringify(updated));
      setIsFavorite(false);
    } else {
      storedFavorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(storedFavorites));
      setIsFavorite(true);
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "#fafafa",
      }}
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200"}
        alt={movie.Title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3 style={{ margin: "10px 0 5px" }}>{movie.Title}</h3>
      <p>{movie.Year}</p>

      <button
        onClick={toggleFavorite}
        style={{
          marginTop: "10px",
          padding: "5px 10px",
          border: "none",
          borderRadius: "6px",
          backgroundColor: isFavorite ? "red" : "green",
          color: "white",
          cursor: "pointer",
        }}
      >
        {isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
      </button>
    </div>
  );
}

export default MovieCard;
