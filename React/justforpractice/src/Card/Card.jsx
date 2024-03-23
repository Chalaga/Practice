import React from "react";

const Card = ({ buttonValues, bckcolor, handleColorChange }) => {
  return (
    <div className="buttoncontainer">
      {buttonValues.map((value, index) => (
        <button
          style={{ backgroundColor: bckcolor === index ? "white" : "black" }}
          onClick={() => handleColorChange(index)}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default Card;
