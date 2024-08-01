import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const MarketPowerStation = (
  {levelPowerstation,
  levelPowerstation1,
  levelPowerstation2,
  levelPowerstation3,
  levelPowerstation4,
  levelPowerstation5,}
) => {
  const tg = window.Telegram.WebApp;
  const navigate = useNavigate();

  const handleMonopolyClick = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    navigate("/monopoly");
  };

  return (
    <div className="MarketFactory">
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
              <div class="title">Powerstation lvl {levelPowerstation}</div>
        <div class="catalog">
          <div class="product-box" onClick={levelPowerstation1}>
            <div class="product-level">lvl 1</div>
            <div class="product-description">
              + 10 energy/
              <br />
              second
            </div>
            <div class="product-price">
              100K<div class="korona-price">...</div>
            </div>
          </div>
          <div class="product-box" onClick={levelPowerstation2}>
            <div class="product-level">lvl 2</div>
            <div class="product-description">
              + 100 energy/
              <br />
              hour
            </div>
            <div class="product-price">
              100K<div class="korona-price">...</div>
            </div>
          </div>
          <div class="product-box" onClick={levelPowerstation3}>
            <div class="product-level">lvl 3</div>
            <div class="product-description">
              + 1000 energy/
              <br />
              hour
            </div>
            <div class="product-price">
              100K<div class="korona-price">...</div>
            </div>
          </div>
          <div class="product-box" onClick={levelPowerstation4}>
            <div class="product-level">lvl 4</div>
            <div class="product-description">
              + 2000 energy/
              <br />
              hour
            </div>
            <div class="product-price">
              100K<div class="korona-price">...</div>
            </div>
          </div>
          <div class="product-box" onClick={levelPowerstation5}>
            <div class="product-level">lvl 5</div>
            <div class="product-description">
              + 5000 energy/
              <br />
              hour
            </div>
            <div class="product-price">
              100K<div class="korona-price">...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPowerStation;
