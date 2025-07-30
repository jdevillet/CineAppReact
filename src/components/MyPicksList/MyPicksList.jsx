import React from "react";
import AddButton from "../AddButton/AddButton";
import MovieItem from "../MovieItem/MovieItem";

const MyPicksList = ({ picksList, setPicksList }) => {
  return (
    <ul>
      {picksList.length === 0 ? (
        <li>You don't have any picks</li>
      ) : (
        picksList.map((movie) => (
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
  );
};

export default MyPicksList;
