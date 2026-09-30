import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MovieCard from "./components/MovieCard/MovieCard";

import "./App.css";

const sampleMovies = [
  {
    id: 1,
    title: "The Last Horizon",
    poster:
      "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    year: "2026",
    rating: "8.7",
    description:
      "A mysterious journey begins when a group of explorers discovers a hidden world beyond the horizon.",
    genre: "Sci-Fi",
    duration: "2h 08m",
  },
  {
    id: 2,
    title: "Midnight Mission",
    poster:
      "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    year: "2025",
    rating: "8.2",
    description:
      "An elite team races against time to complete a dangerous mission before sunrise.",
    genre: "Action",
    duration: "1h 52m",
  },
  {
    id: 3,
    title: "Beyond the Stars",
    poster:
      "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    year: "2025",
    rating: "9.0",
    description:
      "A young astronaut discovers a signal that could change humanity forever.",
    genre: "Adventure",
    duration: "2h 15m",
  },
  {
    id: 4,
    title: "Hidden City",
    poster:
      "https://image.tmdb.org/t/p/w500/placeholder.jpg",
    year: "2024",
    rating: "8.4",
    description:
      "A detective enters a forgotten city where every secret has a price.",
    genre: "Mystery",
    duration: "1h 47m",
  },
];

function App() {
  const handlePlay = (movie) => {
    console.log("Playing:", movie.title);
  };

  const handleAddToList = (movie, added) => {
    console.log(
      added
        ? `Added ${movie.title} to My List`
        : `Removed ${movie.title} from My List`
    );
  };

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <section className="movie-card-demo">
          <div className="section-heading">
            <span className="phase-label">
              PHASE 3
            </span>

            <h1>Movie Card Component</h1>

            <p>
              Reusable Netflix-style movie cards.
            </p>
          </div>

          <div className="movie-card-grid">
            {sampleMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onPlay={handlePlay}
                onAddToList={handleAddToList}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;