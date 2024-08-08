import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import CloseForMachine from "./Machine.js"


const DinoGame = ({ count, setCount }) => {
  const navigate = useNavigate();
  const tg = window.Telegram.WebApp;
  const [score, setScore] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [isAlive, setIsAlive] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const dinoRef = useRef(null);
  const cactusRef = useRef(null);

  const handleGameClick = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    navigate("/game");
  };

  const jump = () => {
    if (!isJumping) {
      setIsJumping(true);
      setScore(score + 1);
      setTimeout(() => {
        setIsJumping(false);
      }, 700);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === " ") {
        jump();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isJumping]);

  useEffect(() => {
    const checkCollision = () => {
      if (!isAlive) return;

      const dinoTop = parseInt(
        window.getComputedStyle(dinoRef.current).getPropertyValue("top")
      );
      const cactusLeft = parseInt(
        window.getComputedStyle(cactusRef.current).getPropertyValue("left")
      );

      if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        setScore(score - score);
        setCount(count + score);
        alert("Game Over!!!");
        setIsAlive(true);
        
      }
    };

    const interval = setInterval(checkCollision, 10);
    return () => clearInterval(interval);
  }, [isAlive]);

  return (
    <div className="DinoGame" onClick={jump}>
      <CloseForMachine />
      <div className="game">
        <div className="score-for-dinogame">Score: {score}</div>
        <div
          ref={dinoRef}
          id="dino"
          className={isJumping ? "jump" : ""}
          style={{ top: isJumping ? "80px" : "150px" }}
        ></div>
        {isAlive && (
          <div
            ref={cactusRef}
            id="cactus"
            style={{ left: "580px" }}
            className="cactus"
          ></div>
        )}
        <hr className="line-dino-game" />
      </div>
    </div>
  );
};

export default DinoGame;
