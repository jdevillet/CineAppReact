import React from "react";
import { useEffect } from "react";
import api from "../../services/api";

const Searchbar = ({ query, setQuery, setMovies, error, setError }) => {
  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }
    const delayDebounce = setTimeout(() => {
      const fetchMovies = async () => {
        try {
          const data = await api(query);
          setMovies(data.results);
          setError(null);
        } catch {
          setError("Failed to fetch movies");
          setMovies([]);
        }
      };
      fetchMovies();
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [query, setError, setMovies]);

  return (
    <div className="searchbar-container">
      <input
        type="text"
        value={query}
        placeholder="Look for a movie"
        onChange={(e) => setQuery(e.target.value)}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Searchbar;
// {movies.length > 0
//           ? movies.map((movie) => <li key={movie.id}>{movie.title}</li>)
//           : search && <li>No movies found.</li>}
