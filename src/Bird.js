// Bird.js
import React from "react";

const Bird = ({ birdPosition }) => {
  return (
    <img
      src={"https://cdn1.picturebb.com/1/2024/07/31/Of0RZ.png"}
      alt="bird"
      className="bird"
      style={{
        left: birdPosition.x,
        top: birdPosition.y,
      }}
      draggable={true}
    />
  );
};

export default Bird;
