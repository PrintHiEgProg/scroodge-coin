import React, { useState, useEffect } from "react";
import "./Casino.css";
import { useNavigate } from "react-router-dom";


const fruits = ["🦆", "🪿", "🦜", "🦩", "🐓"];
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
    const { count, setCount } = this.props;
    console.log(this.props);
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
  play = () => {
    const { count, setCount } = this.props;

    if (count >= 500) {
      setCount(count - 500);
      console.log(count);
      this.setState({ playing: true, hasWon: false });
      setTimeout(this.getResults, 2000);
    } else {
      alert("Insufficient funds ❌");
      console.log(count);
    }
  };
  handleClick = () => {
    this.play();
  };
  
  
  checkIfWon = () => {
    const hasWon = this.state.reels.every(
      (reel) => reel.fruit === this.state.reels[0].fruit
    );
    if (hasWon) {
      const { count, setCount } = this.props;
      setCount(count + 10000);
      console.log(count);
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
        <div className="container-for-avtomat">
          <div class="close-box">
            <div class="close-icon">...</div>
          </div>
          <div className="text-price">
            Price: 500<div className="korona-small">...</div>
          </div>
          <div className="text-win">
            Win: 10K<div className="korona-small">...</div>
          </div>
          <div className="Avtomat">
            <Alarm hasWon={this.state.hasWon} />
            <Lights />
            <div className="Reels">{reels}</div>
            <button
              className="play"
              onClick={this.handleClick}
              disabled={this.state.playing}
            >
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
