import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar.js";
import Boost from "./Boost.js";
import Main from "./Main.js";
import Task from "./Task.js";
import Monopoly from "./Monopoly.js";
import MarketFactory from "./MarketFactory.js";
import MarketPowerStation from "./MarketPowerStation.js"
import MarketHotel from "./MarketHotel.js"
import MarketClicks from "./MarketClicks.js";
import MarketEnergy from "./MarketEnergy.js";
import ScroogeGameFlappy from "./ScroogeGameFlappy.js";
import Confetti from "react-confetti";
import Game from "./Game.js";
import Machine from "./Machine.js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function App() {
  const tg = window.Telegram.WebApp;
  const userId = tg.initDataUnsafe.user.id;
  const navigate = useNavigate();
  const [fingerCount, setFingerCount] = useState(0);

  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [messages, setMessages] = useState([]);

  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });
  const [countBonus, setCountBonus] = useState(() => {
    const savedCount = localStorage.getItem("countBonus");
    return savedCount !== null ? parseInt(savedCount, 10) : 1;
  });
  const [countTrueMax, setCountTrueMax] = useState(() => {
    const savedCount = localStorage.getItem("countTrueMax");
    return savedCount !== null ? parseInt(savedCount, 10) : 1000;
  });
  const [countTrueBonus, setCountTrueBonus] = useState(() => {
    const savedCount = localStorage.getItem("countTrueBonus");
    return savedCount !== null ? parseInt(savedCount, 10) : 1;
  });
  const [levelMoreClicks, setLevelMoreClicks] = useState(() => {
    const savedCount = localStorage.getItem("levelMoreClicks");
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });
  const [levelMoreEnergy, setLevelMoreEnergy] = useState(() => {
    const savedCount = localStorage.getItem("levelMoreEnergy");
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });
  const [levelTgChannel1, setLevelTgChannel1] = useState(() => {
    const savedCount = localStorage.getItem("levelTgChannel1");
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });
  const [levelTgPremium, setlevelTgPremium] = useState(() => {
    const savedCount = localStorage.getItem("levelTgPremium");
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });
  const [levelMoreCountTrueBonus, setLevelMoreCountTrueBonus] = useState(() => {
    const savedCount = localStorage.getItem("levelMoreCountTrueBonus");
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });
  const [levelFactory, setLevelFactory] = useState(() => {
    const savedCount = localStorage.getItem("levelFactory");
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });
  const [levelHotel, setLevelHotel] = useState(() => {
    const savedCount = localStorage.getItem("levelHotel");
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });
  const [levelPowerstation, setLevelPowerstation] = useState(() => {
    const savedCount = localStorage.getItem("levelPowerstation");
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });
  const [levelJoinGame, setLevelJoinGame] = useState(() => {
    const savedCount = localStorage.getItem("levelJoinGame");
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });
  const [countTrue, setCountTrue] = useState(() => {
    const savedCount = localStorage.getItem("countTrue");
    return savedCount !== null ? parseInt(savedCount, 10) : 1000;
  });
  const [canClick, setCanClick] = useState(true);
  const [priceMoreClicks, setPriceMoreClicks] = useState(() => {
    const savedCount = localStorage.getItem("priceMoreClicks");
    return savedCount !== null ? parseInt(savedCount, 10) : 1000;
  });
  const [priceMoreEnergy, setPriceMoreEnergy] = useState(() => {
    const savedCount = localStorage.getItem("priceMoreEnergy");
    return savedCount !== null ? parseInt(savedCount, 10) : 2000;
  });
  const [priceMoreCountTrueBonus, setPriceMoreCountTrueBonus] = useState(() => {
    const savedCount = localStorage.getItem("priceMoreCountTrueBonus");
    return savedCount !== null ? parseInt(savedCount, 10) : 3000;
  });
  const [priceLevelFactory1, setPriceLevelFactory1] = useState(100000);
  const [priceLevelFactory2, setPriceLevelFactory2] = useState(300000);
  const [priceLevelFactory3, setPriceLevelFactory3] = useState(1000000);
  const [priceLevelFactory4, setPriceLevelFactory4] = useState(3000000);
  const [priceLevelFactory5, setPriceLevelFactory5] = useState(6000000);
  const [priceLevelPowerstation1, setPriceLevelPowerstation1] = useState(100000);
  const [priceLevelPowerstation2, setPriceLevelPowerstation2] = useState(300000);
  const [priceLevelPowerstation3, setPriceLevelPowerstation3] = useState(1000000);
  const [priceLevelPowerstation4, setPriceLevelPowerstation4] = useState(3000000);
  const [priceLevelPowerstation5, setPriceLevelPowerstation5] = useState(6000000);

  const [priceLevelMoreClicks1, setPriceLevelMoreClicks1] = useState(100000)
  const [priceLevelMoreClicks2, setPriceLevelMoreClicks2] = useState(300000)
  const [priceLevelMoreClicks3, setPriceLevelMoreClicks3] = useState(1000000)
  const [priceLevelMoreClicks4, setPriceLevelMoreClicks4] = useState(3000000)
  const [priceLevelMoreClicks5, setPriceLevelMoreClicks5] = useState(6000000);

  const priceLevelMoreEnergy1 = useState(100000);
  const priceLevelMoreEnergy2 = useState(200000);
  const priceLevelMoreEnergy3 = useState(1000000);
  const priceLevelMoreEnergy4 = useState(200000);
  const priceLevelMoreEnergy5 = useState(400000);

  const [factoryBonus, setFactoryBonus] = useState(() => {
    const savedCount = localStorage.getItem("factoryBonus");
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });

  // Загружаем сохраненное значение count из localStorage при инициализации состояния
   

  useEffect(() => {
    // Сохраняем значение count в localStorage при его изменении
    localStorage.setItem("count", count);
    localStorage.setItem("countBonus", countBonus);
    localStorage.setItem("countTrueMax", countTrueMax);
    localStorage.setItem("countTrueBonus", countTrueBonus);
    localStorage.setItem("levelMoreClicks", levelMoreClicks);
    localStorage.setItem("levelMoreEnergy", levelMoreEnergy);
    localStorage.setItem("levelTgChannel1", levelTgChannel1);
    localStorage.setItem("levelTgPremium", levelTgPremium);
    localStorage.setItem("levelMoreCountTrueBonus", levelMoreCountTrueBonus);
    localStorage.setItem("levelFactory", levelFactory);
    localStorage.setItem("levelHotel", levelHotel);
    localStorage.setItem("levelPowerstation", levelPowerstation);
    localStorage.setItem("levelJoinGame", levelJoinGame);
    localStorage.setItem("countTrue", countTrue);
    localStorage.setItem("priceMoreClicks,", priceMoreClicks);
    localStorage.setItem("priceMoreEnergy", priceMoreEnergy);
    localStorage.setItem("priceMoreCountTrueBonus", priceMoreCountTrueBonus);
    localStorage.setItem("factoryBonus", factoryBonus);
  }, [
    count,
    countBonus,
    countTrueMax,
    countTrueBonus,
    levelMoreClicks,
    levelMoreEnergy,
    levelTgChannel1,
    levelTgPremium,
    levelMoreCountTrueBonus,
    levelFactory,
    levelHotel,
    levelPowerstation,
    levelJoinGame,
    countTrue,
    priceMoreClicks,
    priceMoreEnergy,
    priceMoreCountTrueBonus,
    priceLevelFactory1,
    priceLevelFactory2,
    priceLevelFactory3,
    priceLevelFactory4,
    priceLevelFactory5,
    priceLevelPowerstation1,
    priceLevelPowerstation2,
    priceLevelPowerstation3,
    priceLevelPowerstation4,
    priceLevelPowerstation5,
    factoryBonus
  ]); // Зависимость от переменных, чтобы эффект срабатывал при их изменении

  useEffect(() => {
    const interval = setInterval(() => {
      if (countTrue < countTrueMax) {
        setCountTrue((prevCount) => prevCount + countTrueBonus);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [countTrue]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (factoryBonus > 0) {
        setCount((prevCount) => prevCount + factoryBonus);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);


  const handleTouchStart = (event) => {
    setFingerCount(event.touches.length);
    //count...
    if (canClick) {
      const hapticFeedbackLight = tg.HapticFeedback.impactOccurred("light");
      setCount(count + countBonus);
      
      if (countTrue > 0) {
        setCountTrue(Math.max(countTrue - countBonus, 0));
      }

      setCanClick(false);
      setTimeout(() => {
        setCanClick(true);
      }, 1);
    }
  };

  const handleTouchMove = (event) => {
    setFingerCount(event.touches.length);
    //count...
    if (canClick) {
      const hapticFeedbackLight = tg.HapticFeedback.impactOccurred("light");
      setCount(count + countBonus);
      


      if (countTrue > 0) {
        setCountTrue(Math.max(countTrue - countBonus, 0));
      }

      setCanClick(false);
      setTimeout(() => {
        setCanClick(true);
      }, 1);
    }
  };

  const handleTouchEnd = () => {
    setFingerCount(0);
  };


  
  useEffect(() => {
    if (countTrue === 0) {
      const HapticFeedbackError =
        tg.HapticFeedback.notificationOccurred("warning");
      alert("Scrooge is tired... 😴");
    }
  }, [countTrue]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки данных (можете заменить этот setTimeout на реальную логику загрузки)
    setTimeout(() => {
      setLoading(false); // После завершения загрузки устанавливаем loading в false
    }, 3000); // Пример: имитация загрузки в течение 3 секунд

    // Здесь можно добавить логику для загрузки данных с сервера или другие операции
  }, []);

  

  //Boosts
  const levelMoreClicks1 = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelMoreClicks > 0) {
      alert("This level has already been purchased! ✅");
    } else {
      if (levelMoreClicks === 0) {
        if (window.confirm("Buy it?")) {
          if (count >= priceLevelMoreClicks1) {
            setCount(count - priceLevelMoreClicks1);
            setLevelMoreClicks(levelMoreClicks + 1);
            setCountBonus(countBonus + 1)
          } else {
            alert("Insufficient funds ❌");
          }
        }
      }
    }
  }

  const levelMoreClicks2 = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelMoreClicks > 1) {
      alert("This level has already been purchased! ✅");
    } else {
      if (levelMoreClicks === 1) {
        if (window.confirm("Buy it?")) {
          if (count >= priceLevelMoreClicks2) {
            setCount(count - priceLevelMoreClicks2);
            setLevelMoreClicks(levelMoreClicks + 2);
            setCountBonus(countBonus + 1);
          } else {
            alert("Insufficient funds ❌");
          }
        }
      }
    }
  };

  const levelMoreClicks3 = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelMoreClicks > 2) {
      alert("This level has already been purchased! ✅");
    } else {
      if (levelMoreClicks === 2) {
        if (window.confirm("Buy it?")) {
          if (count >= priceLevelMoreClicks3) {
            setCount(count - priceLevelMoreClicks3);
            setLevelMoreClicks(levelMoreClicks + 1);
            setCountBonus(countBonus + 2);
          } else {
            alert("Insufficient funds ❌");
          }
        }
      }
    }
  };

  const levelMoreClicks4 = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelMoreClicks > 3) {
      alert("This level has already been purchased! ✅");
    } else {
      if (levelMoreClicks === 3) {
        if (window.confirm("Buy it?")) {
          if (count >= priceLevelMoreClicks4) {
            setCount(count - priceLevelMoreClicks4);
            setLevelMoreClicks(levelMoreClicks + 1);
            setCountBonus(countBonus + 2);
          } else {
            alert("Insufficient funds ❌");
          }
        }
      }
    }
  };

  const levelMoreClicks5 = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelMoreClicks > 4) {
      alert("This level has already been purchased! ✅");
    } else {
      if (levelMoreClicks === 4) {
        if (window.confirm("Buy it?")) {
          if (count >= priceLevelMoreClicks5) {
            setCount(count - priceLevelMoreClicks5);
            setLevelMoreClicks(levelMoreClicks + 1);
            setCountBonus(countBonus + 2);
          } else {
            alert("Insufficient funds ❌");
          }
        }
      }
    }
  };


  const levelMoreEnergy1 = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelMoreEnergy > 0) {
      alert("This level has already been purchased! ✅");
    } else {
      if (levelMoreEnergy === 0) {
        if (window.confirm("Buy it?")) {
          if (count >= priceLevelMoreEnergy1) {
            setCount(count - priceLevelMoreEnergy1);
            setLevelMoreEnergy(levelMoreEnergy + 1);
            setCountTrue(countTrue + 500);
            setCountTrueMax(countTrueMax + 500);
          } else {
            alert("Insufficient funds ❌");
          }
        }
      }
    }
  };

  const levelMoreEnergy2 = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelMoreEnergy > 1) {
      alert("This level has already been purchased! ✅");
    } else {
      if (levelMoreEnergy === 1) {
        if (window.confirm("Buy it?")) {
          if (count >= priceLevelMoreEnergy2) {
            setCount(count - priceLevelMoreEnergy2);
            setLevelMoreEnergy(levelMoreEnergy + 1);
            setCountTrue(countTrue + 500);
            setCountTrueMax(countTrueMax + 500);
          } else {
            alert("Insufficient funds ❌");
          }
        }
      }
    }
  };

  const levelMoreEnergy3 = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelMoreEnergy > 2) {
      alert("This level has already been purchased! ✅");
    } else {
      if (levelMoreEnergy === 2) {
        if (window.confirm("Buy it?")) {
          if (count >= priceLevelMoreEnergy3) {
            setCount(count - priceLevelMoreEnergy3);
            setLevelMoreEnergy(levelMoreEnergy + 1);
            setCountTrue(countTrue + 500);
            setCountTrueMax(countTrueMax + 500);
          } else {
            alert("Insufficient funds ❌");
          }
        }
      }
    }
  };

  const levelMoreEnergy4 = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelMoreEnergy > 3) {
      alert("This level has already been purchased! ✅");
    } else {
      if (levelMoreEnergy === 3) {
        if (window.confirm("Buy it?")) {
          if (count >= priceLevelMoreEnergy4) {
            setCount(count - priceLevelMoreEnergy4);
            setLevelMoreEnergy(levelMoreEnergy + 1);
            setCountTrue(countTrue + 500);
            setCountTrueMax(countTrueMax + 500);
          } else {
            alert("Insufficient funds ❌");
          }
        }
      }
    }
  };

  const levelMoreEnergy5 = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelMoreEnergy > 4) {
      alert("This level has already been purchased! ✅");
    } else {
      if (levelMoreEnergy === 4) {
        if (window.confirm("Buy it?")) {
          if (count >= priceLevelMoreEnergy5) {
            setCount(count - priceLevelMoreEnergy5);
            setLevelMoreEnergy(levelMoreEnergy + 1);
            setCountTrue(countTrue + 500);
            setCountTrueMax(countTrueMax + 500);
          } else {
            alert("Insufficient funds ❌");
          }
        }
      }
    }
  };

  const moreClicks = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelMoreClicks === 5) {
      alert("Max level 🔝");
    } else {
      if (
        window.confirm("Here you can buy more clicks in one click 🤑.\nBuy it?")
      ) {
        if (count >= priceMoreClicks) {
          setCount(count - priceMoreClicks);
          setCountBonus(countBonus + 1);
          setLevelMoreClicks(levelMoreClicks + 1);
          setPriceMoreClicks(priceMoreClicks + 1000);
          alert("Thanks for the purchase ✅");
        } else {
          alert("Insufficient funds ❌");
        }
      }
    }
  };

  const MoreCountTrueBonus = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelMoreCountTrueBonus === 10) {
      alert("Max level 🔝");
    } else {
      if (
        window.confirm("Here you can buy more energy to be charged.\nBuy it?")
      ) {
        if (count >= priceMoreCountTrueBonus) {
          setCount(count - priceMoreCountTrueBonus);
          setCountTrueBonus(countTrueBonus + 1);
          setLevelMoreCountTrueBonus(levelMoreCountTrueBonus + 1);
          setPriceMoreCountTrueBonus(priceMoreCountTrueBonus + 2000);
          alert("Thanks for the purchase ✅");
        } else {
          alert("Insufficient funds ❌");
        }
      }
    }
  };

  //Monopoly

  //Factory
  const levelFactory1 = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelFactory > 0) {
      alert("This level has already been purchased! ✅");
    } else {
      if (levelFactory === 0) {
        if (
        window.confirm(
          "Buy it?"
        )
      ) {
        if (count >= priceLevelFactory1) {
          setCount(count - priceLevelFactory1);
          setLevelFactory(levelFactory + 1);
          setFactoryBonus(factoryBonus + 2);
        } else {
          alert("Insufficient funds ❌");
        }
      }}
    }
  };
    
  const levelFactory2 = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelFactory > 1) {
      alert("This level has already been purchased! ✅");
    } else {
      if (levelFactory === 1) {
        if (window.confirm("Buy it?")) {
          if (count >= priceLevelFactory2) {
            setCount(count - priceLevelFactory2);
            setLevelFactory(levelFactory + 1);
            setFactoryBonus(factoryBonus + 2);
          } else {
            alert("Insufficient funds ❌");
          }
        }
      }
    }
  };
  
  const levelFactory3 = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelFactory > 2) {
      alert("This level has already been purchased! ✅");
    } else {
      if (levelFactory === 2) {
        if (window.confirm("Buy it?")) {
          if (count >= priceLevelFactory3) {
            setCount(count - priceLevelFactory3);
            setLevelFactory(levelFactory + 1);
            setFactoryBonus(factoryBonus + 2);
          } else {
            alert("Insufficient funds ❌");
          }
        }
      }
    }
  };

  const levelFactory4 = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelFactory > 3) {
      alert("This level has already been purchased! ✅");
    } else {
      if (levelFactory === 3) {
        if (window.confirm("Buy it?")) {
          if (count >= priceLevelFactory4) {
            setCount(count - priceLevelFactory4);
            setLevelFactory(levelFactory + 1);
            setFactoryBonus(factoryBonus + 2);
          } else {
            alert("Insufficient funds ❌");
          }
        }
      }
    }
  };

  const levelFactory5 = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelFactory > 4) {
      alert("This level has already been purchased! ✅");
    } else {
      if (levelFactory === 4) {
        if (window.confirm("Buy it?")) {
          if (count >= priceLevelFactory5) {
            setCount(count - priceLevelFactory5);
            setLevelFactory(levelFactory + 1);
            setFactoryBonus(factoryBonus + 2);
          } else {
            alert("Insufficient funds ❌");
          }
        }
      }
    }
  };


  //Powerstation

  const levelPowerstation1 = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelPowerstation > 0) {
      alert("This level has already been purchased! ✅");
    } else {
      if (levelPowerstation === 0) {
        if (window.confirm("Buy it?")) {
          if (count >= priceLevelPowerstation1) {
            setCount(count - priceLevelPowerstation1);
            setLevelPowerstation(levelPowerstation + 1);
            setCountTrueBonus(countTrueBonus + 1.5);
          } else {
            alert("Insufficient funds ❌");
          }
        }
      }
    }
  };

  const levelPowerstation2 = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelPowerstation > 1) {
      alert("This level has already been purchased! ✅");
    } else {
      if (levelPowerstation === 1) {
        if (window.confirm("Buy it?")) {
          if (count >= priceLevelPowerstation2) {
            setCount(count - priceLevelPowerstation2);
            setLevelPowerstation(levelPowerstation + 1);
            setCountTrueBonus(countTrueBonus + 2);
          } else {
            alert("Insufficient funds ❌");
          }
        }
      }
    }
  };

  const levelPowerstation3 = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelPowerstation > 2) {
      alert("This level has already been purchased! ✅");
    } else {
      if (levelPowerstation === 2) {
        if (window.confirm("Buy it?")) {
          if (count >= priceLevelPowerstation3) {
            setCount(count - priceLevelPowerstation3);
            setLevelPowerstation(levelPowerstation + 1);
            setCountTrueBonus(countTrueBonus + 2.5);
          } else {
            alert("Insufficient funds ❌");
          }
        }
      }
    }
  };

  const levelPowerstation4 = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelPowerstation > 3) {
      alert("This level has already been purchased! ✅");
    } else {
      if (levelPowerstation === 3) {
        if (window.confirm("Buy it?")) {
          if (count >= priceLevelPowerstation4) {
            setCount(count - priceLevelPowerstation4);
            setLevelPowerstation(levelPowerstation + 1);
            setCountTrueBonus(countTrueBonus + 3);
          } else {
            alert("Insufficient funds ❌");
          }
        }
      }
    }
  };

  const levelPowerstation5 = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelPowerstation > 4) {
      alert("This level has already been purchased! ✅");
    } else {
      if (levelPowerstation === 4) {
        if (window.confirm("Buy it?")) {
          if (count >= priceLevelPowerstation5) {
            setCount(count - priceLevelPowerstation5);
            setLevelPowerstation(levelPowerstation + 1);
            setCountTrueBonus(countTrueBonus + 3.5);
          } else {
            alert("Insufficient funds ❌");
          }
        }
      }
    }
  };
  //Hotel


  //Tasks

  const JoinGame = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelJoinGame === 1) {
      alert("You have already completed this task ✅");
    } else {
      setIsConfettiActive(true);
      setTimeout(() => {
        setIsConfettiActive(false);
      }, 7000);
      setLevelJoinGame(levelJoinGame + 1);
      setCount(count + 100000);
      alert("Welcome to the game!!! You get +100000 coins. 🎁");
    }
  };

  const TgPremium = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelTgPremium === 1) {
      alert("You have already completed this task ✅");
    } else {
      if (
        window.confirm(
          "If you have Telegram premium you get +20,000 coins.\nTo execute?"
        )
      ) {
        if (tg.initDataUnsafe.user.is_premium) {
          setCount(count + 20000);
          setlevelTgPremium(levelTgPremium + 1);
          alert("Yoooo!\nCongratulations on buying TG Premium! ⭐️");
        } else {
          alert("Sorry, but you don't have tg premium 😔");
        }
      }
    }
  };

  const TgChannel1 = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelTgChannel1 === 1) {
      alert("You have already completed this task ✅");
    } else {
      //тут должна быть проверка
      if (false) {
        //здесь вместо false должен быть вывод проверки
        setCount(count + 20000);
        setLevelTgChannel1(levelTgChannel1 + 1);
        alert("You are subscribed to the channel! ✅");
      } else {
        if (
          window.confirm(
            "If you subscribe to the TG channel, you get +10,000 coins. To execute?"
          )
        ) {
          setCount(count + 20000);
          tg.openTelegramLink("https://t.me/deanon_team_blog");
          
        }
      }
    }
  };

   const handleGameClick = () => {
     const tg = window.Telegram.WebApp;
     const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
     navigate("/game");
   };

  return (
    <div className="App">
      {loading ? (
        <div className="Loading-page">
          <h1 className="title"></h1>
          <img
            className="loading-wheel"
            src="https://printhiegprog.github.io/loading-wheel.png"
            alt="loading-wheel"
          />
          <div className="contact"></div>
        </div>
      ) : (
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Main
                  count={count}
                  handleTouchStart={handleTouchStart}
                  handleTouchMove={handleTouchMove}
                  handleTouchEnd={handleTouchEnd}
                  countTrue={countTrue}
                  canClick={canClick}
                  messages={messages}
                  countBonus={countBonus}
                />
              }
            />
            <Route
              path="/boost"
              element={
                <Boost
                  levelMoreClicks={levelMoreClicks}
                  levelMoreEnergy={levelMoreEnergy}
                  levelMoreCountTrueBonus={levelMoreCountTrueBonus}
                />
              }
            />
            <Route
              path="/task"
              element={
                <Task
                  JoinGame={JoinGame}
                  TgPremium={TgPremium}
                  TgChannel1={TgChannel1}
                  isConfettiActive={isConfettiActive}
                />
              }
            />
            <Route
              path="/monopoly"
              element={
                <Monopoly
                  levelFactory={levelFactory}
                  levelPowerstation={levelPowerstation}
                  levelHotel={levelHotel}
                />
              }
            />
            <Route
              path="/monopoly/market-factory"
              element={
                <MarketFactory
                  levelFactory={levelFactory}
                  levelFactory1={levelFactory1}
                  levelFactory2={levelFactory2}
                  levelFactory3={levelFactory3}
                  levelFactory4={levelFactory4}
                  levelFactory5={levelFactory5}
                />
              }
            />
            <Route
              path="/monopoly/market-powerstation"
              element={
                <MarketPowerStation
                  levelPowerstation={levelPowerstation}
                  levelPowerstation1={levelPowerstation1}
                  levelPowerstation2={levelPowerstation2}
                  levelPowerstation3={levelPowerstation3}
                  levelPowerstation4={levelPowerstation4}
                  levelPowerstation5={levelPowerstation5}
                />
              }
            />
            <Route
              path="/monopoly/market-hotel"
              element={<MarketHotel levelHotel={levelHotel} />}
            />

            <Route path="/game" element={<Game />} />

            <Route
              path="/game/flappy-scrooge"
              element={
                <ScroogeGameFlappy
                  countTrue={countTrue}
                  setCountTrue={setCountTrue}
                />
              }
            />
            <Route
              path="/boost/market-clicks"
              element={
                <MarketClicks
                  levelMoreClicks={levelMoreClicks}
                  levelMoreClicks1={levelMoreClicks1}
                  levelMoreClicks2={levelMoreClicks2}
                  levelMoreClicks3={levelMoreClicks3}
                  levelMoreClicks4={levelMoreClicks4}
                  levelMoreClicks5={levelMoreClicks5}
                />
              }
            />
            <Route
              path="/boost/market-energy"
              element={
                <MarketEnergy
                  levelMoreEnergy={levelMoreEnergy}
                  levelMoreEnergy1={levelMoreEnergy1}
                  levelMoreEnergy2={levelMoreEnergy2}
                  levelMoreEnergy3={levelMoreEnergy3}
                  levelMoreEnergy4={levelMoreEnergy4}
                  levelMoreEnergy5={levelMoreEnergy5}
                />
              }
            />
            <Route
              path="/game/slots-scrooge"
              element={
                <Machine
                  count={count}
                  setCount={setCount}
                  handleGameClick={handleGameClick}
                />
              }
            />
          </Routes>
          <NavBar />
        </Router>
      )}
    </div>
  );
}

export default App;
