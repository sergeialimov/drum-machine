import React, { Component } from 'react';
import logo from './img/headphones.png';
import './App.css';

const sounds = {
  piano: [
    {
      name: 'sound 1',
      path: '/sounds/piano/01.mp3',
    },
    {
      name: 'sound 2',
      path: '/sounds/piano/02.mp3',
    },
    {
      name: 'sound 3',
      path: '/sounds/piano/03.mp3',
    },
    {
      name: 'sound 4',
      path: '/sounds/piano/04.mp3',
    },
    {
      name: 'sound 5',
      path: '/sounds/piano/05.mp3',
    },
    {
      name: 'sound 6',
      path: '/sounds/piano/06.mp3',
    },
    {
      name: 'sound 7',
      path: '/sounds/piano/07.mp3',
    },
    {
      name: 'sound 8',
      path: '/sounds/piano/08.mp3',
    },
    {
      name: 'sound 9',
      path: '/sounds/piano/09.mp3',
    },
  ]
};

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
    this.app.current.focus();
  }
  
  play = (id, soundName) => (e) => {
    this.setState({ name: soundName });
    this[id].current.currentTime = 0;
    this[id].current.play();
  }

  onKeyPressed(e) {
    switch (e.keyCode) {
      case 81:
        this.play('Q', sounds.piano[0].name)();
        break;
      case 87:
        this.play('W', sounds.piano[1].name)();
        break;
      case 69:
        this.play('E', sounds.piano[2].name)();
        break;
      case 65:
        this.play('A', sounds.piano[3].name)();
        break;
      case 83:
        this.play('S', sounds.piano[4].name)();
        break;
      case 68:
        this.play('D', sounds.piano[5].name)();
        break;
      case 90:
        this.play('Z', sounds.piano[6].name)();
        break;
      case 88:
        this.play('X', sounds.piano[7].name)();
        break;
      case 67:
        this.play('C', sounds.piano[8].name)();
        break;
      default:
        break;
    }
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
            <div className="drum-pad" id="0" onClick={this.play('Q', sounds.piano[0].name)}>
              <audio className="clip" id="Q" ref={this.Q} src={sounds.piano[0].path}/>Q
            </div>
            <div className="drum-pad" id="1" onClick={this.play('W', sounds.piano[1].name)}>
              <audio className="clip" id="W" ref={this.W} src={sounds.piano[1].path}/>W
            </div>
            <div className="drum-pad" id="2" onClick={this.play('E', sounds.piano[2].name)}>
              <audio className="clip" id="E" ref={this.E} src={sounds.piano[2].path}/>E
            </div>
            <div className="drum-pad" id="3" onClick={this.play('A', sounds.piano[3].name)}>
              <audio className="clip" id="A" ref={this.A} src={sounds.piano[3].path}/>A
            </div>
            <div className="drum-pad" id="4" onClick={this.play('S', sounds.piano[4].name)}>
              <audio className="clip" id="S" ref={this.S} src={sounds.piano[4].path}/>S
            </div>
            <div className="drum-pad" id="5" onClick={this.play('D', sounds.piano[5].name)}>
              <audio className="clip" id="D" ref={this.D} src={sounds.piano[5].path}/>D
            </div>
            <div className="drum-pad" id="6" onClick={this.play('Z', sounds.piano[6].name)}>
              <audio className="clip" id="Z" ref={this.Z} src={sounds.piano[6].path}/>Z
            </div>
            <div className="drum-pad" id="7" onClick={this.play('X', sounds.piano[7].name)}>
              <audio className="clip" id="X" ref={this.X} src={sounds.piano[7].path}/>X
            </div>
            <div className="drum-pad" id="8" onClick={this.play('C', sounds.piano[8].name)}>
              <audio className="clip" id="C" ref={this.C} src={sounds.piano[8].path}/>C
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
