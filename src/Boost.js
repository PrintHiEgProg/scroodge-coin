import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Boost({
  levelMoreClicks,
  levelMoreEnergy,
  levelMoreCountTrueBonus,
}) {

  const [currentIndex, setCurrentIndex] = useState(2);
  const images = [
    // картинка номер три
    "https://printhiegprog.github.io/images-scrooge-coin/bonuses.webp",
    // картинка номер два
    "https://printhiegprog.github.io/images-scrooge-coin/clicks.webp",
    // картинка номер один
    "https://printhiegprog.github.io/images-scrooge-coin/energy.webp",
  ];
  const handleSwipe = (direction) => {
    if (direction === "left") {
      setCurrentIndex((currentIndex + 1) % images.length);
    } else if (direction === "right") {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    }
  };

  const tg = window.Telegram.WebApp;
  const navigate = useNavigate();

  const handleHomeClick = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    navigate("/");
  };

  const handleButtonClick = () => {
    switch (currentIndex) {
      case 0:
        const hapticFeedbackSoft1 = tg.HapticFeedback.impactOccurred("soft");
        alert("Comming soon...");

        break;
      case 1:
        const hapticFeedbackSoft2 = tg.HapticFeedback.impactOccurred("soft");
        navigate("/boost/market-clicks");

        break;
      case 2:
        const hapticFeedbackSoft3 = tg.HapticFeedback.impactOccurred("soft");
        navigate("/boost/market-energy");

        break;
      default:
        break;
    }
  };
  return (
    <div className="Monopoly">
      <div class="header">
        <div class="wallet-box">
          <div class="wallet-icon">...</div>
          <div class="wallet-text">Wallet</div>
        </div>
        <div class="close-box" onClick={handleHomeClick}>
          <div class="close-icon">...</div>
        </div>
      </div>
      <div class="monopoly-box">
        <div class="title">Boosts</div>

        <div className="gallery">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Картинка ${index + 1}`}
              className={`image ${currentIndex === index ? "active" : ""} `}
            />
          ))}
        </div>
        <div className="swipe-container">
          <div className="swipe-left" onClick={() => handleSwipe("left")}>
            &#8249;
          </div>
          <div className="swipe-right" onClick={() => handleSwipe("right")}>
            &#8250;
          </div>
        </div>
        <div className="monopoly-title">
          {currentIndex === 0 && `Fast energy lvl ${levelMoreCountTrueBonus}`}
          {currentIndex === 1 && `Clicks lvl ${levelMoreClicks}`}
          {currentIndex === 2 && `Energy lvl ${levelMoreEnergy}`}
        </div>
        <div class="upgrade-btn-box">
          <button class="upgrade-btn" onClick={handleButtonClick}>
            Upgrade
          </button>
        </div>
      </div>
      <div class="container-for-navbar"></div>
    </div>
  );
}
export default Boost;
