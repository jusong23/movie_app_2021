import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }; //변하는 data 넣기위해 , functoion component 대신 state가 작동되는 class component 사용

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      }, // (es6)
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false }); // axios를 이용해 fetch(가져오기)를 하는 과정 , 이때 axios는 느리기때문에 async - await 사용
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    // this.state : 현재 state 안에 있는 isLoading 을 재 정의시켜준것 (render 에서 쓰기위함)
    // isLoading 은 어떤 객체 내 (state = {} )에 있는 key 이다. 그 어떤 객체는 this.state !
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => {
              return (
                <Movie
                  key={movie.id} // 필수 props !!
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
    //this.state.isLoading 을 바꾼것 ! (es6)
  }
}

//state 형성 -> isLoading 변환(중간에 getMovies 실행)

export default Home;
