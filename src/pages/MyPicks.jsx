import React from "react";
import Navigation from "../components/Navigation/Navigation";
import MyPicksList from "../components/MyPicksList/MyPicksList";
import Filter from "../components/Filter/Filter";

const MyPicks = ({ picksList, setPicksList }) => {
  return (
    <>
      <Navigation />
      <Filter />
      <MyPicksList setPicksList={setPicksList} picksList={picksList} />
    </>
  );
};

export default MyPicks;
