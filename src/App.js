import React, { Component } from 'react';
import logo from './img/headphones.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <div id="surface">
          <div id="keyboard">
            <button>Q</button>
            <button>W</button>
            <button>E</button>
            <button>A</button>
            <button>S</button>
            <button>D</button>
            <button>Z</button>
            <button>X</button>
            <button>C</button>
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
