import React from "react";
import { useEffect } from "react";
import api, { getPopularMovies } from "../../services/api";

const Searchbar = ({ query, setQuery, setMovies, error, setError }) => {
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let data;

        if (!query || query.trim() === "") {
          data = await getPopularMovies();
        } else {
          data = await api(query);
        }
        setMovies(data.results);
        setError(null);
      } catch {
        setError("Failed to fetch movies");
        setMovies([]);
      }
    };

    const delayDebounce = setTimeout(() => {
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
