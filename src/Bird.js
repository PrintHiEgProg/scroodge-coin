// Bird.js
import React from "react";

const Bird = ({ birdPosition }) => {
  return (
    <img
      src={"https://printhiegprog.github.io/images-scrooge-coin/bird.webp"}
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
