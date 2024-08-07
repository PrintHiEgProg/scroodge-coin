import React, { useEffect, useRef } from "react";
import "./App.css";

const Sprite = ({
  width = 1000,
  height = 100,
  numberOfFrames = 10,
  ticksPerFrame = 4,
  src,
}) => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const frameIndexRef = useRef(0);
  const tickCountRef = useRef(0);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    imageRef.current = image;

    const ctx = canvasRef.current.getContext("2d");
    let animationFrameId;

    const loop = () => {
      tickCountRef.current++;
      if (tickCountRef.current > ticksPerFrame) {
        tickCountRef.current = 0;
        if (frameIndexRef.current < numberOfFrames - 1) {
          frameIndexRef.current++;
        } else {
          frameIndexRef.current = 0;
        }
      }

      ctx.clearRect(0, 0, width / numberOfFrames, height);
      ctx.drawImage(
        imageRef.current,
        (frameIndexRef.current * width) / numberOfFrames,
        0,
        width / numberOfFrames,
        height,
        0,
        0,
        width / numberOfFrames,
        height
      );

      animationFrameId = window.requestAnimationFrame(loop);
    };

    image.onload = () => {
      loop();
    };

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [src, width, height, numberOfFrames, ticksPerFrame]);

  return (
    <canvas
      ref={canvasRef}
      width={width / numberOfFrames}
      height={height}
    ></canvas>
  );
};

const Loading = () => {
  return (
    <div className="Loading">
      <div className="loading-container">
        <Sprite
          src="https://www.cat-in-web.ru/wp-content/uploads/coin-sprite-animation.png"
          width={1000}
          height={100}
          numberOfFrames={10}
          ticksPerFrame={2}
        />
      </div>
    </div>
  );
};

export default Loading;
