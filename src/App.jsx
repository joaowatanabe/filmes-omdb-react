import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import "./App.css";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "15px" }}>
            🏠 Início
          </Link>
          <Link to="/favorites">⭐ Favoritos</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
