import React, { Component } from 'react';
import logo from './img/headphones.png';
import './App.css';
import sounds from './soundInfo.js';

const keys = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      mode: 'piano',
      name: '',
      checked: true,
      volume: 0.2,
      active: {
        q: false,
        w: false,
        e: false,
        a: false,
        s: false,
        d: false,
        z: false,
        x: false,
        c: false,
      },
    }
    this.play = this.play.bind(this);
    this.power = this.power.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.switchMode = this.switchMode.bind(this);
    this.getClassName = this.getClassName.bind(this);
    this.app = React.createRef();
    this.q = React.createRef();
    this.w = React.createRef();
    this.e = React.createRef();
    this.a = React.createRef();
    this.s = React.createRef();
    this.d = React.createRef();
    this.z = React.createRef();
    this.x = React.createRef();
    this.c = React.createRef();
  }
  
  // autotests for FreeCodeCamp
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;
    document.body.appendChild(script);
    this.app.current.focus();
  }
  
  power() {
    this.setState({
      power: !this.state.power,
    })
  }

  handleCheck(e) {
    this.setState({
      checked: e.target.checked,
    })
  }

  setVolume = (e) => {
    this.setState({
      volume: e.target.value / 100,
    })
  }

  switchMode() {
    this.setState({
      mode: (this.state.mode === 'guitar') ? 'piano' : 'guitar',
    })
  }

  play = (key) => (e) => {
    const index = keys.indexOf(key);
    let soundName = '';
    if (this.state.power && index > -1) {
      soundName = sounds[this.state.mode][index].name;
      this.setState({
        name: soundName,
        active: {
          [key]: true,
        }
      });
      this[key].current.currentTime = 0;
      this[key].current.volume = this.state.volume;
      this[key].current.play();
      setTimeout(function(){
        this.setState({
          name: soundName,
          active: {
            [key]: false,
          }
        });
      }.bind(this), 100);
    }  
  }

  onKeyPressed(e) {
    this.play(e.key)();
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  getClassName = (id) => {
    return this.state.active[id] ? 'drum-pad active' : 'drum-pad';
  }

  render() {
    return (
      <div id="app" onKeyDown={this.onKeyPressed} tabIndex="0" ref={this.app}>
        <div id="drum-machine">
          <div id="keyboard">
            <div className={this.getClassName('q')} id="0" onClick={this.play('q')}>
              <audio className="clip" id="q" ref={this.q} src={sounds[this.state.mode][0].path}/>Q
            </div>
            <div className={this.getClassName('w')} id="1" onClick={this.play('w')}>
              <audio className="clip" id="w" ref={this.w} src={sounds[this.state.mode][1].path}/>W
            </div>
            <div className={this.getClassName('e')} id="2" onClick={this.play('e')}>
              <audio className="clip" id="e" ref={this.e} src={sounds[this.state.mode][2].path}/>E
            </div>
            <div className={this.getClassName('a')} id="3" onClick={this.play('a')}>
              <audio className="clip" id="a" ref={this.a} src={sounds[this.state.mode][3].path}/>A
            </div>
            <div className={this.getClassName('s')} id="4" onClick={this.play('s')}>
              <audio className="clip" id="s" ref={this.s} src={sounds[this.state.mode][4].path}/>S
            </div>
            <div className={this.getClassName('d')} id="5" onClick={this.play('d')}>
              <audio className="clip" id="d" ref={this.d} src={sounds[this.state.mode][5].path}/>D
            </div>
            <div className={this.getClassName('z')} id="6" onClick={this.play('z')}>
              <audio className="clip" id="z" ref={this.z} src={sounds[this.state.mode][6].path}/>Z
            </div>
            <div className={this.getClassName('x')} id="7" onClick={this.play('x')}>
              <audio className="clip" id="x" ref={this.x} src={sounds[this.state.mode][7].path}/>X
            </div>
            <div className={this.getClassName('c')} id="8" onClick={this.play('c')}>
              <audio className="clip" id="c" ref={this.c} src={sounds[this.state.mode][8].path}/>C
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
