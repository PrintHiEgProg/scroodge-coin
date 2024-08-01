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
import ScroogeGameFlappy from "./ScroogeGameFlappy.js";
import Confetti from "react-confetti";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function App() {
  const tg = window.Telegram.WebApp;
  const userId = tg.initDataUnsafe.user.id;

  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });
  const [countBonus, setCountBonus] = useState(() => {
    const savedCount = localStorage.getItem("countBonus");
    return savedCount !== null ? parseInt(savedCount, 10) : 1;
  });
  const [countTrueMax, setcountTrueMax] = useState(() => {
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
  const [priceLevelFactory1, setPriceLevelFactory1] = useState(() => {
    const savedCount = localStorage.getItem("priceLevelFactory1");
    return savedCount !== null ? parseInt(savedCount, 10) : 100000;
  });
  const [priceLevelFactory2, setPriceLevelFactory2] = useState(() => {
    const savedCount = localStorage.getItem("priceLevelFactory2");
    return savedCount !== null ? parseInt(savedCount, 10) : 300000;
  });
  const [priceLevelFactory3, setPriceLevelFactory3] = useState(() => {
    const savedCount = localStorage.getItem("priceLevelFactory3");
    return savedCount !== null ? parseInt(savedCount, 10) : 1000000;
  });
  const [priceLevelFactory4, setPriceLevelFactory4] = useState(() => {
    const savedCount = localStorage.getItem("priceLevelFactory4");
    return savedCount !== null ? parseInt(savedCount, 10) : 3000000;
  });
  const [priceLevelFactory5, setPriceLevelFactory5] = useState(() => {
    const savedCount = localStorage.getItem("priceLevelFactory5");
    return savedCount !== null ? parseInt(savedCount, 10) : 6000000;
  });
  const [priceLevelPowerstation1, setPriceLevelPowerstation1] = useState(() => {
    const savedCount = localStorage.getItem("priceLevelPowerstation1");
    return savedCount !== null ? parseInt(savedCount, 10) : 100000;
  });
  const [priceLevelPowerstation2, setPriceLevelPowerstation2] = useState(() => {
    const savedCount = localStorage.getItem("priceLevelPowerstation2");
    return savedCount !== null ? parseInt(savedCount, 10) : 300000;
  });
  const [priceLevelPowerstation3, setPriceLevelPowerstation3] = useState(() => {
    const savedCount = localStorage.getItem("priceLevelPowerstation3");
    return savedCount !== null ? parseInt(savedCount, 10) : 1000000;
  });
  const [priceLevelPowerstation4, setPriceLevelPowerstation4] = useState(() => {
    const savedCount = localStorage.getItem("priceLevelPowerstation4");
    return savedCount !== null ? parseInt(savedCount, 10) : 3000000;
  });
  const [priceLevelPowerstation5, setPriceLevelPowerstation5] = useState(() => {
    const savedCount = localStorage.getItem("priceLevelPowerstation5");
    return savedCount !== null ? parseInt(savedCount, 10) : 6000000;
  });
  const [priceHotel, setPriceHotel] = useState(() => {
    const savedCount = localStorage.getItem("priceHotel");
    return savedCount !== null ? parseInt(savedCount, 10) : 10000;
  });
  const [pricePowerstation, setPricePowerstation] = useState(() => {
    const savedCount = localStorage.getItem("pricePowerstation");
    return savedCount !== null ? parseInt(savedCount, 10) : 100000;
  });
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
    localStorage.setItem("priceLevelFactory1", priceLevelFactory1);
    localStorage.setItem("priceLevelFactory2", priceLevelFactory2);
    localStorage.setItem("priceLevelFactory3", priceLevelFactory3);
    localStorage.setItem("priceLevelFactory4", priceLevelFactory4);
    localStorage.setItem("priceLevelFactory5", priceLevelFactory5);
    localStorage.setItem("priceLevelPowerstation1", priceLevelPowerstation1);
    localStorage.setItem("priceLevelPowerstation2", priceLevelPowerstation2);
    localStorage.setItem("priceLevelPowerstation3", priceLevelPowerstation3);
    localStorage.setItem("priceLevelPowerstation4", priceLevelPowerstation4);
    localStorage.setItem("priceLevelPowerstation5", priceLevelPowerstation5);
    localStorage.setItem("priceHotel", priceHotel);
    localStorage.setItem("pricePowerstation", pricePowerstation);
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
    priceHotel,
    pricePowerstation,
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
    if (countTrue >= countTrueMax) {
      setCountTrue(countTrue === countTrueMax)
    }
  }, [countTrue])

  useEffect(() => {
    const interval = setInterval(() => {
      if (factoryBonus > 0) {
        setCount((prevCount) => prevCount + factoryBonus);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  const handleClick = () => {
    if (canClick) {
      const hapticFeedbackLight = tg.HapticFeedback.impactOccurred("light");
      setCount(count + countBonus);
      
      

      if (countTrue > 0) {
        setCountTrue(Math.max(countTrue - 1, 0));
      }

      setCanClick(false);
      setTimeout(() => {
        setCanClick(true);
      }, 1);
    }
  };

  useEffect(() => {
    const handleOnline = () => {
      console.log("Connected to the internet");
    };

    const handleOffline = () => {
      alert("No connection network");
      window.location.reload();
    };

    // Добавляем обработчики событий
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Проверка начального состояния
    while (!navigator.onLine) {
      alert("No connection network");
      window.location.reload();
    }

    // Убираем обработчики событий при размонтировании компонента
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

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

  const moreEnergy = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    if (levelMoreEnergy === 7) {
      alert("Max level 🔝");
    } else {
      if (window.confirm("Here you can buy more energy.\nBuy it?")) {
        if (count >= priceMoreEnergy) {
          setCount(count - priceMoreEnergy);
          setCountTrue(countTrue + 1000);
          setcountTrueMax(countTrueMax + 1000);
          setLevelMoreEnergy(levelMoreEnergy + 1);
          setPriceMoreEnergy(priceMoreEnergy + 1000);
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
          setFactoryBonus(factoryBonus + 1);
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
            setFactoryBonus(factoryBonus + 1);
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
            setFactoryBonus(factoryBonus + 1);
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
            setFactoryBonus(factoryBonus + 1);
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
            setFactoryBonus(factoryBonus + 1);
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
            setCountTrueBonus(countTrueBonus + 1);
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
            setCountTrueBonus(countTrueBonus + 1);
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
            setCountTrueBonus(countTrueBonus + 1);
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
            setCountTrueBonus(countTrueBonus + 1);
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
            setCountTrueBonus(countTrueBonus + 1);
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
      }, 5000);
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

  return (
    <div className="App">
      {loading ? (
        <div className="Loading-page">
          <h1 className="title">
            Welcome
            <br />
            Quack Coin!
          </h1>
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
                  handleClick={handleClick}
                  countTrue={countTrue}
                  canClick={canClick}
                />
              }
            />
            <Route
              path="/boost"
              element={
                <Boost
                  count={count}
                  moreClicks={moreClicks}
                  priceMoreClicks={priceMoreClicks}
                  levelMoreClicks={levelMoreClicks}
                  moreEnergy={moreEnergy}
                  priceMoreEnergy={priceMoreEnergy}
                  levelMoreEnergy={levelMoreEnergy}
                  MoreCountTrueBonus={MoreCountTrueBonus}
                  levelMoreCountTrueBonus={levelMoreCountTrueBonus}
                  priceMoreCountTrueBonus={priceMoreCountTrueBonus}
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

            <Route
              path="/games/flappy-scrooge"
              element={
                <ScroogeGameFlappy
                  countTrue={countTrue}
                  setCountTrue={setCountTrue}
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
