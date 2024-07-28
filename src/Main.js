import React from "react";

function Main({count, countTrue, handleClick, canClick}) {
    
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
        <div class="title">...</div>
      </div>
      <div class="main-box">
        <div class="main-text">
          <div class="education-text">Education</div>
          <div class="reflink-text">Ref link</div>
        </div>
        <div class="coin-button-box">
          <button
            class="coin-button"
            onClick={handleClick}
            disabled={!canClick || countTrue === 0}
          >
            ...
          </button>
        </div>
        <div class="count-box-box">
          <div class="count-box">
            <div class="korona">...</div>
            <div class="count">10000</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
