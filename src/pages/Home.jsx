import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Searchbar from "../components/Searchbar/Searchbar";
import MovieList from "../components/MovieList/MovieList";
import { useState } from "react";
import Filter from "../components/Filter/Filter";

const Home = ({ picksList, setPicksList }) => {
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
      <Filter />
      <MovieList
        movies={movies}
        picksList={picksList}
        setPicksList={setPicksList}
      />
    </>
  );
};

export default Home;
