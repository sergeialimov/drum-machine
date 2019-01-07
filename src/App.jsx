import React, { Component } from 'react';
import logo from './img/headphones.png';
import './App.css';
import pianoSoundQ from './sounds/piano/01.mp3';
import soundW from './sounds/piano/02.mp3';
import soundE from './sounds/piano/03.mp3';
import soundA from './sounds/piano/04.mp3';
import soundS from './sounds/piano/05.mp3';
import soundD from './sounds/piano/06.mp3';
import soundZ from './sounds/piano/07.mp3';
import soundX from './sounds/piano/08.mp3';
import soundC from './sounds/piano/09.mp3';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'piano',
      name: '',
    }
    this.play = this.play.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.app = React.createRef();
    this.Q = React.createRef();
    this.W = React.createRef();
    this.E = React.createRef();
    this.A = React.createRef();
    this.S = React.createRef();
    this.D = React.createRef();
    this.Z = React.createRef();
    this.X = React.createRef();
    this.C = React.createRef();
  }
  
  // autotests for FreeCodeCamp
  componentDidMount () {
    const script = document.createElement("script");
    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;
    document.body.appendChild(script);
    this.focusDiv();
  }
  
  play = (id) => (e) => {
    console.log("id", id);
    this.setState({ name: `${this.state.mode}Sound${id}` })
    this[id].current.play();
  }

  onKeyPressed(e) {
    switch (e.keyCode) {
      case 81:
        this.Q.current.currentTime = 0;
        this.Q.current.play();
        break;
      case 87:
        this.W.current.currentTime = 0;
        this.W.current.play();
        break;
      case 69:
        this.E.current.currentTime = 0;
        this.E.current.play();
        break;
      case 65:
        this.A.current.currentTime = 0;
        this.A.current.play();
        break;
      case 83:
        this.S.current.currentTime = 0;
        this.S.current.play();
        break;
      case 68:
        this.D.current.currentTime = 0;
        this.D.current.play();
        break;
      case 90:
        this.Z.current.currentTime = 0;
        this.Z.current.play();
        break;
      case 88:
        this.X.current.currentTime = 0;
        this.X.current.play();
        break;
      case 67:
        this.C.current.currentTime = 0;
        this.C.current.play();
        break;
    }
  }

  focusDiv() {
    this.app.current.focus();
  }

  render() {
    return (
      <div id="app"
        onKeyDown={this.onKeyPressed}
        tabIndex="0"
        ref={this.app}
      >
        <div id="drum-machine">
          <div id="display">
            <div className="drum-pad" id="1" onClick={this.play('Q')}>
              <audio className="clip" id="Q" ref={this.Q} src='/sounds/piano/01.mp3'/>Q
            </div>
            <div className="drum-pad" id="2" onClick={this.play('W')}>
              <audio className="clip" id="W" ref={this.W} src={soundW}/>W
            </div>
            <div className="drum-pad" id="3" onClick={this.play('E')}>
              <audio className="clip" id="E" ref={this.E} src={soundE}/>E
            </div>
            <div className="drum-pad" id="4" onClick={this.play('A')}>
              <audio className="clip" id="A" ref={this.A} src={soundA}/>A
            </div>
            <div className="drum-pad" id="5" onClick={this.play('S')}>
              <audio className="clip" id="S" ref={this.S} src={soundS}/>S
            </div>
            <div className="drum-pad" id="6" onClick={this.play('D')}>
              <audio className="clip" id="D" ref={this.D} src={soundD}/>D
            </div>
            <div className="drum-pad" id="7" onClick={this.play('Z')}>
              <audio className="clip" id="Z" ref={this.Z} src={soundZ}/>Z
            </div>
            <div className="drum-pad" id="8" onClick={this.play('X')}>
              <audio className="clip" id="X" ref={this.X} src={soundX}/>X
            </div>
            <div className="drum-pad" id="9" onClick={this.play('C')}>
              <audio className="clip" id="C" ref={this.C} src={soundC}/>C
            </div>
          </div>
          <div id="rightPane">
            <div id="logo">
              <img id="logo" src={logo} alt="logo"/>
            </div>
            <div id="toggler">
              <p>Power</p>
            </div>
            <div id="nameBox">
              <p id="name">{this.state.name}</p>
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
