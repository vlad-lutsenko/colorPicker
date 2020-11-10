import React from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="start">
      <h1 className="title">awesome color change app {")))"}</h1>
      <Link to="/controls" className="link">
        try it out
      </Link>
    </div>
  );
};

export default StartPage;
