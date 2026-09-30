import React, { useState } from "react";

import "./MovieCard.css";

function MovieCard({
  movie,
  onPlay,
  onAddToList,
}) {
  const [imageError, setImageError] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  // If no movie object is provided,
  // do not render anything.
  if (!movie) {
    return null;
  }

  // Get movie information from the movie object.
  // Default values prevent undefined values.
  const {
    title = "Unknown Title",
    poster,
    year = "2026",
    rating = "N/A",
    description = "No description available.",
    genre = "Movie",
    duration = "N/A",
  } = movie;

  // Handle Play button.
  const handlePlay = () => {
    if (onPlay) {
      onPlay(movie);
    }
  };

  // Handle Add to My List button.
  const handleAddToList = () => {
    const newListState = !isAdded;

    setIsAdded(newListState);

    if (onAddToList) {
      onAddToList(movie, newListState);
    }
  };

  // Handle broken poster images.
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <article className="movie-card">
      {/* Movie Poster */}
      <div className="movie-card-poster-container">
        {!imageError && poster ? (
          <img
            src={poster}
            alt={`${title} poster`}
            className="movie-card-poster"
            onError={handleImageError}
          />
        ) : (
          <div className="movie-card-poster-fallback">
            <span className="fallback-logo">
              NETFLIX
            </span>

            <span className="fallback-title">
              {title}
            </span>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="movie-card-overlay">
          {/* Action Buttons */}
          <div className="movie-card-actions">
            {/* Play Button */}
            <button
              type="button"
              className="movie-action-button play-button"
              onClick={handlePlay}
              aria-label={`Play ${title}`}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

            {/* Add To My List Button */}
            <button
              type="button"
              className={`movie-action-button ${
                isAdded ? "added-button" : ""
              }`}
              onClick={handleAddToList}
              aria-label={
                isAdded
                  ? `Remove ${title} from My List`
                  : `Add ${title} to My List`
              }
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isAdded ? (
                  <path d="M5 12.5 9.5 17 19 7.5" />
                ) : (
                  <>
                    <line
                      x1="12"
                      y1="5"
                      x2="12"
                      y2="19"
                    />

                    <line
                      x1="5"
                      y1="12"
                      x2="19"
                      y2="12"
                    />
                  </>
                )}
              </svg>
            </button>

            {/* Information Button */}
            <button
              type="button"
              className="movie-action-button info-button"
              aria-label={`More information about ${title}`}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                />

                <line
                  x1="12"
                  y1="10"
                  x2="12"
                  y2="16"
                />

                <circle
                  cx="12"
                  cy="7"
                  r="0.8"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </button>
          </div>

          {/* Movie Information */}
          <div className="movie-card-details">
            <h3 className="movie-card-title">
              {title}
            </h3>

            <div className="movie-card-meta">
              <span className="movie-card-rating">
                <span className="rating-star">
                  ★
                </span>

                {rating}
              </span>

              <span>{year}</span>

              <span>{duration}</span>
            </div>

            <p className="movie-card-genre">
              {genre}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Information */}
      <div className="movie-card-mobile-info">
        <h3>{title}</h3>

        <div className="mobile-movie-meta">
          <span>
            <span className="rating-star">
              ★
            </span>{" "}
            {rating}
          </span>

          <span>{year}</span>
        </div>
      </div>

      {/* Description */}
      <p className="movie-card-description">
        {description}
      </p>
    </article>
  );
}

export default MovieCard;