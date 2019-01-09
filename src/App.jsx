import React, { Component } from 'react';
import logo from './img/headphones.png';
import './App.css';
import sounds from './soundInfo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      mode: 'guitar',
      name: '',
      checked: true,
      volume: 0.5,
    }
    this.play = this.play.bind(this);
    this.power = this.power.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.switchMode = this.switchMode.bind(this);
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
    console.log('soundName', soundName);
    if (this.state.power) {
      this.setState({ name: soundName });
      this[id].current.currentTime = 0;
      this[id].current.volume = this.state.volume;
      this[id].current.play();
    }
  }

  power () {
    this.setState({
      power: !this.state.power,
    })
  }

  handleCheck (e) {
    this.setState({
      checked: e.target.checked,
    })
  }

  setVolume = (e) => {
    this.setState({
      volume: e.target.value / 100,
    })
  }

  switchMode () {
    console.log('111');
    this.setState({
      mode: (this.state.mode === 'guitar') ? 'piano' : 'guitar',
    })
  }

  onKeyPressed(e) {
    switch (e.keyCode) {
      case 81:
        this.play('Q', sounds[this.state.mode][0].name)();
        break;
      case 87:
        this.play('W', sounds[this.state.mode][1].name)();
        break;
      case 69:
        this.play('E', sounds[this.state.mode][2].name)();
        break;
      case 65:
        this.play('A', sounds[this.state.mode][3].name)();
        break;
      case 83:
        this.play('S', sounds[this.state.mode][4].name)();
        break;
      case 68:
        this.play('D', sounds[this.state.mode][5].name)();
        break;
      case 90:
        this.play('Z', sounds[this.state.mode][6].name)();
        break;
      case 88:
        this.play('X', sounds[this.state.mode][7].name)();
        break;
      case 67:
        this.play('C', sounds[this.state.mode][8].name)();
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div id="app" onKeyDown={this.onKeyPressed} tabIndex="0" ref={this.app}>
        <div id="drum-machine">
          <div id="keyboard">
            <div className="drum-pad" id="0" onClick={this.play('Q', sounds[this.state.mode][0].name)}>
              <audio className="clip" id="Q" ref={this.Q} src={sounds[this.state.mode][0].path}/>Q
            </div>
            <div className="drum-pad" id="1" onClick={this.play('W', sounds[this.state.mode][1].name)}>
              <audio className="clip" id="W" ref={this.W} src={sounds[this.state.mode][1].path}/>W
            </div>
            <div className="drum-pad" id="2" onClick={this.play('E', sounds[this.state.mode][2].name)}>
              <audio className="clip" id="E" ref={this.E} src={sounds[this.state.mode][2].path}/>E
            </div>
            <div className="drum-pad" id="3" onClick={this.play('A', sounds[this.state.mode][3].name)}>
              <audio className="clip" id="A" ref={this.A} src={sounds[this.state.mode][3].path}/>A
            </div>
            <div className="drum-pad" id="4" onClick={this.play('S', sounds[this.state.mode][4].name)}>
              <audio className="clip" id="S" ref={this.S} src={sounds[this.state.mode][4].path}/>S
            </div>
            <div className="drum-pad" id="5" onClick={this.play('D', sounds[this.state.mode][5].name)}>
              <audio className="clip" id="D" ref={this.D} src={sounds[this.state.mode][5].path}/>D
            </div>
            <div className="drum-pad" id="6" onClick={this.play('Z', sounds[this.state.mode][6].name)}>
              <audio className="clip" id="Z" ref={this.Z} src={sounds[this.state.mode][6].path}/>Z
            </div>
            <div className="drum-pad" id="7" onClick={this.play('X', sounds[this.state.mode][7].name)}>
              <audio className="clip" id="X" ref={this.X} src={sounds[this.state.mode][7].path}/>X
            </div>
            <div className="drum-pad" id="8" onClick={this.play('C', sounds[this.state.mode][8].name)}>
              <audio className="clip" id="C" ref={this.C} src={sounds[this.state.mode][8].path}/>C
            </div>
          </div>
          <div id="rightPane">
            <div id="logo">
              <img id="logo" src={logo} alt="logo"/>
            </div>
            <p>Power</p>
            <label className="switch">
              <input
                type="checkbox"
                onClick={this.power}
                onChange={this.handleCheck}
                checked={this.state.checked}/>
              <span className="slider"></span>
            </label>
            <div id="nameBox">
              <p id="display">{this.state.name}</p>
            </div>
            <div id="volume">
              <input
                id="vol-control"
                type="range"
                min="0"
                max="100"
                step="1"
                onInput={this.setVolume}
                onChange={this.setVolume}>
              </input>
            </div>
            <button id="modeToggle" onClick={this.switchMode}>{this.state.mode}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
