import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const MarketFactory = () => {
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
        <div class="title">Factory lvl 0</div>
        <div class="catalog">
          <div class="product-box">
            <div class="product-level">lvl 1</div>
            <div class="product-description">
              X 1.5 energy/
              <br />
              hour
            </div>
            <div class="product-price">
              100K<div class="korona-price">...</div>
            </div>
          </div>
          <div class="product-box">
            <div class="product-level">lvl 2</div>
            <div class="product-description">
              X 2 energy/
              <br />
              hour
            </div>
            <div class="product-price">
              100K<div class="korona-price">...</div>
            </div>
          </div>
          <div class="product-box">
            <div class="product-level">lvl 3</div>
            <div class="product-description">
              X 2.5 energy/
              <br />
              hour
            </div>
            <div class="product-price">
              100K<div class="korona-price">...</div>
            </div>
          </div>
          <div class="product-box">
            <div class="product-level">lvl 4</div>
            <div class="product-description">
              X 3 energy/
              <br />
              hour
            </div>
            <div class="product-price">
              100K<div class="korona-price">...</div>
            </div>
          </div>
          <div class="product-box">
            <div class="product-level">lvl 5</div>
            <div class="product-description">
              X 3.5 energy/
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

export default MarketFactory;
