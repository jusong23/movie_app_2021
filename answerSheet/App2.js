import React from "react";
import axios from "axios";
import Movie from "./Movie2";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
      // the process grab data from axios
      // after axios start, then start next process
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }
  //   sayhello() {
  //     console.log("hello");
  //   }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading. . . "
          : movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                runtime={movie.runtime}
                url={movie.url}
                genres={movie.genres}
              />
            ))}
      </div>
    );
  }
}

export default App;
