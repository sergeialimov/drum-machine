import React, { Component } from 'react';
import logo from './img/headphones.png';
import './App.css';
import sound1 from './sounds/piano/01.mp3'
import sound2 from './sounds/piano/02.mp3'
import sound3 from './sounds/piano/03.mp3'
import sound4 from './sounds/piano/04.mp3'
import sound5 from './sounds/piano/05.mp3'
import sound6 from './sounds/piano/06.mp3'
import sound7 from './sounds/piano/07.mp3'
import sound8 from './sounds/piano/08.mp3'
import sound9 from './sounds/piano/09.mp3'

class App extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
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
  componentDidMount () {
    const script = document.createElement("script");
    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;
    document.body.appendChild(script);
    this.focusDiv();
  }
  
  play = (ref) => (e) => {
    ref.current.play();
  }

  onKeyPressed(e) {
    console.log('e.keyCode ', e.keyCode );
    switch (e.keyCode) {
      case 81:
        this.q.current.play();
        break;
      case 87:
        this.w.current.play();
        break;
      case 69:
        this.e.current.play();
        break;
      case 65:
        this.a.current.play();
        break;
      case 87:
        this.s.current.play();
        break;
      case 83:
        this.d.current.play();
        break;
      case 68:
        this.z.current.play();
        break;
      case 90:
        this.x.current.play();
        break;
      case 88:
        this.c.current.play();
        break;
      case 67:
        this.c.current.play();
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
            <div className="drum-pad" id="1" onClick={this.play(this.q)}>
              <audio className="clip" id="Q" ref={this.q} src={sound1}/>Q
            </div>
            <div className="drum-pad" id="2" onClick={this.play(this.w)}>
              <audio className="clip" id="W" ref={this.w} src={sound2}/>W
            </div>
            <div className="drum-pad" id="3" onClick={this.play(this.e)}>
              <audio className="clip" id="E" ref={this.e} src={sound3}/>E
            </div>
            <div className="drum-pad" id="4" onClick={this.play(this.a)}>
              <audio className="clip" id="A" ref={this.a} src={sound4}/>A
            </div>
            <div className="drum-pad" id="5" onClick={this.play(this.s)}>
              <audio className="clip" id="S" ref={this.s} src={sound5}/>S
            </div>
            <div className="drum-pad" id="6" onClick={this.play(this.d)}>
              <audio className="clip" id="D" ref={this.d} src={sound6}/>D
            </div>
            <div className="drum-pad" id="7" onClick={this.play(this.z)}>
              <audio className="clip" id="Z" ref={this.z} src={sound7}/>Z
            </div>
            <div className="drum-pad" id="8" onClick={this.play(this.x)}>
              <audio className="clip" id="X" ref={this.x} src={sound8}/>X
            </div>
            <div className="drum-pad" id="9" onClick={this.play(this.c)}>
              <audio className="clip" id="C" ref={this.c} src={sound9}/>C
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
