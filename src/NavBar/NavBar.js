import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const tg = window.Telegram.WebApp;
  const navigate = useNavigate();

  const handleHomeClick = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    navigate("/");
  };

  const handleBoostClick = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    //navigate("/boost")
    alert("Coming soon...");
  };

  const handleMonopolyClick = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    navigate("/monopoly");
  };

  const handleTaskClick = () => {
    const hapticFeedbackSoft = tg.HapticFeedback.impactOccurred("soft");
    navigate("/task");
  };

  return (
    <div className="NavBar">
      <div className="navbar-box">
        <div className="nav-item" onClick={handleBoostClick}>
          <div className="icon boosts">...</div>
          <p className="icon-description">Boosts</p>
        </div>
        <div className="nav-item" onClick={handleMonopolyClick}>
          <div className="icon monopoly">...</div>
          <p className="icon-description">Monopoly</p>
        </div>
        <div className="nav-item" onClick={handleTaskClick}>
          <div className="icon tasks">...</div>
          <p className="icon-description">Tasks</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
