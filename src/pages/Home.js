import { useState, useEffect } from "react";
import { searchMovies } from "../services/api";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  const handleSearch = async (q = query, p = 1) => {
    if (!q) return;
    setLoading(true);
    setError("");
    try {
      const data = await searchMovies(q, p);
      if (data.Response === "True") {
        setMovies(data.Search);
        setTotalResults(parseInt(data.totalResults));
        setPage(p);
      } else {
        setMovies([]);
        setTotalResults(0);
        setError(data.Error || "Nenhum resultado encontrado.");
      }
    } catch {
      setError("Erro ao buscar filmes.");
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div>
      <SearchBar onSearch={(q) => handleSearch(q, 1)} />
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <MovieList
        movies={movies}
        favorites={favorites}
        setFavorites={setFavorites}
      />
      {totalPages > 1 && (
        <div className="pagination">
          <button
            disabled={page === 1}
            onClick={() => handleSearch(query, page - 1)}
          >
            ⬅ Anterior
          </button>
          <span>
            Página {page} de {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => handleSearch(query, page + 1)}
          >
            Próxima ➡
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
