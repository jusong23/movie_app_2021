import React from "react";
import { Link } from "react-router-dom"; // React 가 강제로 종료되고 새로고침 하는 걸 막기 위해(좀더 인터랙트한 작동)
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
