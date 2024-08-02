import React, { useState, useEffect, useRef } from "react";

const ScroogeGameJump = () => {
    //logic game

    return (
    <div className="ScroogeGameJump">
      <div class="container">
        <canvas id="canvas"></canvas>

        <div id="mainMenu">
          <h1>scrooge jump</h1>
          <h3></h3>
          <h3></h3>

          <p class="info"></p>
          <a class="button" href="javascript:init()">
            Play!
          </a>
        </div>

        <div id="gameOverMenu">
          <h1>Game Over</h1>
          <h3 id="go_score">Ваш счет 0</h3>

          <a class="button" href="javascript:reset()">
            Play!
          </a>
        </div>

        <img id="sprite" src="images/2WEhF.png" />

        <div id="scoreBoard">
          <p id="score">0</p>
        </div>

        <div class="controls">
          <button
            class="left-button"
            onmousedown="moveLeft()"
            onmouseup="clearInterval(moveLeftInterval); player.isMovingLeft = false; player.vx = 0;"
          >
            ...
          </button>
          <button
            class="right-button"
            onmousedown="moveRight()"
            onmouseup="clearInterval(moveRightInterval); player.isMovingRight = false; player.vx = 0;"
          >
            ...
          </button>
        </div>
      </div>

      <div id="audio"></div>
    </div>
  );
};

export default ScroogeGameJump;
