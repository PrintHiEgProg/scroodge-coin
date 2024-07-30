import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Monopoly = ({
  FactoryShoes,
  priceFactoryShoes,
  levelFactoryShoes,
  FactoryHotel,
  priceFactoryHotel,
  levelFactoryHotel,
  FactoryBank,
  priceFactoryBank,
  levelFactoryBank
}) => {

  const [currentIndex, setCurrentIndex] = useState(2);
  const images = [
    //картинка номер три
    "https://cdn1.picturebb.com/1/2024/07/30/7TDaN.webp",
    //картинка номер два
    "https://cdn1.picturebb.com/1/2024/07/30/7TaOS.webp",
    //картинка номер один
    "https://cdn1.picturebb.com/1/2024/07/30/7TKnd.webp",
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
        
        const handleHotelClick = () => {
          alert("Hotel");
          const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
          navigate("/monopoly/market-hotel");
        };
        break;
      case 1:
        const handlePowerStationClick = () => {
          const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
          navigate("/monopoly/market-powerstation");
        };

        break;
      case 2:
        const handleFactoryClick = () => {
          const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
          navigate("/monopoly/market-factory");
        };

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
        <div class="title">Monopoly</div>

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
          {currentIndex === 0 && `Hotel lvl ${levelFactoryHotel}`}
          {currentIndex === 1 && `Powerstation lvl ${levelFactoryShoes}`}
          {currentIndex === 2 && `Factory lvl ${levelFactoryBank}`}
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
};

export default Monopoly;
