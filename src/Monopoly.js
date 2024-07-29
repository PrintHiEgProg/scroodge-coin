import React, { useEffect, useState } from "react";

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
  const tg = window.Telegram.WebApp;
  
  const [currentIndex, setCurrentIndex] = useState(2);
  const images = [
    "https://cdn.discordapp.com/attachments/1243965505513984013/1267285575010877460/Remove-bg.ai_1722090065984.png?ex=66a83b2a&is=66a6e9aa&hm=8efbedb72d3b5a50fe96cda0e14637aac960a222c9a7c98eae7895eccab8ea83&",
    "https://cdn.discordapp.com/attachments/1243965505513984013/1267285574490914937/IMG_7542.png?ex=66a83b29&is=66a6e9a9&hm=6a98600c5e3065a2f77ab8432955e62054506cde04421cf0b2535458c4cd613e&",
    "https://cdn.discordapp.com/attachments/1243965505513984013/1267285574075551764/IMG_7537.png?ex=66a83b29&is=66a6e9a9&hm=27177901e6ae6e58ffc1d49a1646eafeb73e4332772f1289eb8d80d264b1fc6b&",
  ];
  const handleSwipe = (direction) => {
    if (direction === "left") {
      setCurrentIndex((currentIndex + 1) % images.length);
    } else if (direction === "right") {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    }
  };

  const handleButtonClick = () => {
    switch (currentIndex) {
      case 0:
        alert("Hotel");

        break;
      case 1:
        alert("Powerstation");

        break;
      case 2:
        alert("Factory");

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
    </div>
  );
};

export default Monopoly;
