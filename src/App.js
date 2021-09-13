import React from "react";
import axios from "axios";
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }; //변하는 data 넣기위해 , functoion component 대신 state가 작동되는 class component 사용

  getMovies = async () => {
    const movies = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
    );
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state; // class component 이기에 this.state 사용
    // state의 사명을 이루어 주고자, 윗 줄과 같은 과정을 통해 state의 key를 바꿔줌
    return <div> {isLoading ? "Loading ..." : "we are ready"}</div>;
  }
}

export default App;
