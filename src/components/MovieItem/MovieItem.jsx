import React from "react";
import PropTypes from "prop-types";
import AddButton from "../AddButton/AddButton";
import "./MovieItem.scss";

const MovieItem = ({ movie, picksList = [], setPicksList }) => {
  const isAlreadyPicked = picksList.some((m) => m.id === movie.id);

  const onAddPick = () => {
    if (!isAlreadyPicked) {
      setPicksList((prev) => [...prev, movie]);
    }
  };

  const onRemovePick = () => {
    setPicksList((prev) => prev.filter((item) => item.id !== movie.id));
  };

  return (
    <div className="movie">
      <img
        className="movie__poster"
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt={"Poster of " + movie.title}
        style={{ maxWidth: "400px" }}
      />
      <p className="movie__title">{movie.title}</p>
      <p className="movie__vote">{movie.vote_average}</p>
      <p className="movie__overview">{movie.overview}</p>
      {isAlreadyPicked ? (
        <button onClick={onRemovePick}>Remove from MyPicks</button>
      ) : (
        <AddButton onAdd={onAddPick} />
      )}
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string,
  }).isRequired,
};

export default MovieItem;
