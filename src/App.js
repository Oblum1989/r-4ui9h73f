import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      repeater : ""
    }
    this.repeatText = this.repeatText.bind(this)
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.repeatText} />
        <p className="repeater">{this.state.repeater}</p>
      </div>
    );
  }

  repeatText(e){
    this.setState({
      repeater : e.target.value
    })
  }
}

export default App;
