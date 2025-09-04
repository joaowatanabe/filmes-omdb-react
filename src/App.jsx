import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import "./App.css";

function App() {
  return (
    <Router>
      <header className="app-header">
        <h1>🎬 Filmes OMDb</h1>
        <nav>
          <Link to="/" className="nav-link">Início</Link>
          <Link to="/favorites" className="nav-link">⭐ Favoritos</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
