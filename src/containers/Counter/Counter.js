import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0
  };

  incrementCounterHandler = () => {
    if (this.state.counter > 9) {
      this.setState({ counter: 10 });
    } else {
      this.setState(prevState => ({
        ...prevState,
        counter: prevState.counter + 1
      }));
    }
  };

  render() {
    const { counter } = this.state;
    return (
      <div className="Counter">
        <h1>{this.props.title}</h1>
        <div testData="counter">{counter}</div>
        <button onClick={this.incrementCounterHandler} testData="increment">
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
