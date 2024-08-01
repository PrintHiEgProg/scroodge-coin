// Pipes.js

import React from "react";

const Pipes = ({ pipePosition }) => {
  return (
    <img
      src={"https://cdn1.picturebb.com/1/2024/08/01/O2d9r.png"}
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
