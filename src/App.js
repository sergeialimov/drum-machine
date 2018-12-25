import React, { Component } from 'react';
import logo from './img/headphones.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <div id="drum-machine">
          <div id="keyboard">
            <button className="drum-pad">Q</button>
            <button className="drum-pad">W</button>
            <button className="drum-pad">E</button>
            <button className="drum-pad">A</button>
            <button className="drum-pad">S</button>
            <button className="drum-pad">D</button>
            <button className="drum-pad">Z</button>
            <button className="drum-pad">X</button>
            <button className="drum-pad">C</button>
          </div>
          <div id="rightPane">
            <div id="logo">
              <img id="logo" src={logo} alt="logo"/>
            </div>
            <div id="toggler">
              <p>Power</p>
            </div>
            <div id="nameBox">
              <p id="name">Chord 3</p>
            </div>
            <div id="volume">
            </div>
            <div id="bank">
              <p>Bank</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
