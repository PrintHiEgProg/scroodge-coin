import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const MarketFactory = (levelFactory, levelFactory1, levelFactory2, levelFactory3, levelFactory4, levelFactory5) => {
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
        <div class="title">Factory lvl {levelFactory}</div>
        <div class="catalog">
          <div class="product-box" onClick={levelFactory1}>
            <div class="product-level">lvl 1</div>
            <div class="product-description">
              2000 coins/
              <br />
              hour
            </div>
            <div class="product-price">
              100K<div class="korona-price">...</div>
            </div>
          </div>
          <div class="product-box" onClick={levelFactory2}>
            <div class="product-level">lvl 2</div>
            <div class="product-description">
              4000 coins/
              <br />
              hour
            </div>
            <div class="product-price">
              300K<div class="korona-price">...</div>
            </div>
          </div>
          <div class="product-box" onClick={levelFactory3}>
            <div class="product-level">lvl 3</div>
            <div class="product-description">
              8000 coins/
              <br />
              hour
            </div>
            <div class="product-price">
              1KK<div class="korona-price">...</div>
            </div>
          </div>
          <div class="product-box" onClick={levelFactory4}>
            <div class="product-level">lvl 4</div>
            <div class="product-description">
              12000 coins/
              <br />
              hour
            </div>
            <div class="product-price">
              3KK<div class="korona-price">...</div>
            </div>
          </div>
          <div class="product-box" onClick={levelFactory5}>
            <div class="product-level">lvl 5</div>
            <div class="product-description">
              16000 coins/
              <br />
              hour
            </div>
            <div class="product-price">
              6KK<div class="korona-price">...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketFactory;
