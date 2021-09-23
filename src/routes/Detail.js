import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/"); // home 에서 클릭을 통해서만 movie-detail 접속 가능하게 하기 위함!
    }
  }

  render() {
    const { location } = this.props; // App.js -> component에 연결된 detail router는 props를 가지고 있기 때문 !
    if (location.state) {
      return <span>{location.state.title} </span>;
    } else {
      return null;
    }
  }
}

export default Detail;
