import React from "react";

function Boost({
  count,
  moreClicks,
  priceMoreClicks,
  levelMoreClicks,
  moreEnergy,
  priceMoreEnergy,
  levelMoreEnergy,
  MoreCountTrueBonus,
  levelMoreCountTrueBonus,
  priceMoreCountTrueBonus
}) {
  return (
    <div className="Boost">
      <h2 className="title">Boost</h2>
      <p className="count-click">{count}</p>
      <div className="catalog">
        <div className="card" onClick={moreClicks}>
          <div className="card-img"></div>
          <div className="card-text">
            <b>more clicks</b>
          </div>
          <hr className="card-hr" />
          <div className="card-footer">
            <div className="card-level">{levelMoreClicks} lv</div>
            <div className="card-price">{priceMoreClicks}</div>
            <div className="card-money"></div>
          </div>
        </div>
        <div className="card" onClick={moreEnergy}>
          <div className="card-text">
            <b>more enegry</b>
          </div>
          <hr className="card-hr" />
          <div className="card-footer">
            <div className="card-level">{levelMoreEnergy} lv</div>
            <div className="card-price">{priceMoreEnergy}</div>
            <div className="card-money"></div>
          </div>
        </div>
        <div className="card" onClick={MoreCountTrueBonus}>
          <div className="card-img"></div>
          <div className="card-text">
            <b>more +enegry</b>
          </div>
          <hr className="card-hr" />
          <div className="card-footer">
            <div className="card-level">{levelMoreCountTrueBonus} lv</div>
            <div className="card-price">{priceMoreCountTrueBonus}</div>
            <div className="card-money"></div>
          </div>
        </div>
        <h4 className="title">factories</h4>
        
      </div>
    </div>
  );
}
export default Boost;
