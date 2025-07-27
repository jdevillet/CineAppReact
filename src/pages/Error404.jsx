import React from "react";
import { Link } from "react-router-dom";
import "./Error404.scss";

const Error404 = () => {
  return (
    <main className="error404">
      <h1 className="error404__code">404</h1>
      <h2 className="error404__title">Oops! Page not found</h2>
      <p className="error404__message">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="error404__link">
        Back to Home
      </Link>
    </main>
  );
};

export default Error404;
