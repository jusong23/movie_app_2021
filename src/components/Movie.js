import React from "react";
import { Link } from "react-router-dom"; // React 가 강제로 종료되고 새로고침 하는 걸 막기 위해(좀더 인터랙트한 작동)
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`, //클릭하면 이 url로 이동 후 아래 정보를 전달
        state: { id, year, title, summary, poster, genres }, //모든 router 들은 props 를 갖고있음 즉, 라우터 클릭시 props 전달 가능
      }}
    >
      <div className="movie">
        {/* html이 아닌 JSX 이므로 className 이라고 적어줘야함 (어찌됐든 js이므로) inspect 하면 class로 뜬다 ! */}
        <img alt={title} title={title} src={poster} />
        {/* alt는 마우스 커서 올렸을 때 title 뜨게 해줌 */}
        <div className="movie__data">
          <h3 className="movie__title" /* style={{ backgroundColor: "red" } */>
            {title}
          </h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genre">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </div>
    </Link>
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
