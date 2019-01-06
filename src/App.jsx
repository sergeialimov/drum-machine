import React, { Component } from 'react';
import logo from './img/headphones.png';
import './App.css';
import sound from './sounds/piano/01.mp3'

class App extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.q = React.createRef();
  }
  
  // autotests for FreeCodeCamp
  componentDidMount () {
    const script = document.createElement("script");
    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;
    document.body.appendChild(script);
  }
  
  play = (ref) => (e) => {
    ref.current.play();
  }

  render() {
    return (
      <div id="app">
        <div id="drum-machine">
          <div id="display">
            <div className="drum-pad" id="1" onClick={this.play(this.q)}>
              <audio className="clip" id="Q" ref={this.q} src={sound}/>Q
            </div>
            <button className="drum-pad" id="W">W</button>
            <button className="drum-pad" id="E">E</button>
            <button className="drum-pad" id="A">A</button>
            <button className="drum-pad" id="S">S</button>
            <button className="drum-pad" id="D">D</button>
            <button className="drum-pad" id="Z">Z</button>
            <button className="drum-pad" id="X">X</button>
            <button className="drum-pad" id="C">C</button>
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
