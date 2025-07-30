import React from "react";

const AddButton = ({ onAdd }) => {
  return (
    <button onClick={onAdd} className="new-pick">
      Add To My Picks
    </button>
  );
};

export default AddButton;
