import React from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

function Game() {
  const tg = window.Telegram.WebApp;
  const navigate = useNavigate();

  const handleMonopolyClick = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    navigate("/");
  };

  const handleFlappyScroogeClick = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    navigate("/game/flappy-scrooge");
  };

  const handleSlotsScroogeClick = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    navigate("/game/slots-scrooge");
  };

  const handleRunJumpScroogeClick = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    navigate("/game/runjump-scrooge");
  };
  


  return (
    <div className="Game">
      <div class="header">
        <div class="wallet-box">
          <div class="wallet-icon">...</div>
          <div class="wallet-text">Wallet</div>
        </div>
        <div class="close-box" onClick={handleMonopolyClick}>
          <div class="close-icon">...</div>
        </div>
      </div>
      <div class="monopoly-box">
        <div class="title">Games</div>
        <div class="catalog">
          <div class="task-box" onClick={handleFlappyScroogeClick}>
            <div class="product-level">Flappy Scrooge</div>
            <div class="task-price">
              +Energy<div class="counttrue-icon">...</div>
            </div>
          </div>
          <div class="task-box" onClick={handleSlotsScroogeClick}>
            <div class="product-level">Slots Scrooge</div>
            <div class="task-price">
              +Coins<div class="korona">...</div>
            </div>
          </div>
          <div class="task-box" onClick={handleRunJumpScroogeClick}>
            <div class="product-level">Run&Gump Scrooge</div>
            <div class="task-price">
              +Coins<div class="korona">...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Game;
