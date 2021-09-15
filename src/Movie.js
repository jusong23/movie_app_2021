import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      {/* html이 아닌 JSX 이므로 className 이라고 적어줘야함 (어찌됐든 js이므로) inspect 하면 class로 뜬다 ! */}
      <img alt={title} title={title} src={poster} />
      {/* alt는 마우스 커서 올렸을 때 title 뜨게 해줌 */}
      <div className="movie__data">
        {" "}
        <h3 className="movie__title" /* style={{ backgroundColor: "red" } */>
          {title}
        </h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
