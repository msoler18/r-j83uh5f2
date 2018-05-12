import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      counter: 0,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.handleChange} ></textarea>
        <div className="counter">{this.state.counter}</div>
      </div>
    );
  }

  handleChange(event){
    this.setState({
      counter: event.target.value.length
    })
  }
}

export default App;
