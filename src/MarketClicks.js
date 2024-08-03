import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const MarketClicks = ({
  levelMoreClicks,
  levelMoreClicks1,
  levelMoreClicks2,
  levelMoreClicks3,
  levelMoreClicks4,
  levelMoreClicks5,
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
        <div class="title">Clicks lvl {levelMoreClicks}</div>
        <div class="catalog">
          <div class="product-box" onClick={levelMoreClicks1}>
            <div class="product-level">lvl 1</div>
            <div class="product-description">
              2 coins/
              <br />
              click
            </div>
            <div class="product-price">
              100K<div class="korona-price">...</div>
            </div>
          </div>
          <div class="product-box" onClick={levelMoreClicks2}>
            <div class="product-level">lvl 2</div>
            <div class="product-description">
              4 coins/
              <br />
              click
            </div>
            <div class="product-price">
              300K<div class="korona-price">...</div>
            </div>
          </div>
          <div class="product-box" onClick={levelMoreClicks3}>
            <div class="product-level">lvl 3</div>
            <div class="product-description">
              6 coins/
              <br />
              click
            </div>
            <div class="product-price">
              1KK<div class="korona-price">...</div>
            </div>
          </div>
          <div class="product-box" onClick={levelMoreClicks4}>
            <div class="product-level">lvl 4</div>
            <div class="product-description">
              8 coins/
              <br />
              click
            </div>
            <div class="product-price">
              3KK<div class="korona-price">...</div>
            </div>
          </div>
          <div class="product-box" onClick={levelMoreClicks5}>
            <div class="product-level">lvl 5</div>
            <div class="product-description">
              10 coins/
              <br />
              click
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

export default MarketClicks;
