import React from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

function Task({ JoinGame, TgPremium, TgChannel1, isConfettiActive }) {
  const tg = window.Telegram.WebApp;
  const navigate = useNavigate();

  const handleMonopolyClick = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    navigate("/");
  };
  return (
    <div className="Task">
      <div class="header">
        {isConfettiActive && (
          <Confetti
            count={100}
            size={20}
            gravity={0.1}
            colors={["#FF69B4", "#FFC67D", "#8BC34A"]}
            style={{ width: "100%", height: "100vh" }}
          />
        )}
        <div class="wallet-box">
          <div class="wallet-icon">...</div>
          <div class="wallet-text">Wallet</div>
        </div>
        <div class="close-box" onClick={handleMonopolyClick}>
          <div class="close-icon">...</div>
        </div>
      </div>
      <div class="monopoly-box">
        <div class="title">Tasks</div>
        <div class="catalog">
          <div class="task-box" onClick={JoinGame}>
            <div class="product-level">Welcome Game!</div>
            <div class="task-price">
              +100K<div class="korona-price">...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Task;
