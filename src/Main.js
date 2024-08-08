import React from "react";
import { useNavigate } from "react-router-dom";

function Main({
  count,
  countTrue,
  handleTouchStart,
  handleTouchEnd,
  messages,
  canClick,
  countBonus,
}) {
  const tg = window.Telegram.WebApp;
  const navigate = useNavigate();

  const handleGameClick = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    navigate("/game");
  };
  return (
    <div className="Main">
      <div class="header">
        <div class="wallet-box">
          <div class="wallet-icon">...</div>
          <div class="wallet-text">Wallet</div>
        </div>
        <div class="counttrue-box">
          <div class="counttrue-icon">...</div>
          <div class="counttrue-text">{countTrue}</div>
        </div>
      </div>
      <div class="title-box">
        <div class="title-main">...</div>
      </div>
      <div class="main-box">
        <div class="main-text">
          <div class="education-text" onClick={handleGameClick}>
            Games
          </div>
          <div class="reflink-text">Ref link</div>
        </div>
        <div class="coin-button-box">
          <button
            class="coin-button"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            disabled={countTrue === 0}
          >
            ...
          </button>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="message"
              style={{
                left: msg.x,
                top: msg.y,
              }}
            >
              +{countBonus}
            </div>
          ))}
        </div>
        <div class="count-box-box">
          <div class="count-box">
            <div class="korona">...</div>
            <div class="count">{count}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
