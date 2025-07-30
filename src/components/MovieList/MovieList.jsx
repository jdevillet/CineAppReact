import React from "react";
import "./MovieList.scss";
import MovieItem from "../MovieItem/MovieItem";
import PropTypes from "prop-types";

const MovieList = ({ movies, picksList, setPicksList }) => {
  return (
    <div className="movie-cards">
      <ul>
        {movies.length === 0 ? (
          <li>No movies found</li>
        ) : (
          movies.map((movie) => (
            <li key={movie.id}>
              <MovieItem
                movie={movie}
                picksList={picksList}
                setPicksList={setPicksList}
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string,
      vote_average: PropTypes.number,
      overview: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;
