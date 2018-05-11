import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      counter: 0,
      content:""
    }
    this.handleChange = this.handleChange.bind(this)
  }
  render() {
    return (
      <div className="container">
        <textarea rows="3" value={this.state.content} onChange={this.handleChange} ></textarea>
        <div className="counter">{this.state.counter}</div>
      </div>
    );
  }

  handleChange(event){
    this.setState({
      content: event.target.value,
      counter: this.state.content.length
    })
  }
}

export default App;
