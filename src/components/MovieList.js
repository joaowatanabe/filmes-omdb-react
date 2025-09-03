import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  if (!movies.length) {
    return <h2>Nenhum filme encontrado</h2>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
      }}
    >
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;