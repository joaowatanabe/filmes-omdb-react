import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieById } from "../services/api";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await getMovieById(id);
        if (data.Response === "True") {
          setMovie(data);

          // Checar se já está nos favoritos
          const storedFavorites =
            JSON.parse(localStorage.getItem("favorites")) || [];
          const exists = storedFavorites.some(
            (fav) => fav.imdbID === data.imdbID
          );
          setIsFavorite(exists);
        } else {
          setError(data.Error || "Filme não encontrado.");
        }
      } catch (err) {
        setError("Erro ao carregar detalhes.");
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  const toggleFavorite = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      const updated = storedFavorites.filter(
        (fav) => fav.imdbID !== movie.imdbID
      );
      localStorage.setItem("favorites", JSON.stringify(updated));
      setIsFavorite(false);
    } else {
      storedFavorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(storedFavorites));
      setIsFavorite(true);
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">⬅ Voltar</Link>
      {movie && (
        <div style={{ marginTop: "20px" }}>
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

          {/* Botão de Favoritar */}
          <button
            onClick={toggleFavorite}
            style={{
              marginTop: "15px",
              padding: "10px 15px",
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
      )}
    </div>
  );
}

export default MovieDetails;
