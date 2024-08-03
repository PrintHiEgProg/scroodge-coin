// Pipes.js

import React from "react";

const Pipes = ({ pipePosition }) => {
  return (
    <img
      src={"https://printhiegprog.github.io/images-scrooge-coin/pipe.webp"}
      alt="pipe"
      className="pipe"
      style={{
        left: pipePosition.x,
        top: pipePosition.y,
      }}
      draggable={true}
    />
  );
};

export default Pipes;
