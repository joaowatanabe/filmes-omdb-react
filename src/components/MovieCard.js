function MovieCard({ movie }) {
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
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/200"
        }
        alt={movie.Title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3 style={{ margin: "10px 0 5px" }}>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
}
