import React from "react";
import PropTypes from "prop-types";

function Movie({ id, runtime, url, genres }) {
  return (
    <div>
      <h1>{id}</h1>
      <h2>{runtime}</h2>
      <h3>{url}</h3>
      <h4>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </h4>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
