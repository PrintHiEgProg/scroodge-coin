import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const MarketEnergy = ({
  levelMoreEnergy,
  levelMoreEnergy1,
  levelMoreEnergy2,
  levelMoreEnergy3,
  levelMoreEnergy4,
  levelMoreEnergy5,
}) => {
  const tg = window.Telegram.WebApp;
  const navigate = useNavigate();

  const handleMonopolyClick = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    navigate("/boost");
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
        <div class="title">Energy lvl {levelMoreEnergy}</div>
        <div class="catalog">
          <div class="product-box" onClick={levelMoreEnergy1}>
            <div class="product-level">lvl 1</div>
            <div class="product-description">
              1500 energy
            </div>
            <div class="product-price">
              100K<div class="korona-price">...</div>
            </div>
          </div>
          <div class="product-box" onClick={levelMoreEnergy2}>
            <div class="product-level">lvl 2</div>
            <div class="product-description">
              2000 energy
            </div>
            <div class="product-price">
              200K<div class="korona-price">...</div>
            </div>
          </div>
          <div class="product-box" onClick={levelMoreEnergy3}>
            <div class="product-level">lvl 3</div>
            <div class="product-description">
              2500 energy
            </div>
            <div class="product-price">
              1KK<div class="korona-price">...</div>
            </div>
          </div>
          <div class="product-box" onClick={levelMoreEnergy4}>
            <div class="product-level">lvl 4</div>
            <div class="product-description">
              3000 energy
            </div>
            <div class="product-price">
              2KK<div class="korona-price">...</div>
            </div>
          </div>
          <div class="product-box" onClick={levelMoreEnergy5}>
            <div class="product-level">lvl 5</div>
            <div class="product-description">
              3500 energy
            </div>
            <div class="product-price">
              4KK<div class="korona-price">...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketEnergy;
