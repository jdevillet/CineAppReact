import React from "react";

const Filter = () => {
  return (
    <div>
      <input type="checkbox" id="Top" name="Top" checked />
      <label for="Top">Top</label>
      <br />
      <input type="checkbox" id="Flop" name="Flop" />
      <label for="Flop">Flop</label>
    </div>
  );
};

export default Filter;
