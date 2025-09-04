import MovieCard from "./MovieCard";

function MovieList({ movies, favorites, setFavorites }) {
  if (!movies || movies.length === 0) return <h2>Nenhum filme encontrado</h2>;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      ))}
    </div>
  );
}

export default MovieList;
