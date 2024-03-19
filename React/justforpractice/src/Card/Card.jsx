import React from "react";

const Card = ({ info, backgrcolor, color, changedcolor }) => {
  return (
    <button
      onClick={changedcolor}
      style={{ backgroundColor: backgrcolor, color: color }}
    >
      {info}
    </button>
  );
};

export default Card;
