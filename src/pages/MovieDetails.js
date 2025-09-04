import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieById } from "../services/api";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);

    const fetchMovie = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await getMovieById(id);
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error || "Filme não encontrado.");
        }
      } catch {
        setError("Erro ao carregar detalhes.");
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  const toggleFavorite = () => {
    if (!movie) return;
    let updated = [];
    const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);
    if (isFavorite) {
      updated = favorites.filter((fav) => fav.imdbID !== movie.imdbID);
    } else {
      updated = [...favorites, movie];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return movie ? (
    <div className="movie-details">
      <Link to="/">⬅ Voltar</Link>
      <h2>
        {movie.Title} ({movie.Year})
      </h2>
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300"
        }
        alt={movie.Title}
      />
      <p>
        <strong>Diretor:</strong> {movie.Director}
      </p>
      <p>
        <strong>Elenco:</strong> {movie.Actors}
      </p>
      <p>
        <strong>Gênero:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Duração:</strong> {movie.Runtime}
      </p>
      <p>
        <strong>Idioma:</strong> {movie.Language}
      </p>
      <p>
        <strong>País:</strong> {movie.Country}
      </p>
      <p>
        <strong>Nota IMDb:</strong> {movie.imdbRating}
      </p>
      <p>
        <strong>Sinopse:</strong> {movie.Plot}
      </p>
      <button onClick={toggleFavorite}>
        {favorites.some((fav) => fav.imdbID === movie.imdbID)
          ? "Remover dos Favoritos"
          : "Adicionar aos Favoritos"}
      </button>
    </div>
  ) : null;
}

export default MovieDetails;
