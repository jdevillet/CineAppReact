import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Searchbar from "../components/Searchbar/Searchbar";
import MovieCards from "../components/MovieCards/MovieCards ";
import { useState } from "react";

const Home = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  return (
    <>
      <Navigation />
      <Searchbar
        query={query}
        setQuery={setQuery}
        setMovies={setMovies}
        error={error}
        setError={setError}
      />
      <MovieCards movies={movies} />
    </>
  );
};

export default Home;
