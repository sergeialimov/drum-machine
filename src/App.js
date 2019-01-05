import React, { Component } from 'react';
import logo from './img/headphones.png';
import './App.css';

class App extends Component {
  // autotests for FreeCodeCamp
  componentDidMount () {
    const script = document.createElement("script");
    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div id="app">
        <div id="drum-machine">
          <div id="display">
          {/*<audio>
            <source src="./sounds/piano/01.mp3" type="audio/mpeg"/>
          </audio>*/}
            <button className="drum-pad" id="1">Q</button>
            <button className="drum-pad" id="2">W</button>
            <button className="drum-pad" id="3">E</button>
            <button className="drum-pad" id="4">A</button>
            <button className="drum-pad" id="5">S</button>
            <button className="drum-pad" id="6">D</button>
            <button className="drum-pad" id="7">Z</button>
            <button className="drum-pad" id="8">X</button>
            <button className="drum-pad" id="9">C</button>
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
