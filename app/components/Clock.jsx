import React from 'react';

require('./App.css');

export default class Clock extends React.Component {
 constructor(props) {
    super(props);
    // we defined state in the constructor this.state 
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // when we want to rerender state, this is proper way with metod this.setState
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>React Starter with ES6</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}