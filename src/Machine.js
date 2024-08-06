import React, { useState, useEffect } from "react";
import "./Casino.css";
import Confetti from "react-confetti";

const fruits = ["🦆", "🪿", "🐥"];
const prizes = [
  "💰",
  "🥧",
  "🍔",
  "🍩",
  "🍨",
  "🍕",
  "🥞",
  "🌹",
  "🐵",
  "🐶",
  "🎮",
  "🎹",
  "🎻",
  "🎸",
  "🎷",
  "🧦",
  "👑",
  "🚲",
  "🛸",
];

const [isConfettiActive, setIsConfettiActive] = false;


// functions
function getRandom(arr) {
  let item = arr[Math.floor(Math.random() * arr.length)];
  return item;
}

class Alarm extends React.Component {
  render() {
    return (
      <div className="Alarm-container">
        <div className={`Alarm ${this.props.hasWon ? "alert" : ""}`}>
          <div className="Alarm-bulb" />
        </div>
      </div>
    );
  }
}

class Lights extends React.Component {
  static defaultProps = {
    numBulbs: 9,
  };
  render() {
    const bulbs = Array.from({ length: this.props.numBulbs }).map(
      (bulb, index) => (
        <div key={index} className="Light-bulb">
          {/* */}
        </div>
      )
    );
    return <div className="Lights">{bulbs}</div>;
  }
}

class Reel extends React.Component {
  render() {
    return (
      <div key={this.props.index} className="Reel">
        <div
          className={`Reel-plate Reel-plate-${this.props.index} ${
            this.props.playing ? "spin" : ""
          }`}
        >
          <span>{this.props.fruit}</span>
          <span>{getRandom(fruits)}</span>
          <span>{getRandom(fruits)}</span>
        </div>
      </div>
    );
  }
}

class Slot extends React.Component {
  render() {
    return (
      <div className="Slot">
        <div className="Slot-inner" />
      </div>
    );
  }
}

// Message comonent
class Message extends React.Component {
  render() {
    return (
      <div
        className={`Message ${!this.props.playing ? "Message-visible" : ""}`}
      >
        <p>{!this.props.playing && this.props.message}</p>
      </div>
    );
  }
}

class Machine extends React.Component {
  state = {
    reels: [{ fruit: "💲" }, { fruit: "💲" }, { fruit: "💲" }],
    message: "Try your luck and win some mad prizes!",
    playing: false,
    hasWon: false,
  };

  getResults = () => {
    this.setState(
      (prevState) => ({
        reels: prevState.reels.map((reel) => {
          return { ...reel, fruit: getRandom(fruits) };
        }),
        playing: false,
      }),
      () => this.checkIfWon()
    );
  };
  play = ({count, setCount}) => {
    if (count <= 200) {
      setCount(count - 200);
      this.setState({ playing: true, hasWon: false });
      setTimeout(this.getResults, 2000);
    } else {
      alert("Insufficient funds ❌");
    }
  };
  handleClick = () => {
    this.play();
  };
  checkIfWon = ({count, setCount}) => {
    const hasWon = this.state.reels.every(
      (reel) => reel.fruit === this.state.reels[0].fruit
    );
    if (hasWon) {
      setCount(count + 10000);
      setIsConfettiActive(true);
      setTimeout(() => {
        setIsConfettiActive(false);
      }, 7000);
    }
    this.setState((prevState) => ({
      hasWon,
      message: hasWon
        ? `Congratulations! You win this awesome prize of 10K`
        : "Sorry, try again!",
    }));
  };

  render() {
    const reels = this.state.reels.map((reel, index) => (
      <Reel
        key={index}
        fruit={reel.fruit}
        index={index + 1}
        playing={this.state.playing}
      />
    ));
    return (
      <div className="Machine">
        {isConfettiActive && (
          <Confetti
            count={100}
            size={20}
            gravity={0.1}
            colors={["#FF69B4", "#FFC67D", "#8BC34A"]}
            style={{ width: "100%", height: "100vh" }}
          />
        )}
        <div className="container-for-avtomat">
          <div className="text-price">
            Price: 200<div className="korona">...</div>
          </div>
          <div className="text-win">
            Win: 10K<div className="korona">...</div>
          </div>
          <div className="Avtomat">
            <Alarm hasWon={this.state.hasWon} />
            <Lights />
            <div className="Reels">{reels}</div>
            <button onClick={this.handleClick} disabled={this.state.playing}>
              Play
            </button>
            <Slot />
            <div className="Machine-bottom">{/* */}</div>
            <Message
              message={this.state.message}
              playing={this.state.playing}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Machine;
