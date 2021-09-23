import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About"; // 아래에서 쓰일 것들을 매개변수화 시키는 것
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  ); // exact={true} 이거 아니면 rendering 안 한다는 뜻 : /about component 가 / 와 /about 두개를 렌더링하지 않기 위함
}

export default App;
