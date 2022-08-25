import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  increaseCount = () => this.setState({ count: this.state.count + 1 });

  decreaseCount = () =>
    this.setState({
      count: this.state.count - 1 >= 0 ? this.state.count - 1 : 0,
    });

  render() {
    return (
      <div>
        <button onClick={this.increaseCount}>Increase</button>
        <p>{this.state.count}</p>
        <button onClick={this.decreaseCount}>Decrease</button>
      </div>
    );
  }
}

export default Counter;
