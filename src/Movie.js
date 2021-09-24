import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster, genres, rating }) {
  return (
    <div className="movie">
      <div className="movie__poster">
        <img src={poster} alt={title} title={title} />
      </div>
      <div className="movie__data">
        <h2 className="movie__title">{title}</h2>
        <h4 className="movie__year">{year}</h4>
        <h4 className="movie__rating">{(rating / 2).toFixed(1)}</h4>
        <ul className="genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 200)}...</p>
      </div>
    </div>
  );
}
Movie.prototype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf.isRequired,
};

export default Movie;
