import React from "react";

function Task({ JoinGame, TgPremium, TgChannel1 }) {
  return (
    <div className="Task">
      <h2 className="title">Task</h2>
      <div className="catalog">
        <div className="task-card" onClick={JoinGame}>
          <div className="task-img"></div>
          <div className="task-text">
            <b>Join Game</b>
          </div>
          <hr className="task-hr" />
          <div className="task-footer">
            <div className="task-level"></div>
            <div className="task-price">+10K</div>
            <div className="task-money"></div>
          </div>
        </div>
        <div className="task-card" onClick={TgPremium}>
          <div className="task-img"></div>
          <div className="task-text">
            <b>Join Game</b>
          </div>
          <hr className="task-hr" />
          <div className="task-footer">
            <div className="task-level"></div>
            <div className="task-price">+10K</div>
            <div className="task-money"></div>
          </div>
        </div>
        <div className="task-card" onClick={TgPremium}>
          <div className="task-img"></div>
          <div className="task-text">
            <b>Get Tg Premium</b>
          </div>
          <hr className="task-hr" />
          <div className="task-footer">
            <div className="task-level"></div>
            <div className="task-price">+20K</div>
            <div className="task-money"></div>
          </div>
        </div>
        <div className="task-card" onClick={TgChannel1}>
          <div className="task-img"></div>
          <div className="task-text">
            <b>Add Tg Channel</b>
          </div>
          <hr className="task-hr" />
          <div className="task-footer">
            <div className="task-level"></div>
            <div className="task-price">+20K</div>
            <div className="task-money"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Task;
